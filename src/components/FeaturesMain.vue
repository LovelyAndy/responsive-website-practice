<template>
  <div class="features-main my-2">
    <div class="_features__head bg--light-grey">
      <div class="container grid grid-3">
        <div class="card row center-me">
          <fa icon="server" class="fa-3x _icon" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fuga iusto voluptatem quam
            minima officiis repudiandae obcaecati. Placeat, libero voluptatem? Ab consectetur
            quaerat vel sequi, vitae ipsum porro culpa accusamus.
          </p>
        </div>
        <div class="card row center-me">
          <fa icon="code" class="fa-3x _icon" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fuga iusto voluptatem quam
            minima officiis repudiandae obcaecati. Placeat, libero voluptatem? Ab consectetur
            quaerat vel sequi, vitae ipsum porro culpa accusamus.
          </p>
        </div>
        <div class="card row center-me">
          <fa icon="laptop-code" class="fa-3x _icon" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fuga iusto voluptatem quam
            minima officiis repudiandae obcaecati. Placeat, libero voluptatem? Ab consectetur
            quaerat vel sequi, vitae ipsum porro culpa accusamus.
          </p>
        </div>
        <div class="card row center-me">
          <fa icon="database" class="fa-3x _icon" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fuga iusto voluptatem quam
            minima officiis repudiandae obcaecati. Placeat, libero voluptatem? Ab consectetur
            quaerat vel sequi, vitae ipsum porro culpa accusamus.
          </p>
        </div>
        <div class="card row center-me">
          <fa icon="power-off" class="fa-3x _icon" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fuga iusto voluptatem quam
            minima officiis repudiandae obcaecati. Placeat, libero voluptatem? Ab consectetur
            quaerat vel sequi, vitae ipsum porro culpa accusamus.
          </p>
        </div>
        <div class="card row center-me">
          <fa icon="upload" class="fa-3x _icon" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fuga iusto voluptatem quam
            minima officiis repudiandae obcaecati. Placeat, libero voluptatem? Ab consectetur
            quaerat vel sequi, vitae ipsum porro culpa accusamus.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturesMain',
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>


<style lang="sass" scoped>
.features-main .grid
  padding: 30px
.features-main .grid > *:first-child
  grid-column: 1 / span 3
.features-main .grid > *:nth-child(2)
  grid-column: 1 / span 2
.container > div
  margin-right: 20px
._icon
  margin-right: 10px
.center-me
  justify-content: center
  align-items: center
@media(max-width: 768px)
  .features-main .grid
    grid-template-columns: 1fr
    grid-template-rows: 1fr
  .features-main .grid > *:first-child,
  .features-main .grid > *:nth-child(2)
    grid-column: 1
</style>