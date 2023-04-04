import consul from 'consul';
import { nconf } from '../../config/envconfig/envConfig';

const consulState = {
  config: {},
  features: {},
};

let ready = nconf.get('CONSUL_ENV') === 'stub';

const Consul = consul({
  host: nconf.get('CONSUL'),
  secure: false,
  port: 8500,
});

const watch = Consul.watch({
  method: Consul.kv.get,
  options: { key: `config/ui-login/${nconf.get('CONSUL_ENV')}/data` },
  backoffFactor: 1000,
});

watch.on('change', (data) => {
  try {
    if (data === undefined || data.Value === undefined)
      throw new Error('Consul key not found');
    const values = JSON.parse(data.Value) || {};
    if (values?.features) {
      ready = true;
      consulState.config = values.config;
      consulState.features = values.features;
    }
  } catch (err) {
    if (nconf.get('CONSUL_ENV') !== 'stub') console.log(err);
  }
});

watch.on('error', (err) => {
  ready = false;
  if (nconf.get('CONSUL_ENV') !== 'stub') console.log(err);
});

export const consulMiddleware = (req, res, next) => {
  req.consulState = consulState;
  req.consulReady = ready;

  next();
};
