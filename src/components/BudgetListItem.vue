<template>
  <div>
    <div class="list-item" v-for="(item, prop) in list" :key="prop">
        <span class="budget-comment" v-if="forType(item.type, sel)">
          {{ item.comment }}
        </span>
        <span class="budget-value" v-if="forType(item.type, sel)" :class="greenClass(item.type)" >
          {{ item.value }} <i class="el-icon-top budget-value-green" v-if="color(item.type)"></i>
          <i class="el-icon-bottom" v-else></i>
        </span>
        <el-button type="danger" v-if="forType(item.type, sel)" size="mini" @click="deleteItem(item.id)">Delete</el-button>
    </div>
  </div>

</template>

<script>
export default {
  name: "BudgetListItem",
  props: {
    list: {
      type: Object,
      default: () => ({

      })
    },
    sel: {
      type: Number,
      default: 0
    }
  },
  methods: {
    deleteItem(id) {
      console.log('click', id);
      this.$emit('deleteItem', id);
    },
    color(type) {
      if(type == 'INCOME') {
      console.log('item is', type)
      return true;
      }
    },
    greenClass(type) {
      if(type == 'INCOME') {
      console.log('greenClass is', type)
      return "budget-value-green";
      } else return "budget-value-red"
    },
    forType(type) {
      if(this.sel == 0) {if(type == 'INCOME') {
      console.log('fortype is', type, 'sel:', this.sel)
      return ('item.type == "INCOME"')
    }} else if (this.sel == 1) {if(type == 'OUTCOME') {
      console.log('fortype is', type, 'sel:', this.sel)
      return ('item.type == "OUTCOME"')
    }} else return true;

    }
  },
}
</script>

<style scoped>
  .list-item {
    display: flex;
    align-items: center;
    padding: 10px 15px;
  }

  .budget-value {
    font-weight: bold;
    margin-left: auto;
    margin-right: 10px;
  }
  .budget-value-red {
    color: red;
  }
  .budget-value-green {
    color: green;
  }
</style>