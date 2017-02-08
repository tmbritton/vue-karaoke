<template>
  <section class="songQueue">
    <h2 class="songQueue-heading">Song Queue</h2>
    <ol class="songQueue-list">
      <li class="songQueue-listItem" v-for="(song, index) in queue">
        {{ song.title }}
        <br>
        <a 
          v-if="index > 0" 
          v-on:click.prevent="moveSongUpInQueue" 
          :data-index="index" 
          href="#"
          title="Move song up in queue."
        >
          &#11014;
        </a>
        <span v-if="index > 0">&nbsp;</span>
        <a 
          v-if="index < queue.length - 1" 
          v-on:click.prevent="moveSongDownInQueue" 
          :data-index="index" 
          href="#"
          title="Move song down in queue."
        >
          &#11015;
        </a>
        <span v-if="index < queue.length - 1">&nbsp;</span>
        <a  
          v-on:click.prevent="removeSongFromQueue" 
          :data-index="index" 
          href="#"
          title="Remove from queue"
        >
          &#10006;
        </a>
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
    },
    moveSongDownInQueue (e) {
      var index = parseInt(e.target.dataset.index, 10);
      this.$store.commit('moveSongInQueue', {from: index, to: index + 1});
    },
    moveSongUpInQueue (e) {
      var index = parseInt(e.target.dataset.index, 10);
      this.$store.commit('moveSongInQueue', {from: index, to: index - 1});
    }
  }
}
</script>

<style scoped>

.songQueue {
  max-width: 400px;
  margin: 0 0 0 2em;
  padding: 0 0 30px 0;
}

.songQueue-list {
  padding: 0 0 0 20px;
}

</style>