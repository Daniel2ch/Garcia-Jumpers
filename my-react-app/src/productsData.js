/**
 * BILINGUAL PRODUCTS DATA FILE (Garcia Jumpers)
 * 
 * INSTRUCTIONS:
 * -------------------------------------------------------------
 * 1. PHOTOS: Update the "images" array for any product. Add URLs (e.g. "/images/photo.jpg").
 * 2. PRICES & DETAILS: Customize the English fields and their Spanish equivalents (*Es)
 *    to make sure changes reflect when toggling languages.
 * 3. GLOBAL LABELS: General interface text is translated in the `uiTranslations` object at the bottom.
 * -------------------------------------------------------------
 */

export const categories = [
  { id: 'all', title: 'All Products', titleEs: 'Todos los Productos' },
  { id: 'jumpers', title: 'Jumpers', titleEs: 'Inflables' },
  { id: 'tents', title: 'Tents', titleEs: 'Carpas' },
  { id: 'tables-chairs', title: 'Tables & Chairs', titleEs: 'Mesas y Sillas' },
  { id: 'decorations', title: 'Decorations', titleEs: 'Decoraciones' },
  { id: 'photobooth', title: 'Digital Photo Booth', titleEs: 'Cabina de Fotos Digital' }
];

export const products = [
  // --- TENTS ---
  {
    id: 'tent-20x20',
    name: '20x20 Tent',
    nameEs: 'Carpa 20x20',
    category: 'tents',
    price: '$XX.XX', 
    priceEs: '$XX.XX',
    priceLabel: 'Replace with your price in productsData.js',
    priceLabelEs: 'Reemplace con su precio en productsData.js',
    shortDesc: 'Spacious 20x20 tent perfect for medium-sized gatherings and backyard events.',
    shortDescEs: 'Espaciosa carpa de 20x20 perfecta para reuniones medianas y eventos de patio trasero.',
    detailedDesc: 'This is a detailed description placeholder. Replace this text in productsData.js with information about your 20x20 tent.',
    detailedDescEs: 'Este es un marcador de descripción detallada. Reemplace este texto en productsData.js con información sobre su carpa de 20x20.',
    specs: [
      'Dimensions: 20ft x 20ft',
      'Fits approx. 40-50 guests sitting',
      'Add comments or specifics here'
    ],
    specsEs: [
      'Dimensiones: 20 pies x 20 pies',
      'Capacidad aproximada de 40-50 personas sentadas',
      'Agregue comentarios o detalles específicos aquí'
    ],
    images: [
      '../images/tent2.jpeg',
      '../images/tent3.jpeg',
      '../images/tent4.jpeg'
    ]
  },
  {
    id: 'tent-26x26',
    name: '26x26 Tent',
    nameEs: 'Carpa 26x26',
    category: 'tents',
    price: '$XX.XX',
    priceEs: '$XX.XX',
    priceLabel: 'Replace with your price in productsData.js',
    priceLabelEs: 'Reemplace con su precio en productsData.js',
    shortDesc: 'A larger square canopy tent ideal for weddings, anniversaries, and parties.',
    shortDescEs: 'Una carpa cuadrada más grande ideal para bodas, aniversarios y fiestas.',
    detailedDesc: 'This is a detailed description placeholder. Replace this text in productsData.js with information about your 26x26 tent.',
    detailedDescEs: 'Este es un marcador de descripción detallada. Reemplace este texto en productsData.js con información sobre su carpa de 26x26.',
    specs: [
      'Dimensions: 26ft x 26ft',
      'Fits approx. 60-70 guests sitting',
      'Add comments or specifics here'
    ],
    specsEs: [
      'Dimensiones: 26 pies x 26 pies',
      'Capacidad aproximada de 60-70 personas sentadas',
      'Agregue comentarios o detalles específicos aquí'
    ],
    images: [
      'https://placehold.co/600x400/e2e8f0/0f172a?text=26x26+Tent+-+Photo+1+(Replace+in+productsData.js)',
      'https://placehold.co/600x400/e2e8f0/0f172a?text=26x26+Tent+-+Photo+2+(Replace+in+productsData.js)'
    ]
  },
  {
    id: 'tent-32x16',
    name: '32x16 Tent',
    nameEs: 'Carpa 32x16',
    category: 'tents',
    price: '$XX.XX',
    priceEs: '$XX.XX',
    priceLabel: 'Replace with your price in productsData.js',
    priceLabelEs: 'Reemplace con su precio en productsData.js',
    shortDesc: 'Rectangular style tent offering great coverage and layout configurations.',
    shortDescEs: 'Carpa rectangular que ofrece gran cobertura y configuraciones de diseño.',
    detailedDesc: 'This is a detailed description placeholder. Replace this text in productsData.js with information about your 32x16 tent.',
    detailedDescEs: 'Este es un marcador de descripción detallada. Reemplace este texto en productsData.js con información sobre su carpa de 32x16.',
    specs: [
      'Dimensions: 32ft x 16ft',
      'Great for banquet tables configuration',
      'Fits approx. 50 guests sitting'
    ],
    specsEs: [
      'Dimensiones: 32 pies x 16 pies',
      'Ideal para configuración de mesas de banquete',
      'Capacidad aproximada de 50 personas sentadas'
    ],
    images: [
      'https://placehold.co/600x400/e2e8f0/0f172a?text=32x16+Tent+-+Photo+1+(Replace+in+productsData.js)'
    ]
  },
  {
    id: 'tent-26x20',
    name: '26x20 Tent',
    nameEs: 'Carpa 26x20',
    category: 'tents',
    price: '$XX.XX',
    priceEs: '$XX.XX',
    priceLabel: 'Replace with your price in productsData.js',
    priceLabelEs: 'Reemplace con su precio en productsData.js',
    shortDesc: 'Versatile rectangular canopy tent designed for medium residential yards.',
    shortDescEs: 'Versátil carpa rectangular diseñada para patios residenciales medianos.',
    detailedDesc: 'This is a detailed description placeholder. Replace this text in productsData.js with information about your 26x20 tent.',
    detailedDescEs: 'Este es un marcador de descripción detallada. Reemplace este texto en productsData.js con información sobre su carpa de 26x20.',
    specs: [
      'Dimensions: 26ft x 20ft',
      'Comfortably shades up to 50 guests',
      'Optional side walls available'
    ],
    specsEs: [
      'Dimensiones: 26 pies x 20 pies',
      'Sombra cómoda para hasta 50 personas',
      'Paredes laterales opcionales disponibles'
    ],
    images: [
      'https://placehold.co/600x400/e2e8f0/0f172a?text=26x20+Tent+-+Photo+1+(Replace+in+productsData.js)'
    ]
  },
  {
    id: 'tent-40x20',
    name: '40x20 Tent',
    nameEs: 'Carpa 40x20',
    category: 'tents',
    price: '$XX.XX',
    priceEs: '$XX.XX',
    priceLabel: 'Replace with your price in productsData.js',
    priceLabelEs: 'Reemplace con su precio en productsData.js',
    shortDesc: 'Our largest tent available. Perfect for grand parties, corporate events, and larger spaces.',
    shortDescEs: 'Nuestra carpa más grande disponible. Perfecta para grandes fiestas, eventos corporativos y espacios amplios.',
    detailedDesc: 'This is a detailed description placeholder. Replace this text in productsData.js with information about your 40x20 tent.',
    detailedDescEs: 'Este es un marcador de descripción detallada. Reemplace este texto en productsData.js con información sobre su carpa de 40x20.',
    specs: [
      'Dimensions: 40ft x 20ft',
      'Fits approx. 80-100 guests sitting',
      'Heavy-duty commercial grade material'
    ],
    specsEs: [
      'Dimensiones: 40 pies x 20 pies',
      'Capacidad aproximada de 80-100 personas sentadas',
      'Material de grado comercial de alta resistencia'
    ],
    images: [
      'https://placehold.co/600x400/e2e8f0/0f172a?text=40x20+Tent+-+Photo+1+(Replace+in+productsData.js)',
      'https://placehold.co/600x400/e2e8f0/0f172a?text=40x20+Tent+-+Photo+2+(Replace+in+productsData.js)'
    ]
  },
  {
    id: 'tent-string-lights',
    name: 'String Lights (Additional Optional)',
    nameEs: 'Luces de Cadena (Adicional Opcional)',
    category: 'tents',
    price: '$XX.XX',
    priceEs: '$XX.XX',
    priceLabel: 'Replace with light rental fee in productsData.js',
    priceLabelEs: 'Reemplace con tarifa en productsData.js',
    shortDesc: 'Warm, decorative bistro lighting to illuminate tents for evening events.',
    shortDescEs: 'Iluminación decorativa cálida tipo bistró para iluminar carpas en eventos nocturnos.',
    detailedDesc: 'Add high-quality bistro string lighting to any of our tent rentals. Creates a cozy, elegant atmosphere for night-time celebrations.',
    detailedDescEs: 'Agregue luces bistro de alta calidad a cualquiera de nuestros alquileres de carpas. Crea un ambiente acogedor y elegante para celebraciones nocturnas.',
    specs: [
      'Commercial-grade outdoor bulbs',
      'Professionally hung and secured under tents',
      'Pricing varies by tent size'
    ],
    specsEs: [
      'Bombillas de exterior de grado comercial',
      'Colgadas y aseguradas profesionalmente bajo las carpas',
      'El precio varía según el tamaño de la carpa'
    ],
    images: [
      'https://placehold.co/600x400/e2e8f0/0f172a?text=String+Lights+-+Photo+1+(Replace+in+productsData.js)'
    ]
  },

  // --- DECORATIONS ---
  {
    id: 'decor-seat-covers',
    name: 'Seat Covers',
    nameEs: 'Fundas para Sillas',
    category: 'decorations',
    price: '$X.XX each',
    priceEs: '$X.XX c/u',
    priceLabel: 'Replace with price per cover in productsData.js',
    priceLabelEs: 'Reemplace con precio por funda en productsData.js',
    shortDesc: 'Elegant chair covers available in various colors to elevate your seating appearance.',
    shortDescEs: 'Elegantes fundas para sillas disponibles en varios colores para mejorar el aspecto de sus asientos.',
    detailedDesc: 'Provide a premium look to standard chairs. Perfect for formal dinners, weddings, and special events. Easy to slide on and fits most standard chairs.',
    detailedDescEs: 'Brinde un aspecto premium a las sillas estándar. Perfecto para cenas formales, bodas y eventos especiales. Fácil de colocar y se adapta a la mayoría de las sillas estándar.',
    specs: [
      'Available in white, black, and custom colors',
      'Stretched spandex or polyester material',
      'Includes options for colored sashes/ribbons'
    ],
    specsEs: [
      'Disponible en blanco, negro y colores personalizados',
      'Material de poliéster o elastano elástico',
      'Incluye opciones para lazos/cintas de colores'
    ],
    images: [
      'https://placehold.co/600x400/e2e8f0/0f172a?text=Seat+Covers+-+Photo+1+(Replace+in+productsData.js)'
    ]
  },
  {
    id: 'decor-rect-tablecovers',
    name: 'Rectangular Table Covers',
    nameEs: 'Manteles Rectangulares',
    category: 'decorations',
    price: '$X.XX each',
    priceEs: '$X.XX c/u',
    priceLabel: 'Replace with price per tablecloth in productsData.js',
    priceLabelEs: 'Reemplace con precio por mantel en productsData.js',
    shortDesc: 'Durable, clean table covers designed specifically for 6ft and 8ft rectangle tables.',
    shortDescEs: 'Manteles duraderos y limpios diseñados específicamente para mesas rectangulares de 6 y 8 pies.',
    detailedDesc: 'High-quality table covers that cover all sides of your rectangular tables for a clean, formal presentation.',
    detailedDescEs: 'Manteles de alta calidad que cubren todos los lados de sus mesas rectangulares para una presentación limpia y formal.',
    specs: [
      'Sized for 6ft & 8ft rectangular tables',
      'Available in black, white, and a range of colors',
      'Spandex snug-fit or elegant drop-skirt styles'
    ],
    specsEs: [
      'Tamaño para mesas rectangulares de 6 y 8 pies',
      'Disponible en negro, blanco y variedad de colores',
      'Ajuste ceñido de spandex o estilos de falda elegante'
    ],
    images: [
      'https://placehold.co/600x400/e2e8f0/0f172a?text=Rectangular+Table+Covers+-+Photo+1+(Replace+in+productsData.js)'
    ]
  },
  {
    id: 'decor-round-tablecovers',
    name: 'Round Table Covers',
    nameEs: 'Manteles Redondos',
    category: 'decorations',
    price: '$X.XX each',
    priceEs: '$X.XX c/u',
    priceLabel: 'Replace with round tablecloth price in productsData.js',
    priceLabelEs: 'Reemplace con precio por mantel en productsData.js',
    shortDesc: 'Floor-length circular table covers to give round tables a sleek, sophisticated style.',
    shortDescEs: 'Manteles circulares hasta el suelo para dar a las mesas redondas un estilo elegante y sofisticado.',
    detailedDesc: 'Elegant draping covers designed for round tables. Wrinkle-resistant and premium look for banquets, dinners, and events.',
    detailedDescEs: 'Elegantes cubiertas con caída diseñadas para mesas redondas. Resistentes a las arrugas y de aspecto premium para banquetes, cenas y eventos.',
    specs: [
      'Sized for 60-inch / 72-inch round tables',
      'Floor-length drape',
      'Various colors available upon request'
    ],
    specsEs: [
      'Tamaño para mesas redondas de 60 pulgadas / 72 pulgadas',
      'Caída hasta el suelo',
      'Varios colores disponibles a pedido'
    ],
    images: [
      'https://placehold.co/600x400/e2e8f0/0f172a?text=Round+Table+Covers+-+Photo+1+(Replace+in+productsData.js)'
    ]
  },

  // --- CHAIRS AND TABLES ---
  {
    id: 'furniture-chairs',
    name: 'Standard Chairs',
    nameEs: 'Sillas Estándar',
    category: 'tables-chairs',
    price: '$X.XX each',
    priceEs: '$X.XX c/u',
    priceLabel: 'Replace with standard chair price in productsData.js',
    priceLabelEs: 'Reemplace con precio por silla en productsData.js',
    shortDesc: 'Clean, reliable folding chairs for party seating.',
    shortDescEs: 'Sillas plegables limpias y confiables para asientos de fiesta.',
    detailedDesc: 'Standard commercial folding chairs. Easy to transport, clean, and setup. Perfect for extra seating at any size event.',
    detailedDescEs: 'Sillas plegables comerciales estándar. Fáciles de transportar, limpiar y armar. Perfectas para asientos adicionales en cualquier tipo de evento.',
    specs: [
      'Heavy-duty plastic seating with steel frame',
      'Lightweight and easily stackable',
      'Cleaned and sanitized before every rental'
    ],
    specsEs: [
      'Asiento de plástico resistente con estructura de acero',
      'Ligeras y fácilmente apilables',
      'Limpias y desinfectadas antes de cada alquiler'
    ],
    images: [
      'https://placehold.co/600x400/e2e8f0/0f172a?text=Standard+Chairs+-+Photo+1+(Replace+in+productsData.js)'
    ]
  },
  {
    id: 'furniture-rect-tables',
    name: 'Rectangular Tables',
    nameEs: 'Mesas Rectangulares',
    category: 'tables-chairs',
    price: '$XX.XX each',
    priceEs: '$XX.XX c/u',
    priceLabel: 'Replace with table price in productsData.js',
    priceLabelEs: 'Reemplace con precio por mesa en productsData.js',
    shortDesc: '6ft or 8ft rectangular banquet tables. Sturdy and easy to setup.',
    shortDescEs: 'Mesas de banquete rectangulares de 6 u 8 pies. Robustas y fáciles de armar.',
    detailedDesc: 'Sturdy rectangular folding tables. Fits 6 to 8 guests comfortably. Perfect for dining, food setups, gifts, or displays.',
    detailedDescEs: 'Mesas plegables rectangulares resistentes. Acomodan de 6 a 8 invitados cómodamente. Perfectas para cenas, mesas de comida, regalos o exhibiciones.',
    specs: [
      'Available in 6-foot and 8-foot lengths',
      'Heavy-duty plastic top with folding steel legs',
      'Easy to cover with rectangular table covers'
    ],
    specsEs: [
      'Disponibles en longitudes de 6 y 8 pies',
      'Tablero de plástico resistente con patas de acero plegables',
      'Fácil de cubrir con manteles rectangulares'
    ],
    images: [
      'https://placehold.co/600x400/e2e8f0/0f172a?text=Rectangular+Tables+-+Photo+1+(Replace+in+productsData.js)'
    ]
  },
  {
    id: 'furniture-chiavari',
    name: 'Chiavari Chairs',
    nameEs: 'Sillas Chiavari',
    category: 'tables-chairs',
    price: '$X.XX each',
    priceEs: '$X.XX c/u',
    priceLabel: 'Replace with Chiavari chair price in productsData.js',
    priceLabelEs: 'Reemplace con precio por silla en productsData.js',
    shortDesc: 'Premium, elegant Chiavari chairs to add a touch of luxury to weddings and banquets.',
    shortDescEs: 'Sillas Chiavari premium y elegantes para agregar un toque de lujo a bodas y banquetes.',
    detailedDesc: 'Elegant Chiavari chairs that bring a high-end look to formal dining and celebrations. Popular for weddings, galas, and upscale events.',
    detailedDescEs: 'Elegantes sillas Chiavari que brindan un aspecto de alta gama a cenas y celebraciones formales. Populares para bodas, galas y eventos exclusivos.',
    specs: [
      'Classic, upscale design',
      'Available in standard finishes (Gold, Silver, Wood, or White)',
      'Optional cushions for extra comfort'
    ],
    specsEs: [
      'Diseño clásico y elegante',
      'Disponible en acabados estándar (oro, plata, madera o blanco)',
      'Cojines opcionales para mayor comodidad'
    ],
    images: [
      'https://placehold.co/600x400/e2e8f0/0f172a?text=Chiavari+Chairs+-+Photo+1+(Replace+in+productsData.js)'
    ]
  },
  {
    id: 'furniture-round-tables',
    name: 'Round Tables',
    nameEs: 'Mesas Redondas',
    category: 'tables-chairs',
    price: '$XX.XX each',
    priceEs: '$XX.XX c/u',
    priceLabel: 'Replace with round table price in productsData.js',
    priceLabelEs: 'Reemplace con precio por mesa en productsData.js',
    shortDesc: '60-inch circular tables perfect for hosting dinners where guests sit face-to-face.',
    shortDescEs: 'Mesas circulares de 60 pulgadas perfectas para cenas donde los invitados se sientan frente a frente.',
    detailedDesc: 'Round dining tables promote conversation. Fits 8 to 10 guests comfortably. Perfect for dinners, reception halls, and backyard parties.',
    detailedDescEs: 'Las mesas redondas fomentan la conversación. Acomodan de 8 a 10 invitados cómodamente. Perfectas para cenas, salones de recepción y fiestas en el patio trasero.',
    specs: [
      '60-inch (5ft) diameter size',
      'Sturdy heavy-duty plastic folding top',
      'Ideal for use with round table covers'
    ],
    specsEs: [
      'Tamaño de 60 pulgadas (5 pies) de diámetro',
      'Tablero plegable de plástico resistente',
      'Ideal para usar con manteles redondos'
    ],
    images: [
      'https://placehold.co/600x400/e2e8f0/0f172a?text=Round+Tables+-+Photo+1+(Replace+in+productsData.js)'
    ]
  },
  {
    id: 'furniture-throne',
    name: 'Throne Chairs',
    nameEs: 'Sillas de Trono',
    category: 'tables-chairs',
    price: '$XX.XX',
    priceEs: '$XX.XX',
    priceLabel: 'Replace with throne rental rate in productsData.js',
    priceLabelEs: 'Reemplace con tarifa de alquiler de trono en productsData.js',
    shortDesc: 'Stunning luxury throne chairs for the guest of honor, birthday hosts, or parents-to-be.',
    shortDescEs: 'Impresionantes sillas de trono de lujo para el invitado de honor, anfitriones de cumpleaños o futuros padres.',
    detailedDesc: 'Make the guest of honor feel like royalty! These large, ornate high-back throne chairs look amazing in photos and serve as the perfect centerpiece for baby showers, birthdays, and weddings.',
    detailedDescEs: '¡Haga que el invitado de honor se sienta como la realeza! Estas grandes y ornamentadas sillas de trono con respaldo alto se ven increíbles en las fotos y sirven como la pieza central perfecta para baby showers, cumpleaños y bodas.',
    specs: [
      'Ornate gold or silver wood frames',
      'Premium white or custom tufted leather upholstery',
      'Perfect for photoshoot backgrounds and main seating'
    ],
    specsEs: [
      'Estructuras de madera ornamentadas en oro o plata',
      'Tapicería de cuero capitoné blanco premium o personalizado',
      'Perfecto para fondos de sesiones de fotos y asientos principales'
    ],
    images: [
      'https://placehold.co/600x400/e2e8f0/0f172a?text=Throne+Chairs+-+Photo+1+(Replace+in+productsData.js)',
      'https://placehold.co/600x400/e2e8f0/0f172a?text=Throne+Chairs+-+Photo+2+(Replace+in+productsData.js)'
    ]
  },

  // --- JUMPERS ---
  {
    id: 'jumper-bouncey-castle',
    name: 'Bouncy Castle',
    nameEs: 'Castillo Inflable',
    category: 'jumpers',
    price: '$XX.XX',
    priceEs: '$XX.XX',
    priceLabel: 'Replace with bounce house price in productsData.js',
    priceLabelEs: 'Reemplace con precio de inflable en productsData.js',
    shortDesc: 'Classic inflatable bouncy castle for children of all ages to bounce and play.',
    shortDescEs: 'Clásico castillo inflable para que niños de todas las edades reboten y jueguen.',
    detailedDesc: 'Classic inflatable bounce house design. Colorful, clean, and constructed with high-safety standards. Includes heavy-duty blower and safety anchoring.',
    detailedDescEs: 'Diseño clásico de castillo inflable. Colorido, limpio y construido con altos estándares de seguridad. Incluye soplador de alta resistencia y anclajes de seguridad.',
    specs: [
      'Dimensions: Approx. 13ft x 13ft',
      'Features mesh netting on all sides for easy supervision',
      'Requires constant access to 1 standard electric outlet'
    ],
    specsEs: [
      'Dimensiones: Aprox. 13 pies x 13 pies',
      'Cuenta con malla de red en todos los lados para supervisión fácil',
      'Requiere acceso constante a 1 toma de corriente estándar'
    ],
    images: [
      'https://placehold.co/600x400/e2e8f0/0f172a?text=Bouncy+Castle+-+Photo+1+(Replace+in+productsData.js)',
      'https://placehold.co/600x400/e2e8f0/0f172a?text=Bouncy+Castle+-+Photo+2+(Replace+in+productsData.js)'
    ]
  },
  {
    id: 'jumper-single-water',
    name: 'Single Water Slide Jumper',
    nameEs: 'Inflable con Tobogán de Agua',
    category: 'jumpers',
    price: '$XX.XX',
    priceEs: '$XX.XX',
    priceLabel: 'Replace with single water slide price in productsData.js',
    priceLabelEs: 'Reemplace con precio de tobogán en productsData.js',
    shortDesc: 'Exciting single-lane water slide jumper. Ideal for hot summer days.',
    shortDescEs: 'Emocionante inflable con tobogán de agua de un carril. Ideal para los calurosos días de verano.',
    detailedDesc: 'Cool down your summer events with a thrilling single-lane water slide. Features a safe ladder climb and a refreshing splash pool at the bottom.',
    detailedDescEs: 'Refrésquese en sus eventos de verano con un emocionante tobogán de agua de un solo carril. Cuenta con una escalera segura y una refrescante piscina de agua al final.',
    specs: [
      'Water access hookup required',
      'Features single slide lane with climbing stairs',
      'Generous splash pool landing zone'
    ],
    specsEs: [
      'Se requiere conexión de agua cercana',
      'Cuenta con un carril de tobogán con escalera de escalada',
      'Generosa zona de piscina de agua al final'
    ],
    images: [
      'https://placehold.co/600x400/e2e8f0/0f172a?text=Single+Water+Slide+-+Photo+1+(Replace+in+productsData.js)',
      'https://placehold.co/600x400/e2e8f0/0f172a?text=Single+Water+Slide+-+Photo+2+(Replace+in+productsData.js)'
    ]
  },
  {
    id: 'jumper-double-water',
    name: 'Double Water Slide Jumper',
    nameEs: 'Inflable de Doble Tobogán de Agua',
    category: 'jumpers',
    price: '$XX.XX',
    priceEs: '$XX.XX',
    priceLabel: 'Replace with double slide price in productsData.js',
    priceLabelEs: 'Reemplace con precio en productsData.js',
    shortDesc: 'Two lanes for double the fun! Race friends down this massive water slide.',
    shortDescEs: '¡Dos carriles para el doble de diversión! Compita con amigos en este enorme tobogán.',
    detailedDesc: 'Twice the excitement! Two side-by-side sliding lanes allow friends to race down simultaneously into a large splash pool. Great for high-turnover events and backyard parties.',
    detailedDescEs: '¡El doble de emoción! Dos carriles paralelos permiten que los amigos compitan simultáneamente cayendo en una piscina de agua. Ideal para eventos grandes y fiestas de patio.',
    specs: [
      'Dual lanes for racing action',
      'Requires water hookup and steady power source',
      'Large splash pool landing'
    ],
    specsEs: [
      'Carriles dobles para carreras de velocidad',
      'Requiere conexión de agua y fuente de energía estable',
      'Gran piscina de agua al final'
    ],
    images: [
      'https://placehold.co/600x400/e2e8f0/0f172a?text=Double+Water+Slide+-+Photo+1+(Replace+in+productsData.js)'
    ]
  },
  {
    id: 'jumper-mech-bull',
    name: 'Mechanical Bull',
    nameEs: 'Toro Mecánico',
    category: 'jumpers',
    price: '$XX.XX',
    priceEs: '$XX.XX',
    priceLabel: 'Replace with mechanical bull price in productsData.js',
    priceLabelEs: 'Reemplace con precio del toro mecánico en productsData.js',
    shortDesc: 'Ultimate crowd-pleaser! Safe, computer-controlled mechanical bull with inflatable ring.',
    shortDescEs: '¡Atracción favorita del público! Toro mecánico seguro controlado por computadora con colchón inflable.',
    detailedDesc: 'Rent a mechanical bull to guarantee an unforgettable experience! Fully operated by trained staff (if applicable) with adjustable speeds suitable for children and brave adults. Features a thick, cushioned inflatable ring surrounding the bull.',
    detailedDescEs: '¡Alquile un toro mecánico para garantizar una experiencia inolvidable! Operado por personal capacitado con velocidades ajustables adecuadas para niños y adultos valientes. Cuenta con un colchón inflable protector alrededor del toro.',
    specs: [
      'Requires separate dedicated power circuits',
      'Includes inflatable safety surround ring',
      'Speed settings range from beginner to pro rider'
    ],
    specsEs: [
      'Requiere circuitos de alimentación eléctrica dedicados por separado',
      'Incluye anillo de seguridad inflable a su alrededor',
      'Ajustes de velocidad desde principiante hasta profesional'
    ],
    images: [
      'https://placehold.co/600x400/e2e8f0/0f172a?text=Mechanical+Bull+-+Photo+1+(Replace+in+productsData.js)',
      'https://placehold.co/600x400/e2e8f0/0f172a?text=Mechanical+Bull+-+Photo+2+(Replace+in+productsData.js)'
    ]
  },

  // --- PHOTO BOOTH ---
  {
    id: 'booth-digital',
    name: 'Digital Photo Booth',
    nameEs: 'Cabina de Fotos Digital',
    category: 'photobooth',
    price: '$XX.XX',
    priceEs: '$XX.XX',
    priceLabel: 'Replace with photo booth price in productsData.js',
    priceLabelEs: 'Reemplace con precio de cabina en productsData.js',
    shortDesc: 'Modern iPad-based digital photo booth with instant email/text sharing and templates.',
    shortDescEs: 'Moderna cabina de fotos digital basada en iPad con envío instantáneo a correo/texto y plantillas.',
    detailedDesc: 'Let guests capture their memories instantly! Our digital photo booth features high-quality lighting, interactive screens, and the ability to send GIFs, Boomerangs, and Photos directly to guests via Text, Email, or QR Code. Custom branding templates available.',
    detailedDescEs: '¡Deje que los invitados capturen sus recuerdos al instante! Nuestra cabina de fotos digital cuenta con iluminación de alta calidad, pantalla interactiva y envío de GIFs, Boomerangs y fotos a textos, correos o códigos QR. Plantillas personalizadas disponibles.',
    specs: [
      'Ring light with adjustable brightness and warmth',
      'Instant digital sharing (Wi-Fi required)',
      'Customized templates for overlays and frames'
    ],
    specsEs: [
      'Luz de anillo con brillo y temperatura ajustables',
      'Compartido digital instantáneo (requiere Wi-Fi)',
      'Plantillas personalizadas para superposiciones y marcos'
    ],
    images: [
      'https://placehold.co/600x400/e2e8f0/0f172a?text=Digital+Photo+Booth+-+Photo+1+(Replace+in+productsData.js)',
      'https://placehold.co/600x400/e2e8f0/0f172a?text=Digital+Photo+Booth+-+Photo+2+(Replace+in+productsData.js)',
      'https://placehold.co/600x400/e2e8f0/0f172a?text=Digital+Photo+Booth+-+Photo+3+(Replace+in+productsData.js)'
    ]
  }
];

