<template>
  <div class="budget-list-wrap">
    <el-card :header="header">
      <select class="budget-select" id="budgetSelectId" @change="onBudgetSelect">
      <option>Debit</option>
      <option>Credit</option>
      <option>Saldo</option>
      </select>
      <template v-if="!isEmpty">
        <BudgetListItem :list="list" :sel="sel" @deleteItem="onDeleteItem"/>
        {{ userList }}
        <p>------</p>
        {{ list }}
      </template>
      <el-alert v-else type="info" :title="emptyTitle" :closable="false" />
    </el-card>
    <el-dialog
      title="Подтверждение"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>Вы удаляете позицию!</span>
      <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">Отмена</el-button>
      <el-button type="primary" @click="onDialogConfirm">Удалить</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import BudgetListItem from "@/components/BudgetListItem";
import { mapGetters } from "vuex";
export default {
  name: 'BudgetList',
  components: {
    BudgetListItem,
  },
  props: {
    list: {
      type: Object,
      default: () => ({

      })
    },
    listdebit: {
      type: Object,
      default: () => ({

      })
    },
  },
  data: () => ({
    header: 'Budget List',
    emptyTitle: 'Empty List',
    dialogVisible: false,
    id: '',
    sel: 0
  }),
  computed: {
    isEmpty() {
      return !Object.keys(this.list).length;
    },
    ...mapGetters("data", ["userList"]),
  },
  methods: {
    onDeleteItem(id) {
      console.log(id);
      this.dialogVisible = true;
      this.id = id;
    },
    onDialogConfirm() {
      console.log(this.id);
      this.$delete(this.list, this.id);
      this.dialogVisible = false;
    },
    handleClose() {
        console.log( 'handle receve', this.id);
        this.dialogVisible = false;
      },
    onBudgetSelect() {
        let sel = document.getElementById('budgetSelectId').selectedIndex;
        let options = document.getElementById('budgetSelectId').options;
        console.log('sel index:', sel, 'select option:', options);
        // alert('Выбрана опция '+options[sel].text+' '+options[sel].value);
        this.sel = sel;
      }
  }
};
</script>

<style scoped>
  .budget-list-wrap {
    max-width: 500px;
    margin: auto;
  }
  .budget-select  {
    color: blueviolet;
    position: absolute;
    left: 21%;
    margin-block: auto;
    margin-bottom: 70px;
  }
</style>