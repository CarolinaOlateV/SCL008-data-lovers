global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

describe('filterData', () => {
  const data = [
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
    },
    {
      name: 'Abra',
      type: 'Psychic'
    },
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
  },
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
  },
  {
    name: 'Zubat',
    type: 'Grass'
  }
  ]
  
  it('Debería ser una función', () => {
    assert.equal(typeof filterData, 'function');
  });

  it('Debería retornar Squirtle como primer pokémon de tipo Agua', () => {
    assert.equal(window.filterData(data,'Water')[0].name, 'Squirtle');//assert comprueba lo que estoy testeando y equal es el metodo que nos estrega chai
  });

  it('Debería retornar Mew como ultimo pokémon de tipo Psychic', () => {
    assert.equal(window.filterData(data,'Psychic')[4].name, 'Mew');
  });

  it('Debería retornar Charizard como segundo pokémon de tipo Fire', () => {
    assert.equal(window.filterData(data,'Fire')[1].name, 'Charizard');
  })
});

  describe('sortData', () => {
    const data = [
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
      },
      {
        name: 'Abra',
        type: 'Psychic'
      },
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
    },
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
    },
    {
      name: 'Zubat',
      type: 'Grass'
    }
    ]
    
    it('Debería ser una función', () => {
      assert.equal(typeof sortData, 'function');
    })

  it('Debería retornar Abra como primer pokémon de la A-Z', () => {
    assert.equal(window.sortData(data,'name','a--z')[0].name, 'Abra');
  })

  it('Debería retornar Zubat como primer pokémon de la Z-A', () => {
    assert.equal(window.sortData(data,'name','z--a')[0].name, 'Zubat');
  })

  it('Debería retornar Vulpix como tercer pokémon de la Z-A', () => {
    assert.equal(window.sortData(data,'name','z--a')[2].name, 'Vulpix');
  })

  it('Debería retornar Abra como ultimo pokémon de la Z-A', () => {
    assert.equal(window.sortData(data,'name','z--a')[13].name, 'Abra');
  })
});

describe('computeStats',() => {
  
  const data = [
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
    },
    {
      name: 'Abra',
      type: 'Psychic'
    },
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
  },
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
  },
  {
    name: 'Zubat',
    type: 'Grass'
  }
  ]

  it('Debería ser una función', () => {
    assert.equal(typeof computeStats, 'function');
  })

  it('Debería retornar 3% de pokémones tipo agua', () => {
    assert.equal(window.computeStats(data, 'Water'), "4");
  })
});

describe('numData', () => {

  const data = [
    {
      name: 'Squirtle',
      type: 'Water',
      num: '01'
    },
    {
      name: 'Wartortle',
      type: 'Water',
      num: '02'
    },
    {
      name: 'Blastoise',
      type: 'Water',
      num: '03'
    },
    {
      name: 'Psyduck',
      type: 'Water',
      num: '04'
    },
    {
      name: 'Abra',
      type: 'Psychic',
      num: '05'
    },
    {
      name: 'Mr. Mime',
      type: 'Psychic',
      num: '06'
    },
    {
      name: 'Jynx',
      type: 'Psychic',
      num: '07'
    },
    {
    name: 'Mewtwo',
    type: 'Psychic',
    num: '08'
  },
  {
    name: 'Mew',
    type: 'Psychic',
    num: '09'
  },
    {
      name: 'Charmander',
      type: 'Fire',
      num: '10'
    },
    {
      name: 'Charizard',
      type: 'Fire',
      num: '11'
    },
    {
    name: 'Vulpix',
    type: 'Fire',
    num: '12'
  },
  {
    name: 'Ninetales',
    type: 'Fire', 
    num: '13'
  },
  {
    name: 'Zubat',
    type: 'Grass',     
    num: '14'
  }
  ]

  it('Debería ser una función', () => {
    assert.equal(typeof numData, 'function');
})

it('Debería retornar Squirtle como primer pokémon del 01 al 14', () => {
  assert.equal(window.numData(data,'num')[0].name, 'Squirtle');
})

it('Debería retornar Zubat como primer pokémon del 14 al 01', () => {
  assert.equal(window.numData(data,'name','num-last')[0].name, 'Zubat');
})

});



