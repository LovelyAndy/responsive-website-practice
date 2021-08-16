<template>
  <div class="cli">
    <div class="container grid">
      <img src="images/cli.png" alt="npm installation photo" />
      <div class="card">
        <h3>Easy to use, cross platform CLI</h3>
      </div>
      <div class="card">
        <h3>Deploy in seconds</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cli',
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>


<style lang="sass" scoped>
.cli .grid
  grid-template-columns: repeat(3, 1fr)
  grid-template-rows: repeat(2, 1fr)
.cli .grid > *:first-child
  grid-column: 1 / span 2
  grid-row: 1 / span 2
</style>