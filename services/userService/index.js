module.exports = new (class UserService {
  constructor() {
    this.user = require("../../models/userModel.js");
  }

  getUserByEmail(email) {
    return this.user.findOne({ email });
  }

  addUser(payload) {
    return this.user.create(payload);
  }

})();