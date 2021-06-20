import { ButtonProps, AnchorProps } from '../types';
import style from './style.module.scss';

import { ThemeColors } from '../../../styles/presets/types';
import { resolveClassName } from '../../../lib/dom';

interface ButtonBasicProps extends ButtonProps {
  theme?: ThemeColors;
}

interface AnchorBasicProps extends AnchorProps {
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

export function Anchor({ className, theme = 'primary', children, ...props }: AnchorBasicProps) {
  return (
    <a className={resolveClassName([style.anchor, style[theme], className])} {...props}>
      {children}
      <span className="visually-hidden">(으)로 이동</span>
    </a>
  );
}
