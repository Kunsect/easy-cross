(function(window, undefined) {
    var SDK = {};

    function loadScript(url, callback) {
        var script = document.createElement('script');

        script.async = true;
        script.src = url;

        var entry = document.getElementsByTagName('script')[0];
        entry.parentNode.insertBefore(script, entry);

        script.onload = script.onreadystatechange = function() {
            var rdyState = script.readyState;

            if ( ! rdyState || /complete|loaded/.test(script.readyState) ) {
                callback();

                script.onload = null;
                script.onreadystatechange = null;
            }
        }
    }

    SDK.init = function(callback) {
        loadScript('http://www.third.dev/plugins/easyXDM.js', function() {
            SDK.easyXDM = easyXDM.noConflict('SDK');

            loadScript('http://www.third.dev/src/sdk.js', function() {
                SDK.rpc = new SDK.easyXDM.Rpc({
                    remote: 'http://www.third.dev/tunnel.html',
                }, {
                    remote: {
                        apiTunnel: {}
                    }
                });

                callback();
            });
        });
    }

    window.SDK = SDK;
}(this));