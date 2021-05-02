import { ButtonProps } from '../types';
import style from './style.module.scss';

import { ThemeColors } from '../../../styles/presets/types';
import { resolveClassName } from '../../../lib/string';

interface ButtonBasicProps extends ButtonProps {
  theme?: ThemeColors;
}

export function Button({
  type = 'button',
  className,
  theme = 'primary',
  children,
  ...props
}: ButtonBasicProps) {
  return (
    <button
      type={type}
      {...props}
      className={resolveClassName([style.button, style[theme], className])}
    >
      {children}
    </button>
  );
}
