<template>
  <div id="app">
    <karaoke-player></karaoke-player>
    <search-box></search-box>
  </div>
</template>

<script>
import KaraokePlayer from './components/KaraokePlayer.vue'
import SearchBox from './components/SearchBox.vue'

export default {
  name: 'app',
  components: {
    KaraokePlayer,
    SearchBox,
  }
}
</script>
