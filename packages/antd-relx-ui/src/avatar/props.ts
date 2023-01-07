import { PropType } from "vue";
import useTheme, { ThemeProps } from "../../hooks/useTheme";
import { ExtractPublicPropTypes } from "../utils/public-props";
import { AvatarTheme } from "./styles";


export const avatarProps = {
    ...(useTheme.props as ThemeProps<AvatarTheme>),
    size: {
        type: [String, Number] as PropType<number | 'small' | 'medium' | 'large'>,
        default: 'medium'
    },
    src: String,
    circle: Boolean,
    color: String,
    objectFit: {
        type: String as PropType<
            'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
        >,
        default: 'fill'
    },
    round: Boolean,
    onError: Function as PropType<(e: Event) => void>
} as const
