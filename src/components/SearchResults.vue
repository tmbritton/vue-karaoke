<template>
	<ul class="search-results">
    <li v-for="result in searchResults">
      <a href="#">
        <img :src="result.snippet.thumbnails.default.url">
        {{ result.snippet.title }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'search-box',
  props: [
  	'searchResults'
  ],
  data () {
  	return {
  	}
  }
}  
</script>