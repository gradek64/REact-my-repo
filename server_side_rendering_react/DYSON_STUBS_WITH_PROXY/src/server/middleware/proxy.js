//url module is part of node
import url from 'url';
import proxy from 'express-http-proxy';

/**
 * About mod_proxy and mod_alias

Redirection is used when the requested URL is somewhere else, and the browser itself will connect to the other server.
Proxying is used when the requested URL is somewhere else, but the server will do the connection. In this case the browser will even not be aware of that.
Since you want to have access to have access to some applications from the outside of your local network
proxying is more appropriate, so you don't have to open and forward multiple ports from the outside.
Proxying is generally used to pass requests to other HTTP servers
Redirect will redirect your request to the same domain as  <Redirect to={`${confirmationError}?type=credit`} />
 * 
 * */
// proxy('http://localhost:3011' this has to be main domain
export const stubDashboardProxy = proxy('http://localhost:3011', {
  proxyReqPathResolver: (req) => {
    //this redirects to main domain 'http://localhost:3011'
    return url.parse(req.url).path;

    //this what you redirect to as http://localhost:3011/basket
    return '/basket';
  },
});
