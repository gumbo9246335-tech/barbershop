document.querySelectorAll(".ticker").forEach((ticker) => {
  const groups = ticker.querySelectorAll(".ticker-group");
  if (groups.length !== 2) return;

  const template = [...groups[0].children].map((item) => item.cloneNode(true));
  const fillTicker = () => {
    groups[0].replaceChildren(...template.map((item) => item.cloneNode(true)));
    while (groups[0].getBoundingClientRect().width < ticker.getBoundingClientRect().width) {
      groups[0].append(...template.map((item) => item.cloneNode(true)));
    }
    groups[1].replaceChildren(...[...groups[0].children].map((item) => item.cloneNode(true)));
  };

  fillTicker();
  new ResizeObserver(fillTicker).observe(ticker);
  document.fonts?.ready.then(fillTicker);
});

const menServices = [
  { name: "Мужская стрижка", detail: "Форма, текстура, укладка", duration: "45 мин", price: 350 },
  { name: "Стрижка машинкой", detail: "Чистый силуэт и точные переходы", duration: "30 мин", price: 250 },
  { name: "Оформление бороды", detail: "Контур, длина, горячее полотенце", duration: "30 мин", price: 250 },
  { name: "Стрижка + борода", detail: "Полный образ и уход", duration: "75 мин", price: 550 },
  { name: "Отец и сын", detail: "Два мастера, одно хорошее время", duration: "75 мин", price: 600 },
];

