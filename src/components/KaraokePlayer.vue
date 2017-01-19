<template>
	<section>
  	<iframe v-if="video.ytid" width="560" height="315" :src="video.source" frameborder="0" allowfullscreen></iframe>
  	<a v-on:click.prevent="startPlaying" href="#" v-if="!video.id && queue.length > 0 && !thumbnail">Click me when you're ready to start singing!</a>
  	<p v-if="!video.id && queue.length == 0">Add some songs to the queue to start singing!</p>
  	<img v-if="countdown" :src="thumbnail" :alt="thumbnailTitle">
  	{{ countdown }}
  </section>	
</template>

<script>
export default {
  name: 'karaoke-player',
  data () {
    return {
      video: this.$store.state.video,
      queue: this.$store.state.queue,
      thumbnail: '',
      thumbnailTitle: '',
      countdown: ''
    }
  },
  methods: {
  	startPlaying () {
  		var nextVideo = this.$store.state.queue[0];
  		if (nextVideo) {
  			this.thumbnail = nextVideo.thumbnails.high;
  			this.thumbnailTitle = nextVideo.title;

  			this.countdown = 3;
  			setInterval(() => {
  				if (this.countdown > 1) {
  					this.countdown--;
  				}
  				else {
  					this.countdown = '';
  					//this.video = nextVideo;
  					for (var prop in nextVideo) {
  						this.$store.state.video[prop] = nextVideo[prop]; 
  					}	
  				}
  			}, 1000);
  		}
  	}
  }
}
</script>