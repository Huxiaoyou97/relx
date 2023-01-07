import {ConfigProviderInjection} from "./internal-interface";
import {InjectionKey} from "vue";

export const configProviderInjectionKey: InjectionKey<ConfigProviderInjection> =
        Symbol('configProviderInjection')
