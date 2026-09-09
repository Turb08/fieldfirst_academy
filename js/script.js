(function(){
  // Mobile nav toggle
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  toggle.addEventListener('click', function(){
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
    });
  });

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Generic scroll-reveal for any [data-reveal] element
  var revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length){
    if (reduceMotion || !('IntersectionObserver' in window)){
      revealEls.forEach(function(el){ el.classList.add('is-visible'); });
    } else {
      var revealObs = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if (entry.isIntersecting){
            entry.target.classList.add('is-visible');
            revealObs.unobserve(entry.target);
          }
        });
      }, {threshold:0.15, rootMargin:'0px 0px -40px 0px'});
      revealEls.forEach(function(el){ revealObs.observe(el); });
    }
  }

  // Journey line reveal on scroll
  var journeyTrack = document.getElementById('journeyTrack');
  if (journeyTrack){
    if (reduceMotion){
      journeyTrack.classList.add('in-view');
    } else if ('IntersectionObserver' in window){
      var obs = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if (entry.isIntersecting){
            journeyTrack.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      }, {threshold:0.35});
      obs.observe(journeyTrack);
    } else {
      journeyTrack.classList.add('in-view');
    }
  }

  // Founder stat counter
  var counters = document.querySelectorAll('[data-count-to]');
  function runCounter(el){
    var target = parseInt(el.getAttribute('data-count-to'),10);
    if (reduceMotion){ el.textContent = target + '+'; return; }
    var duration = 1200, startTime = null;
    function step(ts){
      if (!startTime) startTime = ts;
      var progress = Math.min((ts - startTime)/duration, 1);
      var val = Math.floor(progress * target);
      el.textContent = val + (progress >= 1 ? '+' : '');
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if (counters.length){
    if ('IntersectionObserver' in window){
      var cobs = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if (entry.isIntersecting){
            runCounter(entry.target);
            cobs.unobserve(entry.target);
          }
        });
      }, {threshold:0.6});
      counters.forEach(function(c){ cobs.observe(c); });
    } else {
      counters.forEach(runCounter);
    }
  }

  // Contact form validation + fake submit
  var form = document.getElementById('contactForm');
  var formDefault = document.getElementById('formDefault');
  var formSuccess = document.getElementById('formSuccess');
  var resetBtn = document.getElementById('resetForm');

  if (form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var valid = true;
      form.querySelectorAll('.form-row').forEach(function(row){
        var field = row.querySelector('input, select, textarea');
        if (!field) return;
        if (field.hasAttribute('required') && !field.value.trim()){
          row.classList.add('invalid');
          valid = false;
        } else {
          row.classList.remove('invalid');
        }
      });
      if (valid){
        formDefault.style.display = 'none';
        formSuccess.classList.add('show');
      }
    });
  }
  if (resetBtn){
    resetBtn.addEventListener('click', function(){
      form.reset();
      formSuccess.classList.remove('show');
      formDefault.style.display = 'block';
      form.querySelectorAll('.form-row').forEach(function(row){ row.classList.remove('invalid'); });
    });
  }
})();
