import type {PropType} from 'vue'
import useTheme, {ThemeProps} from "../../hooks/useTheme";
import {ButtonTheme} from "./styles/light";

function typeValidator(type: string): boolean {
    return ['default', 'primary', 'info', 'success', 'warning', 'error'].includes(type)
}

function sizeValidator(size: string): boolean {
    return ['tiny', 'small', 'medium', 'large'].includes(size)
}

export const buttonProps = {
    ...(useTheme.props as ThemeProps<ButtonTheme>),

    color: {
        type: String,
    },
    textColor: {
        type: String,
    },
    text: {
        type: Boolean,
        default: false,
    },
    circle: {
        type: Boolean,
        default: false,
    },
    round: {
        type: Boolean,
        default: false,
    },
    dashed: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String as PropType<'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'>,
        default: 'default',
        validator: typeValidator,
    },
    size: {
        type: String as PropType<'tiny' | 'small' | 'medium' | 'large'>,
        default: 'medium',
        validator: sizeValidator,
    },
    loading: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    ghost: {
        type: Boolean,
        default: false,
    },
    ripple: {
        type: Boolean,
        default: true,
    },
    iconPlacement: {
        type: String as PropType<'left' | 'right'>,
        default: 'left'
    },
    depth: [Number, String] as PropType<1 | 2 | 3 | '1' | '2' | '3'>,
}

export const buttonEmits = {
    click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

