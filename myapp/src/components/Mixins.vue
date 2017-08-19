<template>
  <div class="Mixins">
    <h1>{{ msg }}</h1>
    computedMixin: {{computedMixin}}
    <button @click="callData()">call from mixin</button>
    </div>
</template>
<script>
import myMixin from './myMixin'
export default {
  name: 'Mixins',
  mixins:[myMixin],
  data () {
    return {
      }
  },
  methods: {
    callData:function(){
      console.log('from mixin'+ this.datafromMixin);
    }
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
