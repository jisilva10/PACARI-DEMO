/* ══════════════════════════════════════════
   PACARI — main.js  (Mobile-First PWA)
   ══════════════════════════════════════════ */

// ── PWA: Register Service Worker ──
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
}

// ── Refs ──
const navbar       = document.getElementById('navbar');
const hamburger    = document.getElementById('hamburger');
const mobileMenu   = document.getElementById('mobile-menu');
const menuOverlay  = document.getElementById('menu-overlay');
const menuClose    = document.getElementById('mobile-menu-close');

// ── Navbar scroll effect ──
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── Mobile Menu ──
function openMenu() {
    mobileMenu.classList.add('is-open');
    menuOverlay.classList.add('is-open');
    hamburger.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    mobileMenu.classList.remove('is-open');
    menuOverlay.classList.remove('is-open');
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', () =>
    mobileMenu.classList.contains('is-open') ? closeMenu() : openMenu()
);

menuClose.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);

document.querySelectorAll('.mobile-nav-link').forEach(link =>
    link.addEventListener('click', closeMenu)
);

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeMenu(); closeModal(); }
});

// ═══════════════════════════════════════════
//  RECIPES DATA
// ═══════════════════════════════════════════
const recipes = [
    {
        id: 1,
        title: 'Tarta Orgánica de Cacao Intenso',
        category: 'postres',
        image: './medios/receta-tarta.jpg.png',
        time: '45 min',
        product: 'Barra Raw 70%',
        ingredients: ['200g Barra Raw 70% Pacari', '150g Harina de Almendra', '100g Azúcar de Coco', '3 Huevos'],
        steps: [
            'Procesar la harina de almendra con el azúcar de coco hasta integrar.',
            'Derretir el chocolate Pacari a baño maría, cuidando la temperatura.',
            'Mezclar todos los ingredientes y hornear a 180°C por 25 minutos.'
        ]
    },
    {
        id: 2,
        title: 'Mousse de Chocolate Raw',
        category: 'postres',
        image: './medios/receta-mousse.jpg.png',
        time: '20 min',
        product: 'Polvo de Cacao Oscuro',
        ingredients: ['3 Aguacates maduros', '100g Cacao en Polvo Pacari', 'Sirope de Agave al gusto', 'Esencia de vainilla'],
        steps: [
            'Licuar los aguacates pelados hasta obtener crema suave.',
            'Agregar el cacao en polvo y el sirope, mezclar bien.',
            'Refrigerar por 2 horas antes de servir con frutos rojos.'
        ]
    },
    {
        id: 3,
        title: 'Brownies Veganos de Avellana',
        category: 'postres',
        image: './medios/receta-brownies.jpg.png',
        time: '40 min',
        product: 'Crema de Avellana con Cacao',
        ingredients: ['1 Pote Crema de Avellanas Pacari', '2 Plátanos maduros', 'Nueces troceadas al gusto'],
        steps: [
            'Majar los plátanos hasta hacer puré homogéneo.',
            'Mezclar intensamente con la crema de avellanas Pacari.',
            'Hornear 20 min a 175°C y dejar enfriar antes de cortar.'
        ]
    },
    {
        id: 4,
        title: 'Chocolate Caliente Especiado',
        category: 'bebidas',
        image: './medios/receta-caliente.jpg.png',
        time: '15 min',
        product: 'Chocolate en Polvo Orgánico',
        ingredients: ['2 cucharadas Chocolate en polvo Pacari', '1 taza bebida vegetal', 'Canela en rama', 'Cardamomo molido'],
        steps: [
            'Calentar la bebida vegetal a fuego lento con la canela.',
            'Añadir las especias y el chocolate en polvo.',
            'Remover con molinillo hasta crear espuma sedosa.'
        ]
    },
    {
        id: 5,
        title: 'Smoothie Energético de Cacao',
        category: 'bebidas',
        image: './medios/receta-smoothie.jpg.png',
        time: '5 min',
        product: 'Nibs de Cacao',
        ingredients: ['1 plátano congelado', 'Leche de almendras', 'Nibs de Cacao Pacari', 'Maca en polvo'],
        steps: [
            'Colocar el plátano y la leche de almendras en la licuadora.',
            'Agregar maca en polvo y batir hasta textura cremosa.',
            'Servir con abundantes Nibs encima por su textura crujiente.'
        ]
    },
    {
        id: 6,
        title: 'Mocha Helado con Guayusa',
        category: 'bebidas',
        image: './medios/receta-mocha.jpg.png',
        time: '10 min',
        product: 'Gotas de Chocolate',
        ingredients: ['1 shot té Guayusa concentrado', 'Gotas de chocolate Pacari derretidas', 'Leche fría', 'Hielo'],
        steps: [
            'Derretir gotas de chocolate Pacari en el fondo del vaso.',
            'Llenar con hielo y verter la Guayusa concentrada.',
            'Completar suavemente con leche fría y servir inmediatamente.'
        ]
    },
    {
        id: 7,
        title: 'Risotto con Nibs de Cacao',
        category: 'gourmet',
        image: './medios/receta-risotto.jpg.png',
        time: '35 min',
        product: 'Nibs de Cacao',
        ingredients: ['200g Arroz Arborio', '50g Nibs de Cacao Pacari', 'Caldo de vegetales', 'Champiñones frescos'],
        steps: [
            'Sofreír champiñones y agregar el arroz hasta nacarar.',
            'Añadir caldo caliente poco a poco sin dejar de remover.',
            'Emplatar y espolvorear generosamente Nibs Pacari.'
        ]
    },
    {
        id: 8,
        title: 'Salteado Thai Cacao Glaze',
        category: 'gourmet',
        image: './medios/receta-thai.jpg.png',
        time: '25 min',
        product: 'Barra 60% Hierbaluisa',
        ingredients: ['Verduras mixtas', 'Fideos de Arroz', 'Barra de cacao Pacari derretida', 'Salsa de soja'],
        steps: [
            'Saltear verduras y fideos en un wok a fuego alto.',
            'Diluir el chocolate Pacari con soja para crear el glaseado.',
            'Añadirlo al wok 1 minuto antes de apagar el fuego.'
        ]
    },
    {
        id: 9,
        title: 'Lomo en Salsa Amarga',
        category: 'gourmet',
        image: './medios/receta-lomo.jpg.png',
        time: '50 min',
        product: 'Barra 100% Cacao',
        ingredients: ['Medallones de Lomo fino', 'Cebolla blanca', 'Barra 100% Cacao Pacari'],
        steps: [
            'Sellar la carne a gusto en sartén muy caliente.',
            'Crear reducción con cebolla caramelizada y trozos de cacao 100%.',
            'Bañar la carne en la salsa oscura y servir al momento.'
        ]
    },
    {
        id: 10,
        title: 'Cata Inicial: Los Orígenes',
        category: 'cata',
        image: './medios/cata-origenes.jpg.png',
        time: 'Variable',
        product: 'Colección Origen Exclusivo',
        ingredients: ['Kit de Degustación Pacari', 'Agua a temperatura ambiente', 'Manzana verde en rodajas'],
        steps: [
            'Observa el brillo y la textura superficial de la barra.',
            'Escucha el "snap" limpio al partir un trozo.',
            'Deja derretir lentamente el trozo bajo la lengua sintiendo cada nota.'
        ]
    },
    {
        id: 11,
        title: 'Maridaje Quesos & Cacao',
        category: 'cata',
        image: './medios/cata-quesos.jpg.png',
        time: 'Variable',
        product: 'Tableta 85% Cacao',
        ingredients: ['Queso Azul artesanal', 'Queso Brie maduro', 'Barra Pacari 85%'],
        steps: [
            'Prueba un bocado de queso fuerte para preparar el paladar.',
            'Combínalo inmediatamente con un trozo pequeño de cacao amargo.',
            'Descubre cómo el cacao saca la dulzura oculta de lo salado.'
        ]
    },
    {
        id: 12,
        title: 'Cata Sensorial Completa',
        category: 'cata',
        image: './medios/cata-aromatica.jpg.png',
        time: 'Variable',
        product: 'Surtido Completo',
        ingredients: ['Caja Degustación Pacari', 'Venda para ojos opcional'],
        steps: [
            'Cierra los ojos y concéntrate solo en los aromas.',
            'Huele el cacao e intenta definir la región de origen por notas.',
            'Al morder, cuenta los segundos antes de que el sabor estalle en el paladar.'
        ]
    }
];

