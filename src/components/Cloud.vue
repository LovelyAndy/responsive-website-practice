<template>
  <div class="cloud bg--primary my-2 py-2">
    <div class="container grid">
      <div class="text-center">
        <h2 class="lg">Extreme Hosting</h2>
        <p class="lead my-1">
          Cloud hosting like you've never seen before. Fast, sexy and scalable.
        </p>
        <a href="#" class="btn btn--dark">Read More</a>
      </div>
      <img src="images/cloud.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cloud',
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>


<style lang="sass" scoped>
.cloud .grid
  grid-template-columns: 4fr 3fr
</style>