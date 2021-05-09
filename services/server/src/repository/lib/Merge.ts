export const Merge = (separator: string) => (keyValues: { [key: string]: any }) => {
  return Object.entries(keyValues)
    .filter(([_, v]) => v !== undefined)
    .map(([k, v]) => (typeof v === 'string' ? `${k}='${v}'` : `${k}=${v}`))
    .join(` ${separator} `);
};
