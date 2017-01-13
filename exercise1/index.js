"use strict";
var multimediaPlayer_1 = require("./multimediaPlayer");
var player = new multimediaPlayer_1["default"]();
player.getStatus();
player.play('Michael Jackson - Thriller.mp3');
player.getStatus();
player.stop();
player.getStatus();
