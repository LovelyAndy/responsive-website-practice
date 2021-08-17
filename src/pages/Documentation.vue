<template>
  <div class="documentation">
    <Navbar />
    <DocumenationHead />
    <DocumentationMain />
    <Footer />
  </div>
</template>

<script>
import DocumenationHead from '../components/DocumenationHead.vue'
import DocumentationMain from '../components/DocumentationMain.vue'
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'
export default {
  components: { Footer, Navbar, DocumenationHead, DocumentationMain },
  name: 'Documentation',
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>


<style lang="sass" scoped>
</style>