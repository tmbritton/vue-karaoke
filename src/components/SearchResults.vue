<template>
	<ul v-if="results" class="search-results">
    <li v-for="result in results">
      <a 
        v-on:click.prevent="addSongToQueue" 
        href="#" 
        :data-title="result.snippet.title" 
        :data-ytid="result.id.videoId"
        :data-source="'https://www.youtube.com/embed/' + result.id.videoId"
        >
          <img :src="result.snippet.thumbnails.default.url">
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
            title: selection.dataset.title
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
      //this.$emit('videoSelected', video);
      //this.$emit('changeSearchResults', []);    
      //this.$parent.$parent.video = video;
      //this.$parent.searchResults = [];
    }
  }
}
</script>