// ═══════════════════════════════════════════
//  RENDER RECIPES
// ═══════════════════════════════════════════
const recipesGrid = document.getElementById('recipes-grid');
const filterBtns  = document.querySelectorAll('.filter-btn');

const CATEGORY_LABELS = {
    postres:  'Postres',
    bebidas:  'Bebidas',
    gourmet:  'Gourmet',
    cata:     'Cata',
};

function renderRecipes(filter = 'all') {
    recipesGrid.innerHTML = '';
    const filtered = filter === 'all' ? recipes : recipes.filter(r => r.category === filter);

    filtered.forEach(recipe => {
        const card = document.createElement('article');
        card.className = 'recipe-card';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', recipe.title);

        card.innerHTML = `
            <div class="recipe-img-wrap">
                <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
                <div class="recipe-pill">${CATEGORY_LABELS[recipe.category] || recipe.category}</div>
            </div>
            <div class="recipe-body">
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-meta">⏱ ${recipe.time} &nbsp;·&nbsp; ${recipe.product}</p>
                <span class="recipe-cta">
                    Ver receta
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
            </div>
        `;

        card.addEventListener('click', () => openModal(recipe));
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(recipe); }
        });
        recipesGrid.appendChild(card);
    });
}

renderRecipes();

filterBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        renderRecipes(e.currentTarget.dataset.filter);
    });
});

