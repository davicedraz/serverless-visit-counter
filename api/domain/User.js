const database = require("../infra/config/database");

export class User {

  constructor(id = null, name, email, password) {
    this.userId = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.table = database.USER_TABLE;
  }

}
