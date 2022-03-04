<template>
  <input type="text" v-model="value" />
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      value: null
    }
  },
  watch: {
    value(value) {
      this.$emit('update:modelValue', value)
    },
    modelValue(val) {
      if (val !== this.value) {
        this.value = val
      }
    }
  },
  created() {
    if (this.modelValue) {
      this.value = this.modelValue
    }
  }
};
</script>
