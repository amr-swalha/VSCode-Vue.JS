<template>
  <div class="CRender">
    <h1>{{ msg }}</h1>
   <ul>
     <li v-if=" condition == 'first'">first</li>
     <li v-else-if=" condition == 'second'">second</li>
     <li v-else-if=" condition == 'third'">third</li>
     <li v-else-if=" condition == 'fourth'">fourth</li>
   </ul>
   <div v-show="showIt"> show it test</div>
    </div>
</template>
<script>
export default {
  name: 'CRender',
  data () {
    return {
      msg: 'Conditional Example',
      condition: 'third',
      showIt: false
      }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
