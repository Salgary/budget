import Vue from "vue";

const usersStore = {
  namespaced: true,
  state: {
    list: {
      1: {
        name: "Dima",
        age: 46,
      },
    },
  },
  getters: {
    userList: ({ list }) => Object.values(list),
  },
  mutations: {
    ADD_USER(state, user) {
      console.log(state, user);
      state.list[user.id] = user;
      Vue.set(state.list, user, user.id);
    },
  },
  actions: {
    addNewUser({ commit }, user) {
      console.log(commit);
      console.log(user);
      const newUser = {
        ...user,
        id: String(Math.random()),
      };
      console.log(newUser);
      commit("ADD_USER", newUser);
    },
  },
};

export default usersStore;