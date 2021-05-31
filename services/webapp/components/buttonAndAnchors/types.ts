/* eslint-disable @typescript-eslint/no-empty-interface */
import { ButtonHTMLAttributes, DetailedHTMLProps, LinkHTMLAttributes } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export interface AnchorProps
  extends DetailedHTMLProps<LinkHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {}
