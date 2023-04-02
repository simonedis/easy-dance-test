import { DataSource, DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: Number(5432),
  username: 'root',
  password: 'root',
  database: 'template',
  migrations: ['migrations/*.js'],
  entities: ['../../generated-source/entities/*.js'],
  migrationsTableName: '__migrations__',
};

const dataSource = new DataSource(config as DataSourceOptions);

dataSource.initialize();
export default dataSource;
