const querystring = require('querystring');

buildRoute = (domain, slug, query = undefined) => {
    queryParams = ""
    if(query)
    {
        queryParams = "?";
        queryParams += querystring.stringify(query);
    }
    return `${domain}${slug}${queryParams}`};



module.exports = {
    buildRoute
};