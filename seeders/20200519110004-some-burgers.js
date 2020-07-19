'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Burgers', [
      { name: 'Curry Burger',  },
      { name: 'Cheese Burger', },
      { name: 'Buffalo Fried Chicken Burger',  },
      { name: 'Bacon lettuce tomato',  }
    ]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('burgers', null, {});
  }
};
