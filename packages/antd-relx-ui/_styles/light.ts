import {rgba, composite, scaleColor} from 'seemly'
import commonStyle from './common'

const base = {
    neutralBase: '#FFF',
    neutralInvertBase: '#000',
    neutralTextBase: '#000',
    neutralPopover: '#fff',
    neutralCard: '#fff',
    neutralModal: '#fff',
    neutralBody: '#fff',

    alpha1: '0.82',
    alpha2: '0.72',
    alpha3: '0.38',
    alpha4: '0.24', // disabled text, placeholder, icon
    alpha5: '0.18', // disabled placeholder

    alphaClose: '0.52',

    alphaDisabled: '0.5',
    alphaDisabledInput: '0.02',
    alphaPending: '0.05',
    alphaTablePending: '0.02',
    alphaPressed: '0.07',

    alphaAvatar: '0.2',
    alphaRail: '0.14',
    alphaProgressRail: '.08',
    alphaBorder: '0.12',
    alphaDivider: '0.06',
    alphaInput: '0',
    alphaAction: '0.02',
    alphaTab: '0.04',
    alphaScrollbar: '0.25',
    alphaScrollbarHover: '0.4',
    alphaCode: '0.05',
    alphaTag: '0.02',

    // primary
    primaryHover: '#29b6f6',
    primaryDefault: '#03a9f4',
    primaryActive: '#0277bd',
    primarySuppl: '#29b6f6',

    // info
    infoHover: '#26c6da',
    infoDefault: '#00bcd4',
    infoActive: '#00838f',
    infoSuppl: '#26c6da',


    // error
    errorHover: '#EF5350',
    errorDefault: '#F44336',
    errorActive: '#C62828',
    errorSuppl: '#EF5350',

    // warning
    warningHover: '#ffa726',
    warningDefault: '#ff9800',
    warningActive: '#ef6c00',
    warningSuppl: '#ffa726',

    // success
    successHover: '#26a69a',
    successDefault: '#009688',
    successActive: '#00695c',
    successSuppl: '#26a69a'
}

const baseBackgroundRgb = rgba(base.neutralBase)
const baseInvertBackgroundRgb = rgba(base.neutralInvertBase)
const overlayPrefix =
    'rgba(' + baseInvertBackgroundRgb.slice(0, 3).join(', ') + ', '

function overlay(alpha: string | number) {
    return overlayPrefix + String(alpha) + ')'
}

function neutral(alpha: string | number) {
    const overlayRgba = Array.from(baseInvertBackgroundRgb)
    overlayRgba[3] = Number(alpha)
    return composite(
        baseBackgroundRgb,
        overlayRgba as [number, number, number, number]
    )
}

const derived = {
    name: 'common' as const,

    ...commonStyle,

    baseColor: base.neutralBase,

    // primary color
    primaryColor: base.primaryDefault,
    primaryColorHover: base.primaryHover,
    primaryColorPressed: base.primaryActive,
    primaryColorSuppl: base.primarySuppl,
    // info color
    infoColor: base.infoDefault,
    infoColorHover: base.infoHover,
    infoColorPressed: base.infoActive,
    infoColorSuppl: base.infoSuppl,
    // success color
    successColor: base.successDefault,
    successColorHover: base.successHover,
    successColorPressed: base.successActive,
    successColorSuppl: base.successSuppl,
    // warning color
    warningColor: base.warningDefault,
    warningColorHover: base.warningHover,
    warningColorPressed: base.warningActive,
    warningColorSuppl: base.warningSuppl,
    // error color
    errorColor: base.errorDefault,
    errorColorHover: base.errorHover,
    errorColorPressed: base.errorActive,
    errorColorSuppl: base.errorSuppl,
    // text color
    textColorBase: base.neutralTextBase,
    textColor1: 'rgb(31, 34, 37)',
    textColor2: 'rgb(51, 54, 57)',
    textColor3: 'rgb(158, 164, 170)',
    // textColor4: neutral(base.alpha4), // disabled, placeholder, icon
    // textColor5: neutral(base.alpha5),

    textColorDisabled: neutral(base.alpha4),
    placeholderColor: neutral(base.alpha4),
    placeholderColorDisabled: neutral(base.alpha5),
    iconColor: neutral(base.alpha4),
    iconColorHover: scaleColor(neutral(base.alpha4), {lightness: 0.75}),
    iconColorPressed: scaleColor(neutral(base.alpha4), {lightness: 0.9}),
    iconColorDisabled: neutral(base.alpha5),

    opacity1: base.alpha1,
    opacity2: base.alpha2,
    opacity3: base.alpha3,
    opacity4: base.alpha4,
    opacity5: base.alpha5,

    dividerColor: 'rgb(239, 239, 245)',
    borderColor: 'rgb(224, 224, 230)',

    // close
    closeColor: neutral(Number(base.alphaClose)),
    closeColorHover: neutral(Number(base.alphaClose) * 1.25),
    closeColorPressed: neutral(Number(base.alphaClose) * 0.8),
    closeColorDisabled: neutral(base.alpha4),

    // clear
    clearColor: neutral(base.alpha4),
    clearColorHover: scaleColor(neutral(base.alpha4), {lightness: 0.75}),
    clearColorPressed: scaleColor(neutral(base.alpha4), {lightness: 0.9}),

    scrollbarColor: overlay(base.alphaScrollbar),
    scrollbarColorHover: overlay(base.alphaScrollbarHover),
    scrollbarWidth: '5px',
    scrollbarHeight: '5px',
    scrollbarBorderRadius: '5px',

    progressRailColor: neutral(base.alphaProgressRail),
    railColor: 'rgb(219, 219, 223)',

    popoverColor: base.neutralPopover,
    tableColor: base.neutralCard,
    cardColor: base.neutralCard,
    modalColor: base.neutralModal,
    bodyColor: base.neutralBody,
    tagColor: 'rgb(250, 250, 252)',
    avatarColor: neutral(base.alphaAvatar),
    invertedColor: 'rgb(0, 20, 40)',

    inputColor: neutral(base.alphaInput),
    codeColor: 'rgb(244, 244, 248)',
    tabColor: 'rgb(247, 247, 250)',
    actionColor: 'rgb(250, 250, 252)',
    tableHeaderColor: 'rgb(250, 250, 252)',

    hoverColor: 'rgb(243, 243, 245)',
    // use color with alpha since it can be nested with header filter & sorter effect
    tableColorHover: 'rgba(0, 0, 100, 0.02)',
    pressedColor: 'rgb(237, 237, 239)',

    opacityDisabled: base.alphaDisabled,
    inputColorDisabled: 'rgb(250, 250, 252)',

    boxShadow1:
        '0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)',

    boxShadow2:
        '0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)',
    boxShadow3:
        '0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)'
}

export default derived
export type ThemeCommonVars = typeof derived
