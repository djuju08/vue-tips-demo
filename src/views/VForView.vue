<script setup>
import TableRow from "../components/vfor/TableRow.vue";
</script>

<template>
  <h1>v-for and key</h1>
  <h2>id as key</h2>
  <table>
    <tr v-for="(element, index) in elements1" :key="element.id">
      <th>{{ index }}</th>
      <td>{{ element.label }}</td>
      <td>
        <button @click="removeElement(elements1, index)">X</button>
      </td>
    </tr>
  </table>
  <h2>index as key</h2>
  <table>
    <tr v-for="(element, index) in elements2" :key="index">
      <th>{{ index }}</th>
      <td>{{ element.label }}</td>
      <td>
        <button @click="removeElement(elements2, index)">X</button>
      </td>
    </tr>
  </table>
  <h2>index as key with component</h2>
  <table>
    <TableRow v-for="(element, index) in elements3" :key="index" :index="index" :label="element.label" @delete="removeElement(elements3, index)"></TableRow>
  </table>
</template>

<script>
export default {
  data() {
    return {
      elements1: [
        { id: 1, label: "item 1" },
        { id: 2, label: "item 2" },
        { id: 3, label: "item 3" },
        { id: 4, label: "item 4" }
      ],
      elements2: [
        { id: 1, label: "item 1" },
        { id: 2, label: "item 2" },
        { id: 3, label: "item 3" },
        { id: 4, label: "item 4" }
      ],
      elements3: [
        { id: 1, label: "item 1" },
        { id: 2, label: "item 2" },
        { id: 3, label: "item 3" },
        { id: 4, label: "item 4" }
      ]
    };
  },
  methods: {
    removeElement(list, index) {
      list.splice(index, 1)
    }
  }
};
</script>

<style>
table, th, td {
  border: 1px solid #2C3E50;
  border-collapse: collapse;
}
th, td {
  padding: 5px;
}

button {
  cursor: pointer;
}
</style>