// ═══════════════════════════════════════════
//  MODAL
// ═══════════════════════════════════════════
const modal         = document.getElementById('recipe-modal');
const modalSheet    = document.getElementById('modal-sheet');
const modalBody     = document.getElementById('modal-body');
const closeModalBtn = document.getElementById('close-modal');

function openModal(recipe) {
    const isDesktop = window.innerWidth >= 1024;

    modalBody.innerHTML = `
        <div class="${isDesktop ? 'modal-recipe-layout' : ''}">
            <img src="${recipe.image}" alt="${recipe.title}" class="modal-recipe-img" loading="lazy">
            <div class="modal-recipe-details">
                <div class="modal-recipe-badge">
                    ${CATEGORY_LABELS[recipe.category] || recipe.category}
                </div>
                <h2 class="modal-recipe-title">${recipe.title}</h2>
                <div class="modal-recipe-meta">
                    <span>⏱ ${recipe.time}</span>
                    <span>⭐ ${recipe.product}</span>
                </div>

                <p class="modal-section-label">Ingredientes</p>
                <div class="modal-ingredients">
                    ${recipe.ingredients.map(i => `
                        <div class="modal-ingredient">${i}</div>
                    `).join('')}
                </div>

                <p class="modal-section-label">Preparación</p>
                <div class="modal-steps">
                    ${recipe.steps.map((s, idx) => `
                        <div class="modal-step">
                            <span class="step-num">${idx + 1}</span>
                            <span>${s}</span>
                        </div>
                    `).join('')}
                </div>

                <a href="https://paccari.com/tienda/" target="_blank" rel="noopener" class="modal-buy-btn">
                    Comprar en Pacari
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
            </div>
        </div>
    `;

    modal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('is-active');
    document.body.style.overflow = '';
}

closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

// Drag-to-dismiss on mobile
let startY = 0;
modalSheet.addEventListener('touchstart', e => { startY = e.touches[0].clientY; }, { passive: true });
modalSheet.addEventListener('touchend', e => {
    const diffY = e.changedTouches[0].clientY - startY;
    if (diffY > 80 && modalSheet.scrollTop === 0) closeModal();
}, { passive: true });

// ═══════════════════════════════════════════
//  GIFT WIZARD
// ═══════════════════════════════════════════
const wizardState = { occasion: null, budget: null };
const step1        = document.getElementById('step-1');
const step2        = document.getElementById('step-2');
const stepResults  = document.getElementById('step-results');
const resultsBox   = document.getElementById('gift-results-container');
const restartBtn   = document.getElementById('restart-wizard');
const progressFill = document.getElementById('progress-fill');
const progressDots = document.querySelectorAll('.progress-step');

