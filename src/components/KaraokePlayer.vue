<template>
<iframe width="560" height="315" :src="video.source" frameborder="0" allowfullscreen></iframe>
</template>

<script>
export default {
  name: 'karaoke-player',
  data () {
    return {
      video: {
      	'title': 'Danzig - Mother (Karaoke)',
      	'ytid': 'vIv7suVkVaU',
      	'source': 'https://www.youtube.com/embed/vIv7suVkVaU'
      }
    }
  }
}
</script>