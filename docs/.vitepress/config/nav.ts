import navLocale from '../json/sidebar.json'


function getNav() {
    return Object.fromEntries(
        Object.entries(navLocale).map(([lang, locales]) => {
            const item: {
                link: string
                text: string
                activeMatch?: string
            }[] = Object.values(locales).map((item) => ({
                ...item,
                link: `/zh-CN${item.link}`,
            }))

            return [lang, item]
        })
    )
}

export const nav = getNav()
