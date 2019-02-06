export default function Character(name, type) {
  const characterTypes = {
    Bowman: {
      attack: 25,
      defence: 25,
    },
    Swordsman: {
      attack: 40,
      defence: 10,
    },
    Magician: {
      attack: 10,
      defence: 40,
    },
    Undead: {
      attack: 25,
      defence: 25,
    },
    Zombie: {
      attack: 40,
      defence: 10,
    },
    Daemon: {
      attack: 10,
      defence: 40,
    },
  };

  if (typeof (name) !== 'string' || name.length <= 2 || name.length >= 10) {
    throw TypeError('Incorrect name');
    // throw TypeError('Must be an string');
  }
  this.name = name;

  if (!Object.keys(characterTypes).includes(type)) throw new Error('Incorrect character`s type');

  this.type = type;
  this.health = 100;
  this.level = 1;
  this.attack = characterTypes[type].attack;
  this.defence = characterTypes[type].defence;
}

const newPlayer = new Character('Rick', 'Swordsman');

console.log(newPlayer);
