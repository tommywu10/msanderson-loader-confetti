
var bar = new ProgressBar.Circle(container, {
    color: '#aaa',
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100); 

      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

  
    }
  });
  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = '2rem';
  
  bar.animate(.75);  //<<----change value here ************************
  

  console.log(bar._progressPath._opts.duration)

  // ----------------------- CONFETTI ------------------------------ 
  
    var count = 500;
    var defaults = {
    origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, {
    particleCount: Math.floor(count * particleRatio)
    }));
    }

    fire(1, {
        decay: .86,
        gravity: 1,
        origin: { y: .4 },
        particleCount: 400,
        scalar: .8,
        shapes: "square",
        spread: 180,
        startVelocity: 20,
        ticks: 100,
        zIndex: 0,
    });
    fire(1, {
        decay: .87,
        gravity: 1,
        origin: { y: 0.4 },
        particleCount: 600,
        scalar: .8,
        shapes: "square",
        spread: 360,
        startVelocity: 25,
        ticks: 100,
        });
        
    fire(1, {
        decay: .88,
        gravity: 1,
        origin: { y: 0.4 },
        particleCount: 800,
        scalar: .8,
        shapes: "square",
        spread: 360,
        startVelocity: 30,
        ticks: 100,
    });
