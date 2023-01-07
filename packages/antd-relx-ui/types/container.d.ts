import {RxComponent} from "./rxComponent";

export interface ContainerProps {
    direction?: string
}

export class Container extends RxComponent {
    $props: ContainerProps
}

export class _ContainerComponent extends Container {}
