import {RxComponent} from "./rxComponent";

export interface AsideProps {
    width?: string
}

export class Aside extends RxComponent {
    $props: AsideProps
}

export class _AsideComponent extends Aside {}

