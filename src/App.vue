<template>
  <router-view />
</template>

<script>
export default {
  components: {},
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap')
@import './css/utils.sass'
@import './css/colors.sass'
@import './css/media.sass'

*
  box-sizing: border-box
  padding: 0
  margin: 0
html
  font-size: 62.5%
body
  font-family: 'Lato', sans-serif
  background-color: $c-white

ul
  list-style-type: none
a
  text-decoration: none

h1,h2
  font-weight: 300
  line-height: 1.2
  margin: 10px 0
p
  margin: 10px 0
img
  width: 100%
</style>
