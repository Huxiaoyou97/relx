import {nav} from './config/nav'
import {sidebars} from './config/sidebars'

import {mdPlugin} from './config/plugins'

import type {UserConfig} from 'vitepress'

export const config: UserConfig = {
    title: 'antd-relx',
    markdown: {
        config: (md) => {
            return mdPlugin(md)
        },
    },
    themeConfig: {
        nav,
        sidebars,
    },
    vue: {
        template: {
            ssr: true,
            compilerOptions: {
                // directiveTransforms: buildTransformers(),
            },
        },
    },
}

export default config