function updateWizardProgress(step) {
    // 1-indexed step
    const pct = { 1: 33, 2: 66, 3: 100 };
    progressFill.style.width = pct[step] + '%';
    progressDots.forEach((dot, i) => {
        dot.classList.toggle('active', i + 1 <= step);
    });
}

document.querySelectorAll('#occasion-options .option-card').forEach(btn => {
    btn.addEventListener('click', () => {
        wizardState.occasion = btn.dataset.occasion;
        step1.classList.remove('active');
        step2.classList.add('active');
        updateWizardProgress(2);
    });
});

document.querySelectorAll('#budget-options .option-card').forEach(btn => {
    btn.addEventListener('click', () => {
        wizardState.budget = btn.dataset.budget;
        step2.classList.remove('active');
        showGiftResults();
        updateWizardProgress(3);
    });
});

const giftDB = {
    bajo: [
        { name: 'Barra Hierbaluisa + Nibs', desc: 'Detalle fresco y andino.',      img: './medios/regalo-bajo-1.jpg.png' },
        { name: 'Barra Rosa Andina',         desc: 'Regalo floral delicado.',        img: './medios/regalo-bajo-2.jpg.png' },
        { name: 'Barra Sal de Cuzco',        desc: 'Experiencia salino-dulce.',      img: './medios/regalo-bajo-3.jpg.png' },
        { name: 'Nibs Gourmet',              desc: 'Textura crocante artesanal.',    img: './medios/regalo-bajo-4.jpg.png' },
    ],
    medio: [
        { name: 'Caja Regalo Orígenes', desc: 'Muestra de diferentes regiones.', img: './medios/regalo-medio-1.jpg.png' },
        { name: 'Kit de Cata Básica',   desc: 'Aprende a catar cacao.',          img: './medios/regalo-medio-2.jpg.png' },
        { name: 'Trufas y Uvillas',     desc: 'Sensaciones frutales y cacao.',   img: './medios/regalo-medio-3.jpg.png' },
        { name: 'Pack Aventura Andina', desc: 'Sabores andinos emblemáticos.',   img: './medios/regalo-medio-4.jpg.png' },
    ],
    alto: [
        { name: 'Colección Cobre',         desc: 'Exquisita caja premium.',            img: './medios/regalo-alto-1.jpg.png' },
        { name: 'Gift Card Pacari',        desc: 'Experiencia de libre elección.',     img: './medios/regalo-alto-2.jpg.png' },
        { name: 'Club de Suscripción',     desc: 'Un regalo que llega cada mes.',      img: './medios/regalo-alto-3.jpg.png' },
        { name: 'Cesta Degustación Total', desc: 'El máximo lujo del chocolate.',      img: './medios/regalo-alto-4.jpg.png' },
    ],
};

function showGiftResults() {
    const items = giftDB[wizardState.budget] || [];
    resultsBox.innerHTML = '';

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'gift-card';
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="gift-card-img" loading="lazy">
            <div class="gift-card-body">
                <p class="gift-card-name">${item.name}</p>
                <p class="gift-card-desc">${item.desc}</p>
                <a href="https://paccari.com/tienda/" target="_blank" rel="noopener" class="gift-buy-btn">
                    Ver detalles →
                </a>
            </div>
        `;
        resultsBox.appendChild(card);
    });

    stepResults.classList.add('active');
}

restartBtn.addEventListener('click', () => {
    wizardState.occasion = null;
    wizardState.budget   = null;
    stepResults.classList.remove('active');
    step1.classList.add('active');
    updateWizardProgress(1);
});

// ── Scroll-aware nav brand color on hero ──
const brandLogo = document.getElementById('brand-logo');
function onScroll() {
    const heroH = document.getElementById('home').offsetHeight;
    if (window.scrollY > heroH * 0.75) {
        brandLogo.style.filter = 'none';
    } else {
        brandLogo.style.filter = 'brightness(10)';
    }
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ── Touch: prevent iOS rubber-band on modal ──
document.querySelectorAll('.recipe-modal, .mobile-menu').forEach(el => {
    el.addEventListener('touchmove', e => {
        if (e.target === el) e.preventDefault();
    }, { passive: false });
});
