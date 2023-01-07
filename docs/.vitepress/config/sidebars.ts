import guideLocale from '../json/guide.json'
import componentLocale from '../json/component.json'


function getGuideSidebar() {
    return Object.fromEntries(
        Object.entries(guideLocale).map(([lang, val]) => [
            lang,
            Object.values(val).map((item) => mapPrefix(item, lang)),
        ])
    )
}

function getComponentsSideBar() {
    return Object.fromEntries(
        Object.entries(componentLocale).map(([lang, val]) => [
            lang,
            Object.values(val).map((item) => mapPrefix(item, lang, '/component')),
        ])
    )
}


const getSidebars = () => {
    return {
        '/guide/': getGuideSidebar(),
        '/component/': getComponentsSideBar(),
    }
}

type Item = {
    text: string
    children?: Item[]
    link?: string
}

function mapPrefix(item: Item, lang: string, prefix = '') {
    if (item.children && item.children.length > 0) {
        return {
            ...item,
            children: item.children.map((child) => mapPrefix(child, lang, prefix)),
        }
    }
    return {
        ...item,
        link: `/zh-CN${prefix}${item.link}`,
    }
}

export const sidebars = getSidebars()
