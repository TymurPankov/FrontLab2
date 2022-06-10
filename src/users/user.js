export default class User {
    constructor(userObj) {
        this.id = Math.round(Math.random() * 1000000).toString();
        this.email = userObj.email;
        this.name = userObj.name;
        this.username = userObj.username;
        this.date = userObj.date;
        this.password = userObj.password;
    }
  }