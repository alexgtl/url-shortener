import { Dialect, Sequelize } from 'sequelize'

const databaseName: string = process.env.DATABASE_NAME ?? 'none'
const databaseUser: string = process.env.DATABASE_USER ?? 'none'
const databasePassword: string = process.env.DATABASE_PASSWORD ?? 'none'
const databaseHost: string = process.env.DATABASE_HOST ?? 'none'
const databaseDialect: Dialect = (process.env.DATABASE_DIALECT as Dialect) ?? 'mysql'

const sequelize: Sequelize = new Sequelize(databaseName, databaseUser, databasePassword, {
  host: databaseHost,
  dialect: databaseDialect
})

export default sequelize
