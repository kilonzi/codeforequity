<template>
  <div class="container mx-auto">
    <img src="../assets/img/code4equity.png" alt="Code for Equity header image" height="500px">
  </div>
</template>

<script>
export default {
  name: 'HeaderImage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
