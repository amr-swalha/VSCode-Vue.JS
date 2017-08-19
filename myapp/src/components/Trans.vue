<template>
  <div class="transation">
    <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css" />
    <h1>{{ msg }}</h1>
    <button @click="toggleShow">toggle P</button>
    <transition name="custom-classes"
     enter-active-class="animated flash"
     leave-active-class="animated bounce"
     :duration="{enter:500,leave:800}"
     v-on:before-enter="beforeEnter">
      <p v-if="show">test p</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'transation',
  data() {
    return {
      msg: 'Transation Example',
      show: true
    }
  },
  methods: {
    toggleShow: function () {
      this.show = !this.show;
    },
    beforeEnter:function(e){
      console.log(e)
      console.log("beforeEnter Event")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}
</style>
