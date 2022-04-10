import Vue from "vue";

const usersStore = {
  namespaced: true,
  state: {
    list: {
      1: {
        type: 'OUTCOME',
        value: 70,
        comment: 'store out comment',
        id: 1,
      },
      2: {
        type: 'INCOME',
        value: 80,
        comment: 'store comment',
        id: 2,
      },
      3: {
        type: 'INCOME',
        value: 50,
        comment: 'store comment',
        id: 3,
      },
      4: {
        type: 'OUTCOME',
        value: 10,
        comment: 'store out comment',
        id: 4,
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