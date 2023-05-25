// GSAP configuration

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
  
  const accordionHeaders = document.querySelectorAll(".fs_accordion_header");
  
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      header.classList.toggle("is-white");
    });
  });
  