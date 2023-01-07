import {RxComponent} from "./rxComponent";

export interface HeaderProps {
    height?: string
}

export class Header extends RxComponent {
    $props: HeaderProps
}

export class _HeaderComponent extends Header {
}
