import { Compare } from '../index';

describe('Compare', () => {
  test('deepCompare should return true if both parameters are undefined', () => {
    let a;
    let b;

    const isEqual = Compare.deepCompare(a, b).isEqual;

    expect(isEqual).toBe(true);
  });

  test('deepCompare should return false if only one parameter is undefined', () => {
    let a;
    const b = null;

    const isEqual = Compare.deepCompare(a, b).isEqual;

    expect(isEqual).toBe(false);
  });

  test('deepCompare should return true if both parameters are null', () => {
    const a = null;
    const b = null;

    const isEqual = Compare.deepCompare(a, b).isEqual;

    expect(isEqual).toBe(true);
  });

  test('deepCompare should return true if both parameters are the same number', () => {
    const a = 1;
    const b = 1;

    const isEqual = Compare.deepCompare(a, b).isEqual;

    expect(isEqual).toBe(true);
  });

  test('deepCompare should return false if both parameters are the different number', () => {
    const a = 1;
    const b = 2;

    const isEqual = Compare.deepCompare(a, b).isEqual;

    expect(isEqual).toBe(false);
  });

  test('deepCompare should return false if both parameters are the same number but different types', () => {
    const a = 1;
    const b = '1';

    const isEqual = Compare.deepCompare(a, b).isEqual;

    expect(isEqual).toBe(false);
  });

  test('deepCompare should return true if both parameters are the same number and different types but strictEquality is set to false', () => {
    const a = 1;
    const b = '1';

    const isEqual = Compare.deepCompare(a, b, false).isEqual;

    expect(isEqual).toBe(true);
  });

  test('deepCompare should return true if both parameters are the same string', () => {
    const a = '1';
    const b = '1';

    const isEqual = Compare.deepCompare(a, b).isEqual;

    expect(isEqual).toBe(true);
  });

  test('deepCompare should return false if both parameters are different strings', () => {
    const a = '1';
    const b = '2';

    const isEqual = Compare.deepCompare(a, b).isEqual;

    expect(isEqual).toBe(false);
  });

  test('deepCompare should return true if both parameters have the same constructor', () => {
    class FirstObj {
      constructor(first, last) {
        this.first = first;
        this.last = last;
      }
    }

    class SecondObj {
      constructor(first, last) {
        this.first = first;
        this.last = last;
      }
    }

    const a = new FirstObj('John', 'Doe');
    const b = new SecondObj('John', 'Doe');

    const isEqual = Compare.deepCompare(a, b).isEqual;

    expect(isEqual).toBe(true);
  });

  test('deepCompare should return false if the parameters have different constructors', () => {
    class FirstObj {
      constructor(first) {
        this.first = first;
      }
    }

    class SecondObj {
      constructor(first, last) {
        this.first = first;
        this.last = last;
      }
    }

    const a = new FirstObj('John');
    const b = new SecondObj('John', 'Doe');

    const isEqual = Compare.deepCompare(a, b).isEqual;

    expect(isEqual).toBe(false);
  });

  test('deepCompare should return true if both parameters contain equal functions', () => {
    const a = {
      func: () => {
        console.log('1');
      }
    };

    const b = {
      func: () => {
        console.log('1');
      }
    };

    const isEqual = Compare.deepCompare(a, b).isEqual;

    expect(isEqual).toBe(true);
  });

  test('deepCompare should return false if parameters contain different functions', () => {
    const a = {
      func: () => {
        console.log('1');
      }
    };

    const b = {
      func: () => {
        console.log('2');
      }
    };

    const isEqual = Compare.deepCompare(a, b).isEqual;

    expect(isEqual).toBe(false);
  });

  test('deepCompare should return false if only one parameter is a function', () => {
    const a = {
      func: 1
    };

    const b = {
      func: () => {
        console.log('2');
      }
    };

    const isEqual = Compare.deepCompare(a, b).isEqual;

    expect(isEqual).toBe(false);
  });

  test('deepCompare should return true if both parameters are the same date', () => {
    const date = new Date();
    const a = date;
    const b = date;

    const isEqual = Compare.deepCompare(a, b).isEqual;

    expect(isEqual).toBe(true);
  });

  test('deepCompare should return false if only one parameter is a date', () => {
    const a = new Date();
    const b = 0;

    const isEqual = Compare.deepCompare(a, b).isEqual;

    expect(isEqual).toBe(false);
  });

  test('deepCompare should return false if parameters are different dates', () => {
    const a = new Date();
    const b = new Date() + 1000;

    const isEqual = Compare.deepCompare(a, b).isEqual;

    expect(isEqual).toBe(false);
  });

  test('deepCompare should return true if both arrays are equivalent', () => {
    const a = [1, 2, 3];
    const b = [1, 2, 3];

    const isEqual = Compare.deepCompare(a, b).isEqual;

    expect(isEqual).toBe(true);
  });

  test('deepCompare should return true if both arrays are equivalent but out of order', () => {
    const a = [1, 2, 3];
    const b = [3, 1, 2];

    const isEqual = Compare.deepCompare(a, b).isEqual;

    expect(isEqual).toBe(true);
  });

  test('deepCompare should return false if arrays are different lengths', () => {
    const a = [1, 2, 3];
    const b = [3, 1, 2, 4];

    const isEqual = Compare.deepCompare(a, b).isEqual;

    expect(isEqual).toBe(false);
  });

  test('deepCompare should return false if arrays have different values', () => {
    const a = [1, 2, 3];
    const b = [3, 1, 4];

    const isEqual = Compare.deepCompare(a, b).isEqual;

    expect(isEqual).toBe(false);
  });

  test('deepCompare should return false if only one of the objects is an array', () => {
    const a = [1, 2, 3];
    const b = { id: 1 };

    const isEqual = Compare.deepCompare(a, b).isEqual;

    expect(isEqual).toBe(false);
  });

  test('deepCompare should return true if both objects are equal', () => {
    const a = { id: 1 };
    const b = { id: 1 };

    const isEqual = Compare.deepCompare(a, b).isEqual;

    expect(isEqual).toBe(true);
  });

  test('deepCompare should return true if both objects are equal but the properties are out of order', () => {
    const a = { id: 1, name: 'John' };
    const b = { name: 'John', id: 1 };

    const isEqual = Compare.deepCompare(a, b).isEqual;

    expect(isEqual).toBe(true);
  });

  test('deepCompare should return false if objects are different', () => {
    const a = { id: 1, name: 'John' };
    const b = { id: 1, name: 'Doe' };

    const isEqual = Compare.deepCompare(a, b).isEqual;

    expect(isEqual).toBe(false);
  });

  test('deepCompare should return false if objects have different properties', () => {
    const a = { id: 1 };
    const b = { id: 1, name: 'John' };

    const isEqual = Compare.deepCompare(a, b).isEqual;

    expect(isEqual).toBe(false);
  });

  test('deepCompare should return true if objects are equal', () => {
    const date = new Date();

    const a = {
      id: 1,
      name: 'John',
      projects: [
        {
          id: 1,
          crn: 'CRN',
          startDate: date
        },
        {
          id: 2,
          crn: 'CRN',
          startDate: date
        },
        {
          id: 3,
          crn: 'CRN',
          startDate: date
        }
      ],
      func: () => {
        console.log('1');
      }
    };

    const b = {
      name: 'John',
      id: 1,
      projects: [
        {
          id: 3,
          crn: 'CRN',
          startDate: date
        },
        {
          id: 1,
          crn: 'CRN',
          startDate: date
        },
        {
          id: 2,
          crn: 'CRN',
          startDate: date
        }
      ],
      func: () => {
        console.log('1');
      }
    };

    const isEqual = Compare.deepCompare(a, b).isEqual;

    expect(isEqual).toBe(true);
  });

  test('deepCompare should return false if objects are not equal', () => {
    const date = new Date();

    const a = {
      id: 1,
      name: 'John',
      projects: [
        {
          id: 1,
          crn: 'CRN',
          startDate: date
        },
        {
          id: 2,
          crn: 'CRN',
          startDate: date
        },
        {
          id: 3,
          crn: 'CRN',
          startDate: date
        }
      ],
      func: () => {
        console.log('1');
      }
    };

    const b = {
      name: 'John',
      id: '1',
      projects: [
        {
          id: 3,
          crn: 'CRN',
          startDate: date
        },
        {
          id: 1,
          crn: 'CRN',
          startDate: date
        },
        {
          id: 2,
          crn: 'CRN',
          startDate: date
        }
      ],
      func: () => {
        console.log('1');
      }
    };

    const isEqual = Compare.deepCompare(a, b).isEqual;

    expect(isEqual).toBe(false);
  });

  test('deepCompare should return true if objects are equal and different types but strictEquality is set to false', () => {
    const date = new Date();

    const a = {
      id: 1,
      name: 'John',
      projects: [
        {
          id: 1,
          crn: 'CRN',
          startDate: date
        },
        {
          id: 2,
          crn: 'CRN',
          startDate: date
        },
        {
          id: 3,
          crn: 'CRN',
          startDate: date
        }
      ],
      func: () => {
        console.log('1');
      }
    };

    const b = {
      name: 'John',
      id: '1',
      projects: [
        {
          id: 3,
          crn: 'CRN',
          startDate: date
        },
        {
          id: 1,
          crn: 'CRN',
          startDate: date
        },
        {
          id: 2,
          crn: 'CRN',
          startDate: date
        }
      ],
      func: () => {
        console.log('1');
      }
    };

    const isEqual = Compare.deepCompare(a, b, false).isEqual;

    expect(isEqual).toBe(true);
  });
});
