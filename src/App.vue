<template>
  <Navbar />
  <Showcase />
  <Stats />
  <Cli />
  <Cloud />
  <Languages />
  <Footer />
  <!-- <fa icon="coffee" />
  <fa :icon="['fab', 'youtube']" /> -->
</template>

<script>
import Cli from './components/Cli.vue'
import Cloud from './components/Cloud.vue'
import Footer from './components/Footer.vue'
import Languages from './components/Languages.vue'
import Navbar from './components/Navbar.vue'
import Showcase from './components/Showcase.vue'
import Stats from './components/Stats.vue'
export default {
  components: {
    Navbar,
    Showcase,
    Stats,
    Cli,
    Cloud,
    Languages,
    Footer,
  },
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap')
@import './css/utils.sass'
@import './css/colors.sass'

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
