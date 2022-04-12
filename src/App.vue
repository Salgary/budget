<template>
  <div id="app">
    <Form @submitForm="onFormSubmit"/>
    <TotalBalance :total="totalBalance"/>
    <BudgetList :list="userList"/>
    {{ userList }}
    <!-- {{ totalBalanceStore }} -->
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import Form from "@/components/Form";
import { mapGetters } from "vuex";

export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    Form
  },
  data: () => ({
    list: {
      1: {
        type: 'OUTCOME',
        value: 70 ,
        comment: 'some out comment',
        id: 1,
      },
      2: {
        type: 'INCOME',
        value: 80,
        comment: 'some comment',
        id: 2,
      },
      3: {
        type: 'INCOME',
        value: 50,
        comment: 'some comment',
        id: 3,
      },
      4: {
        type: 'OUTCOME',
        value: 10,
        comment: 'some out comment',
        id: 4,
      },
    },
    listdebit: {
      2: {
        type: 'INCOME',
        value: 80,
        comment: 'some comment',
        id: 2,
      },
      3: {
        type: 'INCOME',
        value: 50,
        comment: 'some comment',
        id: 3,
      },
    },
  }),
  computed: {
    ...mapGetters("data", ["userList"]),
    totalBalance() {
      let valOfObj = Object.values(this.list);
      console.log(valOfObj);

      let balance = valOfObj.reduce(function(acc, item)
        {console.log(item); if (item.type == "INCOME") {return acc + item.value}
      else if (item.type == "OUTCOME") {return acc - item.value}},0);


      console.log(balance);
      return balance;
    },
  },
  methods: {
    onFormSubmit(data) {
      console.log(data);
      const newObjItem = {
        ...data,
        id: String(Math.random()),
      };
      this.$set(this.list, newObjItem.id, newObjItem);
      },
  }
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
