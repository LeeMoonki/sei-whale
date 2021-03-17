interface OptionsPrefix {
  prefix: string;
}

export const apiOptions = <Options extends OptionsPrefix>(opt: Options): Options => {
  opt.prefix = `/api/${opt.prefix}`;
  return opt;
};
