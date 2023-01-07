import path from 'path'
import Inspect from 'vite-plugin-inspect'
import {defineConfig, loadEnv} from 'vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import WindiCSS from 'vite-plugin-windicss'
import mkcert from 'vite-plugin-mkcert'
import glob from 'fast-glob'
import vueJsx from '@vitejs/plugin-vue-jsx'

import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import {projRoot} from './.vitepress/utils/paths'
import type {Alias} from 'vite'


const alias: Alias[] = []
if (process.env.DOC_ENV !== 'production') {
    // alias.push(
    //     {
    //         find: /^@xb-plus\/ui(\/(es|lib))?$/,
    //         replacement: path.resolve('..', 'packages/xb-ui/plus/index.js'),
    //     },
    //     {
    //         find: /^@xb-plus\/ui\/(es|lib)\/(.*)$/,
    //         replacement: `${path.resolve('..', 'packages/xb-ui/es')}/$2`,
    //     }
    // )
}


export default defineConfig(async ({mode}) => {
    const env = loadEnv(mode, process.cwd(), '')

    const optimizeDeps = [
        'vue',
        '@vue/shared',
        'markdown-it',
        'clipboard-copy',
        'axios',
        'nprogress',
    ]
    optimizeDeps.push(
        ...(
            await glob(['dayjs/plugin/*.js'], {
                cwd: path.resolve(projRoot, 'node_modules'),
                onlyFiles: true,
            })
        ).map((file) => file.replace(/\.js$/, ''))
    )

    return {
        server: {
            host: true,
            https: !!env.HTTPS,
            fs: {
                allow: [projRoot],
            },
        },
        resolve: {
            alias,
        },
        build: {
            rollupOptions: {
                output: {
                    manualChunks: {
                        windicss: ['windicss'],
                    },
                },
            },
        },
        plugins: [
            vueJsx(),
            DefineOptions(),

            Components({
                resolvers: [
                    IconsResolver(),
                ],
            }),

            Icons({
                autoInstall: true,
            }),
            WindiCSS(),
            Inspect(),
            mkcert(),
        ],
        optimizeDeps: {
            include: optimizeDeps,
        },
    }
})
