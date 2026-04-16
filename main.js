/* ══════════════════════════════════════════
   PACARI — main.js  (Mobile Enhanced)
   ══════════════════════════════════════════ */

// ── Navbar scroll effect ──
const navbar   = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// ── Hamburger / Mobile Menu ──
function openMenu() {
    mobileMenu.classList.add('open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
    mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
});

// Close menu when a mobile nav link is clicked
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
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
        ingredients: ['200g Barra Raw 70% Pacari', '150g Harina Almendra', '100g Azúcar de Coco', '3 Huevos'],
        steps: [
            'Procesar la harina de almendra con el azúcar.',
            'Derretir el chocolate Pacari a baño maría.',
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
        ingredients: ['3 Aguacates maduros', '100g Cacao en Polvo', 'Sirope de Agave', 'Esencia de vainilla'],
        steps: [
            'Licuar los aguacates limpios.',
            'Agregar el cacao en polvo y el sirope.',
            'Refrigerar por 2 horas antes de servir.'
        ]
    },
    {
        id: 3,
        title: 'Brownies Veganos de Avellana',
        category: 'postres',
        image: './medios/receta-brownies.jpg.png',
        time: '40 min',
        product: 'Crema de Avellana con Cacao',
        ingredients: ['1 Pote Crema de Avellanas', '2 Plátanos maduros', 'Nueces troceadas'],
        steps: [
            'Majar los plátanos hasta hacer puré.',
            'Mezclar intensamente con la crema de avellanas Pacari.',
            'Hornear por 20 min y dejar enfriar.'
        ]
    },
    {
        id: 4,
        title: 'Chocolate Caliente Especiado',
        category: 'bebidas',
        image: './medios/receta-caliente.jpg.png',
        time: '15 min',
        product: 'Chocolate en Polvo Orgánico',
        ingredients: ['2 cucharadas Chocolate en polvo', '1 taza de bebida vegetal', 'Canela', 'Cardamomo'],
        steps: [
            'Calentar la bebida vegetal a fuego lento.',
            'Añadir las especias y el chocolate en polvo.',
            'Remover con molinillo hasta hacer espuma.'
        ]
    },
    {
        id: 5,
        title: 'Smoothie Energético de Cacao',
        category: 'bebidas',
        image: './medios/receta-smoothie.jpg.png',
        time: '5 min',
        product: 'Nibs de Cacao',
        ingredients: ['1 plátano congelado', 'Leche de almendras', 'Nibs de Cacao', 'Maca en polvo'],
        steps: [
            'Colocar la fruta y la leche en la licuadora.',
            'Agregar maca y batir.',
            'Servir añadiendo abundantes Nibs encima por su textura crujiente.'
        ]
    },
    {
        id: 6,
        title: 'Mocha Helado con Guayusa',
        category: 'bebidas',
        image: './medios/receta-mocha.jpg.png',
        time: '10 min',
        product: 'Gotas de Chocolate',
        ingredients: ['1 shot de té de Guayusa concentrado', 'Gotas de chocolate derretidas', 'Leche fría', 'Hielo'],
        steps: [
            'Derretir gotas de chocolate en el fondo del vaso.',
            'Llenar con hielo y verter la Guayusa.',
            'Completar suavemente con leche fría.'
        ]
    },
    {
        id: 7,
        title: 'Risotto con Nibs de Cacao',
        category: 'gourmet',
        image: './medios/receta-risotto.jpg.png',
        time: '35 min',
        product: 'Nibs de Cacao',
        ingredients: ['200g Arroz Arborio', '50g Nibs de Cacao', 'Caldo de vegetales', 'Champiñones'],
        steps: [
            'Sofreír champiñones y agregar el arroz.',
            'Añadir caldo poco a poco sin dejar de remover.',
            'Emplatar y espolvorear Nibs.'
        ]
    },
    {
        id: 8,
        title: 'Salteado Thai Cacao Glaze',
        category: 'gourmet',
        image: './medios/receta-thai.jpg.png',
        time: '25 min',
        product: 'Barra 60% Hierbaluisa',
        ingredients: ['Verduras mixtas', 'Fideos de Arroz', 'Barra de cacao derretida', 'Salsa de soja'],
        steps: [
            'Saltear verduras y fideos en un wok.',
            'Diluir el chocolate con soja para crear el glaseado.',
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
        ingredients: ['Medallones de Lomo', 'Cebolla blanca', 'Barra 100%'],
        steps: [
            'Sellar la carne a gusto.',
            'Crear reducción de cebolla, agregar trozos de cacao 100% al final.',
            'Bañar la carne en la salsa oscura.'
        ]
    },
    {
        id: 10,
        title: 'Cata Inicial: Los Orígenes',
        category: 'cata',
        image: './medios/cata-origenes.jpg.png',
        time: 'Variable',
        product: 'Colección Origen Exclusivo',
        ingredients: ['Kit de Degustación Pacari', 'Agua a temperatura ambiente', 'Manzana verde'],
        steps: [
            'Observa el brillo de la barra.',
            'Escucha el "snap" al partir.',
            'Deja derretir el trozo bajo la lengua.'
        ]
    },
    {
        id: 11,
        title: 'Maridaje Quesos & Cacao',
        category: 'cata',
        image: './medios/cata-quesos.jpg.png',
        time: 'Variable',
        product: 'Tableta 85% Cacao',
        ingredients: ['Queso Azul', 'Queso Brie', 'Barra Pacari 85%'],
        steps: [
            'Prueba un bocado de queso fuerte.',
            'Combínalo con un trozo pequeño de cacao amargo.',
            'Descubre cómo el cacao saca dulzor de lo salado.'
        ]
    },
    {
        id: 12,
        title: 'Cata Sensorial Completa',
        category: 'cata',
        image: './medios/cata-aromatica.jpg.png',
        time: 'Variable',
        product: 'Surtido Completo',
        ingredients: ['Caja Degustación', 'Venda para ojos'],
        steps: [
            'Cierra los ojos.',
            'Huele el cacao e intenta definir la tierra de origen.',
            'Al morder, cuenta los segundos antes de que el sabor estalle.'
        ]
    }
];

