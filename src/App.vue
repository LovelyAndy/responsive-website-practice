<template>
  <Navbar />
  <!-- <fa icon="coffee" />
  <fa :icon="['fab', 'youtube']" /> -->
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Navbar,
  },
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap')
@import './css/global.sass'

*
  box-sizing: border-box
  padding: 0
  margin: 0
body
  font-family: 'Lato', sans-serif
  color: #333
ul
  list-style-type: none
a
  text-decoration: none
  color: #333
h1,h2
  font-weight: 300
  line-height: 1.2
  margin: 10px 0
p
  margin: 10px 0
img
  width: 100%
</style>
