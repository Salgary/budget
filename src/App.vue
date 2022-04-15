<template>
  <div id="app">
    <Form @submitForm="onFormSubmit"/>
    <TotalBalance :total="totalBalanceStore"/>
    <BudgetList :list="userList"/>
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import Form from "@/components/Form";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    Form
  },

  computed: {
    ...mapGetters("data", ["userList", "totalBalanceStore"]),
  },

  methods: {
    ...mapActions('data', ['addNewItemStore']),

    onFormSubmit(formData) {
      console.log(formData);
      this.addNewItemStore(formData);
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
