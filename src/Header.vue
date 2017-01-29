<template>
  <section v-if="video.ytid" class="nowPlaying">
  	<h1 class="nowPlaying-heading">Now Playing:</h1>
  	<p class="nowPlaying-text">{{ video.title }}</p>
  </section>
</template>

<script>
export default {
	name: 'header-app',
 	data () {
  	return {
  		video: this.$store.state.video
  	}
  }
}  
</script>

<style>

.siteHeader {
  height: 50px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  justify-content: space-between;
}

.siteHeader-heading {
  margin: 0;
}

.nowPlaying {
	margin: 0 20px;
}

.nowPlaying-heading {
	font-size: 1em;
	font-weight: normal;
	margin: 0;
	font-style: italic;
}

.nowPlaying-text {
	margin: 0;
}

</style>