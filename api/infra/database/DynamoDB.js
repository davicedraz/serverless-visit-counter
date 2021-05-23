const AWS = require("aws-sdk");
const { Database } = require("./database");

export class DynamoDB extends Database {
  constructor() {
    this.client = new AWS.DynamoDB.DocumentClient();
    super(this);
  }

  async query(key) {
    const { Item } = await this.client.get({ TableName: key.table, Key: key });
    return Item;
  }

}
