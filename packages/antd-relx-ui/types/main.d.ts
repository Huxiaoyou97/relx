import {RxComponent} from "./rxComponent";

export interface MainProps {
    width?: string
}

export class Main extends RxComponent {
    $props: MainProps
}

export class _MainComponent extends Main {
}
