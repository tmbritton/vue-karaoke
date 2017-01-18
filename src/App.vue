<template>
  <div id="app">
    <karaoke-player></karaoke-player>
    <search-box></search-box>
    <song-queue></song-queue>
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
