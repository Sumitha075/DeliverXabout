document.addEventListener('DOMContentLoaded', function() {
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Active nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
      document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Stats counters
  document.querySelectorAll(".stat").forEach(stat => {
    let value = parseFloat(stat.dataset.value);
    let suffix = stat.dataset.suffix;
    gsap.fromTo(stat,
      { innerText: 0 },
      {
        innerText: value,
        duration: 2,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: stat,
          start: "top 80%",
        },
        onUpdate: function() {
          stat.innerText = Math.floor(stat.innerText) + suffix;
        }
      }
    );
  });

  // Hero floating images animation
  gsap.to(".floating-img", {
    y: -20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
// floating smooth motion (add inside DOMContentLoaded)
gsap.to(".floating-1", {
  y: -15,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".floating-2", {
  y: -20,
  duration: 2.5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  delay: 0.3
});



  // Hero text and image entrance
  gsap.from(".hero-text h6", { y: 20, opacity: 0, duration: 0.6 });
  gsap.from(".hero-text h1", { y: 40, opacity: 0, duration: 0.8, delay: 0.2 });
  gsap.from(".hero-text p", { y: 20, opacity: 0, duration: 0.8, delay: 0.4 });
  gsap.from(".hero-img", { y: 30, opacity: 0, duration: 1, delay: 0.5 });

  // Mission, Vision, Features, Testimonials animations
  gsap.utils.toArray(".mission-box, .vision-box, .feature-card, .testimonial-card").forEach(el => {
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  });

  // CTA animations
  gsap.from(".cta-section h2", { y: 40, opacity: 0, duration: 0.8, scrollTrigger: { trigger: ".cta-section", start: "top 80%" } });
  gsap.from(".cta-section p", { y: 20, opacity: 0, duration: 0.8, delay: 0.2, scrollTrigger: { trigger: ".cta-section", start: "top 80%" } });
  gsap.from(".cta-section .btn", { y: 20, opacity: 0, duration: 0.8, delay: 0.4, stagger: 0.2, scrollTrigger: { trigger: ".cta-section", start: "top 80%" } });
});
