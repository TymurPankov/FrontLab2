import { createStore } from 'vuex'
import Users from "../users/userList.js";

export default createStore({
  state: {
    users: new Users,
    authUser:null,
  },
  mutations: {
    ADD_USER: (state, user) => {
      alert("Successfull registration")
      state.users.addUser(user);
    },
    UPDATE_USER: (state, user) => {
      state.users.updateUser(state.authUser.id, user);
    },
    LOGIN_USER: (state, user) => {
      const userCurrent = state.users.getUserByUsername(user.username);
      if(!userCurrent) {
        alert("Didn`t find user with '${user.username}' username");
        return;
      }
      if(userCurrent.password === user.password) {
        state.authUser = userCurrent;
      } 
      else {
        alert("Wrong password");
      }
    },
    LOGOUT_USER: (state) => {
      state.authUser = null;
      alert("Logged out");
    }
  },
  actions: {
    ADD_USER: (context, user) => {
      context.commit('ADD_USER', user);
    },
    UPDATE_USER: (context, user) => {
      context.commit('UPDATE_USER', user);
    },
    LOGIN_USER: (context, user) => {
      context.commit('LOGIN_USER', user);
    },
    LOGOUT_USER: (context) => {
      context.commit('LOGOUT_USER');
    }
  },
  modules: {
  }
})
