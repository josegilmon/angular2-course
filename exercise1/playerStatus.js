"use strict";
var PlayerStatus;
(function (PlayerStatus) {
    PlayerStatus[PlayerStatus["Playing"] = 0] = "Playing";
    PlayerStatus[PlayerStatus["Stopped"] = 1] = "Stopped";
})(PlayerStatus || (PlayerStatus = {}));
;
var statuses = {
    playing: 'playing',
    stopped: 'stopped'
};
exports.__esModule = true;
exports["default"] = PlayerStatus;
