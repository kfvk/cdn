var chat;
(function (chat) {
    var Config = /** @class */ (function () {
        function Config() {
        }
        Config.getRegion = function () {
            return this._region;
        };
        Config.setRegion = function (region) {
            this._region = region;
        };
        Config.getGatewayUrl = function () {
            return this._gatewayUrl;
        };
        Config.setGatewayUrl = function (gatewayUrl) {
            this._gatewayUrl = gatewayUrl;
        };
        Config.getSharedSecret = function () {
            return this._sharedSecret;
        };
        Config.setSharedSecret = function (sharedSecret) {
            this._sharedSecret = sharedSecret;
        };
        Config._region = null;
        Config._gatewayUrl = 'https://cloud.liveswitch.io/';
        Config._sharedSecret = 'eac05c8656654a9ca41f22bf8f6442f202037546bcc74e70bf0ade8c903bbea';
        return Config;
    }());
    chat.Config = Config;
})(chat || (chat = {}));
