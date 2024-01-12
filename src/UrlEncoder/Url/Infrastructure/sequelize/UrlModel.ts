import { Model, DataTypes } from 'sequelize'
import sequelizeInstance from './index'

class Url extends Model {
  public encoded_url!: string
  public decoded_url!: string
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Url.init(
  {
    encoded_url: {
      type: new DataTypes.STRING(255),
      allowNull: false
    },
    decoded_url: {
      type: new DataTypes.STRING(255),
      allowNull: false
    }
  },
  {
    tableName: 'encoded_urls',
    sequelize: sequelizeInstance
  }
)

export default Url
