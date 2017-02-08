<template>
	<section class="karaokePlayer">
    <youtube
      class="karaokePlayer-youtubeVideo"
      :player-vars="{autoplay: 1, controls: 0}"
      v-if="video.ytid"
      :video-id="video.ytid" 

      @ready="ready"
      @playing="playing"
      @ended="ended"
    >    
    </youtube>
    <section v-if="video.ytid" class="karaokePlayer-controls">
      <a class="karaokePlayer-controls-control" v-on:click.prevent="play" href="#">Play</a>
      <a class="karaokePlayer-controls-control" v-on:click.prevent="stop" href="#">Stop</a>
      <a class="karaokePlayer-controls-control" v-on:click.prevent="pause" href="#">Pause</a>
      <a class="karaokePlayer-controls-control" v-on:click.prevent="next" href="#">Next</a>
    </section>
    <a class="karaokePlayer-startPlaying" v-on:click.prevent="startPlaying" href="#" v-if="!video.ytid && queue.length > 0 && !thumbnail">Click me when you're ready to start singing!</a>
    <p class="karaokePlayer-startPlaying" v-if="!video.ytid && queue.length == 0">Add some songs to the queue to start singing!</p>
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

<style lang="sass">

.karaokePlayer {
  margin: 2em 0 0 2em;
  width: 100%;
  max-width: 720px;
  padding: 0 2em 0 0;
}

.karaokePlayer-youtubeVideo {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
}

#youtube-player-1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.karaokePlayer-controls {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50px;
  background: #222;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.karaokePlayer-controls-control {
  margin-right: 10px;
  color: #fff;
}

</style>