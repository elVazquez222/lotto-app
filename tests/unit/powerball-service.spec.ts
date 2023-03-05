import { fetchPowerBallDrawHistory } from '../../src/services/powerBallService';

describe('fetchPowerBallDrawHistory', () => {
  test('returns an object with a drawHistory property containing an array of draws', async () => {
    const result = await fetchPowerBallDrawHistory();
    expect(result).toHaveProperty('drawHistory');
    expect(result.drawHistory).toHaveProperty('draws');
    expect(Array.isArray(result.drawHistory.draws)).toBe(true);
  });

  test('returns the specified number of draws with the correct properties', async () => {
    const limit = 5;
    const result = await fetchPowerBallDrawHistory(limit);

    expect(result.drawHistory.draws.length).toBe(limit);

    result.drawHistory.draws.forEach((draw) => {
      expect(draw).toHaveProperty('id');
      expect(draw).toHaveProperty('addOns');
      expect(draw).toHaveProperty('drawDate');
      expect(draw).toHaveProperty('drawnNumbers');

      expect(Array.isArray(draw.addOns)).toBe(true);
      expect(typeof draw.drawDate).toBe('string');
      expect(Array.isArray(draw.drawnNumbers)).toBe(true);
    });
  });

});
