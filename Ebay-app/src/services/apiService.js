import axios from 'axios';
// custom
import { ENV } from '../utils/ENV';

const { BASE_URL, ACCESS_TOKEN } = ENV;

const apiService = () => {
  const TIMEOUT = 30000;

  const errorInterceptor = (err) => {
    switch (err.status) {
    case -1:
      if (err.xhrStatus === 'abort') {
        if (!err.config) {
          err.config = { timeout: TIMEOUT };
        }
        console.warn(
          `REQUEST CANCELED (config timeout: ${err.config.timeout}ms)`,
        );
      }
      break;
    case 401:
    case 405:
      // events.emit('NOT_AUTHENTICATED');
      break;
    case 403:
      // events.emit('NOT_AUTHORISED');
      // break;
      // case 405:
      //   events.emit('METHOD_NOT_ALLOWED');
      break;
    default:
    }

    // console.log(err)
    // console.log(err instanceof Error)
    // console.log(typeof err)
    // console.log(err.constructor.name)
    throw err;
  };

  const responseMiddleware = res => res;

  const requestInterceptor = (serviceConfig) => {
    const config = serviceConfig;

    // axios default config part of axios request no need to include in request object;
    axios.defaults.baseURL = BASE_URL || '';
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.common.Authorization = ACCESS_TOKEN;

    // service headers and data
    // const dataOrParams = ['GET', 'DELETE'].includes(config.method) ? 'params' : 'data';
    const dataOrParams = serviceConfig.params ? 'params' : 'data';
    /* const configObject = config.data
      ? { ...config, [dataOrParams]: config.data }
      : { ...config }; */

    if (config.serviceHeaders === undefined) {
      config.headers = {};
    }
    // conf.headers.Authorization = cookies.get('access_token');
    return {
      method: serviceConfig.method,
      url: serviceConfig.path,
      [dataOrParams]: serviceConfig[dataOrParams],
    };
  };

  const send = (serviceConfig, paramsOrData, customHeaders) => axios
    .request(requestInterceptor(serviceConfig, paramsOrData, customHeaders))
    .then(responseMiddleware)
    .catch(errorInterceptor);

  const get = (path, params, customHeaders) => send({ method: 'GET', path, params }, customHeaders);
  const post = (path, data, customHeaders) => send({ method: 'POST', path, data }, customHeaders);

  const put = (path, data, config) => send(
    Object.assign({}, config, { method: 'PUT', path, data }),
  );

  const patch = (path, data, config) => send(
    Object.assign({}, config, { method: 'PATCH', path, data }),
  );

  const del = (path, config) => send(Object.assign({}, config, { method: 'DELETE', path }));

  return {
    get,
    post,
    put,
    patch,
    delete: del,
  };
};

export default apiService();
