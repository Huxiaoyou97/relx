import {
    ref,
    computed,
    renderSlot,
    nextTick,
    defineComponent,
    onBeforeUnmount, CSSProperties
} from "vue"
import {buttonProps, buttonEmits} from "./props";

import "./button.less"
import useTheme from "../../hooks/useTheme";
import buttonLight from "./styles/light";
import {createKey} from "../utils/createKey";
import {createHoverColor, createPressedColor} from "../utils/color";

// Component
import {
    AIconSwitchTransition,
    AFadeInExpandTransition
} from "../../_internal";
import Ripple from '../ripple'
import RxLoading from "../loading"


export default defineComponent({
    props: buttonProps,

    emits: buttonEmits,

    name: "RxButton",

    directives: {Ripple},

    setup(props, {slots, emit}) {
        const selfRef = ref<HTMLElement | null>(null)

        const activeRef = ref(false)
        let animationTimerId: number | null = null
        onBeforeUnmount(() => {
            if (animationTimerId !== null) {
                window.clearTimeout(animationTimerId)
            }
        })

        const play = () => {
            // if (animationTimerId !== null) {
            //     window.clearTimeout(animationTimerId)
            //     activeRef.value = false
            //     animationTimerId = null
            // }
            // void nextTick(() => {
            //     void selfRef.value?.offsetHeight
            //     activeRef.value = true
            //     animationTimerId = window.setTimeout(() => {
            //         activeRef.value = false
            //         animationTimerId = null
            //     }, 1000)
            // })
        }

        const handleClick = (e: MouseEvent): void => {
            // play()
            emit('click', e)
        }

        const themeRef = useTheme(
            'Button',
            'Button',
            buttonLight,
            props,
        )

        return {
            active: activeRef,
            selfRef,
            play,
            handleClick,

            cssRoot: computed(() => {
                const theme = themeRef.value
                const {
                    common: {cubicBezierEaseInOut, cubicBezierEaseOut},
                    self
                } = theme
                const {
                    rippleDuration,
                    opacityDisabled,
                    fontWeightText,
                    fontWeighGhost,
                    fontWeight
                } = self
                const {type, size, text, color, textColor, circle, round, dashed, ghost} = props

                const fontProps = {
                    fontWeight: fontWeight
                }

                // color
                let colorProps = {
                    '--color': 'initial',
                    '--color-hover': 'initial',
                    '--color-pressed': 'initial',
                    '--color-focus': 'initial',
                    '--color-disabled': 'initial',
                    '--text-color': 'initial',
                    '--text-color-hover': 'initial',
                    '--text-color-pressed': 'initial',
                    '--text-color-focus': 'initial',
                    '--text-color-disabled': 'initial'
                }

                if (text) {
                    const {depth} = props
                    const propTextColor = textColor || color
                    const mergedTextColor =
                        propTextColor ||
                        (type === 'default' && depth !== undefined
                            ? self[
                                createKey(
                                    'textColorTextDepth',
                                    String(depth) as '1' | '2' | '3'
                                )
                                ]
                            : self[createKey('textColorText', type)])
                    colorProps = {
                        '--color': '#0000',
                        '--color-hover': '#0000',
                        '--color-pressed': '#0000',
                        '--color-focus': '#0000',
                        '--color-disabled': '#0000',
                        '--text-color': mergedTextColor,
                        '--text-color-hover': propTextColor
                            ? createHoverColor(propTextColor)
                            : self[createKey('textColorTextHover', type)],
                        '--text-color-pressed': propTextColor
                            ? createPressedColor(propTextColor)
                            : self[createKey('textColorTextPressed', type)],
                        '--text-color-focus': propTextColor
                            ? createHoverColor(propTextColor)
                            : self[createKey('textColorTextHover', type)],
                        '--text-color-disabled':
                            propTextColor || self[createKey('textColorTextDisabled', type)]
                    }
                } else if (ghost || dashed) {
                    const mergedTextColor = textColor || color
                    colorProps = {
                        '--color': '#0000',
                        '--color-hover': '#0000',
                        '--color-pressed': '#0000',
                        '--color-focus': '#0000',
                        '--color-disabled': '#0000',
                        '--text-color':
                            mergedTextColor || self[createKey('textColorGhost', type)],
                        '--text-color-hover': mergedTextColor
                            ? createHoverColor(mergedTextColor)
                            : self[createKey('textColorGhostHover', type)],
                        '--text-color-pressed': mergedTextColor
                            ? createPressedColor(mergedTextColor)
                            : self[createKey('textColorGhostPressed', type)],
                        '--text-color-focus': mergedTextColor
                            ? createHoverColor(mergedTextColor)
                            : self[createKey('textColorGhostHover', type)],
                        '--text-color-disabled':
                            mergedTextColor || self[createKey('textColorGhostDisabled', type)]
                    }
                } else {
                    colorProps = {
                        '--color': color || self[createKey('color', type)],
                        '--color-hover': color
                            ? createHoverColor(color)
                            : self[createKey('colorHover', type)],
                        '--color-pressed': color
                            ? createPressedColor(color)
                            : self[createKey('colorPressed', type)],
                        '--color-focus': color
                            ? createHoverColor(color)
                            : self[createKey('colorFocus', type)],
                        '--color-disabled': color || self[createKey('colorDisabled', type)],
                        '--text-color':
                            textColor ||
                            (color
                                ? self.textColorPrimary
                                : self[createKey('textColor', type)]),
                        '--text-color-hover':
                            textColor ||
                            (color
                                ? self.textColorHoverPrimary
                                : self[createKey('textColorHover', type)]),
                        '--text-color-pressed':
                            textColor ||
                            (color
                                ? self.textColorPressedPrimary
                                : self[createKey('textColorPressed', type)]),
                        '--text-color-focus':
                            textColor ||
                            (color
                                ? self.textColorFocusPrimary
                                : self[createKey('textColorFocus', type)]),
                        '--text-color-disabled':
                            textColor ||
                            (color
                                ? self.textColorDisabledPrimary
                                : self[createKey('textColorDisabled', type)])
                    }
                }

                // border
                let borderProps = {
                    '--border': 'initial',
                    '--border-hover': 'initial',
                    '--border-pressed': 'initial',
                    '--border-focus': 'initial',
                    '--border-disabled': 'initial'
                }

                if (text) {
                    borderProps = {
                        '--border': 'none',
                        '--border-hover': 'none',
                        '--border-pressed': 'none',
                        '--border-focus': 'none',
                        '--border-disabled': 'none'
                    }
                } else {
                    borderProps = {
                        '--border': self[createKey('border', type)],
                        '--border-hover': self[createKey('borderHover', type)],
                        '--border-pressed': self[createKey('borderPressed', type)],
                        '--border-focus': self[createKey('borderFocus', type)],
                        '--border-disabled': self[createKey('borderDisabled', type)]
                    }
                }

                // size
                const {
                    [createKey('height', size)]: height,
                    [createKey('fontSize', size)]: fontSize,
                    [createKey('padding', size)]: padding,
                    [createKey('paddingRound', size)]: paddingRound,
                    [createKey('iconSize', size)]: iconSize,
                    [createKey('borderRadius', size)]: borderRadius,
                    [createKey('iconMargin', size)]: iconMargin,
                    waveOpacity
                } = self

                const sizeProps = {
                    '--width': circle && !text ? height : 'initial',
                    '--height': text ? 'initial' : height,
                    '--font-size': fontSize,
                    '--padding': circle
                        ? 'initial'
                        : text
                            ? 'initial'
                            : round
                                ? paddingRound
                                : padding,
                    '--icon-size': iconSize,
                    '--icon-margin': iconMargin,
                    '--border-radius': text
                        ? 'initial'
                        : circle || round
                            ? height
                            : borderRadius
                }

                return {
                    '--bezier': cubicBezierEaseInOut,
                    '--bezier-ease-out': cubicBezierEaseOut,
                    '--ripple-duration': rippleDuration,
                    '--opacity-disabled': opacityDisabled,
                    '--wave-opacity': waveOpacity,
                    ...fontProps,
                    ...colorProps,
                    ...borderProps,
                    ...sizeProps
                }
            })
        }
    },

    render() {
        const {$slots} = this
        return (
            <button
                v-ripple={[
                    !this.disabled && this.ripple,
                ]}
                class={[
                    `rx-button`,
                    `rx-button--${this.type}-type`,
                    `rx-button--${this.size}-type`,
                    this.disabled && `rx-button--disabled`,
                    !this.text && this.dashed && `rx-button--dashed`,
                    this.color && `rx-button--color`,
                    this.ghost && `rx-button--ghost`,
                ]}
                style={this.cssRoot as CSSProperties}
                onClick={this.handleClick}
            >
                {$slots.default && this.iconPlacement === 'right' ? (
                    <div class={`rx-button__content`}>{$slots.default()}</div>
                ) : null}
                <AFadeInExpandTransition width>
                    {{
                        default: () =>
                            $slots.icon || this.loading ? (
                                <span
                                    class={`rx-button__icon`}
                                    style={{
                                        margin: !$slots.default ? 0 : ''
                                    }}
                                >
                                    <AIconSwitchTransition>
                                        {{
                                            default: () => (
                                                this.loading ?
                                                    <RxLoading class="rx-button__loading"/>
                                                    :
                                                    <div
                                                        key="icon"
                                                        class={`rx-icon-slot`}
                                                        role="none"
                                                    >
                                                        {renderSlot($slots, 'icon')}
                                                    </div>
                                            )
                                        }}
                                    </AIconSwitchTransition>
                                </span>
                            ) : null
                    }}
                </AFadeInExpandTransition>

                {$slots.default && this.iconPlacement === 'left' ? (
                    <span class={`rx-button__content`}>{$slots.default()}</span>
                ) : null}

                <div ref="selfRef" aria-hidden="true" class={{
                    'rx-base-wave': true,
                    'rx-base-wave--active': this.active
                }}/>
                <div aria-hidden="true" class="rx-button__border"/>
                <div aria-hidden="true" class="rx-button__state-border"/>
            </button>
        )
    }

})
