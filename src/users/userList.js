import User from "./user.js";

export default class Users {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(new User(user));
  }

  updateUser(id, user) {
    var userUpdate = this.users.find( (user) => user.id === id );
    userUpdate.email = user.email;
    userUpdate.name = user.name;
    userUpdate.username = user.username;
    userUpdate.date = user.date;
    userUpdate.password = user.password;
  }

  getUserByUsername(username) {
    return this.users.find( (user) => user.username === username );
  }
}