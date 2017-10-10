(function process($) {
  function PHolder(words) {
    this.words = words;

    let tokens = words.map(element => element.split(''), this);
    let randomToken = Math.floor(Math.random() * tokens.length);
    const len = tokens[randomToken].length;

    let ticks = 0;
    this.txt = tokens[randomToken];
    let quote = $('.quote');
    let textFrame = '';


    // Write each letter in text to the console
    this.writeToken = function writeToken() {
      quote.text(textFrame += this.txt.shift());
      ticks += 1;
      return this;
    };

    this.repeat = function repeat() {
      const self = this;
      const i = setInterval(() => {
        self.writeToken();
        if (ticks === len) {
          clearInterval(i);
        }
      }, 50);
    };
  }
  (function writeText() {
    const quotes = [];
    quotes[0] = 'We have a commitment to making you a better person by transfering the knowledge we have earned in many years of combat. Life has portrayed herself as the referee always waiting for us to step up to the ring and fight. ';
    quotes[1] = 'I am happy to be here with you';
    setTimeout(() => {
      const ph = new PHolder(quotes);
      ph
        .writeToken()
        .repeat();
    }, 1000);
  }());

  $('.tablink').on('click', function cb() {
    const tlink = $('.active');
    tlink.each(() => {
      $(this).removeClass('active');
    });

    const $target = $(this);
    $target.addClass('active');
  });
}(jQuery));
