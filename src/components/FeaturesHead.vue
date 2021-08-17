<template>
  <div class="head">
    <div class="_features__head bg--primary">
      <div class="container grid">
        <div>
          <h1 class="xl">Features</h1>
          <p class="lead">Check out the freature of Loruki that separate us from the competition</p>
        </div>
        <img src="images/server.png" alt="Server Image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturesHead',
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>


<style lang="sass" scoped>
._features__head img
  max-width: 200px
  justify-self: flex-end

@media(max-width: 768px)
  ._features__head img
    justify-self: center
</style>