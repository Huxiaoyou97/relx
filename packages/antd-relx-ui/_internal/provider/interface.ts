import {GlobalThemeWithoutCommon} from "./internal-interface";
import {ExtractThemeOverrides} from "../../hooks/useTheme";
import {ThemeCommonVars} from "../../_styles";

export interface GlobalTheme extends GlobalThemeWithoutCommon {
    common?: ThemeCommonVars
}

export type GlobalThemeOverrides = {
    common?: Partial<ThemeCommonVars>
} & {
    [key in keyof GlobalThemeWithoutCommon]?: ExtractThemeOverrides<
            GlobalThemeWithoutCommon[key]
            >
}
