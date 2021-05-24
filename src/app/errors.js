class DuplicityException extends Error {
  constructor(message) {
    super(message);
    this.name = "DuplicityException";
  }
}

module.exports = {
  DuplicityException
}
