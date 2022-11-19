<template>
  <main>
    <div id="app">
      <rating-card heading="How did we do?" body="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"/>
    </div>
  </main>
</template>

<script>
import RatingCard from './components/rating-card.vue'

export default {
  name: 'App',
  components: {
    RatingCard
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding:0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}
</style>
