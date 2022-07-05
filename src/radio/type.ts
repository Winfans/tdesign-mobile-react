/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TNode } from '../common';
import { ChangeEvent } from 'react';

export interface TdRadioProps {
  /**
   * 复选框和内容相对位置
   * @default left
   */
  align?: 'left' | 'right';
  /**
   * 是否允许取消选中
   * @default false
   */
  allowUncheck?: boolean;
  /**
   * 是否选中
   */
  checked?: boolean;
  /**
   * 是否选中，非受控属性
   */
  defaultChecked?: boolean;
  /**
   * 单选内容，同 label
   */
  children?: TNode;
  /**
   * 单选内容
   */
  content?: TNode;
  /**
   * 是否禁用组件内容（content）触发选中
   */
  contentDisabled?: boolean;
  /**
   * 是否为禁用态
   */
  disabled?: boolean;
  /**
   * 自定义选中图标和非选中图标。示例：[选中态图标地址，非选中态图标地址]。值为 fill-circle 表示图标为填充型图标，值为 stroke-line 表示图标为描边型图标
   * @default 'fill-circle'
   */
  icon?: Array<TNode>;
  /**
   * 主文案
   */
  label?: TNode;
  /**
   * 内容最大行数限制
   * @default 5
   */
  maxContentRow?: number;
  /**
   * 主文案最大行数限制
   * @default 3
   */
  maxLabelRow?: number;
  /**
   * HTML 元素原生属性
   * @default ''
   */
  name?: string;
  /**
   * 单选按钮的值
   */
  value?: RadioValue;
  /**
   * 选中状态变化时触发
   */
  onChange?: (checked: boolean, context: { e: ChangeEvent<HTMLDivElement> }) => void;
}

export interface TdRadioGroupProps {
  /**
   * 是否禁用全部子单选框
   */
  disabled?: boolean;
  /**
   * HTML 元素原生属性
   * @default ''
   */
  name?: string;
  /**
   * 单选组件按钮形式。RadioOption 数据类型为 string 或 number 时，表示 label 和 value 值相同
   */
  options?: Array<RadioOption>;
  /**
   * 选中的值
   */
  value?: RadioValue;
  /**
   * 选中的值，非受控属性
   */
  defaultValue?: RadioValue;
  /**
   * 选中值发生变化时触发
   */
  onChange?: (value: RadioValue, context: { e: ChangeEvent<HTMLInputElement> }) => void;
}

export type RadioValue = string | number | boolean;

export type RadioOption = string | number | RadioOptionObj;

export interface RadioOptionObj {
  label?: string | TNode;
  value?: string | number;
  disabled?: boolean;
}
