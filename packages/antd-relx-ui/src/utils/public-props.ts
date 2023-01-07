import { ExtractPropTypes } from 'vue'
import useTheme from '../../hooks/useTheme'

type themePropKeys = keyof typeof useTheme.props

export type ExtractPublicPropTypes<T> = Omit<
    Partial<ExtractPropTypes<T>>,
    themePropKeys | Extract<keyof T, `internal${string}`>
>

export type ExtractInternalPropTypes<T> = Partial<ExtractPropTypes<T>>
