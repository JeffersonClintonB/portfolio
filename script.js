// =============================================
// Jefferson's Portfolio Script!!
// i learned most of this from a youtube video lol
// don't judge my code pls 😅
// =============================================

// --- show/hide sections (this took me forever to figure out) ---
function showSection(id) {
  // hide all sections first
  var sections = document.querySelectorAll('.section');
  for (var i = 0; i < sections.length; i++) {
    sections[i].classList.remove('active');
  }

  // show the one we want
  var target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
  }

  // scroll to top so it feels like a page change!!
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // close mobile menu if open
  var navLinks = document.getElementById('navLinks');
  if (navLinks) {
    navLinks.classList.remove('open');
  }
}

// --- mobile hamburger menu toggle ---
// i watched 3 tutorials before i understood this lol
function toggleMenu() {
  var navLinks = document.getElementById('navLinks');
  if (navLinks) {
    navLinks.classList.toggle('open');
  }
}

// close menu if user clicks outside of it
document.addEventListener('click', function(e) {
  var navbar = document.querySelector('.navbar');
  var navLinks = document.getElementById('navLinks');
  if (navbar && navLinks && !navbar.contains(e.target)) {
    navLinks.classList.remove('open');
  }
});

// =============================================
// SKILL BAR ANIMATION
// so satisfying to watch!! 🎉
// =============================================

// re-trigger skill bar animation when skills section is clicked
// (i had a bug where the bars didn't animate after first visit)
var skillBars = document.querySelectorAll('.skill-bar');

function animateSkillBars() {
  skillBars.forEach(function(bar) {
    // little trick to restart css animation!!
    bar.style.animation = 'none';
    // this line forces a "reflow" - i googled what that means
    void bar.offsetHeight;
    bar.style.animation = '';
  });
}

// watch for when skills section becomes active
var skillsSection = document.getElementById('skills');
if (skillsSection) {
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (skillsSection.classList.contains('active')) {
        // small delay so it looks smoother
        setTimeout(animateSkillBars, 100);
      }
    });
  });
  observer.observe(skillsSection, { attributes: true, attributeFilter: ['class'] });
}

// =============================================
// TYPING ANIMATION for hero section
// copied the idea from youtube and made it my own!!
// =============================================

var typingPhrases = [
  'breaking things on purpose 🐛',
  'learning frontend dev 🌐',
  'testing Kindle devices 📖',
  'drinking too much chai ☕',
  'writing bug reports 📋',
  'watching coding tutorials 🎥',
];

var currentPhrase = 0;
var currentChar = 0;
var isDeleting = false;
var typingEl = document.getElementById('typing-text');

// only run if the element exists on the page
if (typingEl) {
  function doTyping() {
    var phrase = typingPhrases[currentPhrase];

    if (!isDeleting) {
      // typing forward
      typingEl.textContent = phrase.slice(0, currentChar + 1);
      currentChar++;

      if (currentChar === phrase.length) {
        // done typing!! wait a bit then delete
        isDeleting = true;
        setTimeout(doTyping, 1800);
        return;
      }
    } else {
      // deleting
      typingEl.textContent = phrase.slice(0, currentChar - 1);
      currentChar--;

      if (currentChar === 0) {
        // done deleting! move to next phrase
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % typingPhrases.length;
      }
    }

    // speed: typing is slower than deleting
    var speed = isDeleting ? 40 : 80;
    setTimeout(doTyping, speed);
  }

  // small delay before starting so page loads first
  setTimeout(doTyping, 800);
}

// =============================================
// EASTER EGG 🥚
// if someone clicks the logo 5 times fast...
// =============================================

var logoClicks = 0;
var logoTimer = null;
var logo = document.querySelector('.nav-logo');

if (logo) {
  logo.addEventListener('click', function() {
    logoClicks++;

    // reset counter after 2 seconds
    clearTimeout(logoTimer);
    logoTimer = setTimeout(function() {
      logoClicks = 0;
    }, 2000);

    if (logoClicks >= 5) {
      logoClicks = 0;
      // surprise!! 🎉
      document.body.style.transition = 'filter 0.5s';
      document.body.style.filter = 'hue-rotate(180deg)';
      setTimeout(function() {
        document.body.style.filter = 'hue-rotate(0deg)';
      }, 1500);
      alert('🎉 Tried to test my portfolio uhhh..');
    }
  });
}

// =============================================
// CONSOLE MESSAGE
// for any devs who inspect my code 👀
// =============================================

console.log('%c Hi!! 👋', 'font-size: 24px; color: #ffb3c6; font-weight: bold;');
console.log('%c Welcome to Jefferson\'s portfolio source code!', 'font-size: 14px; color: #b5ead7;');
console.log('%c Built with love (and a lot of Stack Overflow) 😅', 'font-size: 12px; color: #c9b8f5;');
console.log('%c Feel free to look around — just don\'t judge the messy code pls 🙏', 'font-size: 12px; color: #ffd97d;');