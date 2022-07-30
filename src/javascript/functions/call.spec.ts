import { Toy, printEach, animals } from './call';

describe('printEach animal', () => {
  const result = printEach(animals);
  it('should ', () => {
    expect(result).toEqual(['#0 Lion: King', '#1 Whale: Fail']);
  });
});

describe('chain constructors', () => {
  it('Product should initialize Toy properties', () => {
    const fun = new Toy('robot', 40);

    expect(fun.name).toBe('robot');
    expect(fun.price).toBe(40);
    expect(fun.category).toBe('toy');
  });
});

describe('should', () => {
  it('should ', () => {
    expect(2 + 2).toStrictEqual(4);
  });
});
