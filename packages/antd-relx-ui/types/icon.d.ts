import {RxComponent} from './rxComponent'

export interface IconProps {
    name?: string
    size?: string | number
    color?: string
    namespace?: string
    transition?: string | number
    onClick?: (e: Event) => void
}

export class Icon extends RxComponent {
    $props: IconProps
}

export class _IconComponent extends Icon {}
