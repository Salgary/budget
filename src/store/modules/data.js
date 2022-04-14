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
        value: 50,
        comment: 'store out comment',
        id: 4,
      },
    },
  },
  getters: {
    userList: ({ list }) => Object.values(list),
    userList1: ({ list }) => Object.values(list),

    totalBalanceStore: ({ list }) => {
      let valOfObj = Object.values(list);

      let balance = valOfObj.reduce(function(acc, item)
        {console.log(item); if (item.type == "INCOME") {return acc + item.value}
      else if (item.type == "OUTCOME") {return acc - item.value}},0);

      return balance;
    },

  },
  mutations: {
    ADD_BUDGET(state, item) {
      console.log(state, item);
      // state.list[item.id] = item;
      Vue.set(state.list, item.id, item);
      console.log(state.list);
    },
  },
  actions: {
    addNewItemStore ({ commit }, newItem) {
      const newItemList = {...newItem, id: String(Math.random())};
      console.log(commit);
      console.log(newItemList);
      commit("ADD_BUDGET", newItemList)
    }
  },
};

export default usersStore;