import RelxUi from "@antd-relx/ui"
import "@antd-relx/ui/lib/style.css"

import '../vitepress/styles/app.scss'

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'

import "../vitepress/styles/test.css"

import VPApp, {globals} from '../vitepress'

import {define} from '../utils/types'
import type {Theme} from 'vitepress'

export default define<Theme>({
    Layout: VPApp,
    enhanceApp: ({app}) => {
        app.use(RelxUi)

        globals.forEach(([name, Comp]) => {
            // @ts-ignore
            app.component(name, Comp)
        })
    },
})
