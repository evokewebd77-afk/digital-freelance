// ==================== SCRIPT 0 ====================
WebFont.load({  google: {    families: ["Plus Jakarta Sans:300,400,500,600,700"]  }});

// ==================== SCRIPT 1 ====================
!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);

// ==================== SCRIPT 2 ====================
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Digital Agency",
  "url": "/",
  "description": "Creative digital solutions for modern business growth and lasting brand success online.",
  "logo": {
    "@type": "ImageObject",
    "url": "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69dcc81006f3ba71cf595517_Logo.svg"
  },
  "sameAs": [
    "https://www.facebook.com/",
    "https://www.instagram.com/",
    "https://www.linkedin.com/",
    "https://www.x.com/"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.3",
    "bestRating": "5",
    "ratingCount": "500"
  },
  "slogan": "Turn data into results. We combine insights to grow your brand.",
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Content Marketing",
        "description": "We create engaging, valuable content including blogs, social posts, and videos that attract audiences, build trust, improve SEO, and support long-term digital growth strategies."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Paid Advertising",
        "description": "We design and manage targeted ad campaigns across platforms, reaching the right audience, maximizing ROI, and driving measurable business results with optimized strategies and analytics."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Email Marketing",
        "description": "We build email campaigns that nurture leads, increase engagement, improve conversions, and maintain customer relationships through segmentation, automation, and effective messaging strategies."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "SEO Optimization"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Brand Strategy"
      }
    }
  ],
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sarah Thompson",
        "jobTitle": "CEO of BrightWave Agency"
      },
      "reviewBody": "Working with this amazing team has truly transformed our online presence. Their strategy and creativity helped us attract high-value clients consistently."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Daniel Carter",
        "jobTitle": "Founder of BrightSide Co."
      },
      "reviewBody": "Professional, creative, and results-driven—exactly what our brand truly needed.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.0",
        "bestRating": "5"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Chloe Anderson",
        "jobTitle": "Founder of Maple Ridge Co."
      },
      "reviewBody": "SMART, POLISHED, AND PERFORMANCE-LED—EXACTLY WHAT OUR COMPANY TRULY NEEDED.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.3",
        "bestRating": "5"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Olivia Bennett",
        "jobTitle": "Founder of Northvale Studio"
      },
      "reviewBody": "THOUGHTFUL, RELIABLE, AND IMPACT-FOCUSED—EXACTLY WHAT OUR BUSINESS REALLY NEEDED.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.5",
        "bestRating": "5"
      }
    }
  ]
}

// ==================== SCRIPT 3 ====================
window.__WF_REVIEW_BRIDGE = {
  siteId: "69dcb5467199b638883f4588",
  version: "0.3.0",
  marker: "__wf_review_snippet_v1",
  bridgeToken: "wfbt_3057fe315bc149b4bd00836460ec1a5b",
  reviewSurface: "published-review",
  reviewScriptUrl: "https://validation-worker.createsomething.workers.dev/app-validator/snippet/review.js"
};

// ==================== SCRIPT 4 ====================
document.addEventListener("DOMContentLoaded", () => {
  if (!window.gsap) return;

  const items = document.querySelectorAll(".faq-tabs-items");

  function updateFAQ() {
    items.forEach((item) => {
      const content = item.querySelector(".faq-content-box");
      const iconBox = item.querySelector(".faq-icon-box");
      const iconOne = item.querySelector(".faq-icon.one");
      const iconTwo = item.querySelector(".faq-icon.two");

      const isOpen = item.classList.contains("w--current");

      gsap.to(content, {
        height: isOpen ? content.scrollHeight : 0,
        duration: 0.6,
        ease: "power2.out"
      });

      gsap.to(iconBox, {
        backgroundColor: isOpen ? "#F97316" : "transparent",
        duration: 0.6
      });

      gsap.to(iconOne, {
        opacity: isOpen ? 0 : 1,
        xPercent: isOpen ? 200 : 0,
        yPercent: isOpen ? -200 : 0,
        duration: 0.6,
        ease: "power2.out"
      });

      gsap.to(iconTwo, {
        opacity: isOpen ? 1 : 0,
        xPercent: isOpen ? 0 : -200,
        yPercent: isOpen ? 0 : 200,
        duration: 0.6,
        ease: "power2.out"
      });
    });
  }

  items.forEach((item) => {
    const content = item.querySelector(".faq-content-box");
    gsap.set(content, {
      height: item.classList.contains("w--current") ? "auto" : 0,
      overflow: "hidden"
    });
  });

  updateFAQ();

  items.forEach((item) => {
    item.addEventListener("click", () => {
      setTimeout(updateFAQ, 50);
    });
  });
});

