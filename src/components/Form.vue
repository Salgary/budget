  <template>
  <el-card class="form-card">
    <el-form :model="formData" ref="addItemForm" :rules="rules" label-position="top">
      <el-form-item label="Label Type" prop="type">
        <el-select class="type-select" v-model="formData.type" placeholder="Choose type ...">
          <el-option label="Income" value="INCOME"/>
          <el-option label="Outcome" value="OUTCOME"/>
        </el-select>
      </el-form-item>
      <el-form-item label="Label Comment" prop="comment">
        <el-input v-model="formData.comment"/>
      </el-form-item>
      <el-form-item label="Label Value" prop="value">
        <el-input v-model.number="formData.value"/>
      </el-form-item>
      <el-button type="primary" @click="onSubmit">Submit</el-button>
    </el-form>
  </el-card>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "Form",
  data() {

    let checkAge = (rule, value, callback) => {
        if (value <= 0) {
          callback(new Error('Значение не может быть менее 0'));
        } else if
           (!Number.isInteger(value)) {
            callback(new Error('Please input any digits'));
          }
        else {
          callback();
        }
      };

    return {
    formData: {
    type: 'INCOME',
    comment: '',
    value: 0
    },
     rules: {
    type: [
      { required:true, message:"Please select type", trigger:"blur" }
      ],
    comment: [
      {required:true, message:"Please select any comment", trigger:"change"}
    ],
    value: [
      {validator: checkAge, trigger: "change"},
      {type:"number", message:"Value must be a number", trigger:"change"}
    ],
  },
  };

  },
  methods: {
    ...mapActions('data', ['addNewItemStore']),
    onSubmit () {
      console.log(this.$refs);
      this.$refs.addItemForm.validate( (valid) => {
      if (valid) {
        this.addNewItemStore({...this.formData});
        this.$emit("submitForm", {...this.formData});
        this.$refs.addItemForm.resetFields();
      }
      },
      )
    },
  }
}
</script>

<style scoped>
.form-card {
max-width: 500px;
margin: auto;
}
.type-select {
  width: 100%;
}
</style>