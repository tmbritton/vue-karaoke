<template>
  <section id="song-queue">
    <h2>Song Queue</h2>
    <ol>
      <li v-for="song in queue">
        {{ song.title }}
      </li>
    </ol>    
  </section>  
</template>

<script>
export default {
  name: 'song-queue',
  data () {
    return {
      queue: this.$store.state.queue
    }
  }
}
</script>