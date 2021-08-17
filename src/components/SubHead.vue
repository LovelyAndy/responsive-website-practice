<template>
  <div class="head">
    <div class="_features__sub--head bg--light-grey py-3">
      <div class="container grid">
        <div>
          <h1 class="xl">The Loruki Platform</h1>
          <p class="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias excepturi
            consequatur nisi aliquam perspiciatis, mollitia odio est quisquam ea id provident et
            tempore qui illo, error delectus officia in accusantium?
          </p>
        </div>
        <img src="images/server2.png" alt="Server Image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubHead',
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>


<style lang="sass" scoped>
._features__sub--head img
  max-width: 300px
  justify-self: flex-end

@media(max-width: 768px)
  ._features__sub--head img
    justify-self: center
</style>