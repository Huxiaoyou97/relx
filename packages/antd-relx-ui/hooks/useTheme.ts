import {ThemeCommonVars} from "../_styles";
import {computed, ComputedRef, PropType} from "vue";
import {merge} from "lodash-es";
import {GlobalTheme} from "../_internal/provider";

export interface Theme<N, T = {}, R = any> {
    name: N
    common?: ThemeCommonVars
    peers?: R
    self?: (vars: ThemeCommonVars) => T
}

export interface ThemeProps<T> {
    theme: PropType<T>
    themeOverrides: PropType<ExtractThemeOverrides<T>>
    builtinThemeOverrides: PropType<ExtractThemeOverrides<T>>
}

export type ExtractThemeVars<T> = T extends Theme<unknown, infer U, unknown>
        ? unknown extends U
                ? {}
                : U
        : {}

export type ExtractThemeOverrides<T> = Partial<ExtractThemeVars<T>> &
        ExtractPeerOverrides<T> & { common?: ThemeCommonVars }


export type ExtractPeerOverrides<T> = T extends Theme<unknown, unknown, infer V>
        ? {
            peers?: {
                [k in keyof V]?: ExtractThemeOverrides<V[k]>
            }
        }
        : T

export type ExtractMergedPeerOverrides<T> = T extends Theme<unknown,
                unknown,
                infer V>
        ? {
            [k in keyof V]?: ExtractPeerOverrides<V[k]>
        }
        : T

type UseThemeProps<T> = Readonly<{
    theme?: T | undefined
    themeOverrides?: ExtractThemeOverrides<T>
    builtinThemeOverrides?: ExtractThemeOverrides<T>
}>

export type MergedTheme<T> = T extends Theme<unknown, infer V, infer W>
        ? {
            common: ThemeCommonVars
            self: V
            peers: W
            peerOverrides: ExtractMergedPeerOverrides<T>
        }
        : T


function useTheme<N, T, R>(
        resolveId: Exclude<keyof GlobalTheme, 'common'>,
        mountId: string,
        defaultTheme: Theme<N, T, R>,
        props: UseThemeProps<Theme<N, T, R>>,
): ComputedRef<MergedTheme<Theme<N, T, R>>> {

    return computed(() => {
        const {
            theme: {common: selfCommon, self, peers = {}} = {},
            themeOverrides: selfOverrides = {} as ExtractThemeOverrides<Theme<N, T, R>>,
            builtinThemeOverrides: builtinOverrides = {} as ExtractThemeOverrides<Theme<N, T, R>>
        } = props
        const {common: selfCommonOverrides, peers: peersOverrides} = selfOverrides

        const mergedCommon = merge(
                {},
                selfCommon || defaultTheme.common,
                selfCommonOverrides
        )
        const mergedSelf = merge(
                (self || defaultTheme.self)?.(mergedCommon) as T,
                builtinOverrides,
                selfOverrides
        )

        return {
            common: mergedCommon,
            self: mergedSelf,
            peers: merge({}, defaultTheme.peers, peers),
            peerOverrides: merge({}, peersOverrides)
        }
    })
}

useTheme.props = {
    theme: Object,
    themeOverrides: Object,
    builtinThemeOverrides: Object
} as const


export default useTheme
