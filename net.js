
// frequently Q - toggle
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    faqItem.classList.toggle("active");
  });
});



// Translation
const Translation = {
  en: {
    main: "Unlimited movies, TV shows, and more",
    mainB: "Unlimited movies, <br> TV shows, and <br> more",
    second: "Starts at ₱69. Cancel anytime.",
    third:
      "Ready to watch? Enter your email to create or restart your membership."
  },
  fl: {
    main: "Unlimited na pelikula, TV show, at marami pang iba",
    mainB: "Unlimited na pelikula, <br> TV show, at <br> marami pang iba",
    second: "Nagsisimula sa halagang ₱169. I-cancel kahit kailan.",
    third:
      "Handa nang manood? Ilagay ang email mo para gawin o simulan ulit ang membership mo."
  }
};

document.querySelector(".language").addEventListener("change", function () {
  const lang = this.value;

  document.getElementById("main-title-tran1").innerText =
    Translation[lang].main;
  document.getElementById("main-title-tran1b").innerHTML =
    Translation[lang].mainB;
  document.getElementById("main-title-tran2").innerText =
    Translation[lang].second;
  document.getElementById("main-title-tran3").innerText =
    Translation[lang].third;
});
