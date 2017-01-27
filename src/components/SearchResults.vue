<template>
	<ul v-if="results" class="search-results">
    <li v-for="result in results">
      <a 
        v-on:click.prevent="addSongToQueue" 
        href="#" 
        :data-title="result.snippet.title" 
        :data-ytid="result.id.videoId"
        :data-source="'https://www.youtube.com/embed/' + result.id.videoId + '?autoplay=1'" 
        :data-thumbdefault="result.snippet.thumbnails.default.url"
        :data-thumbmedium="result.snippet.thumbnails.medium.url"
        :data-thumbhigh="result.snippet.thumbnails.high.url"
        >
          <img :src="result.snippet.thumbnails.default.url">
          <br>
          {{ result.snippet.title }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      results: this.$store.state.searchResults
    }
  },
  methods: {
    addSongToQueue: function(event) {
      var selection = event.srcElement,
          video = {
            source: selection.dataset.source,
            ytid: selection.dataset.ytid,
            title: selection.dataset.title,
            thumbnails: {
              default: selection.dataset.thumbdefault,
              medium: selection.dataset.thumbmedium,
              high: selection.dataset.thumbhigh
            } 
          };

      this.$store.commit('addSongToQueue', video);
      this.$store.commit('clearSearchResults');
    },

    changeVideo: function(event) {
      var selection = event.srcElement,
          video = {
            source: selection.dataset.source,
            ytid: selection.dataset.ytid,
            title: selection.dataset.title
          };

      this.$store.commit('changeVideo', video);
      this.$store.commit('clearSearchResults');
    }
  }
}
</script>