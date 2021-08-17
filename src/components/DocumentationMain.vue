<template>
  <div class="documentation-main my-4">
    <div class="container grid">
      <div class="card bg--light-grey p-3">
        <h3 class="my-2">Essentials</h3>
        <nav>
          <ul>
            <li><a class="text--primary" href="#">Introduction</a></li>
            <li><a href="#">About Loruki</a></li>
            <li><a href="#">Installation</a></li>
          </ul>
        </nav>
        <h3 class="my-2">Deployment</h3>
        <nav>
          <ul>
            <li><a href="#">Setting up a container</a></li>
            <li><a href="#">Using the CLI</a></li>
            <li><a href="#">Managing resources</a></li>
            <li><a href="#">Upgrade & downgrade</a></li>
          </ul>
        </nav>
      </div>
      <div class="card">
        <h2>Introduction</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloribus id autem.
          Blanditiis, hic consequuntur quidem ipsam asperiores, nihil natus autem dolore sunt
          necessitatibus, possimus perspiciatis ad! Veritatis, eveniet provident?
        </p>
        <div class="_alert _alert-success">
          <fa icon="info" class="_alert-icon" />Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Adipisci, commodi.
        </div>
        <h3>Lorem, ipsum dolor.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem quaerat voluptas
          quisquam! Molestiae explicabo neque fuga consequatur placeat nostrum?
        </p>
        <a href="#" class="btn btn--primary">Install CLI</a>
        <h3>Requirements</h3>
        <ul>
          <li>Windows 10, Mac OSX, Linux</li>
          <li>Node.js v12 or higher</li>
        </ul>
        <h3>Install</h3>
        <p>Mac (Homebrew)</p>
        <pre><code>$ brew install loruki-cli</code></pre>
        <p>NPM</p>
        <pre><code>$ npm install loruki-cli</code></pre>
        <p>Yarn</p>
        <pre><code>$ yarn install loruki-cli</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocumentationMain',
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
// @import '../css/utils.sass' // this THROWS AN ERROR?
.btn--primary
  background-color: $c-primary
  color: $c-white

a
  color: grey
//

.documentation-main h3
  margin: 20px 0
.documentation-main .grid
  grid-template-columns: 1fr 2fr
  align-items: flex-start
.documentation-main nav li
  font-size: 16px
  padding-bottom: 6px
  margin-bottom: 6px
  border-bottom: 1px solid #ccc
.documentation-main a:hover
  font-weight: bold

._alert
  background-color: $c-light-grey
  padding: 10px 20px
  font-weight: bold
  margin: 16px
._alert-icon
  margin-right: 10px
._alert-success
  background-color: $c-success
  color: $c-white
._alert-error
  background-color: $c-error
  color: $c-white

code, pre
  background: #333
  color: $c-white
  padding: 10px

.text--primary
  color: $c-primary
.text--secondary
  color: $c-secondary
.text--light
  color: $c-light-grey
.text--dark
  color: $c-primary-dark

@media(max-width: 768px)
  .documentation-main .grid
    grid-template-columns: 1fr
    grid-template-rows: 1fr
</style>