// ==================== SCRIPT 5 ====================
document.addEventListener("DOMContentLoaded", () => {
  if (!window.gsap) return;

  const menuBtn = document.querySelector(".header-menu");
  const menuIcon = document.querySelector(".header-menu-lottie");

  if (!menuBtn || !menuIcon) return;

  // Initial state
  gsap.set(menuIcon, {
    rotate: 0,
    scale: 1,
    transformOrigin: "50% 50%"
  });

  function updateMenuIcon() {
    const isOpen = menuBtn.classList.contains("w--open");

    gsap.to(menuIcon, {
      rotate: isOpen ? 135 : 0,
      scale: isOpen ? 1.1 : 1,
      duration: 0.4,
      ease: "power2.out"
    });
  }

  // Detect Webflow class change
  const observer = new MutationObserver(updateMenuIcon);

  observer.observe(menuBtn, {
    attributes: true,
    attributeFilter: ["class"]
  });

  // Run once
  updateMenuIcon();
});

// ==================== SCRIPT 6 ====================
window.Webflow = window.Webflow || [];

  window.Webflow.push(function () {
    // Don't run in Webflow Designer / Editor
    if (window.Webflow && Webflow.env && Webflow.env("editor") !== undefined) return;
    if (!window.Lenis) return;

    // Add required Lenis CSS using JS
    const lenisStyle = document.createElement("style");
    lenisStyle.innerHTML = `
      html.lenis,
      html.lenis body {
        height: auto;
      }

      .lenis.lenis-smooth {
        scroll-behavior: auto !important;
      }

      .lenis.lenis-smooth [data-lenis-prevent] {
        overscroll-behavior: contain;
      }

      .lenis.lenis-stopped {
        overflow: hidden;
      }

      .lenis.lenis-smooth iframe {
        pointer-events: none;
      }

      html {
        scroll-behavior: auto !important;
      }

      body {
        overscroll-behavior: none;
        -webkit-font-smoothing: antialiased;
      }
    `;
    document.head.appendChild(lenisStyle);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.25,
      easing: function (t) {
        return Math.min(1, 1.001 - Math.pow(2, -10 * t));
      },
      smoothWheel: true,
      wheelMultiplier: 0.85,
      syncTouch: false,
      touchMultiplier: 1.2,
      infinite: false,
      anchors: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    window.addEventListener("load", function () {
      lenis.resize();
    });
  });

// ==================== SCRIPT 7 ====================
document.addEventListener("DOMContentLoaded", function () {
  const pricingWrappers = document.querySelectorAll(".home-pricing-wrapper");

  pricingWrappers.forEach((wrapper) => {
    const monthBtn = wrapper.querySelector(".price-button.month");
    const yearBtn = wrapper.querySelector(".price-button.year");
    const border = wrapper.querySelector(".price-button-border");
    const priceBoxes = wrapper.querySelectorAll(".main-price-box");

    if (!monthBtn || !yearBtn || !border || !priceBoxes.length) return;

    // Initial state
    gsap.set(border, { x: 0 });
    gsap.set(priceBoxes, { yPercent: 0 });

    yearBtn.addEventListener("click", function () {
      gsap.to(border, {
        x: 140,
        duration: 0.4,
        ease: "power2.out"
      });

      gsap.to(priceBoxes, {
        yPercent: -100,
        duration: 0.4,
        ease: "power2.out"
      });

      yearBtn.classList.add("active");
      monthBtn.classList.remove("active");
    });

    monthBtn.addEventListener("click", function () {
      gsap.to(border, {
        x: 0,
        duration: 0.4,
        ease: "power2.out"
      });

      gsap.to(priceBoxes, {
        yPercent: 0,
        duration: 0.4,
        ease: "power2.out"
      });

      monthBtn.classList.add("active");
      yearBtn.classList.remove("active");
    });
  });
});

