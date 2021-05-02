import { InputProps } from '../types';
import style from './style.module.scss';

import { resolveClassName } from '../../../lib/string/className';

export function InputSearch({ type = 'text', className, ...props }: InputProps) {
  return <input className={resolveClassName([style.input, className])} type={type} {...props} />;
}
