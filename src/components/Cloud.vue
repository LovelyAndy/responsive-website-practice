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
@import '../css/media.sass'
.cloud .grid
  grid-template-columns: 4fr 3fr

@media(max-width: 768px)
  .cloud .grid
    // not sure why this doesnt work inside the media file
    grid-template-columns: 1fr
    grid-template-rows: 1fr
</style>