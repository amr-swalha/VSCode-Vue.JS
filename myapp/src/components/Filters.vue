<template>
  <div class="filters">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="item in userData">
        {{item.name | capitalfirst}} - {{item.age | checkAge}}
      </li>
    </ul>
    </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Filters Example',
      userData:[
        {name:'john',age:45},
        {name:'david',age:25},
        {name:'amr',age:18}
        ]

      }
  },
  methods: {
  },
  filters:{
    capital:function(value){
      if(value == '') return value;
      return value.toUpperCase();
    },
    capitalfirst:function(value){
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    checkAge:function(value){
      if(value > 18){
        return 'young '+ value;
      }
      else if(value > 40){
return 'adult '+ value;
      }
      return value;
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
