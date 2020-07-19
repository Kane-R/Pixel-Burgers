'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Burgers', [
      { name: 'Sarcoline Ham & Cheese',  },
      { name: 'Coquelicot Blue Melt', },
      { name: 'Smaragdine Green Beef',  },
      { name: 'Mikado Lettuce Tomato',  }
    ]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('burgers', null, {});
  }
};
