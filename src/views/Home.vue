<template>
  <div class="home">
    <HeaderNavigation></HeaderNavigation>
    <HeaderImage></HeaderImage>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderImage from '@/components/HeaderImage.vue'
import HeaderNavigation from '@/components/HeaderNavigation.vue'

export default {
  name: 'home',
  components: {
    HeaderImage,
    HeaderNavigation
  }
}
</script>
