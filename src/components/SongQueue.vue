<template>
  <section id="song-queue">
    <h2>Song Queue</h2>
    <ol>
      <li v-for="(song, index) in queue" draggable="true">
        {{ song.title }}
        <br>
        <a v-on:click.prevent="removeSongFromQueue" :data-index="index" href="#">Remove from queue</a>
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
  },
  methods: {
    removeSongFromQueue (e) {
      var index = e.target.dataset.index;
      this.$store.commit('removeSongFromQueue', index);  
    }
  }
}
</script>