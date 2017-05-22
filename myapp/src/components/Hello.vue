<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>My var some data: {{someData}}</h2>
    <button @click="changeVal()">Click Me!</button>
    <h3 v-bind:title="newData">Binding example</h3>
    <h3>output method</h3>
    <div>{{ strVal() }}</div>
    <ul>
      <li v-for="(item,index) in items">
        {{index}} - {{item.text}}
      </li>
    </ul>
    <h2>object v-for</h2>
    <ul>
      <li v-for="(value,key,index) in objData">
       {{index}} - {{key}} - {{value | capitalize }}
      </li>
    </ul>
    </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      someData: 'some text',
      newData: "Here is our data",
      items:[
        {text:"First"},
        {text:"Second"},
        {text:"Third"}
      ],
      objData:{
        firstName:"David",
        lastName:"John",
        email:"test@tutorailsxl.com"
      }
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
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase() 
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
