<template>
  <div class="navbar">
    <div class="container flex">
      <h1 class="_logo">Loruki</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Docs</a></li>
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
.navbar
  background-color: #047aed
  color: whitesmoke
  height: 70px
.navbar ul
  display: flex
.navbar a
  color: smokewhite
  padding: 10px
  margin: 0 5px

.navbar .flex
  justify-content: space-between

.container
  height: 100%
  max-width: 1100px
  margin: 0 auto
  overflow: auto
  padding: 0 40px
</style>