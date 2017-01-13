import statuses from './playerStatus';

export default class MultimediaPlayer {

    status: statuses;
    filestream: string;

    constructor() {
        this.status = statuses.Stopped;
    }

    play(file: string) {
        this.filestream = file;
        this.status = statuses.Playing;
    }

    stop() {
        this.filestream = '';
        this.status = statuses.Stopped
    }

    getStatus() {
        console.log(`Player is '${this.status}'`);
    }
}
