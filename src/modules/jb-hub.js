(function (hello) {
    hello.init({
        jbHub: {
            name: "JetBrains Hub",

            oauth: {
                version: 2,
                auth: 'https://sso.jetbrains.com/api/rest/oauth2/auth',
                grant: 'https://sso.jetbrains.com/api/rest/oauth2/auth'
            },

            scope: {
                basic: "0-0-0-0-0"
            },

            base: 'https://sso.jetbrains.com/api/rest/',

            get: {
                me: 'users/me'
            },

            xhr: function (p) {
                var accessToken = p.options.access_token
                if (accessToken != null) {
                    delete p.options.access_token
                    p.headers.Authorization = "Bearer " + accessToken
                    p.headers.Accept = "application/json"
                }
                return true;
            }
        }
    })
})(hello)
