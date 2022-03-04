<script setup>
import MyCustomField from "../components/vmodel/MyCustomField.vue";
</script>

<template>
  <h1>v-model</h1>
  <MyCustomField v-model="model"></MyCustomField>
  <p>Value: {{model}}</p>
</template>

<script>
export default {
  data() {
    return {
      model: null
    }
  }
}
</script>
