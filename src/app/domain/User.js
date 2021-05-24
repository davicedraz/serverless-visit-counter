const yup = require('yup');

class User {

  constructor({ id = null, name, email, password }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  get() {
    return {
      name: this.name,
      email: this.emai
    }
  }

  validate() {
    const validNewUser = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().required(),
      password: yup.string().required().min(5)
    });
    return validNewUser.validate(this);
  }

  checkPassword(password) {
    return bcrypt.compareSync(password, this.password);
  }

}

module.exports = User;
