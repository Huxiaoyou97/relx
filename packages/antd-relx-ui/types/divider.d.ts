import { RxComponent } from './rxComponent'

export interface DividerProps {
  inset?: boolean | number
  vertical?: boolean
  description?: string
  margin?: string
  dashed?: boolean
}

export class Divider extends RxComponent {
  $props: DividerProps
}

export class _DividerComponent extends Divider {}
