import { ChangeEvent, SetStateAction } from 'react';

export function onChangeListener(setter: (value: SetStateAction<string>) => void) {
  return (e: ChangeEvent<HTMLInputElement>) => setter(e.target.value);
}
