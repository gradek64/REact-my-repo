import { userSessionManagerResponseData } from '../../data/UserSessionManager/UserSessionManagerResponseData';

const fs = require('fs');
const handlebars = require('handlebars');
const uuidv4 = require('uuid/v4');
const SessionManager = require('../../data/SessionManager');
const walletDataset = require('../../data/Wallet/WalletDataset');

module.exports = {
  path: '/',
  render(req, res) {
    const sessionData = SessionManager.getSession(req);
    const user = sessionData.user;
    const userSessionManager = sessionData.userSessionManager
    const wallet = sessionData.wallet
    const userSessionType = req.cookies.session_token || 'none';

    const data = {
      
      user: user.userOptions,
      selectedUser: user.userType,
    


      /* Wallet */
      wallet: JSON.stringify(wallet.toJson(), null, 2),
      walletData: walletDataset.walletData,
      walletResponseData: walletDataset.walletResponseData,
      selectedWalletType: wallet.walletType,
      selectedWalletResponseType: wallet.responseType.toString(),

     

      userSessionType,
      userSessionManagerResponseData,
      selectedUserSessionManagerResponse: userSessionManager.responseType,


    };

    fs.readFile(
      './stubs/services/get/controlPanel.hbs',
      'utf-8',
      (error, source) => {
        const template = handlebars.compile(source);

        handlebars.registerHelper('ifvalue', (conditional, options) => {
          if (options.hash.values) {
            const values = options.hash.values.split(',');
            if (values.includes(conditional)) {
              return options.fn(this);
            }
            return options.inverse(this);
          }

          if (options.hash.value === conditional) {
            return options.fn(this);
          }
          return options.inverse(this);
        });

        handlebars.registerHelper(
          'option',
          (value, label, info = '', disabled = false, selectedValue) => {
            const selectedAttr =
              value === selectedValue ? ' selected="selected"' : '';
            const disabledAttr = disabled ? ' disabled' : '';
            return new handlebars.SafeString(
              `<option value="${value}" title="${
                disabled ? 'DISABLED SCENARIO' : ''
              }${info}"${selectedAttr}${disabledAttr}>${label}</option>`
            );
          }
        );

        handlebars.registerHelper('uuid', () => {
          return uuidv4();
        });

        handlebars.registerHelper('capitaliseFirstLetter', (string) => {
          return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        });

        handlebars.registerHelper('inc', (value) => {
          return value + 1;
        });

        handlebars.registerHelper('times', (n, block) => {
          let accum = '';
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < n; ++i) accum += block.fn(i);
          return accum;
        });

        const html = template(data);
        res.status(200).send(html);
      }
    );
  },
};
