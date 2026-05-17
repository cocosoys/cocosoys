const accordion = document.querySelector("[data-accordion]");
const contactJump = document.querySelector("[data-jump-contact]");

function setPanelHeight(card, isOpen) {
  const panel = card.querySelector("[data-panel]");
  const toggle = card.querySelector("[data-toggle]");

  card.classList.toggle("is-open", isOpen);
  toggle.setAttribute("aria-expanded", String(isOpen));
  panel.style.maxHeight = isOpen ? `${panel.scrollHeight}px` : "0px";
}

function closeOtherCards(activeCard) {
  accordion.querySelectorAll("[data-card]").forEach((card) => {
    if (card !== activeCard) {
      setPanelHeight(card, false);
    }
  });
}

accordion?.addEventListener("click", (event) => {
  const toggle = event.target.closest("[data-toggle]");

  if (!toggle) {
    return;
  }

  const card = toggle.closest("[data-card]");
  const nextState = !card.classList.contains("is-open");

  closeOtherCards(card);
  setPanelHeight(card, nextState);
});

contactJump?.addEventListener("click", () => {
  const contactSection = document.querySelector("#contact");
  const firstCard = accordion?.querySelector("[data-card]");

  contactSection?.scrollIntoView({ behavior: "smooth", block: "start" });

  if (firstCard) {
    closeOtherCards(firstCard);
    setPanelHeight(firstCard, true);
  }
});

window.addEventListener("resize", () => {
  accordion?.querySelectorAll(".is-open").forEach((card) => {
    setPanelHeight(card, true);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  accordion?.querySelectorAll("[data-card]").forEach((card) => {
    setPanelHeight(card, false);
  });
});
