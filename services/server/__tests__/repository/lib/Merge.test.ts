import { Merge } from '../../../src/repository/lib/Merge';

test('Merge', () => {
  const separator = 'AND';
  const data = {
    foo: 10,
    bar: 'bar!',
    baz: null,
  };
  const AND = Merge(separator);

  expect(AND(data)).toBe("foo=10 AND bar='bar!' AND baz=null");
});
