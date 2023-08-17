"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
class DbConfig {
    constructor() {
        this.host = '';
        this.database = '';
        this.user = '';
        this.password = '';
    }
}
exports.config = {
    host: 'localhost',
    port: 5432,
    database: 'taskxpert-db',
    user: 'postgres',
    password: 'AdminMaster2023@'
};
//# sourceMappingURL=db-config.model.js.map