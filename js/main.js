/* Royal Taj Restaurant — menu data + interactions */
(function () {
  'use strict';

  var WA = 'https://wa.me/923446445444?text=';

  /* ---------------- MENU DATA (34 items) ---------------- */
  var MENU = [
    /* BBQ */
    { cat: 'bbq', name: 'Chicken Tikka', desc: 'Overnight masala marinade, finished over real charcoal.', price: 420, tag: 'Most Loved' },
    { cat: 'bbq', name: 'Chicken Malai Boti', desc: 'Creamy, mild and melt-soft — family favourite.', price: 520 },
    { cat: 'bbq', name: 'Chicken Behari Boti', desc: 'Smoky Behari masala, charred at the edges.', price: 550 },
    { cat: 'bbq', name: 'Beef Seekh Kabab (4 pc)', desc: 'Hand-minced beef, served with onion and raita.', price: 480 },
    { cat: 'bbq', name: 'Chicken Seekh Kabab (4 pc)', desc: 'Juicy minced chicken skewers, light spice.', price: 450 },
    { cat: 'bbq', name: 'Beef Chapli Kabab (2 pc)', desc: 'Peshawari style, tomato and green chilli.', price: 380 },
    { cat: 'bbq', name: 'Royal BBQ Platter', desc: 'Tikka, malai boti and seekh kabab — serves 3 to 4.', price: 1850, tag: 'Family' },
    /* Karahi */
    { cat: 'karahi', name: 'Chicken Karahi (Half)', desc: 'Tomato, ginger and green chilli, desi ghee tarka.', price: 950 },
    { cat: 'karahi', name: 'Chicken Karahi (Full)', desc: 'Our wok workhorse — made after you order.', price: 1650 },
    { cat: 'karahi', name: 'Mutton Karahi (Half)', desc: 'Tender mutton, slow-cooked in the karahi.', price: 1250 },
    { cat: 'karahi', name: 'Mutton Karahi (Full)', desc: 'The Stadium Road legend. Worth every rupee.', price: 2300, tag: 'Signature' },
    { cat: 'karahi', name: 'White Chicken Karahi (Full)', desc: 'Cream, black pepper and green chilli — no tomato.', price: 1750 },
    { cat: 'karahi', name: 'Chicken Achari Karahi (Full)', desc: 'Tangy achar masala kick for pickle lovers.', price: 1700 },
    /* Chinese */
    { cat: 'chinese', name: 'Chicken Chow Mein', desc: 'Smoky wok toss with crunchy vegetables.', price: 650, tag: 'Most Loved' },
    { cat: 'chinese', name: 'Chicken Fried Rice', desc: 'Classic desi-Chinese, egg ribbons on top.', price: 550 },
    { cat: 'chinese', name: 'Chicken Manchurian with Rice', desc: 'Gravy-rich manchurian over steamed rice.', price: 750 },
    { cat: 'chinese', name: 'Kung Pao Chicken', desc: 'Peanuts, dried chilli, schezwan heat.', price: 820 },
    { cat: 'chinese', name: 'Hot & Sour Soup', desc: 'Thick, peppery, proper winter comfort.', price: 350 },
    /* Desi */
    { cat: 'desi', name: 'Chicken Biryani', desc: 'Proper Karachi masala, aloo wala, with raita.', price: 320, tag: 'Most Loved' },
    { cat: 'desi', name: 'Beef Biryani', desc: 'Heavier masala, tender beef chunks.', price: 380 },
    { cat: 'desi', name: 'Beef Nihari', desc: 'Slow-cooked overnight, ginger and lemon on the side.', price: 550 },
    { cat: 'desi', name: 'Daal Fry Tarka', desc: 'Yellow daal with a sizzling garlic tarka.', price: 380 },
    { cat: 'desi', name: 'Mix Sabzi', desc: 'Seasonal vegetables, homestyle masala.', price: 420 },
    { cat: 'desi', name: 'Chicken Haleem', desc: 'Thick, wheaty, topped with fried onion.', price: 380 },
    /* Breads */
    { cat: 'breads', name: 'Tandoori Roti', desc: 'Whole wheat, straight from the clay oven.', price: 60 },
    { cat: 'breads', name: 'Tandoori Naan', desc: 'Soft, blistered, brushed with ghee.', price: 80 },
    { cat: 'breads', name: 'Roghni Naan', desc: 'Sesame-topped, slightly sweet.', price: 100 },
    { cat: 'breads', name: 'Garlic Naan', desc: 'Garlic butter and coriander.', price: 130 },
    { cat: 'breads', name: 'Cheese Naan', desc: 'Stuffed with molten cheese — kids love it.', price: 180 },
    /* Drinks & Dessert */
    { cat: 'drinks', name: 'Fresh Lime Soda', desc: 'Sweet, salted or mixed — your call.', price: 180 },
    { cat: 'drinks', name: 'Mint Margarita', desc: 'Crushed mint and lime over ice.', price: 220 },
    { cat: 'drinks', name: 'Cold Drink (Can)', desc: 'Chilled can of your choice.', price: 150 },
    { cat: 'drinks', name: 'Doodh Patti', desc: 'Slow-brewed milky chai, karak style.', price: 150 },
    { cat: 'drinks', name: 'Gulab Jamun (2 pc)', desc: 'Warm, syrupy, straight from the kadhai.', price: 200 },
    { cat: 'drinks', name: 'Kulfi Falooda', desc: 'Traditional kulfi over falooda and basil seeds.', price: 350 }
  ];

  var grid = document.getElementById('menuGrid');

  function orderLink(item) {
    var text = 'Assalam-o-Alaikum! I want to order ' + item.name +
               ' (Rs ' + item.price.toLocaleString('en-PK') + ') from Royal Taj.';
    return WA + encodeURIComponent(text);
  }

  function renderMenu(filter) {
    grid.innerHTML = '';
    var items = MENU.filter(function (m) {
      return filter === 'all' || m.cat === filter;
    });
    items.forEach(function (item) {
      var card = document.createElement('article');
      card.className = 'menu-item';
      var tag = item.tag ? '<span class="menu-tag">' + item.tag + '</span>' : '';
      card.innerHTML =
        '<div class="menu-top"><h3>' + item.name + '</h3>' +
        '<span class="menu-price">Rs ' + item.price.toLocaleString('en-PK') + '</span></div>' +
        '<p class="menu-desc">' + item.desc + '</p>' + tag;
      grid.appendChild(card);
    });
  }

  /* ---------------- TABS ---------------- */
  var tabs = document.querySelectorAll('.tab');
  function setFilter(filter) {
    tabs.forEach(function (t) {
      var on = t.getAttribute('data-filter') === filter;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    renderMenu(filter);
  }
  tabs.forEach(function (t) {
    t.addEventListener('click', function () { setFilter(t.getAttribute('data-filter')); });
  });
  /* Footer menu links jump to a specific filter */
  document.querySelectorAll('[data-goto-filter]').forEach(function (a) {
    a.addEventListener('click', function () { setFilter(a.getAttribute('data-goto-filter')); });
  });

  /* ---------------- MOBILE NAV ---------------- */
  var nav = document.getElementById('siteNav');
  var toggle = document.getElementById('navToggle');
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  document.querySelectorAll('#navLinks a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------------- STICKY NAV SHADOW ---------------- */
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------------- REVEAL ON SCROLL ---------------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------------- FOOTER YEAR ---------------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------------- INIT ---------------- */
  renderMenu('all');
})();
