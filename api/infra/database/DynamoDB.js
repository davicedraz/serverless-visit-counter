const AWS = require("aws-sdk");
const { Database } = require("./database");
import database from "../config/database";

export class DynamoDB extends Database {
  constructor() {
    if (database.IS_OFFLINE === 'true') {
      this.client = new AWS.DynamoDB.DocumentClient({
        region: 'localhost',
        endpoint: 'http://localhost:8000'
      });
    } else {
      this.client = new AWS.DynamoDB.DocumentClient();
    }

    super(this);
  }

  async query(key) {
    const { Item } = await this.client.get({ TableName: key.table, Key: key });
    return Item;
  }

}