const menBarbers = [
  { name: "Андрей Волков", role: "Барбер · 8 лет опыта", specialty: "Классика и форма", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=82", bio: "Работает с классическими формами и подбирает стрижку под привычный ритм жизни.", portfolio: [["Классическая форма", "Чёткий силуэт и аккуратная длина"], ["Стрижка ножницами", "Естественная текстура и мягкий переход"], ["Укладка", "Простая форма, которую легко повторить дома"]] },
  { name: "Марк Савин", role: "Старший барбер · 6 лет опыта", specialty: "Fade и текстура", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=82", bio: "Специализируется на современных переходах, текстурных стрижках и точной работе с контуром.", portfolio: [["Low и mid fade", "Плавный переход с чистым контуром"], ["Текстурный кроп", "Лёгкая укладка и выразительная фактура"], ["Форма бороды", "Сбалансированный контур под черты лица"]] },
  { name: "Илья Раду", role: "Барбер · 4 года опыта", specialty: "Борода и детали", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=82", bio: "Внимательно работает с деталями образа: от формы бороды до чистой окантовки.", portfolio: [["Оформление бороды", "Форма и длина с учётом роста волос"], ["Короткая стрижка", "Аккуратный силуэт и ровные переходы"], ["Контур", "Чистые линии без лишней резкости"]] },
];

const menReviews = [
  { initials: "АМ", name: "Алексей М.", service: "Мужская стрижка", barber: "Андрей Волков", quote: "Пришёл с непонятным запросом, а ушёл с формой, которая наконец-то работает с моими волосами. Очень спокойно и по делу." },
  { initials: "ДК", name: "Дмитрий К.", service: "Стрижка + борода", barber: "Марк Савин", quote: "Внимание к мелочам чувствуется сразу. Ни разу не торопили, предложили вариант лучше того, что я принёс на фото." },
  { initials: "РП", name: "Роман П.", service: "Оформление бороды", barber: "Илья Раду", quote: "Хорошее место, отличный кофе и ровно тот результат, за которым возвращаешься. Уже записал следующий визит." },
];

const womenServices = [
  { name: "Женская стрижка", detail: "Форма, мытьё и укладка по вашему ритму", duration: "60 мин", price: 450 },
  { name: "Стрижка и укладка", detail: "Форма с брашингом или мягкой волной", duration: "75 мин", price: 650 },
  { name: "Укладка", detail: "Объём, гладкость или локоны на каждый день", duration: "45 мин", price: 350 },
  { name: "Окрашивание в один тон", detail: "Подбор оттенка и бережное окрашивание", duration: "120 мин", price: 1100 },
  { name: "Окрашивание корней", detail: "Обновление цвета с точным попаданием в тон", duration: "90 мин", price: 750 },
  { name: "Сложное окрашивание", detail: "Балаяж, AirTouch или индивидуальная техника", duration: "от 210 мин", price: 2200, priceLabel: "от 2 200" },
  { name: "Химическая завивка", detail: "Мягкие локоны и консультация по уходу", duration: "от 180 мин", price: 1800, priceLabel: "от 1 800" },
  { name: "Восстанавливающий уход", detail: "Увлажнение, гладкость и защита длины", duration: "60 мин", price: 700 },
];

const womenBarbers = [
  { name: "Алина Миронова", role: "Стилист · 9 лет опыта", specialty: "Стрижка и форма", image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=82", bio: "Помогает найти форму, которая естественно ложится и остаётся удобной в повседневной укладке.", portfolio: [["Форма на каждый день", "Стрижка с учётом текстуры и привычек"], ["Мягкие слои", "Лёгкое движение и сохранение длины"], ["Укладка", "Естественный объём без перегруженных средств"]] },
  { name: "София Рошка", role: "Колорист · 7 лет опыта", specialty: "Цвет и сложные техники", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=82", bio: "Подбирает оттенок вместе с гостем и бережно работает со сложными техниками окрашивания.", portfolio: [["Мягкое осветление", "Плавные переходы и естественный результат"], ["Окрашивание в тон", "Ровный оттенок с учётом исходной базы"], ["Обновление цвета", "Аккуратная работа с корнями и длиной"]] },
  { name: "Елена Кожокару", role: "Стилист · 5 лет опыта", specialty: "Укладка и уход", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=82", bio: "Подбирает уход и укладки, которые поддерживают здоровье волос и подходят вашему ритму.", portfolio: [["Мягкие волны", "Подвижная укладка с естественной текстурой"], ["Гладкая укладка", "Блеск и аккуратная форма"], ["Восстанавливающий уход", "Подбор ухода под состояние волос"]] },
];

const womenReviews = [
  { initials: "МС", name: "Мария С.", service: "Сложное окрашивание", barber: "София Рошка", quote: "Наконец нашла колориста, который сначала слушает, а потом предлагает. Цвет получился очень естественным, волосы мягкие." },
  { initials: "ЕК", name: "Екатерина К.", service: "Стрижка и укладка", barber: "Алина Миронова", quote: "Показала фото, обсудили, что подойдёт моей длине — и сделали даже лучше. Укладка продержалась весь вечер." },
  { initials: "НП", name: "Наталья П.", service: "Восстанавливающий уход", barber: "Елена Кожокару", quote: "Тихое, красивое место. Всё объяснили по уходу и не навязывали лишнего. Уже записалась снова." },
];

const isWomenPage = document.body.dataset.page === "women";
const services = isWomenPage ? womenServices : menServices;
const barbers = isWomenPage ? womenBarbers : menBarbers;
const reviews = isWomenPage ? womenReviews : menReviews;

const serviceList = document.getElementById("service-list");
const teamGrid = document.getElementById("team-grid");
const reviewGrid = document.getElementById("review-grid");

serviceList.innerHTML = services.map((service, index) => `<article class="service-row" data-reveal>
  <span class="service-number">0${index + 1}</span>
  <div><h3>${service.name}</h3><p>${service.detail}</p></div>
  <span class="service-duration">${service.duration}</span>
  <strong class="service-price">${service.priceLabel || service.price} MDL</strong>
  <button class="service-book" type="button" data-book data-service="${service.name}" aria-label="Записаться: ${service.name}">↗</button>
</article>`).join("");

teamGrid.innerHTML = barbers.map((barber, index) => `<button class="team-card" type="button" data-reveal data-barber-profile="${index}" aria-haspopup="dialog" aria-label="Открыть профиль мастера: ${barber.name}">
  <div class="team-photo-wrap"><img class="team-photo" src="${barber.image}" alt="${barber.name}, ${isWomenPage ? "стилист" : "барбер"}" loading="lazy" /><span class="team-index">МАСТЕР / 0${index + 1}</span></div>
  <span class="team-info"><span><span class="team-name">${barber.name}</span><span class="team-role">${barber.role}</span></span><span class="team-specialty">${barber.specialty}</span></span>
  <span class="team-open-label">Портфолио и отзывы <span aria-hidden="true">↗</span></span>
</button>`).join("");

reviewGrid.innerHTML = reviews.map((review) => `<article class="review-card" data-reveal>
  <div class="review-stars" aria-label="5 из 5">★★★★★</div>
  <blockquote class="review-quote">«${review.quote}»</blockquote>
  <div class="review-author"><span class="review-avatar" aria-hidden="true">${review.initials}</span><span><b>${review.name}</b><small>${review.service}</small></span></div>
</article>`).join("");

const profileDialog = document.createElement("dialog");
profileDialog.className = "profile-dialog";
profileDialog.setAttribute("aria-label", "Профиль мастера");
profileDialog.innerHTML = `<button class="profile-close" type="button" aria-label="Закрыть профиль">×</button><div class="profile-layout"><div class="profile-portrait"><img alt="" /><span class="profile-index"></span></div><div class="profile-content"><p class="eyebrow profile-kicker"></p><h2 class="profile-name"></h2><p class="profile-bio"></p><div class="profile-tags"></div><h3>Портфолио</h3><div class="profile-portfolio"></div><h3>Отзывы клиентов</h3><div class="profile-reviews"></div><button class="button button-accent profile-book" type="button">Записаться к мастеру <span>↗</span></button><p class="profile-note">Данные профилей и отзывы — часть концепта сайта.</p></div></div>`;
document.body.append(profileDialog);
const profileClose = profileDialog.querySelector(".profile-close");
const profileBook = profileDialog.querySelector(".profile-book");
let activeProfileBarber = null;

function openBarberProfile(barber, index, trigger) {
  activeProfileBarber = barber;
  profileDialog.querySelector(".profile-portrait img").src = barber.image;
  profileDialog.querySelector(".profile-portrait img").alt = `${barber.name}, портрет мастера`;
  profileDialog.querySelector(".profile-index").textContent = `МАСТЕР / 0${index + 1}`;
  profileDialog.querySelector(".profile-kicker").textContent = isWomenPage ? "ЧЕРТА · HAIR STUDIO" : "ЧЕРТА · BARBER STUDIO";
  profileDialog.querySelector(".profile-name").textContent = barber.name;
  profileDialog.querySelector(".profile-bio").textContent = barber.bio;
  profileDialog.querySelector(".profile-tags").innerHTML = `<span>${barber.role}</span><span>${barber.specialty}</span>`;
  profileDialog.querySelector(".profile-portfolio").innerHTML = barber.portfolio.map(([title, detail], itemIndex) => `<article class="portfolio-item"><span>0${itemIndex + 1}</span><div><b>${title}</b><p>${detail}</p></div></article>`).join("");
  const barberReviews = reviews.filter((review) => review.barber === barber.name);
  profileDialog.querySelector(".profile-reviews").innerHTML = barberReviews.length
    ? barberReviews.map((review) => `<blockquote class="profile-review"><div class="review-stars" aria-label="5 из 5">★★★★★</div><p>«${review.quote}»</p><footer><b>${review.name}</b><span>${review.service}</span></footer></blockquote>`).join("")
    : `<p class="profile-empty">Пока нет отзывов.</p>`;
  profileBook.dataset.barber = barber.name;
  profileDialog.showModal();
  const dialogRect = profileDialog.getBoundingClientRect();
  const triggerRect = trigger.getBoundingClientRect();
  profileDialog.style.setProperty("--origin-x", `${triggerRect.left + triggerRect.width / 2 - dialogRect.left}px`);
  profileDialog.style.setProperty("--origin-y", `${triggerRect.top + triggerRect.height / 2 - dialogRect.top}px`);
  profileDialog.classList.remove("is-opening");
  void profileDialog.offsetWidth;
  profileDialog.classList.add("is-opening");
  profileClose.focus();
  profileDialog.returnFocus = trigger;
}

teamGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-barber-profile]");
  if (!card) return;
  const index = Number(card.dataset.barberProfile);
  openBarberProfile(barbers[index], index, card);
});
profileClose.addEventListener("click", () => profileDialog.close());
profileDialog.addEventListener("animationend", (event) => {
  if (event.target === profileDialog) profileDialog.classList.remove("is-opening");
});
profileDialog.addEventListener("click", (event) => {
  if (event.target === profileDialog) profileDialog.close();
});
profileDialog.addEventListener("close", () => profileDialog.returnFocus?.focus());
profileBook.addEventListener("click", () => {
  const returnTarget = profileDialog.returnFocus;
  profileDialog.returnFocus = null;
  profileDialog.close();
  if (activeProfileBarber) barberSelect.value = activeProfileBarber.name;
  setBookingOpen(true, returnTarget);
});

const bookingBackdrop = document.getElementById("booking-backdrop");
const bookingModal = bookingBackdrop.querySelector(".booking-modal");
const bookingForm = document.getElementById("booking-form");
const serviceSelect = bookingForm.elements.service;
const barberSelect = bookingForm.elements.barber;
serviceSelect.innerHTML = `<option value="">Выберите услугу</option>${services.map((service) => {
  const price = service.priceLabel || service.price.toLocaleString("ru-RU");
  return `<option value="${service.name}">${service.name} — ${price} MDL</option>`;
}).join("")}`;
barberSelect.innerHTML = `<option value="">Выберите мастера</option>${barbers.map((barber) => `<option>${barber.name}</option>`).join("")}`;
const toast = document.getElementById("toast");
let toastTimer;

document.addEventListener("click", (event) => {
  const pageLink = event.target.closest("[data-page-transition]");
  if (!pageLink || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  const destination = new URL(pageLink.href, window.location.href);
  destination.searchParams.set("theme", "blend");
  document.documentElement.classList.add("theme-leaving");
  const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 850;
  window.setTimeout(() => window.location.assign(destination.href), delay);
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

let bookingReturnFocus = null;
function setBookingOpen(open, trigger = document.activeElement) {
  bookingBackdrop.hidden = !open;
  document.body.classList.toggle("modal-open", open);
  if (open) {
    bookingReturnFocus = trigger;
    const modalRect = bookingModal.getBoundingClientRect();
    const triggerRect = trigger?.getBoundingClientRect();
    bookingModal.style.setProperty("--origin-x", triggerRect ? `${triggerRect.left + triggerRect.width / 2 - modalRect.left}px` : "50%");
    bookingModal.style.setProperty("--origin-y", triggerRect ? `${triggerRect.top + triggerRect.height / 2 - modalRect.top}px` : "50%");
    bookingModal.classList.remove("is-opening");
    void bookingModal.offsetWidth;
    bookingModal.classList.add("is-opening");
    bookingForm.querySelector("select").focus();
  } else {
    bookingReturnFocus?.focus();
    bookingReturnFocus = null;
  }
}

document.addEventListener("click", (event) => {
  const bookButton = event.target.closest("[data-book]");
  if (bookButton) {
    if (bookButton.dataset.service) {
      const option = [...serviceSelect.options].find((item) => item.textContent.startsWith(bookButton.dataset.service));
      if (option) serviceSelect.value = option.value;
    }
    setBookingOpen(true, bookButton);
  }
});

document.getElementById("booking-close").addEventListener("click", () => setBookingOpen(false));
bookingModal.addEventListener("animationend", (event) => {
  if (event.target === bookingModal) bookingModal.classList.remove("is-opening");
});
bookingBackdrop.addEventListener("click", (event) => {
  if (event.target === bookingBackdrop) setBookingOpen(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!bookingBackdrop.hidden) setBookingOpen(false);
    closeNavigation();
  }
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const booking = new FormData(bookingForm);
  const name = String(booking.get("name")).trim();
  const service = String(booking.get("service"));
  const date = String(booking.get("date"));
  const time = String(booking.get("time"));
  setBookingOpen(false);
  bookingForm.reset();
  showToast(`${name}, выбрано: ${service}, ${date} в ${time}. Это только демо-запись.`);
});

const bookingDate = document.getElementById("booking-date");
const today = new Date();
bookingDate.min = new Date(today.getTime() - today.getTimezoneOffset() * 60_000).toISOString().slice(0, 10);

const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");
function closeNavigation() {
  mainNav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}
navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeNavigation();
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const anime = window.anime;
if (anime && !prefersReducedMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    const visible = entries.filter((entry) => entry.isIntersecting).map((entry) => entry.target);
    if (!visible.length) return;
    visible.forEach((element) => observer.unobserve(element));
    anime.animate(visible, {
      opacity: [0, 1],
      y: [8, 0],
      delay: anime.stagger(95),
      duration: 860,
      ease: "out(1.6)",
      onComplete: () => visible.forEach((element) => {
        element.removeAttribute("data-reveal");
        element.style.removeProperty("opacity");
        element.style.removeProperty("transform");
      }),
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });
  document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));
} else {
  document.querySelectorAll("[data-reveal]").forEach((element) => element.removeAttribute("data-reveal"));
}

document.querySelectorAll(".team-photo").forEach((image) => image.addEventListener("error", () => {
  image.parentElement.classList.add("photo-missing");
}, { once: true }));
