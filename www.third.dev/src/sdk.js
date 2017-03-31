(function(window, undefined) {
    var SDK = window.SDK;

    SDK.api = function(endpoint, params, callback) {
        SDK.rpc.apiTunnel(endpoint, params, callback);
    }
}(this));