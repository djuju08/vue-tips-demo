<template>
  <input v-model="deep.text" />
  <h4> address </h4>
  <input v-model="deep.address.street" />
  <input v-model="deep.address.number" />
  <input v-model="deep.address.city" />
</template>

<script>
export default {
  name: "Deep",
  props: {
    modelValue: Object
  },
  data() {
    return {
      deep: {
        text: '',
        address: {
          street: null,
          number: null,
          city: null
        }
      }
    }
  },
  watch: {
    deep: {
      handler(value) {
        this.$emit('update:modelValue', value)
      },
      deep: true
    }
  }
}
</script>

<style scoped>

</style>