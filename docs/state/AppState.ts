import {observable, computed} from 'mobx';
import { createBrowserHistory } from 'history';

function checkForMobile() {
    return window.navigator.userAgent.match(/Android|iPad|iPhone|iPod/i) != null || window.screen.width <= 480;
}

export class AppState {
    
    @observable nightmode = false;
    @observable mobile = false;
    @observable menuEnabled = false;
    @observable history = createBrowserHistory();

    constructor() {
        const self = this;
        self.mobile = checkForMobile();
    }

    initializeApp() {
        //
    }
    
    gotoPage(page : string) {
        this.history.push(page);
    }

}

export const appState = new AppState();