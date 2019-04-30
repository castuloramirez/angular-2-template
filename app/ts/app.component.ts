import {Component} from 'angular2/core';
import { Config } from "./config.service";

@Component({
    selector: 'my-app',
    template: '<h1>{{ mainHeading }}</h1>'
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
}
