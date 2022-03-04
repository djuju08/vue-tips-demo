<template>
  <tr>
    <th>{{ index }}</th>
    <td>{{ label }}</td>
    <td>
      <button @click="$emit('delete')">X</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    index: Number,
    label: String
  },

}
</script>
