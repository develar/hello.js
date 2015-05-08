(function (hello) {
  hello.init({
    jbHub: {
      name: "JetBrains Hub",

      oauth: {
        version: 2,
        auth: 'https://hub-staging.labs.intellij.net/api/rest/oauth2/auth',
        grant: 'https://hub-staging.labs.intellij.net/api/rest/oauth2/auth'
      },

      scope: {
        basic: "0-0-0-0-0"
      },

      base: 'https://sso.jetbrains.com/api/rest/',

      get: {
        me: 'users/me'
      },
      wrap: {
        'default': function (o, headers, req) {
          formatError(o, headers);
          return o;
        }
      },

      xhr: function(p) {
        var accessToken = p.options.access_token
        if (accessToken != null) {
          delete p.options.access_token
          p.headers.Authorization = "Bearer " + accessToken
          p.headers.Accept = "application/json"
        }
        return true;
      }
    }
  });

  function formatError(o, headers) {
    var code = headers ? headers.statusCode : (o && 'meta' in o && 'status' in o.meta && o.meta.status);
    if ((code === 401 || code === 403)) {
      o.error = {
        code: 'access_denied',
        message: o.message || (o.data ? o.data.message : 'Could not get response')
      };
      delete o.message;
    }
  }
})(hello);
