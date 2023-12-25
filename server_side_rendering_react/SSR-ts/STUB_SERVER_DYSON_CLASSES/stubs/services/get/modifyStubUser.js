import SessionManager from '../../data/SessionManager'
import userDatasets from '../../data/User/UserDatasets'

const modifyStubUser = {
  method: 'GET',
  delay: 0,
  cache: false,
  template(req) {
    const query = req.query;
    const { type, value } = query;
    const sessionData = SessionManager.getSession(req);
    const user = sessionData.user;
    if (type === 'userData') {
      if (userDatasets[value]) {
        userDatasets[value].setupUser(user);
        console.log(`API: Set user - ${userDatasets[value].description}`);
      } else {
        return { error: 'User not found' };
      }
    }

    if (type === 'isFirstAddressPreferred') {
      user.addresses.toggleFirstAddressPreferred();
    }

    if (type === 'argosMarketingPreferences') {
      console.log('API: Set argosMarketingPreferences', value);
      user.marketingPreferences.ARGOS = value === 'null' ? null : value;
    }

    if (type === 'habitatMarketingPreferences') {
      console.log('API: Set habitatMarketingPreferences', value);
      user.marketingPreferences.HABITAT = value === 'null' ? null : value;
    }

    if (type === 'tuMarketingPreferences') {
      console.log('API: Set tuMarketingPreferences', value);
      user.marketingPreferences.TU = value === 'null' ? null : value;
    }

    if (type === 'marketingPreferencesResponseStatus') {
      console.log('API: Set marketingPreferencesResponseStatus', value);
      user.marketingPreferences.responseStatus = Number(value);
    }

    SessionManager.saveSession(sessionData, req);
    return user.toJson();
  },
  render: (req, res) => {
    res.header(
      'cache-control',
      'no-cache, max-age=0, must-revalidate, no-store'
    );
    res.send(res.body);
  },
};

module.exports = modifyStubUser
