document.addEventListener("DOMContentLoaded", function () {
    // hero text animation
  
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      startDelay: 0,
      loop: true,
      contentType: "text"
    });

    // Initialize hero slider

    const heroSlider = new Swiper(".mission-slider", {
        slidesPerView: 1,
        autoplay: {
          delay: 10000
        },
        speed: 800,
        loop: true,
      });

  
    // Initialize thumbs slider
    const thumbsSlider = new Swiper(".clients_thumbs-slider", {
      slidesPerView: 3,
      spaceBetween: 4,
      loop: true,
      // centeredSlides: true,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true
    });
  
    // Initialize clients slider
    const clientsSlider = new Swiper(".clients_slider", {
      slidesPerView: 1,
      effect: "fade", // Add the fade effect
      speed: 1200,
      autoplay: {
        delay: 10000
      },
      fadeEffect: {
        crossFade: true // Enable cross-fade effect
      },
      loop: true,
      thumbs: {
        swiper: thumbsSlider
      },
      // spaceBetween: 30,
      navigation: {
        nextEl: '[data-slider-thumbs="arrow-next"]',
        prevEl: '[data-slider-thumbs="arrow-prev"]'
      }
    });
  });
  
  // Custom random function with a step
  function customRandom(min, max, step) {
    const steps = Math.floor((max - min) / step) + 1;
    const randomStep = Math.floor(Math.random() * steps);
    return min + randomStep * step;
  }
  
  // Select all elements with the "decor-box" attribute within sections with the "box-animation-section" attribute
  const targets = gsap.utils.toArray(
    "section[box-animation-section] [decor-box]"
  );
  
  targets.forEach((box) => {
    // Define a random duration between a minimum and maximum value with a specific step
    const randomDuration = customRandom(3, 8, 0.5); // Replace 3, 10, and 1 with your desired min, max, and step values
  
    // Get the parent section with the "box-animation-section" attribute
    const triggerSection = box.closest("section[box-animation-section]");
  
    gsap.from(box, {
      yPercent: 50,
      duration: randomDuration, // Add the random duration to the animation
      // ease: Expo.easeOut, // Uncomment if you want to use easing
      scrollTrigger: {
        trigger: triggerSection, // Use the parent section as the trigger
        scrub: 4,
        start: "top 65%",
        end: "center 30%"
      }
    });
  });
  