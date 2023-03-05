import helpers from '../../src/services/helpers';

describe('helpers', () => {
  describe('shortenThisDate', () => {
    test('returns a shortened date string in the expected format', () => {
      const dateString: Date = new Date('2023-03-05T00:00:00.000Z');
      const result: string = helpers.shortenThisDate(dateString);
      expect(result).toBe('5 Mär \'23');
    });
  });

  describe('prettifyThisDate', () => {
    test('returns a prettified date string in the expected format', () => {
      const date: Date = new Date('2023-03-05T00:00:00.000Z');
      const result: string = helpers.prettifyThisDate(date);
      expect(result).toBe('Sunday, March 5, 2023');
    });

    test('returns a prettified date string with the specified options', () => {
      const date: Date = new Date('2023-03-05T00:00:00.000Z');
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      };
      const result: string = helpers.prettifyThisDate(date, options);
      expect(result).toBe('Sun, Mar 5, 2023');
    });
  });
});