// ==================== SCRIPT 8 ====================
window.Webflow ||= [];
window.Webflow.push(() => {
  if (!window.gsap) return;

  const mm = gsap.matchMedia();

  mm.add("(min-width: 992px)", () => {
    const wrappers = document.querySelectorAll(".our-story-wrapper");
    const cleanups = [];

    wrappers.forEach((wrapper) => {
      const yearItems = Array.from(wrapper.querySelectorAll(".our-story-year-items"));
      const contentItems = Array.from(wrapper.querySelectorAll(".our-story-content-items"));

      if (!yearItems.length || !contentItems.length) return;

      let currentIndex = -1;
      let ticking = false;

      const activeYearColor = "#F97316";
      const inactiveYearColor = "#ffffff";

      const activeBorderColor = "#F97316";
      const inactiveBorderColor = "rgb(255 255 255 / 40%)";

      yearItems.forEach((item) => {
        const yearText = item.querySelector(".our-story-year");
        const iconOne = item.querySelector(".our-story-year-icon.one");
        const iconTwo = item.querySelector(".our-story-year-icon.two");

        gsap.set(item, {
          borderColor: inactiveBorderColor
        });

        if (yearText) {
          gsap.set(yearText, {
            color: inactiveYearColor
          });
        }

        if (iconOne) {
          gsap.set(iconOne, {
            autoAlpha: 1
          });
        }

        if (iconTwo) {
          gsap.set(iconTwo, {
            autoAlpha: 0
          });
        }
      });

      contentItems.forEach((item) => {
        gsap.set(item, {
          autoAlpha: 0,
          y: 30,
          scale: 0.98
        });
      });

      function updateYearItem(item, isActive) {
        const yearText = item.querySelector(".our-story-year");
        const iconOne = item.querySelector(".our-story-year-icon.one");
        const iconTwo = item.querySelector(".our-story-year-icon.two");

        gsap.set(item, {
          borderColor: isActive ? activeBorderColor : inactiveBorderColor
        });

        if (yearText) {
          gsap.set(yearText, {
            color: isActive ? activeYearColor : inactiveYearColor
          });
        }

        if (iconOne) {
          gsap.set(iconOne, {
            autoAlpha: isActive ? 0 : 1
          });
        }

        if (iconTwo) {
          gsap.set(iconTwo, {
            autoAlpha: isActive ? 1 : 0
          });
        }
      }

      function animateContentItem(item, isActive) {
        gsap.to(item, {
          autoAlpha: isActive ? 1 : 0,
          y: isActive ? 0 : 30,
          scale: isActive ? 1 : 0.98,
          duration: 0.45,
          ease: "power3.out",
          overwrite: true
        });
      }

      function setActive(index) {
        if (index === currentIndex) return;

        currentIndex = index;

        yearItems.forEach((item, i) => {
          const isActive = i === index;

          item.classList.toggle("active", isActive);
          updateYearItem(item, isActive);
        });

        contentItems.forEach((item, i) => {
          const isActive = i === index;

          item.classList.toggle("active", isActive);
          animateContentItem(item, isActive);
        });
      }

      function updateActive() {
        const rect = wrapper.getBoundingClientRect();
        const wrapperTop = window.scrollY + rect.top;

        const scrollDistance = wrapper.offsetHeight - window.innerHeight;
        const scrollInside = window.scrollY - wrapperTop;

        let progress = scrollInside / scrollDistance;
        progress = Math.max(0, Math.min(1, progress));

        const totalItems = contentItems.length;
        let index = Math.floor(progress * totalItems);

        if (index >= totalItems) {
          index = totalItems - 1;
        }

        setActive(index);
        ticking = false;
      }

      function onScroll() {
        if (!ticking) {
          window.requestAnimationFrame(updateActive);
          ticking = true;
        }
      }

      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", updateActive);

      const clickHandlers = [];

      yearItems.forEach((yearItem, index) => {
        yearItem.style.cursor = "pointer";

        const clickHandler = () => {
          const rect = wrapper.getBoundingClientRect();
          const wrapperTop = window.scrollY + rect.top;
          const scrollDistance = wrapper.offsetHeight - window.innerHeight;

          const targetY =
            wrapperTop + (scrollDistance / (contentItems.length - 1)) * index;

          window.scrollTo({
            top: targetY,
            behavior: "smooth"
          });
        };

        yearItem.addEventListener("click", clickHandler);
        clickHandlers.push({ yearItem, clickHandler });
      });

      updateActive();

      cleanups.push(() => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", updateActive);

        clickHandlers.forEach(({ yearItem, clickHandler }) => {
          yearItem.removeEventListener("click", clickHandler);
          yearItem.style.cursor = "";
        });

        yearItems.forEach((item) => {
          item.classList.remove("active");

          const yearText = item.querySelector(".our-story-year");
          const iconOne = item.querySelector(".our-story-year-icon.one");
          const iconTwo = item.querySelector(".our-story-year-icon.two");

          gsap.killTweensOf(item);
          gsap.set(item, { clearProps: "borderColor" });

          if (yearText) {
            gsap.killTweensOf(yearText);
            gsap.set(yearText, { clearProps: "color" });
          }

          if (iconOne) {
            gsap.killTweensOf(iconOne);
            gsap.set(iconOne, { clearProps: "opacity,visibility" });
          }

          if (iconTwo) {
            gsap.killTweensOf(iconTwo);
            gsap.set(iconTwo, { clearProps: "opacity,visibility" });
          }
        });

        contentItems.forEach((item) => {
          item.classList.remove("active");
          gsap.killTweensOf(item);
          gsap.set(item, {
            clearProps: "opacity,visibility,transform"
          });
        });
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  });
});

// ==================== SCRIPT 9 ====================
window.Webflow ||= [];

window.Webflow.push(() => {
  if (typeof gsap === "undefined") return;

  const reviewItems = document.querySelectorAll(
    ".client-reviews-items"
  );

  const logoItems = document.querySelectorAll(
    ".client-reviews-brand-logo-items"
  );

  if (!reviewItems.length || !logoItems.length) return;

  const mm = gsap.matchMedia();

  const settings = {
    duration: 0.55,
    ease: "power3.out",
    activeZ: 20,
    rotateOne: 5,
    rotateTwo: -5
  };

  // Desktop: 769px and above
  mm.add("(min-width: 769px)", () => {
    let activeIndex = 0;
    const clickHandlers = [];

    function showReview(index) {
      activeIndex = index;

      reviewItems.forEach((item, i) => {
        const offset =
          (i - activeIndex + reviewItems.length) %
          reviewItems.length;

        const isActive = offset === 0;

        gsap.to(item, {
          rotation: isActive
            ? 0
            : offset % 2 === 1
              ? settings.rotateOne
              : settings.rotateTwo,

          autoAlpha: offset <= 3 ? 1 : 0,

          zIndex: isActive
            ? settings.activeZ
            : settings.activeZ - offset,

          duration: settings.duration,
          ease: settings.ease,
          overwrite: true
        });
      });

      logoItems.forEach((logo, i) => {
        logo.classList.toggle(
          "is-active",
          i === activeIndex
        );
      });
    }

    logoItems.forEach((logo, index) => {
      const handler = () => {
        if (index === activeIndex) return;
        showReview(index);
      };

      clickHandlers.push(handler);
      logo.addEventListener("click", handler);
    });

    showReview(0);

    return () => {
      logoItems.forEach((logo, index) => {
        logo.removeEventListener(
          "click",
          clickHandlers[index]
        );

        logo.classList.remove("is-active");
      });

      gsap.killTweensOf(reviewItems);
    };
  });

  // Tablet and mobile: 768px and below
  mm.add("(max-width: 768px)", () => {
    let activeIndex = 0;
    const clickHandlers = [];

    gsap.set(reviewItems, {
      rotation: 0
    });

    function showReview(index) {
      activeIndex = index;

      reviewItems.forEach((item, i) => {
        const isActive = i === activeIndex;

        gsap.to(item, {
          rotation: 0,
          autoAlpha: isActive ? 1 : 0,
          zIndex: isActive ? settings.activeZ : 0,
          duration: settings.duration,
          ease: settings.ease,
          pointerEvents: isActive ? "auto" : "none",
          overwrite: true
        });
      });

      logoItems.forEach((logo, i) => {
        logo.classList.toggle(
          "is-active",
          i === activeIndex
        );
      });
    }

    logoItems.forEach((logo, index) => {
      const handler = () => {
        if (index === activeIndex) return;
        showReview(index);
      };

      clickHandlers.push(handler);
      logo.addEventListener("click", handler);
    });

    showReview(0);

    return () => {
      logoItems.forEach((logo, index) => {
        logo.removeEventListener(
          "click",
          clickHandlers[index]
        );

        logo.classList.remove("is-active");
      });

      gsap.killTweensOf(reviewItems);

      gsap.set(reviewItems, {
        clearProps:
          "transform,opacity,visibility,zIndex,pointerEvents"
      });
    };
  });
});

// ==================== SCRIPT 10 ====================
window.Webflow ||= [];
window.Webflow.push(() => {
  if (typeof gsap === "undefined") return;

  const mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    const projectBoxes = document.querySelectorAll(".home-project-box");
    const animations = [];

    projectBoxes.forEach((box) => {
      const contentWrap = box.querySelector(".home-project-content-wrap");
      const summeryBox = box.querySelector(".home-project-summery-box");
      const authorBox = box.querySelector(
        ".home-project-author-items-flex-box"
      );

      if (!contentWrap || !summeryBox || !authorBox) return;

      gsap.set(contentWrap, {
        top: "auto"
      });

      gsap.set([summeryBox, authorBox], {
        height: 0,
        overflow: "hidden",
        autoAlpha: 0
      });

      const tl = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.4,
          ease: "power2.out",
          overwrite: true
        }
      });

      tl.to(
        contentWrap,
        {
          top: "10px"
        },
        0
      );

      tl.to(
        [summeryBox, authorBox],
        {
          height: "auto",
          autoAlpha: 1
        },
        0
      );

      const handleMouseEnter = () => tl.play();
      const handleMouseLeave = () => tl.reverse();

      box.addEventListener("mouseenter", handleMouseEnter);
      box.addEventListener("mouseleave", handleMouseLeave);

      animations.push({
        box,
        tl,
        contentWrap,
        summeryBox,
        authorBox,
        handleMouseEnter,
        handleMouseLeave
      });
    });

    return () => {
      animations.forEach((item) => {
        item.box.removeEventListener(
          "mouseenter",
          item.handleMouseEnter
        );

        item.box.removeEventListener(
          "mouseleave",
          item.handleMouseLeave
        );

        item.tl.kill();

        gsap.set(
          [item.contentWrap, item.summeryBox, item.authorBox],
          {
            clearProps: "all"
          }
        );
      });
    };
  });
});

