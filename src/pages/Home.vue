<template>
  <div class="home">
    <Navbar />
    <Showcase />
    <Stats />
    <Cli />
    <Cloud />
    <Languages />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Showcase from '../components/Showcase.vue'
import Stats from '../components/Stats.vue'
import Cli from '../components/Cli.vue'
import Cloud from '../components/Cloud.vue'
import Languages from '../components/Languages.vue'
import Footer from '../components/Footer.vue'
export default {
  components: { Navbar, Showcase, Stats, Cli, Cloud, Languages, Footer },
  name: 'ComponentName',
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>


<style lang="sass" scoped>
// .home
</style>