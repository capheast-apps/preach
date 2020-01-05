'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {  
      return queryInterface.createTable('congregations_users', { 
      id: {
          type: Sequelize.INTEGER, 
          allowNull: false, 
          autoIncrement: true, primaryKey: true
        },
      congregation_id: {
          type: Sequelize.INTEGER, 
          allowNull: false, 
          references: { model: 'congregations', key: 'id' }
        },
      user_id: {
          type: Sequelize.INTEGER, 
          allowNull: false,
          references: { model: 'users', key: 'id' }  
        },
      role_id: {
          type: Sequelize.INTEGER, 
          allowNull: false,  
          references: { model: 'roles', key: 'id' }
        },  
      created_at: {
          type: Sequelize.DATE,
          allowNull: false, 
        },
      updated_at: {
          type: Sequelize.DATE,
          allowNull: false, 
        }
        });
    
  },

  down: (queryInterface, Sequelize) => {  
      return queryInterface.dropTable('congregations_users');
  }
};
