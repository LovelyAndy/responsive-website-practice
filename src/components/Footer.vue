<template>
  <div class="footer bg--dark py-5">
    <div class="container grid grid-3">
      <div>
        <h1>Loruki</h1>
        <p>Copyright &copy; 2021</p>
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Docs</a></li>
        </ul>
      </nav>
      <div class="social">
        <a href="#"><fa :icon="['fab', 'github']" class="fa-2x" /></a>
        <a href="#"><fa :icon="['fab', 'twitter']" class="fa-2x" /></a>
        <a href="#"><fa :icon="['fab', 'facebook']" class="fa-2x" /></a>
        <a href="#"><fa :icon="['fab', 'instagram']" class="fa-2x" /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>


<style lang="sass" scoped>
.footer .social a
  margin: 0 1rem
</style>