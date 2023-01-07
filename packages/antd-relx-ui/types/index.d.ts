declare const _default: {
  version: string;
  install: (app: any, options?: undefined) => void;
};

export declare const install: (app: import("vue").App<any>, options?: undefined) => void;
export declare const version: string;
export default _default;

export * from './aside'
export * from './avatar'
export * from './button'
export * from './container'
export * from './directive'
export * from './divider'
export * from './footer'
export * from './header'
export * from './icon'
export * from './main'
export * from './ripple'
export * from './rxComponent'

declare module 'vue' {
  export interface GlobalComponents {
    RxAside: typeof import('@antd-relx/ui')['_AsideComponent']
    RxAvatar: typeof import('@antd-relx/ui')['_AvatarComponent']
    RxButton: typeof import('@antd-relx/ui')['_ButtonComponent']
    RxContainer: typeof import('@antd-relx/ui')['_ContainerComponent']
    RxDirective: typeof import('@antd-relx/ui')['_DirectiveComponent']
    RxDivider: typeof import('@antd-relx/ui')['_DividerComponent']
    RxFooter: typeof import('@antd-relx/ui')['_FooterComponent']
    RxHeader: typeof import('@antd-relx/ui')['_HeaderComponent']
    RxIcon: typeof import('@antd-relx/ui')['_IconComponent']
    RxMain: typeof import('@antd-relx/ui')['_MainComponent']
    RxRipple: typeof import('@antd-relx/ui')['_RippleComponent']
  }
}