export const contactInfo = {
  phone: '555-123-4567', 
  phoneLabel: 'Replace with your business phone number in productsData.js',
  phoneLabelEs: 'Reemplace con su teléfono en productsData.js',
  email: 'info@garciajumpers.com', 
  emailLabel: 'Replace with your business email in productsData.js',
  emailLabelEs: 'Reemplace con su correo en productsData.js',
  workingHours: 'Monday - Sunday: 8:00 AM - 7:00 PM',
  workingHoursEs: 'Lunes - Domingo: 8:00 AM - 7:00 PM',
  serviceAreas: 'Serving our local counties, cities, and surrounding communities.',
  serviceAreasEs: 'Sirviendo a nuestros condados, ciudades locales y comunidades aledañas.',
  socials: {
    facebook: '#',
    instagram: '#',
    yelp: '#'
  }
};

export const uiTranslations = {
  en: {
    welcome_title: "Welcome to Garcia Jumpers",
    welcome_desc: "Your local choice for party rentals! We have bouncy houses, tents, chairs, tables, and decorations to make your event perfect.",
    explore_title: "Explore Our Products",
    search_placeholder: "Search tents, covers, slides...",
    price_placeholder_label: "Price Placeholder",
    btn_view_details: "View Details & Photos",
    no_results: "No products found matching",
    btn_reset_filters: "Reset Filters",
    footer_tagline: "We provide clean, safe, and professional party rentals. Browse our collection and contact us to secure your equipment today!",
    footer_phone_title: "Phone Number",
    footer_email_title: "Email Address",
    footer_hours_title: "Working Hours",
    footer_area_title: "Service Area",
    form_quote_title: "Get a Quick Quote / Inquire",
    form_quote_subtitle: "Fill out your details below and we will contact you directly to discuss availability and pricing.",
    form_name_label: "Your Name *",
    form_phone_label: "Phone Number *",
    form_email_label: "Email Address",
    form_date_label: "Event Date",
    form_msg_label: "Equipment details & questions",
    form_msg_placeholder: "Tell us which items you are interested in (e.g. 20x20 Tent, Bouncy Castle)...",
    form_submit_btn: "Prepare Booking Inquiry",
    form_success_title: "✅ Inquiry Message Created!",
    form_success_desc: "Since this website does not connect to a database, please complete your booking request by either:",
    form_success_call: "Calling",
    form_success_email: "Emailing",
    form_success_auto: "Click here to send details automatically",
    form_success_reset: "Inquire About Another Item",
    all_rights: "All rights reserved. (No online reservations, call or email to book!)",
    // Modal translations
    modal_photo_badge: "Photo Placeholder",
    modal_photo_of: "of",
    modal_photo_instruction: "How to change photos: Edit the images array inside productsData.js for this product ID:",
    modal_price_label: "Price:",
    modal_desc_label: "Description",
    modal_desc_instruction: "Modify this text in productsData.js",
    modal_specs_label: "Details & Specifications",
    modal_specs_instruction: "Edit these bullets in productsData.js",
    modal_cta_title: "Interested in Renting?",
    modal_cta_desc: "Since we do not support online reservations directly, contact us directly to check availability for your date!",
    modal_cta_call_btn: "Call Us",
    modal_cta_email_btn: "Email Inquiry",
    contact_btn: "Contact",
    change_phone_tip: "Change phone in productsData.js",
    change_email_tip: "Change email in productsData.js",
    multiple_photos_badge: "Photos",
    click_for_photos: "Click to View Photos & Setup Details"
  },
  es: {
    welcome_title: "Bienvenidos a Garcia Jumpers",
    welcome_desc: "¡Su opción local para alquileres de fiestas! Tenemos inflables, carpas, sillas, mesas y decoraciones para hacer que su evento sea perfecto.",
    explore_title: "Explore Nuestros Productos",
    search_placeholder: "Buscar carpas, manteles, inflables...",
    price_placeholder_label: "Marcador de Precio",
    btn_view_details: "Ver Detalles y Fotos",
    no_results: "No se encontraron productos que coincidan con",
    btn_reset_filters: "Restablecer Filtros",
    footer_tagline: "Ofrecemos alquileres de fiestas limpios, seguros y profesionales. ¡Explore nuestra colección y contáctenos para asegurar su equipo hoy mismo!",
    footer_phone_title: "Número de Teléfono",
    footer_email_title: "Correo Electrónico",
    footer_hours_title: "Horario de Trabajo",
    footer_area_title: "Área de Servicio",
    form_quote_title: "Obtenga una Cotización / Pregunte",
    form_quote_subtitle: "Complete sus detalles a continuación y nos comunicaremos directamente con usted para discutir disponibilidad y precios.",
    form_name_label: "Su Nombre *",
    form_phone_label: "Número de Teléfono *",
    form_email_label: "Correo Electrónico",
    form_date_label: "Fecha del Evento",
    form_msg_label: "Detalles del equipo y preguntas",
    form_msg_placeholder: "Díganos qué artículos le interesan (ej. Carpa 20x20, Castillo Inflable)...",
    form_submit_btn: "Preparar Consulta de Alquiler",
    form_success_title: "✅ ¡Mensaje de Consulta Creado!",
    form_success_desc: "Dado que este sitio web no se conecta a una base de datos, complete su solicitud de alquiler por uno de estos medios:",
    form_success_call: "Llamando al",
    form_success_email: "Enviando correo",
    form_success_auto: "Haga clic aquí para enviar los detalles automáticamente",
    form_success_reset: "Preguntar sobre otro artículo",
    all_rights: "Todos los derechos reservados. (¡Sin reservaciones en línea, llame o envíe un correo para reservar!)",
    // Modal translations
    modal_photo_badge: "Marcador de Foto",
    modal_photo_of: "de",
    modal_photo_instruction: "Cómo cambiar fotos: Edite el arreglo de imágenes dentro de productsData.js para el ID de producto:",
    modal_price_label: "Precio:",
    modal_desc_label: "Descripción",
    modal_desc_instruction: "Modifique este texto en productsData.js",
    modal_specs_label: "Detalles y Especificaciones",
    modal_specs_instruction: "Edite estos puntos en productsData.js",
    modal_cta_title: "¿Interesado en Alquilar?",
    modal_cta_desc: "Dado que no admitimos reservas directas en línea, ¡contáctenos directamente para verificar disponibilidad para su fecha!",
    modal_cta_call_btn: "Llamar",
    modal_cta_email_btn: "Enviar Correo",
    contact_btn: "Contacto",
    change_phone_tip: "Cambie el teléfono en productsData.js",
    change_email_tip: "Cambie el correo en productsData.js",
    multiple_photos_badge: "Fotos",
    click_for_photos: "Haga clic para ver fotos y detalles de instalación"
  }
};
