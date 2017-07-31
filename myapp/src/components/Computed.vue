<template>
  <div class="computed">
    <h1>{{ msg }}</h1>
    <h3>{{nowValue}}</h3>
    <button @click="nowConsole()">check now</button>
    <button @click="nowUpdate()">update now</button>
    </div>
</template>

<script>
export default {
  name: 'computed',
  data () {
    return {
    msg:'computed',
    now: Date.now()
      }
  },
  methods: {
    nowConsole:function(){
      console.log(this.nowValue)
    },
    nowUpdate:function(){
      this.nowValue = Date.now()
    }
  },
  computed: {
    nowValue:{
      get:function(){
      return this.now
    },
    set:function(value){
      this.now = value
    }
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
