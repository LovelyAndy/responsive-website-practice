<template>
  <div class="showcase">
    <div class="container grid">
      <div class="showcase__text">
        <h1 class="lg">Easier Development</h1>
        <p>
          Deploy all sorts of shit, from large scale APIs to static, little dick websites for
          individuals. Fill out the form to try a demo of the platform!
        </p>
        <a href="#" class="btn btn--outline">Read More</a>
      </div>
      <div class="showcase__form card">
        <h2>Request a Demo</h2>
        <form>
          <div class="_form-control">
            <input type="text" name="name" placeholder="Name" required />
          </div>
          <div class="_form-control">
            <input type="text" name="company" placeholder="Company Name" required />
          </div>
          <div class="_form-control">
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <input type="submit" value="Send" class="btn btn--primary" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Showcase',
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
@import '../css/utils.sass'
.showcase
  position: relative
  height: 400px
  background-color: $c-primary
  color: $c-white
.showcase .grid
  grid-template-columns: 55% 45%
  // grid-template-columns: 1fr
  gap: 30px
  overflow: visible
.showcase__form
  position: relative
  justify-self: flex-end
  top: 60px
  height: 350px
  width: 400px
  padding: 40px
  z-index: 100
.showcase__form ._form-control
  margin: 30px 0

.showcase__form input[type="text"],
.showcase__form input[type="email"]
  border: 0
  border-bottom: 1px solid #b4b3cb
  width: 100%
  padding: 3px
  font-size: 1rem
  background-color: $c-white
.showcase__form input:focus
  outline: none

.showcase p
  margin: 20px 0
  margin-right: 60px
.showcase::before,
.showcase::after
  content: ''
  position: absolute
  height: 100px
  bottom: -70px
  left: 0
  right: 0
  background-color: $c-white
  transform: skewY(-3deg)
  // -webkit-transform: skewY(-3deg)
  // -moz-transform: skewY(-3deg)
  // -ms-transform: skewY(-3deg) dont think we need this anymore tbh

@media(max-width: 768px)
  .showcase .grid
    // not sure why this doesnt work inside the media file
    grid-template-columns: 1fr
    grid-template-rows: 1fr
  .showcase
    height: auto

  .showcase p
    margin-right: 0

  .showcase__text
    text-align: center
    margin-top: 3rem

  .showcase__form
    justify-self: center
    width: 30rem
    margin: 0 auto
    top: 20px
</style>