// ═══════════════════════════════════════════
//  RENDER RECIPES
// ═══════════════════════════════════════════
const recipesGrid = document.getElementById('recipes-grid');
const filterBtns  = document.querySelectorAll('.filter-btn');

function renderRecipes(filter = 'all') {
    recipesGrid.innerHTML = '';
    const filtered = filter === 'all' ? recipes : recipes.filter(r => r.category === filter);

    filtered.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', recipe.title);
        card.innerHTML = `
            <div class="recipe-img-container">
                <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
            </div>
            <div class="recipe-content">
                <span class="recipe-tag">${recipe.category.toUpperCase()}</span>
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-meta">⏱ ${recipe.time} &middot; ⭐ ${recipe.product}</p>
            </div>
        `;
        card.addEventListener('click', () => openModal(recipe));
        card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') openModal(recipe); });
        recipesGrid.appendChild(card);
    });
}

renderRecipes();

filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        renderRecipes(e.currentTarget.dataset.filter);
    });
});

// ═══════════════════════════════════════════
//  MODAL
// ═══════════════════════════════════════════
const modal         = document.getElementById('recipe-modal');
const modalBody     = document.getElementById('modal-body');
const closeModalBtn = document.getElementById('close-modal');

function openModal(recipe) {
    modalBody.innerHTML = `
        <div class="modal-body-layout">
            <div>
                <img src="${recipe.image}" alt="${recipe.title}" class="modal-img" loading="lazy">
            </div>
            <div>
                <h2 style="color:var(--color-primary);margin-bottom:0.75rem;font-family:var(--font-heading)">${recipe.title}</h2>
                <p style="font-size:0.9rem;color:#666;margin-bottom:1.25rem"><strong>Producto destacado:</strong> ${recipe.product} &nbsp;·&nbsp; ⏱ ${recipe.time}</p>
                <h4 style="margin-bottom:0.5rem;color:var(--color-primary)">Ingredientes</h4>
                <ul style="padding-left:1.25rem;margin-bottom:1.25rem">
                    ${recipe.ingredients.map(i => `<li style="margin-bottom:0.3rem">${i}</li>`).join('')}
                </ul>
                <h4 style="margin-bottom:0.5rem;color:var(--color-primary)">Preparación</h4>
                <ol style="padding-left:1.25rem">
                    ${recipe.steps.map(s => `<li style="margin-bottom:0.5rem">${s}</li>`).join('')}
                </ol>
                <a href="https://paccari.com/tienda/" target="_blank" rel="noopener" class="btn btn-primary" style="margin-top:2rem;width:100%;text-align:center;display:flex">Comprar en Pacari →</a>
            </div>
        </div>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// ═══════════════════════════════════════════
//  GIFT ASSISTANT WIZARD
// ═══════════════════════════════════════════
const wizard = { occasion: null, budget: null };

const step1        = document.getElementById('step-1');
const step2        = document.getElementById('step-2');
const stepResults  = document.getElementById('step-results');
const resultsContainer = document.getElementById('gift-results-container');
const restartBtn   = document.getElementById('restart-wizard');
const dots         = document.querySelectorAll('.progress-dot');

function updateProgress(index) {
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

const giftSuggestions = {
    bajo: [
        { name: 'Barra Hierbaluisa + Nibs', desc: 'Detalle fresco y andino.',      img: './medios/regalo-bajo-1.jpg.png' },
        { name: 'Barra Rosa Andina',         desc: 'Regalo floral delicado.',        img: './medios/regalo-bajo-2.jpg.png' },
        { name: 'Barra Sal de Cuzco',        desc: 'Experiencia salino-dulce.',      img: './medios/regalo-bajo-3.jpg.png' },
        { name: 'Nibs Gourmet',              desc: 'Para añadir textura crocante.',  img: './medios/regalo-bajo-4.jpg.png' },
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

document.querySelectorAll('.occasion-options .option-card').forEach(btn => {
    btn.addEventListener('click', () => {
        wizard.occasion = btn.dataset.occasion;
        step1.classList.remove('active');
        step2.classList.add('active');
        updateProgress(1);
    });
});

document.querySelectorAll('.budget-options .option-card').forEach(btn => {
    btn.addEventListener('click', () => {
        wizard.budget = btn.dataset.budget;
        step2.classList.remove('active');
        showResults();
        updateProgress(2);
    });
});

function showResults() {
    const suggestions = giftSuggestions[wizard.budget] || [];
    resultsContainer.innerHTML = '';

    suggestions.forEach(item => {
        const div = document.createElement('div');
        div.className = 'gift-card';
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}" loading="lazy">
            <h4>${item.name}</h4>
            <p>${item.desc}</p>
            <a href="https://paccari.com/tienda/" target="_blank" rel="noopener" class="buy-btn">Ver Detalles</a>
        `;
        resultsContainer.appendChild(div);
    });

    stepResults.classList.add('active');
}

restartBtn.addEventListener('click', () => {
    wizard.occasion = null;
    wizard.budget   = null;
    stepResults.classList.remove('active');
    step1.classList.add('active');
    updateProgress(0);
});
