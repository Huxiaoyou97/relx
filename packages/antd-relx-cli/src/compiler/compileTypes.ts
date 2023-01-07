import fse from 'fs-extra'
import { TYPES_DIR, UI_PACKAGE_JSON } from '../shared/constant.js'
import { bigCamelize } from '@antd-relx/shared'
import { resolve, relative } from 'path'
import { getRELXConfig } from '../config/relx.config.js'
import { get } from 'lodash-es'

const { ensureDir, writeFileSync, readdir, writeFile, readJSONSync } = fse

export function generateReference(moduleDir: string) {
    writeFileSync(
        resolve(moduleDir, 'index.d.ts'),
        `\
export * from '${relative(moduleDir, TYPES_DIR)}'
`
    )
}

export async function compileTypes() {
    const relxConfig = await getRELXConfig()
    const namespace = get(relxConfig, 'namespace')
    const { name } = readJSONSync(UI_PACKAGE_JSON)
    await ensureDir(TYPES_DIR)

    const dir = await readdir(TYPES_DIR)
    const ignoreEntryDir = dir.filter((filename) => filename !== 'index.d.ts' && filename !== 'global.d.ts')
    const exports: string[] = []
    const declares: string[] = []

    ignoreEntryDir.forEach((filename) => {
        const componentName = filename.slice(0, filename.indexOf('.d.ts'))

        exports.push(`export * from './${componentName}'`)

        if (!componentName.startsWith(namespace)) {
            declares.push(
                `${bigCamelize(namespace)}${bigCamelize(componentName)}: typeof import('${name}')['_${bigCamelize(
                    componentName
                )}Component']`
            )
        }
    })

    const globalDeclares = `\
declare module 'vue' {
  export interface GlobalComponents {
    ${declares.join('\n    ')}
  }
}`

    const template = `\
declare const _default: {
  version: string;
  install: (app: any, options?: undefined) => void;
};

export declare const install: (app: import("vue").App\<\any>, options?: undefined) => void;
export declare const version: string;
export default _default;

${exports.join('\n')}

${globalDeclares}
`

    await Promise.all([writeFile(resolve(TYPES_DIR, 'index.d.ts'), template)])
}
