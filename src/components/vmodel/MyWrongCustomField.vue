<template>
  <input type="text" v-model="modelValue" />
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: null
    }
  }
};
</script>
