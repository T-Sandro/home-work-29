import { ageClassification, weekFn } from '../main.js';

describe('Тестування функцій', () => {
  test('ageClassification повинна правильно відображати вік', () => {
    expect(ageClassification(-1)).toBe(null);
    expect(ageClassification(10)).toBe('Дитинство');
    expect(ageClassification(32)).toBe('Молодість');
    expect(ageClassification(49)).toBe('Зрілість');
    expect(ageClassification(71)).toBe('Старість');
    expect(ageClassification(85)).toBe('Довголіття');
    expect(ageClassification(120)).toBe('Рекорд');
    expect(ageClassification(167)).toBe(null);
  });

  test('weekFn повинна правильно відображати день', () => {
    expect(weekFn(1)).toBe('Понеділок');
    expect(weekFn(2)).toBe('Вівторок');
    expect(weekFn(3)).toBe('Середа');
    expect(weekFn(4)).toBe('Четвер');
    expect(weekFn(5)).toBe('П\'ятниця');
    expect(weekFn(6)).toBe('Субота');
    expect(weekFn(7)).toBe('Неділя');
    expect(weekFn('')).toBe(null);
  });
});