var config = {
    instance: 'https://login.microsoftonline.com/',
    tenant: 'xxx.onmicrosoft.com',
    clientId: '',
    postLogoutRedirectUri: window.location.origin,
    cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
}

window.authContext = new AuthenticationContext(config);

var isCallback = authContext.isCallback(window.location.hash);
authContext.handleWindowCallback();

if (isCallback && !authContext.getLoginError()) {
    window.location = authContext._getItem(authContext.CONSTANTS.STORAGE.LOGIN_REQUEST);
}

var user = authContext.getCachedUser();

if (user) {
    document.querySelector("#profile").textContent = JSON.stringify(user.profile, null, 4);

    authContext.acquireToken(authContext.config.clientId, function (err, token) {
        console.log(token);
        var headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);

        var init = {
            method: 'GET',
            headers: headers
        };

        var request = new Request('/api/values');

        fetch(request, init)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                document.querySelector("#data").textContent = JSON.stringify(data, null, 4);
            });
    });
}

document.querySelector("#login").addEventListener('click', function () {
    authContext.login();
});

document.querySelector("#logout").addEventListener('click', function () {
    authContext.logOut();
});
