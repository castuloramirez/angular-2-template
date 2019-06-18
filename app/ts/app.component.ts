import {Component} from 'angular2/core';
import { Config } from './config.service';
import {Video} from './video';
import {PlaylistComponent} from "./playlist.component";

@Component({
    selector: 'my-app',
    templateUrl:'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos:Array<Video>;

    constructor(){
        this.videos = [
            new Video(1,"Installing Django","qgGIqRFvFFk", "Installing Django"),
            new Video(1,"How To Survive In The Wilderness","Xo_MNXJwZPk", "Bucky")
        ]

    }
}