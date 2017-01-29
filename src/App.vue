<template>
  <div class="karaokeApp">
    <karaoke-player></karaoke-player>
    <div class="column">
      <search-box></search-box>
      <song-queue></song-queue>
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

<style>

* {
  box-sizing: border-box;
}

body {
  background: #eee;
  color: #222;
}

.karaokeApp {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

</style>