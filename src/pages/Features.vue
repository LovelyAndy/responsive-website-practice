<template>
  <div class="features">
    <Navbar />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'
export default {
  components: { Footer, Navbar },
  name: 'Features',
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>


<style lang="sass" scoped>
// .features
</style>