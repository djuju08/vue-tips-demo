<template>
  <h1>Watch</h1>
  <br/>
  <br/>

  <h3> Deep </h3>
  <br/>

  <Deep v-model="deep"/>
  <p>
    Deep value: {{deep}}
  </p>

  <br/>
  <br/>

  <h3> None deep </h3>
  <br/>
  <NoneDeep v-model="noneDeep"/>
  <p>
    None deep value: {{noneDeep}}
  </p>
</template>

<script>
import Deep from './../components/watch/Deep.vue'
import NoneDeep from './../components/watch/NoneDeep.vue'

export default {
  name: 'WatchView',
  components: {
    Deep,
    NoneDeep
  },
  data() {
    return {
      deep: null,
      noneDeep: null
    }
  }
};

</script>
