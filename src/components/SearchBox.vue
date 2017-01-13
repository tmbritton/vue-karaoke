<template>
  <div class="searchbox">
    <form v-on:submit.prevent="searchForVideos" id="searchbox" class="searchbox">
      <input type="text" class="searchbox--input" v-model="searchTerm">
      <input type="submit" class="searchbox--submit" value="Search">
    </form>
    <search-results></search-results>
  </div>
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
      searchTerm: '',
      searchResults: []
    }
  },
  methods: {
    searchForVideos: function(submitEvent) {
      var append = encodeURIComponent(" karaoke");
      var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=relevance&type=video&videoEmbeddable=true&key=AIzaSyBkvR8k4rZ03LwzPcjReLqloNWrgNv9TIE&q=" + encodeURIComponent(this.searchTerm) + append;

      this.searchResults = [];

      fetch(url).then(response => response.json())
        .then(data => data.items.forEach(item => this.searchResults.push(item)))
        .then(console.log(this.searchResults))
        .then(this.searchTerm = '')
        .catch(e => console.log(e));
    }
  }
}
</script>