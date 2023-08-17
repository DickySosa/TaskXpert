class DbConfig {
host: string = '';
port!: number;
database: string = '';
user: string = '';
password: string = ''; 
}

export const config: DbConfig = {
host: 'localhost',
port: 5432,
database: 'taskxpert-db',
user: 'postgres',
password: 'AdminMaster2023@'
}