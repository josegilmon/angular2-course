"use strict";
var playerStatus_1 = require("./playerStatus");
var MultimediaPlayer = (function () {
    function MultimediaPlayer() {
        this.status = playerStatus_1["default"].Stopped;
    }
    MultimediaPlayer.prototype.play = function (file) {
        this.filestream = file;
        this.status = playerStatus_1["default"].Playing;
    };
    MultimediaPlayer.prototype.stop = function () {
        this.filestream = '';
        this.status = playerStatus_1["default"].Stopped;
    };
    MultimediaPlayer.prototype.getStatus = function () {
        console.log("Player is '" + this.status + "'");
    };
    return MultimediaPlayer;
}());
exports.__esModule = true;
exports["default"] = MultimediaPlayer;
