import { Sequelize } from "sequelize";
import mysql2 from "mysql2"; // Import modul mysql2

const db = new Sequelize('freedb_auth.database', 'freedb_user.auth', 'yY#buz?rJD!g?3*', {
  host: 'sql.freedb.tech',
  dialect: 'mysql',
  dialectModule: mysql2,
});

export default db;
