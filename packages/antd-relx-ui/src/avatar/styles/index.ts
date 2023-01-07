import { commonLight } from "../../../_styles";
import type { ThemeCommonVars } from "../../../_styles";
import type { Theme } from "../../../hooks/useTheme";


export const self = (vars: ThemeCommonVars) => {
    const {
        borderRadius,
        avatarColor,
        fontSize,
        heightTiny,
        heightSmall,
        heightMedium,
        heightLarge,
        heightHuge
    } = vars

    return {
        borderRadius,
        color: avatarColor,
        fontSize,
        heightTiny,
        heightSmall,
        heightMedium,
        heightLarge,
        heightHuge
    }
}


export type AvatarThemeVars = ReturnType<typeof self>

const avatarLight: Theme<'Avatar', AvatarThemeVars> = {
    name: "Avatar",
    common: commonLight,
    self
}

export default avatarLight;
export type AvatarTheme = typeof avatarLight
