<template>
  <section class="searchBox">
    <h2 class="searchBox-header">Search</h2>
    <form class="searchBox-form" v-on:submit.prevent="searchForVideos">
      <input class="searchBox-form-input" type="text" v-model="searchTerm" placeholder="Search for a song">
      <input class="searchBox-form-submit" type="submit" value="Search">
    </form>
    <search-results :results="searchResults"></search-results>
  </section>
</template>

<script>
import SearchResults from './SearchResults.vue';
export default {
  name: 'search-box',
  components: {
    SearchResults
  },
  data () {
    return {
      searchTerm: ''
    }
  },
  methods: {
    searchForVideos: function(submitEvent) {
      var append = encodeURIComponent(" karaoke");
      var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=relevance&type=video&videoEmbeddable=true&key=AIzaSyCfE_YVv1XZmKNr9xfbnXs5o8TtnIyoq7Q&videoSyndicated=true&q=" + encodeURIComponent(this.searchTerm) + append;

      //this.searchResults = [];
      this.$store.commit('clearSearchResults');

      fetch(url).then(response => response.json())
        .then(data => this.$store.commit('addSearchResults', data.items))
        .then(this.searchTerm = '')
        .catch(e => console.log(e));
    }
  }
}
</script>

<style scoped>

.searchBox {
  margin: 2em 0 0 2em;
}

.searchBox-header {
  margin-top: 0;
}

</style>
