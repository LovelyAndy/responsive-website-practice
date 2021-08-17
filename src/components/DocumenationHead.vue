<template>
  <div class="head">
    <div class="_documentation__head bg--primary">
      <div class="container grid">
        <div>
          <h1 class="xl">Documentation</h1>
          <p class="lead">Learn how to work with the Loruki platform</p>
        </div>
        <img src="images/docs.png" alt="Server Image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocumentationHead',
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>


<style lang="sass" scoped>
._documentation__head img
  max-width: 200px
  justify-self: flex-end

@media(max-width: 768px)
  ._documentation__head img
    justify-self: center
</style>