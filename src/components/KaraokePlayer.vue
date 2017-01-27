<template>
	<section>
    <youtube
      :player-vars="{autoplay: 1, controls: 0}"
      v-if="video.ytid"
      :video-id="video.ytid" 
      player-width="640" 
      player-height="480"
      @ready="ready"
      @playing="playing"
      @ended="ended"
    >    
    </youtube>
    <div class="controls">
      <a class="control" v-if="video.ytid" v-on:click.prevent="play" href="#">Play</a>
      <a class="control" v-if="video.ytid" v-on:click.prevent="stop" href="#">Stop</a>
      <a class="control" v-if="video.ytid" v-on:click.prevent="pause" href="#">Pause</a>
      <a class="control" v-if="video.ytid" v-on:click.prevent="next" href="#">Next</a>
    </div>
    <a v-on:click.prevent="startPlaying" href="#" v-if="!video.ytid && queue.length > 0 && !thumbnail">Click me when you're ready to start singing!</a>
    <p v-if="!video.ytid && queue.length == 0">Add some songs to the queue to start singing!</p>
  </section>	
</template>

<script>
export default {
  name: 'karaoke-player',
  data () {
    return {
      video: this.$store.state.video,
      queue: this.$store.state.queue,
      player: {},
      playing: false,
      thumbnail: '',
      thumbnailTitle: '',
      countdown: ''
    }
  },
  methods: {
    ready (player) {
      console.log('ready');
      this.player = player
    },
    play () {
      this.player.playVideo();
      this.playing = false;
    },
    playing (player) {
      console.log('playing');
      this.playing = true;
      // The player is playing a video.
    },
    next () {
      var nextVideo = this.$store.state.queue[0];
      if (nextVideo) {
        this.$store.commit('changeVideo', nextVideo);
        this.$store.commit('removeSongFromQueue', 0);
      }
      this.playing = false;
    },
    stop () {
      this.player.stopVideo();
      this.playing = false;
    },
    pause () {
      this.player.pauseVideo();
      this.playing = false;
    },
    ended () {
      var nextVideo = this.$store.state.queue[0];
      if (nextVideo) {
        this.$store.commit('changeVideo', nextVideo);
        this.$store.commit('removeSongFromQueue', 0);
      }
      this.playing = false;
    },
  	startPlaying () {
  		var nextVideo = this.$store.state.queue[0];
  		if (nextVideo) {
        this.$store.commit('changeVideo', nextVideo);
        this.$store.commit('removeSongFromQueue', 0); 
  		}
  	}
  }
}
</script>

<style scoped>

.controls {
  display: flex;
  justify-content: center;
}

.control {
  margin-right: 10px;
}

</style>