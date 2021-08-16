<template>
  <div class="languages">
    <h2 class="md text-center my-2">Supported Languages</h2>
    <div class="container row">
      <div class="card">
        <h4>Node.js</h4>
        <img src="images/logos/node.png" alt="Node.js photo" />
      </div>
      <div class="card">
        <h4>Python</h4>
        <img src="images/logos/python.png" alt="Python photo" />
      </div>
      <div class="card">
        <h4>C#</h4>
        <img src="images/logos/csharp.png" alt="C# photo" />
      </div>
      <div class="card">
        <h4>Ruby</h4>
        <img src="images/logos/ruby.png" alt="Ruby photo" />
      </div>
      <div class="card">
        <h4>PHP</h4>
        <img src="images/logos/php.png" alt="PHP photo" />
      </div>
      <div class="card">
        <h4>Scala</h4>
        <img src="images/logos/scala.png" alt="Scala photo" />
      </div>
      <div class="card">
        <h4>Clojure</h4>
        <img src="images/logos/clojure.png" alt="Clojure photo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Languages',
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>


<style lang="sass" scoped>
.languages .row
  flex-wrap: wrap
.languages .card
  text-align: center
  margin: 1.8rem 1rem 4rem
  transition: transform 0.2s
.languages .card h4
  font-size: 2rem
  margin-bottom: 1rem
.languages .card:hover
  transform: translateY(-1.5rem)
</style>