<template>
	<ul v-if="results.length > 0" class="searchResults">
    <li class="searchResults-listItem" v-for="(result, index) in results">
      <img class="searchResults-image" :src="result.snippet.thumbnails.default.url">
      <div class="column">
        <p class="searchResults-title">{{ result.snippet.title }}</p>
        <form class="searchResults-form" v-on:submit.prevent="addSongToQueue">
          <input type="text" placeholder="Who's singing?" />
          <input type="hidden" name="index" :value="index">
          <input type="submit" value="Add" />
        </form>  
      </div>   
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
      var index = event.srcElement[1].value;
      var performer = event.srcElement[0].value;
      console.log(this.results[index]);
      var selection = this.results[index];
      var video = {
        source: 'https://www.youtube.com/embed/' + selection.id.videoId + '?autoplay=1',
        ytid: selection.id.videoId,
        title: selection.snippet.title,
        performer: performer,
        thumbnails: {
          default: selection.snippet.thumbnails.default.url,
          medium: selection.snippet.thumbnails.medium.url,
          high: selection.snippet.thumbnails.high.url
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

<style scope>

.searchResults {
  padding: 0 0 2em 0;
  list-style-type: none;
  max-height: 400px;
  overflow-y: scroll;
  max-width: 400px;
  min-width: 200px;
}

.searchResults-listItem {
  margin: 0 0 1em 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.searchResults-image {
  max-width: 100px;
  height: auto;
  margin: 0 1em 0 0;
}

.searchResults-title {
  margin: 0 0 1em 0;
}

</style>