// ==================== SCRIPT 11 ====================
document.addEventListener("DOMContentLoaded", function () {
  if (!window.gsap) return;

  const mainItems = document.querySelectorAll(".team-collection-items");
  const listItems = document.querySelectorAll(".team-collection-list-items");

  if (!mainItems.length || !listItems.length) return;

  let activeIndex = 0;
  let isAnimating = false;

  gsap.set(".team-collection-flex", {
    position: "relative"
  });

  mainItems.forEach((item, index) => {
    const content = item.querySelector(".team-collection-content-flex");
    const image = item.querySelector(".team-collection-img-box");

    gsap.set(item, {
      position: index === activeIndex ? "relative" : "absolute",
      inset: 0,
      width: "100%",
      autoAlpha: index === activeIndex ? 1 : 0,
      pointerEvents: index === activeIndex ? "auto" : "none",
      zIndex: index === activeIndex ? 2 : 1
    });

    if (content) {
      gsap.set(content, {
        x: index === activeIndex ? 0 : -25,
        autoAlpha: index === activeIndex ? 1 : 0
      });
    }

    if (image) {
      gsap.set(image, {
        x: 0,
        y: 0,
        scale: index === activeIndex ? 1 : 0.96,
        autoAlpha: index === activeIndex ? 1 : 0
      });
    }
  });

  listItems.forEach((item, index) => {
    const bg = item.querySelector(".team-collection-list-bg-box");
    const arrow = item.querySelector(".team-collection-list-arrow-box");

    gsap.set(item, {
      cursor: "pointer"
    });

    if (bg) {
      gsap.set(bg, {
        autoAlpha: index === activeIndex ? 1 : 0
      });
    }

    if (arrow) {
      gsap.set(arrow, {
        scale: index === activeIndex ? 1 : 0.75,
        rotate: index === activeIndex ? 0 : -15,
        autoAlpha: index === activeIndex ? 1 : 0
      });
    }
  });

  function changeTeam(index) {
    if (index === activeIndex || isAnimating) return;

    isAnimating = true;

    const currentItem = mainItems[activeIndex];
    const nextItem = mainItems[index];

    const currentContent = currentItem.querySelector(".team-collection-content-flex");
    const currentImage = currentItem.querySelector(".team-collection-img-box");

    const nextContent = nextItem.querySelector(".team-collection-content-flex");
    const nextImage = nextItem.querySelector(".team-collection-img-box");

    const currentThumbBg = listItems[activeIndex].querySelector(".team-collection-list-bg-box");
    const currentThumbArrow = listItems[activeIndex].querySelector(".team-collection-list-arrow-box");

    const nextThumbBg = listItems[index].querySelector(".team-collection-list-bg-box");
    const nextThumbArrow = listItems[index].querySelector(".team-collection-list-arrow-box");

    gsap.set(nextItem, {
      position: "absolute",
      inset: 0,
      width: "100%",
      autoAlpha: 1,
      pointerEvents: "auto",
      zIndex: 3
    });

    if (nextContent) {
      gsap.set(nextContent, {
        x: -25,
        autoAlpha: 0
      });
    }

    if (nextImage) {
      gsap.set(nextImage, {
        x: 0,
        y: 0,
        scale: 0.96,
        autoAlpha: 0
      });
    }

    const tl = gsap.timeline({
      defaults: {
        duration: 0.28,
        ease: "power2.out",
        overwrite: "auto"
      },
      onComplete: function () {
        gsap.set(currentItem, {
          position: "absolute",
          autoAlpha: 0,
          pointerEvents: "none",
          zIndex: 1
        });

        gsap.set(nextItem, {
          position: "relative",
          autoAlpha: 1,
          pointerEvents: "auto",
          zIndex: 2
        });

        if (nextImage) {
          gsap.set(nextImage, {
            x: 0,
            y: 0,
            scale: 1,
            autoAlpha: 1
          });
        }

        if (currentImage) {
          gsap.set(currentImage, {
            x: 0,
            y: 0,
            scale: 0.96,
            autoAlpha: 0
          });
        }

        activeIndex = index;
        isAnimating = false;
      }
    });

    if (currentContent) {
      tl.to(currentContent, {
        x: 25,
        autoAlpha: 0
      }, 0);
    }

    if (currentImage) {
      tl.to(currentImage, {
        x: 0,
        y: 0,
        scale: 0.98,
        autoAlpha: 0
      }, 0);
    }

    if (currentThumbBg) {
      tl.to(currentThumbBg, {
        autoAlpha: 0
      }, 0);
    }

    if (currentThumbArrow) {
      tl.to(currentThumbArrow, {
        autoAlpha: 0,
        scale: 0.75,
        rotate: -15
      }, 0);
    }

    if (nextImage) {
      tl.to(nextImage, {
        x: 0,
        y: 0,
        scale: 1,
        autoAlpha: 1
      }, 0.05);
    }

    if (nextContent) {
      tl.to(nextContent, {
        x: 0,
        autoAlpha: 1
      }, 0.08);
    }

    if (nextThumbBg) {
      tl.to(nextThumbBg, {
        autoAlpha: 1
      }, 0.05);
    }

    if (nextThumbArrow) {
      tl.to(nextThumbArrow, {
        autoAlpha: 1,
        scale: 1,
        rotate: 0
      }, 0.06);
    }
  }

  listItems.forEach((item, index) => {
    item.addEventListener("click", function () {
      changeTeam(index);
    });

    item.addEventListener("mouseenter", function () {
      if (index === activeIndex) return;

      gsap.to(item, {
        scale: 1.03,
        duration: 0.18,
        ease: "power2.out",
        overwrite: "auto"
      });
    });

    item.addEventListener("mouseleave", function () {
      gsap.to(item, {
        scale: 1,
        duration: 0.18,
        ease: "power2.out",
        overwrite: "auto"
      });
    });
  });
});

