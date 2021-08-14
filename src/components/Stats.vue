<template>
  <div class="stats">
    <div class="container">
      <h3 class="stats__header text-center my-1">
        Welcome to the best platform for building shit of all types with modern architecture and
        scaling. HUZZAH
      </h3>
      <div class="grid grid-3 text-center my-4">
        <div>
          <fa icon="server" class="fa-3x" />
          <h3>10,349,405</h3>
          <p class="text-secondary">Deployments</p>
        </div>
        <div>
          <fa icon="upload" class="fa-3x" />
          <h3>987 TB</h3>
          <p class="text-secondary">Published</p>
        </div>
        <div>
          <fa icon="project-diagram" class="fa-3x" />
          <h3>2,343,265</h3>
          <p class="text-secondary">Projects</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stats',
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>


<style lang="sass" scoped>
.stats
  padding-top: 100px
.stats__header
  max-width: 500px
  margin: auto
.stats .grid h3
  font-size: 35px
.stats .grid p
  font-size: 20px
  font-weight: bold
</style>