<template>
  <form id="searchbox" class="searchbox">
    <input type="text" class="searchbox--input" v-model="term">
    <input type="submit" class="searchbox--submit" value="Search">
  </form>
</template>

<script>
export default {
  name: 'search-box',
  data () {
    return {
      video: {
      	'title': 'Danzig - Mother (Karaoke)',
      	'ytid': 'vIv7suVkVaU',
      	'source': 'https://www.youtube.com/embed/vIv7suVkVaU'
      }
    }
  },
  props: ['term'],
  methods: {
    searchForVideos: function(term) {
      console.log(term);
    }
  }
}
</script>