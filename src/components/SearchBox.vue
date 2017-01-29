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
      var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=relevance&type=video&videoEmbeddable=true&key=AIzaSyBkvR8k4rZ03LwzPcjReLqloNWrgNv9TIE&videoSyndicated=true&q=" + encodeURIComponent(this.searchTerm) + append;

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
  max-width: 300px;
  margin: 20px 0 0 20px;
}

.searchBox-header {
  margin-top: 0;
}

</style>