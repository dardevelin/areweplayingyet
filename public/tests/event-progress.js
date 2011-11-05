({
  name: 'event-progress',
  description: 'Event "progress"',
  assert: function(finish) {
    var audio = this.audio = new Audio();

    audio.addEventListener('progress', function() {
      finish(true);
    }, false);

    audio.setAttribute('src', AWPY.sound.mini.stream_url);
    audio.load();
  }
})
