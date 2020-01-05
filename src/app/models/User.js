import Sequelize, { Model } from 'sequelize'

class User extends Model {
	static init (sequelize){
		super.init({
			name: Sequelize.STRING,
			password: Sequelize.STRING,
		})
	}
}

export default User