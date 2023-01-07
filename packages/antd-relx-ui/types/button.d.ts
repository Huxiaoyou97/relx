import {RxComponent} from './rxComponent'

export interface ButtonProps {
    type?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'
    size?: 'tiny' | 'small' | 'medium' | 'large'
    iconPlacement?: 'left' | 'right'
    loading?: boolean
    round?: boolean
    dashed?: boolean
    circle?: boolean
    text?: boolean
    disabled?: boolean
    ripple?: boolean
    ghost?: boolean
    color?: string
    textColor?: string
    onClick?: (e: Event) => void
}

export class Button extends RxComponent {
    $props: ButtonProps
}

export class _ButtonComponent extends Button {
}
