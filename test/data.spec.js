global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

// const data = window.POKEMON.pokemon;

describe('filterData', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof filterData, 'function');
  });

  // it('Debería retornar Squirtle como primer pokémon de tipo agua', () => {
  //   assert.equal(filterData(data,'Water')[0].name, 'Squirtle');
  // });
  describe('sortData', () => {
    
    it('Debería ser una función', () => {
      assert.equal(typeof sortData, 'function');
    });
  })
});


