ScrollReveal().reveal("nav", {
   origin: "top",
   distance: "80px",
   duration: 1000,
   reset: true,
});

ScrollReveal().reveal(".nav__links", {
   origin: "top",
   distance: "80px",
   duration: 1000,
   reset: true,
   scale: 0,
});

ScrollReveal().reveal(".hero__title", {
   opacity: 0,
   delay: 300,
   duration: 700,
   reset: true,
});

ScrollReveal().reveal(`#hs1,#hs2,#hs3`, {
   origin: "top",
   distance: "700px",
   duration: 1000,
   opacity: 0,
   reset: true,
});

ScrollReveal().reveal(`.about__images`, {
   origin: "left",
   distance: "500px",
   duration: 1000,
   opacity: 0,
   reset: true,
});

ScrollReveal().reveal(`.about__content__container`, {
   origin: "right",
   distance: "500px",
   duration: 1000,
   opacity: 0,
   reset: true,
});

ScrollReveal().reveal(`.section__title__container`, {
   duration: 1400,
   opacity: 0,
   reset: true,
});

for (let i = 1; i <= 6; i++)
   ScrollReveal().reveal(`#sv${i}`, {
      duration: 1000,
      scale: 0,
      reset: true,
      delay: 300 + i * 200,
   });

for (let i = 1; i <= 4; i++)
   ScrollReveal().reveal(`#ms${i}`, {
      duration: 1000,
      scale: 0,
      reset: true,
      delay: 300 + i * 200,
   });

for (let i = 1; i <= 10; i++)
   ScrollReveal().reveal(`#c${i}`, {
      origin: i < 6 ? "right" : "left",
      distance: "500px",
      duration: 1300,
      opacity: 0,
      reset: true,
   });

ScrollReveal().reveal(`.footer__read`, {
   origin: "top",
   distance: "500px",
   duration: 1000,
   opacity: 0,
   reset: true,
});

ScrollReveal().reveal(`.footer__content`, {
   origin: "top",
   distance: "500px",
   duration: 1200,
   opacity: 0,
   reset: true,
});