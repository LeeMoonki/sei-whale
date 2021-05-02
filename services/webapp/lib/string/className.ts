type ClassName = string | undefined | null;

export const getClassName = (classes?: ClassName | ClassName[]) => {
  if (typeof classes === 'string') {
    return classes;
  }

  if (classes && classes.length) {
    const classRegExp = /^-?[_a-zA-Z]+[_a-zA-Z0-9-]*$/;
    const filteredClassNames = classes.filter((c) => c && classRegExp.test(c));

    return filteredClassNames.join(' ');
  }

  return '';
};
