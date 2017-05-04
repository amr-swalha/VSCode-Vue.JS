<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>My var some data: {{someData}}</h2>
    <button @click="changeVal()">Click Me!</button>
    <h3 v-bind:title="newData">Binding example</h3>
    <h3>output method</h3>
    <div>{{ strVal() }}</div>
    </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      someData: 'some text',
      newData: "Here is our data"
      }
  },
  methods: {
    callIt: function(){
      alert("we have a method");
    },
    changeVal:function(){
      this.newData = "here is an new value";
    },
    strVal:function(){ return "output from method";}
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
