import { VNode } from 'vue';

export type FavicoType = ((...args: unknown[]) => VNode) | ((...args: unknown[]) => string) | NodeRequire | string

export interface Tab {
  /** 显示名称 */
  label: string
  /** 唯一 key */
  key: string
  favico?: FavicoType
  /**
   * 是否可关闭
   */
  closable?: boolean
  /**
   * 是否可被交换
   */
  swappable?: boolean
  /**
   * 是否可拖拽
   */
  dragable?: boolean
  $el?: HTMLElement
  // eslint-disable-next-line
  _instance?: any
  _x?: number
}
