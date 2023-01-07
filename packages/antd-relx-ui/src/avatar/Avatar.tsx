import { h, ref, computed, defineComponent, PropType } from 'vue'
import { VResizeObserver } from 'vueuc'
import useTheme from '../../hooks/useTheme'
import type { ThemeProps } from '../../hooks/useTheme'
import avatarLight, {AvatarTheme} from './styles'
import { createKey } from '../utils/createKey'
import { ExtractInternalPropTypes } from '../utils/public-props'
import { avatarProps } from './props'

export default defineComponent({
    name: "RxAvatar",

    props: avatarProps,

    setup(props) {


        const themeRef = useTheme(
            'Avatar',
            'Avatar',
            avatarLight,
            props,
        )

        console.log(themeRef.value, "themeRef")
    },

    render() {
        return (
            <div>123</div>
        )
    }

})
