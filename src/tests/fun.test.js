import Character from '../js/app';

test('All input data correct', () => {
  const inputName = 'Rick';
  const inputType = 'Swordsman';

  const expected = { // ожидает
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Rick',
    type: 'Swordsman',
  };
  const received = new Character(inputName, inputType); // получает
  expect(received).toEqual(expected); // сравнивает
});

test('Icorrect name', () => {
  const inputName = 'R';
  const inputType = 'Swordsman';

  const expectForThrow = () => new Character(inputName, inputType); // получает

  expect(expectForThrow).toThrow();// должен получить ошибку
});

test('Icorrect type', () => {
  const inputName = 'Rick';
  const inputType = 'Cucumber';

  const expectForThrow = () => new Character(inputName, inputType); // получает

  expect(expectForThrow).toThrow();// должен получить ошибку
});
