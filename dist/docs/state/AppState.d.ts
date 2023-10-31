export declare class AppState {
    nightmode: boolean;
    mobile: boolean;
    menuEnabled: boolean;
    history: import("history").BrowserHistory;
    constructor();
    initializeApp(): void;
    gotoPage(page: string): void;
}
export declare const appState: AppState;
