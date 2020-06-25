import { Game } from './../src/Game.js';
import { Character } from './../src/Character.js';
import { Weapon } from './../src/Weapon.js';
import { Monster, Slug } from '../src/Monster.js';

describe ('Game', () => {
  let fighter;
  let game;
  let monster;
  let slug;
  
  beforeEach(() => {
    fighter = new Character("Trogdor", "Fighter", 5, 1, 20);
    game = new Game(fighter);
    monster = new Monster("mole", 15, 20);
    slug = new Slug("green");
  });

  test('The program should create a new game with a new character based on the name and character class chosen by the user', () => {
    expect(game.character.charClass).toEqual("Fighter");
  });

  test('The program should give a new character a starting weapon based on the characters class', () => {
    game.giveCharacterStartingWeapon();
    expect(game.character.equipped).toEqual(expect.arrayContaining([{name: "Shovel", strength: 5, magic: 0}]));
  });

  test('The program should remove health from a character if they lose a battle', () => {
    game.giveCharacterStartingWeapon();
    game.battleMonster(monster);
    expect(game.character.health).toEqual(16);
  })

  test('The program should increase a characters experience if they win a battle', () => {
    game.giveCharacterStartingWeapon();
    game.battleMonster(slug);
    expect(game.character.experience).toEqual(5);
  });

  test('The program should increase a characters level if they win a battle and their experience reaches the level cap', () => {
    game.giveCharacterStartingWeapon();
    game.battleMonster(slug);
    game.battleMonster(slug);
    console.log(game.character);
    expect(game.character.level).toEqual(2);
  });
});