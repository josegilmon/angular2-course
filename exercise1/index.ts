import Player from './multimediaPlayer'

let player = new Player();
player.getStatus();
player.play('Michael Jackson - Thriller.mp3');
player.getStatus();
player.stop();
player.getStatus();