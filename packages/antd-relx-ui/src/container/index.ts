import Container from './Container.vue'
import Aside from './Aside.vue'
import Footer from './Footer.vue'
import Header from './Header.vue'
import Main from './Main.vue'
import type {App} from 'vue'
import {withInstall} from "../utils/install";

Container.install = function (app: App) {
    app.component(Container.name, Container)
        .component(Aside.name, Aside)
        .component(Footer.name, Footer)
        .component(Header.name, Header)
        .component(Main.name, Main)
}

export const _ContainerComponent = Container
export const _AsideComponent = Aside
export const _FooterComponent = Footer
export const _HeaderComponent = Header
export const _MainComponent = Main


const RxContainer = withInstall(Container, {
    Aside,
    Footer,
    Header,
    Main
})
export default RxContainer
