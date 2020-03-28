<template>
  <div class="col-12 no-gutters">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand mr-auto" href="#">
        <AppLogo></AppLogo>
      </a>
      <div class="float-right ml-auto">
        <h2 class="float-right">CODE FOR EQUITY</h2>
      </div>
    </nav>
  </div>
</template>

<script>
import AppLogo from "./AppLogo";
export default {
  name: "HeaderNavigation",
  components: {
    AppLogo
  }
};
</script>

<style>
.float-right{
  float: right;
}
</style>