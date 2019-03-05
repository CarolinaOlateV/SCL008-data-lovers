global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

// const data = window.POKEMON.pokemon;

describe('filterData', () => {
  const waterData = [
    {
      name: 'Squirtle',
      type: 'Water'
    },
    {
      name: 'Wartortle',
      type: 'Water'
    },
    {
      name: 'Blastoise',
      type: 'Water'
    },
    {
      name: 'Psyduck',
      type: 'Water'
    }

  ]

  const psychicData = [
    {
      name: 'Mr. Mime',
      type: 'Psychic'
    },
    {
      name: 'Jynx',
      type: 'Psychic'
    },
    {
    name: 'Mewtwo',
    type: 'Psychic'
  },
  {
    name: 'Mew',
    type: 'Psychic'
  }
  ]

  const fireData = [
    {
      name: 'Charmander',
      type: 'Fire'
    },
    {
      name: 'Charizard',
      type: 'Fire'
    },
    {
    name: 'Vulpix',
    type: 'Fire'
  },
  {
    name: 'Ninetales',
    type: 'Fire'
  }
  ]
  
  it('Debería ser una función', () => {
    assert.equal(typeof filterData, 'function');
  });

  it('Debería retornar Squirtle como primer pokémon de tipo Agua', () => {
    assert.equal(window.filterData(waterData,'Water')[0].name, 'Squirtle');
  });

  it('Debería retornar Mew como ultimo pokémon de tipo Psychic', () => {
    assert.equal(window.filterData(psychicData,'Psychic')[3].name, 'Mew');
  });

  it('Debería retornar Charizard como segundo pokémon de tipo Fire', () => {
    assert.equal(window.filterData(fireData,'Fire')[1].name, 'Charizard');
  });

  describe('sortData', () => {
    
    it('Debería ser una función', () => {
      assert.equal(typeof sortData, 'function');
    });
  })
});


