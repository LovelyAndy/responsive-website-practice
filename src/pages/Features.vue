<template>
  <div class="features">
    <Navbar />
    <FeaturesHead />
    <SubHead />
    <FeaturesMain />
    <Footer />
  </div>
</template>

<script>
import FeaturesMain from '../components/FeaturesMain.vue'
import Footer from '../components/Footer.vue'
import FeaturesHead from '../components/FeaturesHead.vue'
import Navbar from '../components/Navbar.vue'
import SubHead from '../components/SubHead.vue'
export default {
  components: { Footer, Navbar, FeaturesHead, SubHead, FeaturesMain },
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