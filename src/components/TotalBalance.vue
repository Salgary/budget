<template>
  <div class="total-value" v-bind:class="totalColor">Balance: {{ total }}</div>
</template>

<script>
export default {
  name: 'TotalBalance',
  props: {
    total: {
      type: Number,
      default: 0,
    }
  },
  computed: {
    isTotal() {
      if (this.total > 0) {return true} else return false;
    },
    totalColor() {
      if (this.total > 0) {
        return "total-color-green"
      } else if(this.total < 0) {
        return "total-color-red"
      } else return "total-color-white";
    }
  },
}
</script>

<style scoped>
  .total-value {
    font-size: 26;
    text-transform: uppercase;
    padding: 20px;
    text-align: center;
  }
  .total-color-red {
    color: red
  }
  .total-color-green {
    color: green;
  }
  .total-color-white {
    color: white;
  }
</style>