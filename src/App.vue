<template>
  <div id="app">
    <karaoke-player class="karaoke-player"></karaoke-player>
    <div class="column">
      <search-box class="search-box"></search-box>
      <song-queue class="song-queue"></song-queue>
    </div>
  </div>
</template>

<script>
import KaraokePlayer from './components/KaraokePlayer.vue'
import SearchBox from './components/SearchBox.vue'
import SongQueue from './components/SongQueue.vue'

export default {
  name: 'app',
  components: {
    KaraokePlayer,
    SearchBox,
    SongQueue
  },
  data () {
  	return {
  	}
  }
}
</script>

<style scoped>

#app {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.karaoke-player {
  margin-right: 10px;
}

.search-box {
  max-width: 300px;
}

.song-queue {
  max-width: 300px;
}

</style>