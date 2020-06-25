import { Monster, Slug } from './../src/monster.js';

describe('Monster', () => {
  let snail;
  let otherSlug;

  beforeEach(() => {
    snail = new Monster("Snail", 2, 2);
    otherSlug = new Slug("green");
  });

  test('The program should create a monster', () => {
    expect(snail).toMatchObject({monstClass: "Snail", powerLevel: 2, experienceAmount: 2});
  });

  test('This is an extends test', () => {
    console.log(otherSlug);
    expect(otherSlug).toMatchObject({monstClass: "Slug", powerLevel: 2, experienceAmount: 5, color: "green"});
  });
})