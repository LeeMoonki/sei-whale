import { resolveClassName } from '../../../lib/string';

describe('className', () => {
  it('undefined를 전달하면 빈 문자열을 반환합니다.', () => {
    const result = resolveClassName();

    expect(result).toBe('');
  });

  it('하나의 class 이름만 전달하면 하나의 class 이름만 반환합니다.', () => {
    const result = resolveClassName('foo');

    expect(result).toBe('foo');
  });

  it('class 이름으로 이루어진 배열을 전달하면 적절하지 않은 값들은 제거하고 class 속성을 만들어 반환합니다.', () => {
    const samples = [
      { sample: [], expected: '' },
      { sample: ['foo'], expected: 'foo' },
      { sample: ['foo', undefined], expected: 'foo' },
      { sample: ['foo', undefined, 'bar', null], expected: 'foo bar' },
      { sample: ['foo', undefined, '0bar', null], expected: 'foo' },
      { sample: ['-foo__123', undefined, '0123', null], expected: '-foo__123' },
    ];

    for (const s of samples) {
      expect(resolveClassName(s.sample)).toBe(s.expected);
    }
  });
});
