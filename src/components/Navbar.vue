<template>
  <div class="navbar">
    <div class="container row space-between navbar__wrapper">
      <h1 class="_logo">Loruki</h1>
      <nav>
        <ul>
          <li><router-link class="_link" to="/">Home</router-link></li>
          <li><router-link class="_link" to="/features">Features</router-link></li>
          <li><router-link class="_link" to="/documentation">Docs</router-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>

<style lang="sass" scoped>
@import '../css/colors.sass'
.navbar
  background-color: $c-primary
  color: $c-white
  height: 70px
.navbar ul
  display: flex
.navbar__wrapper
  justify-content: center
  align-items: center

._link
  color: $c-white
  font-size: 16px
  padding: 10px
  margin: 0 5px
  &:hover
    border-bottom: 2px solid $c-white

.navbar .space-between
  justify-content: space-between
</style>