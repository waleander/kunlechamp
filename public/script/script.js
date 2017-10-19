(function process($) {
  function PHolder(words) {
    this.timeouts = {
      tm1: undefined,
      tm2: undefined,
      tm3: undefined,
      tm4: undefined,
    };
    this.textCompleted = false;
    this.controlFlag = false;
    this.captionLength = 0;
    const rand = Math.floor(Math.random() * words.length);
    let caption = words[rand];
    this.capLength = caption.length;
    const captionEl = $('.quote');

    this.typeText = function typeText() {
      const self = this;
      if (self.captionLength < self.capLength) {
        self.timeouts.tm1 = setTimeout(() => {
          captionEl.text(caption.substr(0, self.captionLength += 1));
          self.typeText();
        }, 50);
      } else {
        self.textCompleted = true;
        if (self.textCompleted) {
          self.timeouts.tm2 = setTimeout(() => {
            self.textErasingEffect();
            self.timeouts.tm3 = setTimeout(() => {
              self.textCompleted = true;
            }, 0);
          }, 500);
        }
      }
    };

    // Write each letter in text to the console
    this.textTypingEffect = function testTypingEffect() {
      this.typeText();
    };

    this.textErasingEffect = function textErasingEffect() {
      caption = captionEl.html();
      if (!(this.capLength === 0)) {
        this.eraseText();
      } else {
        $('.quote').text("You didn't write anything to erase, but that's ok!");
        // setTimeout(this.textErasingEffect(), 1000);
      }
    };

    this.eraseText = function eraseText() {
      const self = this;
      if (!(self.captionLength === 0)) {
        self.timeouts.tm4 = setTimeout(() => {
          captionEl.html(caption.substr(0, self.captionLength -= 1));
          self.eraseText();
        }, 50);
      } else {
        self.captionLength = 0;
        caption = '';
        self.controlFlag = true;
      }
    };
  }

  const quotes = [];
  quotes[0] = 'We have a commitment to making you a better person by transfering the knowledge ' +
    'we have earned in many years of combat. Life has portrayed herself as the refere' +
    'e always waiting for us to step up to the ring and fight.';
  quotes[1] = 'I am happy to be here with you.';
  let ph;

  function writeText() {
    ph = new PHolder(quotes);
    ph.textTypingEffect();
  }

  setInterval(() => {
    $('#cursor').animate({
      opacity: 0,
    }, 'slow', 'swing').animate({
      opacity: 1,
    }, 'slow', 'swing');
  }, 600);

  $(document).ready(() => {
    setTimeout(() => {
      writeText();
    }, 10000);
  });

  $('.tablink').on('click', function cb() {
    const tlink = $('active');
    $('.active').each((el) => {
      $(el).removeClass('active');
    });

    const $target = $(this);
    $target.addClass('active');
  });
}(jQuery));
