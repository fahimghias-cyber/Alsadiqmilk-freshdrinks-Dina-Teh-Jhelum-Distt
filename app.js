/**
 * Al Sadiq Milk & Fresh Drinks - Master Application Logic
 * Pure Milk & Fresh Drinks Booking, Customer App & Staff Management System
 * Location: GT Road, Dina (With Focus College)
 * Contact Numbers: 0370-9589018 & 0342-1008375
 */

// =============================================================================
// 1. DEFAULT DATA & PRODUCT CATALOG (Exact from Al Sadiq Menu Cards)
// =============================================================================
const DEFAULT_MENU_ITEMS = [
  // --- Pure Dairy ---
  {
    id: "cow_milk",
    category: "dairy",
    nameEn: "Fresh Pure Cow Milk",
    nameUr: "گائے کا خالص دودھ",
    price: 220,
    unit: "Liter",
    image: "assets/dairy.jpg",
    descEn: "100% pure, farm-fresh cow milk. Unadulterated, bacteria-free and naturally chilled.",
    descUr: "فارم کا تازہ اور خالص گائے کا دودھ، بیکٹیریا سے پاک اور قدرتی طور پر ٹھنڈا",
    inStock: true,
    badge: "Bestseller",
    popular: true,
    isDairy: true
  },
  {
    id: "buffalo_milk",
    category: "dairy",
    nameEn: "Fresh Pure Buffalo Milk",
    nameUr: "بھینس کا خالص دودھ",
    price: 280,
    unit: "Liter",
    image: "assets/dairy.jpg",
    descEn: "Rich, thick creamy buffalo milk with high natural fat content. Ideal for chai and kheer.",
    descUr: "گاڑھا، ملائی دار بھینس کا دودھ، چائے اور کھیر کے لیے بہترین",
    inStock: true,
    badge: "Rich & Thick",
    popular: true,
    isDairy: true
  },
  {
    id: "mixed_milk",
    category: "dairy",
    nameEn: "Mixed Pure Milk",
    nameUr: "مکس خالص دودھ",
    price: 240,
    unit: "Liter",
    image: "assets/dairy.jpg",
    descEn: "Balanced fresh blend of pure cow and buffalo milk for daily family nutrition.",
    descUr: "گائے اور بھینس کا متوازن خالص دودھ، روزمرہ استعمال کے لیے بہترین",
    inStock: true,
    badge: "Balanced",
    popular: false,
    isDairy: true
  },
  {
    id: "fresh_dahi",
    category: "dairy",
    nameEn: "Fresh Creamy Dahi (Yogurt)",
    nameUr: "ملائی دار تازہ دہی",
    price: 240,
    unit: "KG",
    image: "assets/dairy.jpg",
    descEn: "Thick, naturally set creamy yogurt prepared from fresh pure milk.",
    descUr: "خالص دودھ سے تیار کردہ گاڑھا اور میٹھا ملائی دار دہی",
    inStock: true,
    badge: "Thick Malai",
    popular: true,
    isDairy: true
  },
  {
    id: "desi_ghee",
    category: "dairy",
    nameEn: "Pure Desi Ghee",
    nameUr: "خالص دیسی گھی",
    price: 2400,
    unit: "KG",
    image: "assets/dairy.jpg",
    descEn: "100% traditional golden Desi Ghee prepared from pure churned makhan butter.",
    descUr: "روایتی طریقے سے مکھن سے تیار کردہ خالص خوشبودار دیسی گھی",
    inStock: true,
    badge: "100% Organic",
    popular: false,
    isDairy: true
  },
  {
    id: "fresh_butter",
    category: "dairy",
    nameEn: "Fresh Farm Makhan (Butter)",
    nameUr: "تازہ مکھن",
    price: 1400,
    unit: "KG",
    image: "assets/dairy.jpg",
    descEn: "Soft, freshly churned homemade white makhan full of natural aroma.",
    descUr: "دیسی انداز میں بلویا ہوا تازہ سفید مکھن",
    inStock: true,
    badge: "Fresh Churned",
    popular: false,
    isDairy: true
  },
  {
    id: "shahi_kheer",
    category: "dairy",
    nameEn: "Shahi Kheer",
    nameUr: "شاہی کھیر",
    price: 200,
    unit: "Plate",
    image: "assets/dairy.jpg",
    descEn: "Slow-cooked royal dessert with pure milk, saffron, cardamom, and nuts.",
    descUr: "خالص دودھ، الائچی اور میوہ جات سے تیار کردہ شاہی کھیر",
    inStock: true,
    badge: "Dessert",
    popular: true,
    isDairy: true
  },
  {
    id: "doodh_bottle",
    category: "dairy",
    nameEn: "Chilled Doodh Bottle (Cardamom)",
    nameUr: "ٹھنڈا دودھ بوتل (الائچی)",
    price: 150,
    unit: "Bottle",
    image: "assets/dairy.jpg",
    descEn: "Chilled sweetened milk infused with crushed green cardamom and nuts.",
    descUr: "الائچی اور بادام سے تیار کردہ ٹھنڈی دودھ کی بوتل",
    inStock: true,
    badge: "Chilled",
    popular: true,
    isDairy: true
  },
  {
    id: "desi_lassi",
    category: "dairy",
    nameEn: "Desi Lassi (Sweet / Salty)",
    nameUr: "روایتی دیسی لسی (میٹھی / نمکین)",
    price: 150,
    unit: "Glass",
    image: "assets/dairy.jpg",
    descEn: "Traditional Punjabi lassi churned with pure dahi and ice.",
    descUr: "تازہ دہی سے تیار روایتی ٹھنڈی دیسی لسی",
    inStock: true,
    badge: "Classic",
    popular: true,
    isDairy: true
  },
  {
    id: "special_lassi",
    category: "dairy",
    nameEn: "Special Peda Malai Lassi",
    nameUr: "اسپیشل پیڑا ملائی لسی",
    price: 250,
    unit: "Glass",
    image: "assets/dairy.jpg",
    descEn: "Rich thick lassi topped with sweet peda, thick malai layer, and crushed almonds.",
    descUr: "پیڑے اور ملائی کی تہہ سے سجی اسپیشل شاہی لسی",
    inStock: true,
    badge: "Royal Treat",
    popular: true,
    isDairy: true
  },

  // --- Wholesome Fruit Milkshakes ---
  {
    id: "shake_banana",
    category: "milkshakes",
    nameEn: "Fresh Banana Milkshake",
    nameUr: "تازہ کیلا ملک شیک",
    price: 180,
    unit: "Glass",
    image: "assets/milkshakes.jpg",
    descEn: "Creamy blend of ripe bananas, pure farm milk, and subtle sweetness.",
    descUr: "تازہ کیلوں اور خالص دودھ سے تیار توانائی بخش شیک",
    inStock: true,
    badge: "Kids Favorite",
    popular: true
  },
  {
    id: "shake_strawberry",
    category: "milkshakes",
    nameEn: "Strawberry Milkshake",
    nameUr: "اسٹرابیری ملک شیک",
    price: 220,
    unit: "Glass",
    image: "assets/milkshakes.jpg",
    descEn: "Sweet & tangy chilled strawberry puree blended with rich pure milk.",
    descUr: "خالص دودھ اور مزیدار اسٹرابیری کا ٹھنڈا شیک",
    inStock: true,
    badge: "Refreshing",
    popular: true
  },
  {
    id: "shake_mango",
    category: "milkshakes",
    nameEn: "King Mango Milkshake",
    nameUr: "کنگ مینگو ملک شیک",
    price: 250,
    unit: "Glass",
    image: "assets/milkshakes.jpg",
    descEn: "Rich Sindhri & Chaunsa mango pulp blended with rich chilled buffalo milk.",
    descUr: "میٹھے آموں کے گودے اور خالص دودھ کا شاہی شیک",
    inStock: true,
    badge: "Seasonal Special",
    popular: true
  },
  {
    id: "shake_khoya_khajoor",
    category: "milkshakes",
    nameEn: "Khoya Khajoor Shake",
    nameUr: "کھویا کھجور شیک",
    price: 300,
    unit: "Glass",
    image: "assets/milkshakes.jpg",
    descEn: "Premium Arabian dates blended with pure khoya, honey, and fresh milk.",
    descUr: "عمدہ کھجور، خالص کھویا اور شہد سے تیار زبردست شیک",
    inStock: true,
    badge: "Energy Rich",
    popular: true
  },
  {
    id: "shake_oreo",
    category: "milkshakes",
    nameEn: "Crunchy Oreo Shake",
    nameUr: "کرنچی اوریو شیک",
    price: 250,
    unit: "Glass",
    image: "assets/milkshakes.jpg",
    descEn: "Thick chocolatey Oreo biscuit blend topped with cookie crumble.",
    descUr: "اوریو بسکٹ اور چاکلیٹ سے تیار لذیذ شیک",
    inStock: true,
    badge: "Popular",
    popular: true
  },
  {
    id: "shake_chocolate",
    category: "milkshakes",
    nameEn: "Velvet Chocolate Shake",
    nameUr: "چاکلیٹ ملک شیک",
    price: 240,
    unit: "Glass",
    image: "assets/milkshakes.jpg",
    descEn: "Rich cocoa syrup, chocolate chips, and fresh milk blend.",
    descUr: "خالص دودھ اور کوکو سے تیار چاکلیٹ شیک",
    inStock: true,
    badge: "Choco",
    popular: false
  },
  {
    id: "shake_kulfa",
    category: "milkshakes",
    nameEn: "Special Kulfa Ice Cream Shake",
    nameUr: "اسپیشل کلفہ آئس کریم شیک",
    price: 280,
    unit: "Glass",
    image: "assets/milkshakes.jpg",
    descEn: "Creamy Kulfa ice cream scoop blended with cardamom milk and pistachios.",
    descUr: "کلفہ آئس کریم، پستہ اور الائچی کا ٹھنڈا شیک",
    inStock: true,
    badge: "Premium",
    popular: true
  },
  {
    id: "shake_apple",
    category: "milkshakes",
    nameEn: "Apple Honey Shake",
    nameUr: "سیب اور شہد شیک",
    price: 200,
    unit: "Glass",
    image: "assets/milkshakes.jpg",
    descEn: "Crisp red apples blended with natural honey and fresh cow milk.",
    descUr: "تازہ سیب، قدرتی شہد اور گائے کے دودھ کا صحت بخش شیک",
    inStock: true,
    badge: "Healthy",
    popular: false
  },

  // --- Protein & Gym Energy Shakes ---
  {
    id: "protein_almond_pista",
    category: "protein",
    nameEn: "Badam Pista Gym Shake",
    nameUr: "بادام پستہ جم شیک",
    price: 300,
    unit: "Glass",
    image: "assets/protein_shakes.jpg",
    descEn: "High-protein blend of crushed California almonds, pistachios, dates, and pure milk.",
    descUr: "کیلیفورنیا بادام، پستہ اور کھجور سے تیار ہائی پروٹین شیک",
    inStock: true,
    badge: "Muscle Builder",
    popular: true,
    fitness: true
  },
  {
    id: "protein_peanut_butter",
    category: "protein",
    nameEn: "Peanut Butter Banana Protein",
    nameUr: "پینٹ بٹر بنانا پروٹین شیک",
    price: 320,
    unit: "Glass",
    image: "assets/protein_shakes.jpg",
    descEn: "Natural crunchy peanut butter, fresh bananas, and milk. 22g Natural Protein.",
    descUr: "قدرتی پینٹ بٹر، کیلے اور دودھ کا شیک۔ 22 گرام پروٹین",
    inStock: true,
    badge: "High Protein",
    popular: true,
    fitness: true
  },
  {
    id: "protein_dryfruit_power",
    category: "protein",
    nameEn: "Dates & Walnut Power Shake",
    nameUr: "کھجور و اخروٹ پاور شیک",
    price: 350,
    unit: "Glass",
    image: "assets/protein_shakes.jpg",
    descEn: "Brain & body booster with walnuts, soft dates, cashews, and pure buffalo milk.",
    descUr: "اخروٹ، کاجو اور کھجور سے تیار زبردست انرجی شیک",
    inStock: true,
    badge: "Brain Booster",
    popular: true,
    fitness: true
  },
  {
    id: "protein_pehlwani",
    category: "protein",
    nameEn: "Special Wrestler Pehlwani Shake",
    nameUr: "اسپیشل پہلوانی شیک",
    price: 450,
    unit: "Glass",
    image: "assets/protein_shakes.jpg",
    descEn: "The legendary heavyweight energy drink: Badam, Pista, Kaju, Maghaz, Khoya, Khajoor, and Pure Milk.",
    descUr: "بادام، پستہ، کاجو، چاروں مغز، کھویا اور کھجور کا شاہی پہلوانی شیک",
    inStock: true,
    badge: "Ultimate Power",
    popular: true,
    fitness: true
  },
  {
    id: "protein_royal_dryfruit",
    category: "protein",
    nameEn: "Royal Dry Fruit Milk Shake",
    nameUr: "شاہی ڈرائی فروٹ شیک",
    price: 400,
    unit: "Glass",
    image: "assets/protein_shakes.jpg",
    descEn: "Rich royal dry fruit blend with saffron strands and honey.",
    descUr: "زعفران، شہد اور تمام خشک میوہ جات کا لذیذ شیک",
    inStock: true,
    badge: "Royal Dryfruit",
    popular: false,
    fitness: true
  },
  {
    id: "protein_whey_blend",
    category: "protein",
    nameEn: "100% Whey Protein Milk Blend",
    nameUr: "وے پروٹین ملک بلینڈ",
    price: 400,
    unit: "Glass",
    image: "assets/protein_shakes.jpg",
    descEn: "1 Scoop Gold Standard Whey Protein + pure milk + banana. (30g Protein).",
    descUr: "ایک سکوپ وے پروٹین اور تازہ دودھ۔ 30 گرام پروٹین",
    inStock: true,
    badge: "30g Protein",
    popular: true,
    fitness: true
  },

  // --- Chilled Mojitos & Fresh Coolers ---
  {
    id: "mojito_mint_lemon",
    category: "mojitos",
    nameEn: "Classic Mint Lemonade Mojito",
    nameUr: "منٹ لیمنیڈ موجیتو",
    price: 150,
    unit: "Glass",
    image: "assets/alsadiq_fresh_drink.jpg",
    descEn: "Muddled fresh mint leaves, zesty lemon juice, crushed ice, and sparkling fizz.",
    descUr: "تازہ پودینہ، لیموں کا رس اور برف کا ٹھنڈا گارنٹیڈ ہاضم مشروب",
    inStock: true,
    badge: "Summer Cool",
    popular: true,
    chilled: true
  },
  {
    id: "mojito_blue_lagoon",
    category: "mojitos",
    nameEn: "Blue Lagoon Tropical Mojito",
    nameUr: "بلیو لگون موجیتو",
    price: 180,
    unit: "Glass",
    image: "assets/mojitos.jpg",
    descEn: "Curacao citrus cooler with sparkling lime, fresh mint, and ice cubes.",
    descUr: "بلیو سٹرس اور لیموں کا فرحت بخش ٹھنڈا مشروب",
    inStock: true,
    badge: "Signature",
    popular: true,
    chilled: true
  },
  {
    id: "mojito_watermelon",
    category: "mojitos",
    nameEn: "Fresh Watermelon Mojito",
    nameUr: "تازہ تربوز موجیتو",
    price: 150,
    unit: "Glass",
    image: "assets/mojitos.jpg",
    descEn: "Crushed sweet red watermelon, fresh lime wedges, mint, and fizzy soda.",
    descUr: "تازہ لال تربوز اور پودینے کا ٹھنڈا شربت",
    inStock: true,
    badge: "Fresh Fruit",
    popular: true,
    chilled: true
  },
  {
    id: "mojito_green_apple",
    category: "mojitos",
    nameEn: "Green Apple Sparkler",
    nameUr: "گرین ایپل اسپارکلر",
    price: 160,
    unit: "Glass",
    image: "assets/mojitos.jpg",
    descEn: "Crisp green apple tang blended with sparkling soda and ice.",
    descUr: "سبز سیب اور سوڈا کا کرسپی فرحت بخش شربت",
    inStock: true,
    badge: "Tangy & Crisp",
    popular: false,
    chilled: true
  },
  {
    id: "mojito_roohafza_lemon",
    category: "mojitos",
    nameEn: "Rooh Afza Lemon Chiller",
    nameUr: "روح افزاء لیمن چلر",
    price: 130,
    unit: "Glass",
    image: "assets/mojitos.jpg",
    descEn: "Traditional rose herbal syrup with freshly squeezed lemon and crushed ice.",
    descUr: "روایتی روح افزاء، تازہ لیموں اور برف کا زبردست مشروب",
    inStock: true,
    badge: "Desi Classic",
    popular: true,
    chilled: true
  },
  {
    id: "mojito_orange_cooler",
    category: "mojitos",
    nameEn: "Orange Citrus Fizz",
    nameUr: "اورنج سٹرس فز",
    price: 150,
    unit: "Glass",
    image: "assets/mojitos.jpg",
    descEn: "Freshly pressed seasonal orange juice with a touch of mint and fizz.",
    descUr: "تازہ مالٹے کا رس اور سوڈا کا تروتازہ مشروب",
    inStock: true,
    badge: "Vitamin C",
    popular: false,
    chilled: true
  },

  // --- Al Sadiq Special Drinks ---
  {
    id: "special_alsadiq_grand",
    category: "specials",
    nameEn: "Al Sadiq Grand Royal Shake",
    nameUr: "الصادق گرینڈ رائل شیک",
    price: 500,
    unit: "Mega Glass",
    image: "assets/protein_shakes.jpg",
    descEn: "Our flagship signature drink: Loaded with rich milk, Kulfa ice cream, roasted dry fruits, dates, khoya, and saffron.",
    descUr: "الصادق کا خاص شاہی شیک: کلفہ آئس کریم، کھویا، خشک میوہ جات اور زعفران سے بھرپور",
    inStock: true,
    badge: "Chef Special",
    popular: true
  },
  {
    id: "special_rabri_falooda",
    category: "specials",
    nameEn: "Rabri Falooda Milkshake",
    nameUr: "ربڑی فالودہ ملک شیک",
    price: 300,
    unit: "Glass",
    image: "assets/dairy.jpg",
    descEn: "Sweet rabri strands, basil seeds (tukh malanga), Rooh Afza drizzle, and pure milk.",
    descUr: "ملائی دار ربڑی، تخم ملنگا، فالودہ اور خالص دودھ کا مشروب",
    inStock: true,
    badge: "Traditional",
    popular: true
  },
  {
    id: "special_zafran_milk",
    category: "specials",
    nameEn: "Pure Saffron & Cardamom Milk",
    nameUr: "خالص زعفرانی دودھ",
    price: 350,
    unit: "Glass",
    image: "assets/dairy.jpg",
    descEn: "Authentic Kashmiri saffron infused in simmered pure milk with crushed pistachios.",
    descUr: "کشمیری زعفران، الائچی اور پستے سے تیار شاہی گرم / ٹھنڈا دودھ",
    inStock: true,
    badge: "Kashmiri Zafran",
    popular: false
  }
];

// Sample Initial Bookings for Demo / POS queue
const SAMPLE_INITIAL_ORDERS = [
  {
    id: "ASD-101",
    timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
    customer: {
      name: "Chaudhry Tariq",
      phone: "0342-1234567",
      mode: "pickup",
      date: "Today",
      timeSlot: "ASAP (Within 15-20 Mins)",
      address: "",
      notes: "Please pack milk in clean sealed cans."
    },
    items: [
      { id: "buffalo_milk", nameEn: "Fresh Pure Buffalo Milk", nameUr: "بھینس کا خالص دودھ", qty: 5, unit: "Liter", price: 280, subtotal: 1400, options: "Chilled Farm Milk" },
      { id: "fresh_dahi", nameEn: "Fresh Creamy Dahi (Yogurt)", nameUr: "ملائی دار تازہ دہی", qty: 2, unit: "KG", price: 240, subtotal: 480, options: "Extra Malai top" }
    ],
    totalAmount: 1880,
    status: "pending"
  },
  {
    id: "ASD-102",
    timestamp: new Date(Date.now() - 40 * 60 * 1000).toISOString(),
    customer: {
      name: "Raja Hamza",
      phone: "0300-9876543",
      mode: "delivery",
      date: "Today",
      timeSlot: "Evening (5:00 PM - 8:00 PM)",
      address: "Near Focus College, GT Road Dina",
      notes: "Call when rider reaches main gate."
    },
    items: [
      { id: "cow_milk", nameEn: "Fresh Pure Cow Milk", nameUr: "گائے کا خالص دودھ", qty: 3, unit: "Liter", price: 220, subtotal: 660, options: "Unboiled Farm Fresh" },
      { id: "shake_khoya_khajoor", nameEn: "Khoya Khajoor Shake", nameUr: "کھویا کھجور شیک", qty: 2, unit: "Glass", price: 300, subtotal: 600, options: "Normal sugar, Extra chilled" },
      { id: "mojito_mint_lemon", nameEn: "Classic Mint Lemonade Mojito", nameUr: "منٹ لیمنیڈ موجیتو", qty: 2, unit: "Glass", price: 150, subtotal: 300, options: "Sprite base, Extra mint" }
    ],
    totalAmount: 1560,
    status: "preparing"
  },
  {
    id: "ASD-103",
    timestamp: new Date(Date.now() - 90 * 60 * 1000).toISOString(),
    customer: {
      name: "Malik Naveed (Gym Team)",
      phone: "0333-5554321",
      mode: "pickup",
      date: "Today",
      timeSlot: "Noon (12:00 PM - 2:30 PM)",
      address: "",
      notes: "For gym workout."
    },
    items: [
      { id: "protein_almond_pista", nameEn: "Badam Pista Gym Shake", nameUr: "بادام پستہ جم شیک", qty: 2, unit: "Glass", price: 300, subtotal: 600, options: "Extra crushed almonds" },
      { id: "mojito_watermelon", nameEn: "Fresh Watermelon Mojito", nameUr: "تازہ تربوز موجیتو", qty: 1, unit: "Glass", price: 150, subtotal: 150, options: "Extra crushed ice" }
    ],
    totalAmount: 750,
    status: "ready"
  }
];

const SAMPLE_MILK_TRANSACTIONS = [
  {
    id: "MLK-001",
    timestamp: "06:30 AM",
    date: new Date().toLocaleDateString(),
    type: "IN",
    milkType: "buffalo",
    liters: 180,
    batch: "Morning (صبح کی شفٹ)",
    source: "Al Sadiq Dairy Farm Dina - Tanker 1",
    notes: "7.6% Fat, Fresh Farm Morning Milk",
    closingBal: 180
  },
  {
    id: "MLK-002",
    timestamp: "06:45 AM",
    date: new Date().toLocaleDateString(),
    type: "IN",
    milkType: "cow",
    liters: 120,
    batch: "Morning (صبح کی شفٹ)",
    source: "Al Sadiq Dairy Farm Dina - Tanker 1",
    notes: "4.5% Fat, Light Sweet Cow Milk",
    closingBal: 120
  },
  {
    id: "MLK-003",
    timestamp: "07:15 AM",
    date: new Date().toLocaleDateString(),
    type: "DAHI",
    milkType: "buffalo",
    liters: 45,
    batch: "Morning Batch",
    source: "In-shop Dairy Production",
    notes: "Set 2 Large Matkas Dahi (~40 KG Dahi Expected)",
    closingBal: 135
  },
  {
    id: "MLK-004",
    timestamp: "08:00 AM",
    date: new Date().toLocaleDateString(),
    type: "USAGE",
    milkType: "buffalo",
    liters: 15,
    batch: "Shake Prep",
    source: "Shake Bar Counter",
    notes: "Boiled & chilled for Shakes & Kheer base",
    closingBal: 120
  }
];

const SAMPLE_SALES_TRANSACTIONS = [
  {
    id: "POS-101",
    time: "07:30 AM",
    type: "walkin",
    category: "milk",
    customer: "Walk-in Cash Customer",
    itemsSummary: "Buffalo Fresh Milk (2 Liters)",
    amount: 560,
    paymentMode: "Cash (نقد)"
  },
  {
    id: "POS-102",
    time: "08:15 AM",
    type: "walkin",
    category: "dairy",
    customer: "Muhammad Usman",
    itemsSummary: "Fresh Dahi (1.5 KG) + 1 Almond Shake",
    amount: 660,
    paymentMode: "Cash (نقد)"
  }
];

// =============================================================================
// 2. STATE CONTROLLER & STORAGE
// =============================================================================
const STORAGE_KEYS = {
  MENU: "alsadiq_menu_v4",
  ORDERS: "alsadiq_orders_v4",
  CART: "alsadiq_cart_v4",
  LANG: "alsadiq_lang_pref_v4",
  SOUND: "alsadiq_sound_pref_v4",
  WHATSAPP: "alsadiq_whatsapp_settings_v4",
  MILK_LEDGER: "alsadiq_milk_ledger_v4",
  SALES_LEDGER: "alsadiq_sales_ledger_v4",
  CLOUD_SYNC: "alsadiq_cloud_sync_config_v4",
  STAFF_PIN: "alsadiq_staff_pin_v4"
};

class AlSadiqStore {
  constructor() {
    this.menu = this.load(STORAGE_KEYS.MENU, DEFAULT_MENU_ITEMS);
    this.orders = this.load(STORAGE_KEYS.ORDERS, SAMPLE_INITIAL_ORDERS);
    this.cart = this.load(STORAGE_KEYS.CART, []);
    this.milkLedger = this.load(STORAGE_KEYS.MILK_LEDGER, SAMPLE_MILK_TRANSACTIONS);
    this.salesLedger = this.load(STORAGE_KEYS.SALES_LEDGER, SAMPLE_SALES_TRANSACTIONS);
    this.currentLang = localStorage.getItem(STORAGE_KEYS.LANG) || "en";
    this.soundEnabled = localStorage.getItem(STORAGE_KEYS.SOUND) !== "false";
    this.staffPin = localStorage.getItem(STORAGE_KEYS.STAFF_PIN) || "1234";
    this.isStaffAuthenticated = false;
    this.whatsappSettings = this.load(STORAGE_KEYS.WHATSAPP, {
      num1: "0370-9589018",
      num2: "0342-1008375",
      autoOpen: true
    });
    this.activeCategory = "all";
    this.activeFilter = "all";
    this.searchQuery = "";
    this.orderMode = "pickup"; // 'pickup' | 'delivery'
    this.currentOrderTrackingId = null;
    this.myBookingTokens = this.load("alsadiq_my_bookings", []);
  }

  saveCustomerBooking(token) {
    if (!token) return;
    if (!this.myBookingTokens.includes(token)) {
      this.myBookingTokens.push(token);
      this.save("alsadiq_my_bookings", this.myBookingTokens);
    }
  }

  isMyBooking(token) {
    if (!token) return false;
    return this.myBookingTokens.includes(token) || this.currentOrderTrackingId === token;
  }

  saveStaffPin(pin) {
    this.staffPin = pin;
    localStorage.setItem(STORAGE_KEYS.STAFF_PIN, pin);
  }

  load(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      console.warn("Storage load error:", e);
      return fallback;
    }
  }

  save(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error("Storage save error:", e);
    }
  }

  saveMenu() { this.save(STORAGE_KEYS.MENU, this.menu); }
  saveOrders() { this.save(STORAGE_KEYS.ORDERS, this.orders); }
  saveCart() { this.save(STORAGE_KEYS.CART, this.cart); }
  saveWhatsAppSettings() { this.save(STORAGE_KEYS.WHATSAPP, this.whatsappSettings); }
  saveMilkLedger() { this.save(STORAGE_KEYS.MILK_LEDGER, this.milkLedger); }
  saveSalesLedger() { this.save(STORAGE_KEYS.SALES_LEDGER, this.salesLedger); }

  resetMenu() {
    this.menu = JSON.parse(JSON.stringify(DEFAULT_MENU_ITEMS));
    this.saveMenu();
  }

  addToCart(item, qty, options, notes) {
    const existingIndex = this.cart.findIndex(
      ci => ci.id === item.id && ci.options === options && ci.notes === notes
    );

    const subtotal = Math.round(item.price * qty);

    if (existingIndex > -1) {
      this.cart[existingIndex].qty += qty;
      this.cart[existingIndex].subtotal = Math.round(this.cart[existingIndex].qty * item.price);
    } else {
      this.cart.push({
        cartItemId: "ci_" + Date.now() + "_" + Math.random().toString(36).substr(2, 4),
        id: item.id,
        nameEn: item.nameEn,
        nameUr: item.nameUr,
        unit: item.unit,
        price: item.price,
        qty: qty,
        subtotal: subtotal,
        options: options || "",
        notes: notes || "",
        image: item.image
      });
    }

    this.saveCart();
  }

  updateCartQty(cartItemId, delta) {
    const item = this.cart.find(ci => ci.cartItemId === cartItemId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      this.cart = this.cart.filter(ci => ci.cartItemId !== cartItemId);
    } else {
      item.subtotal = Math.round(item.qty * item.price);
    }
    this.saveCart();
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  getCartTotal() {
    return this.cart.reduce((acc, item) => acc + item.subtotal, 0);
  }

  getCartCount() {
    return this.cart.reduce((acc, item) => acc + item.qty, 0);
  }

  createOrder(customerData) {
    const tokenNum = "ASD-" + Math.floor(100 + Math.random() * 900);
    this.saveCustomerBooking(tokenNum);
    const newOrder = {
      id: tokenNum,
      timestamp: new Date().toISOString(),
      customer: {
        name: customerData.name,
        phone: customerData.phone,
        mode: this.orderMode,
        date: customerData.date,
        timeSlot: customerData.timeSlot,
        address: customerData.address || "",
        notes: customerData.notes || ""
      },
      items: JSON.parse(JSON.stringify(this.cart)),
      totalAmount: this.getCartTotal(),
      status: "pending"
    };

    this.orders.unshift(newOrder);
    this.saveOrders();
    this.clearCart();
    return newOrder;
  }

  updateOrderStatus(orderId, newStatus) {
    const order = this.orders.find(o => o.id === orderId);
    if (order) {
      const prevStatus = order.status;
      order.status = newStatus;
      this.saveOrders();

      // If marked as completed, record sale in sales ledger if not already recorded
      if (newStatus === "completed" && prevStatus !== "completed") {
        const itemsSummary = order.items.map(i => `${i.nameEn} (${i.qty} ${i.unit})`).join(", ");
        this.addSalesEntry({
          id: "SLIP-" + order.id,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type: "booking",
          category: "mixed",
          customer: `${order.customer.name} (${order.id})`,
          itemsSummary: itemsSummary,
          amount: order.totalAmount,
          paymentMode: "Counter / COD"
        });

        // Deduct milk stock for dairy items ordered
        order.items.forEach(item => {
          if (item.id === "buffalo_milk") {
            this.addMilkEntry({
              type: "OUT",
              milkType: "buffalo",
              liters: item.qty,
              batch: "Booking Dispatch",
              source: `Online Order ${order.id} - ${order.customer.name}`,
              notes: "Dispatched to customer"
            });
          } else if (item.id === "cow_milk") {
            this.addMilkEntry({
              type: "OUT",
              milkType: "cow",
              liters: item.qty,
              batch: "Booking Dispatch",
              source: `Online Order ${order.id} - ${order.customer.name}`,
              notes: "Dispatched to customer"
            });
          } else if (item.id === "mixed_milk") {
            this.addMilkEntry({
              type: "OUT",
              milkType: "mixed",
              liters: item.qty,
              batch: "Booking Dispatch",
              source: `Online Order ${order.id} - ${order.customer.name}`,
              notes: "Dispatched to customer"
            });
          }
        });
      }
    }
    return order;
  }

  addMilkEntry(entry) {
    const id = "MLK-" + String(this.milkLedger.length + 1).padStart(3, '0');
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const date = new Date().toLocaleDateString();

    const newRecord = {
      id: id,
      timestamp: time,
      date: date,
      type: entry.type, // 'IN' | 'OUT' | 'DAHI' | 'USAGE'
      milkType: entry.milkType, // 'cow' | 'buffalo' | 'mixed'
      liters: parseFloat(entry.liters) || 0,
      batch: entry.batch || "Counter",
      source: entry.source || "Shop Counter",
      notes: entry.notes || ""
    };

    this.milkLedger.unshift(newRecord);
    this.saveMilkLedger();
    if (typeof cloudSync !== "undefined" && cloudSync.pushMilkEntry) {
      cloudSync.pushMilkEntry(newRecord);
    }
    return newRecord;
  }

  addSalesEntry(sale) {
    const id = sale.id || "POS-" + Math.floor(100 + Math.random() * 900);
    const time = sale.time || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newSale = {
      id: id,
      time: time,
      type: sale.type || "walkin",
      category: sale.category || "milk",
      customer: sale.customer || "Walk-in Cash Customer",
      itemsSummary: sale.itemsSummary || "Direct Counter Sale",
      amount: parseFloat(sale.amount) || 0,
      paymentMode: sale.paymentMode || "Cash (نقد)"
    };

    this.salesLedger.unshift(newSale);
    this.saveSalesLedger();
    if (typeof cloudSync !== "undefined" && cloudSync.pushSalesEntry) {
      cloudSync.pushSalesEntry(newSale);
    }
    return newSale;
  }

  // Calculate live Milk Tank Balances (In - Out - Dahi - Usage)
  getMilkStockSummary() {
    let cowIn = 0, cowOut = 0;
    let buffaloIn = 0, buffaloOut = 0;
    let mixedIn = 0, mixedOut = 0;
    let dahiTotal = 0;

    this.milkLedger.forEach(entry => {
      const vol = entry.liters || 0;
      if (entry.type === "IN") {
        if (entry.milkType === "cow") cowIn += vol;
        else if (entry.milkType === "buffalo") buffaloIn += vol;
        else if (entry.milkType === "mixed") mixedIn += vol;
      } else {
        // OUT, DAHI, USAGE deduct stock
        if (entry.milkType === "cow") cowOut += vol;
        else if (entry.milkType === "buffalo") buffaloOut += vol;
        else if (entry.milkType === "mixed") mixedOut += vol;

        if (entry.type === "DAHI") dahiTotal += vol;
      }
    });

    const cowBal = Math.max(0, cowIn - cowOut);
    const buffaloBal = Math.max(0, buffaloIn - buffaloOut);
    const mixedBal = Math.max(0, mixedIn - mixedOut);

    return {
      cowIn, cowOut, cowBal,
      buffaloIn, buffaloOut, buffaloBal,
      mixedIn, mixedOut, mixedBal,
      totalIn: cowIn + buffaloIn + mixedIn,
      totalOut: cowOut + buffaloOut + mixedOut,
      totalBal: cowBal + buffaloBal + mixedBal,
      dahiTotal
    };
  }

  getSalesSummary() {
    let grossTotal = 0;
    let milkTotal = 0;
    let milkLiters = 0;
    let dahiTotal = 0;
    let drinksTotal = 0;

    this.salesLedger.forEach(s => {
      grossTotal += s.amount || 0;
      if (s.category === "milk") {
        milkTotal += s.amount || 0;
      } else if (s.category === "dairy") {
        dahiTotal += s.amount || 0;
      } else {
        drinksTotal += s.amount || 0;
      }
    });

    return {
      grossTotal,
      milkTotal,
      milkLiters,
      dahiTotal,
      drinksTotal,
      count: this.salesLedger.length
    };
  }
}

// Global Store Instance
const store = new AlSadiqStore();

// =============================================================================
// 3. AUDIO ALERT SYNTHESIZER (Web Audio API - Pure Zero-Dependency)
// =============================================================================
class SoundSynthesizer {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playOrderBell() {
    if (!store.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'sine';
      osc2.type = 'triangle';

      osc1.frequency.setValueAtTime(1318.51, now); // E6
      osc1.frequency.exponentialRampToValueAtTime(1661.22, now + 0.12); // G#6
      osc1.frequency.exponentialRampToValueAtTime(1975.53, now + 0.25); // B6

      osc2.frequency.setValueAtTime(659.25, now);
      osc2.frequency.exponentialRampToValueAtTime(830.61, now + 0.12);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.9);
      osc2.stop(now + 0.9);
    } catch (e) {
      console.warn("Audio chime error:", e);
    }
  }
}

const soundSynth = new SoundSynthesizer();

// =============================================================================
// 4. REAL-TIME CLOUD SYNCHRONIZATION ENGINE (Firebase RTDB + Multi-Device Bridge)
// =============================================================================
class CloudSyncManager {
  constructor(storeRef) {
    this.store = storeRef;
    this.config = this.store.load(STORAGE_KEYS.CLOUD_SYNC, {
      url: "https://alsadiqmilkfreshdrinks-default-rtdb.europe-west1.firebasedatabase.app",
      syncIntervalMs: 2500,
      enabled: true
    });
    this.isSyncing = false;
    this.lastSyncTimestamp = null;
    this.pollTimer = null;
    this.broadcastChannel = null;
    this.knownOrderIds = new Set(this.store.orders.map(o => o.id));
    this.knownMilkIds = new Set(this.store.milkLedger.map(m => m.id));
    this.knownSalesIds = new Set(this.store.salesLedger.map(s => s.id));

    this.initBroadcastChannel();
  }

  initBroadcastChannel() {
    try {
      if (typeof window !== "undefined" && window.BroadcastChannel) {
        this.broadcastChannel = new BroadcastChannel("alsadiq_orders_channel");
        this.broadcastChannel.onmessage = (event) => {
          if (event.data && event.data.type === "ORDER_CREATED") {
            const co = event.data.order;
            if (co && co.id && !this.knownOrderIds.has(co.id)) {
              this.knownOrderIds.add(co.id);
              if (!this.store.orders.some(o => o.id === co.id)) {
                this.store.orders.unshift(co);
                this.store.saveOrders();
                soundSynth.playOrderBell();
                this.triggerVibrate(500);
                showToast(`🔔 New Live Order: ${co.id} (${co.customer.name}) - Rs. ${co.totalAmount}`, "success");
                renderStaffOrders();
              }
            }
          } else if (event.data && event.data.type === "SYNC_REQUEST") {
            this.pullFromCloud(false);
          }
        };
      }
    } catch (e) {
      console.warn("BroadcastChannel error:", e);
    }
  }

  triggerVibrate(durationMs = 400) {
    try {
      if (window.Android && typeof window.Android.vibrate === "function") {
        window.Android.vibrate(durationMs);
      } else if (typeof navigator !== "undefined" && navigator.vibrate) {
        navigator.vibrate(durationMs);
      }
    } catch (e) {}
  }

  getApiBaseUrl() {
    let url = (this.config.url || "https://alsadiqmilkfreshdrinks-default-rtdb.europe-west1.firebasedatabase.app").trim();
    if (url.endsWith("/")) url = url.slice(0, -1);
    return url;
  }

  saveConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
    this.store.save(STORAGE_KEYS.CLOUD_SYNC, this.config);
  }

  async httpGet(url) {
    if (window.Android && typeof window.Android.httpGet === "function") {
      try {
        const res = window.Android.httpGet(url);
        return res ? JSON.parse(res) : null;
      } catch (e) {
        console.warn("Android native httpGet error:", e);
      }
    }
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);
    const resp = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    return resp.ok ? await resp.json() : null;
  }

  async httpPut(url, data) {
    const jsonStr = JSON.stringify(data);
    if (window.Android && typeof window.Android.httpPut === "function") {
      try {
        const res = window.Android.httpPut(url, jsonStr);
        return res === "OK";
      } catch (e) {
        console.warn("Android native httpPut error:", e);
      }
    }
    const resp = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: jsonStr
    });
    return resp.ok;
  }

  async httpDelete(url) {
    if (window.Android && typeof window.Android.httpDelete === "function") {
      try {
        const res = window.Android.httpDelete(url);
        return res === "OK";
      } catch (e) {
        console.warn("Android native httpDelete error:", e);
      }
    }
    const resp = await fetch(url, { method: "DELETE" });
    return resp.ok;
  }

  async testConnection(customUrl) {
    const targetUrl = (customUrl || this.getApiBaseUrl()) + "/ping.json";
    try {
      const ok = await this.httpPut(targetUrl, { timestamp: new Date().toISOString(), ping: "ok" });
      return !!ok;
    } catch (e) {
      console.warn("Cloud connection test failed:", e);
      return false;
    }
  }

  // --- Orders Cloud Sync ---
  async pushOrder(order) {
    this.knownOrderIds.add(order.id);
    this.notifyLocalChannel({ type: "ORDER_CREATED", order });

    if (!this.config.enabled) return;
    try {
      const url = `${this.getApiBaseUrl()}/orders/${order.id}.json`;
      await this.httpPut(url, order);
      this.updateStatusPill("connected", "Cloud: Live Synced");
    } catch (e) {
      console.warn("Failed to push order to cloud:", e);
      this.updateStatusPill("offline", "Cloud: Local Mode");
    }
  }

  async updateRemoteOrderStatus(orderId, status) {
    if (!this.config.enabled) return;
    try {
      const url = `${this.getApiBaseUrl()}/orders/${orderId}/status.json`;
      await this.httpPut(url, status);
      this.notifyLocalChannel({ type: "SYNC_REQUEST" });
    } catch (e) {
      console.warn("Failed to update status in cloud:", e);
    }
  }

  async deleteRemoteOrder(orderId) {
    if (!this.config.enabled) return;
    try {
      const url = `${this.getApiBaseUrl()}/orders/${orderId}.json`;
      await this.httpDelete(url);
      this.notifyLocalChannel({ type: "SYNC_REQUEST" });
    } catch (e) {
      console.warn("Failed to delete order in cloud:", e);
    }
  }

  // --- Milk Ledger Cloud Sync ---
  async pushMilkEntry(entry) {
    if (!entry || !entry.id) return;
    this.knownMilkIds.add(entry.id);
    if (!this.config.enabled) return;
    try {
      const url = `${this.getApiBaseUrl()}/milkLedger/${entry.id}.json`;
      await this.httpPut(url, entry);
    } catch (e) {
      console.warn("Failed to push milk entry to cloud:", e);
    }
  }

  async deleteRemoteMilkEntry(id) {
    if (!this.config.enabled) return;
    try {
      const url = `${this.getApiBaseUrl()}/milkLedger/${id}.json`;
      await this.httpDelete(url);
    } catch (e) {}
  }

  // --- Sales Ledger Cloud Sync ---
  async pushSalesEntry(sale) {
    if (!sale || !sale.id) return;
    this.knownSalesIds.add(sale.id);
    if (!this.config.enabled) return;
    try {
      const url = `${this.getApiBaseUrl()}/salesLedger/${sale.id}.json`;
      await this.httpPut(url, sale);
    } catch (e) {
      console.warn("Failed to push sales entry to cloud:", e);
    }
  }

  async deleteRemoteSalesEntry(id) {
    if (!this.config.enabled) return;
    try {
      const url = `${this.getApiBaseUrl()}/salesLedger/${id}.json`;
      await this.httpDelete(url);
    } catch (e) {}
  }

  handleCustomerOrderUpdate(order, oldStatus, newStatus) {
    if (!order || !newStatus) return;

    // 1. Update confirmation stepper if visible or tracking
    if (this.store.isMyBooking(order.id)) {
      updateTrackerStepper(newStatus);
    }

    // 2. Play sound and vibrate customer device
    soundSynth.playOrderBell();
    this.triggerVibrate(600);

    // 3. Status-specific customer alerts & notifications
    if (newStatus === "ready") {
      if (window.confetti) {
        try {
          window.confetti({ particleCount: 70, spread: 80, origin: { y: 0.5 } });
        } catch (e) {}
      }
      showToast(`🥛 آرڈر تیار ہے! Order #${order.id} is READY FOR PICKUP at Al Sadiq Counter!`, "success");
      showCustomerReadyBanner(order);
    } else if (newStatus === "completed") {
      showToast(`✅ آرڈر مکمل ہو گیا! Order #${order.id} marked completed. Thank you!`, "success");
      hideCustomerReadyBanner();
    } else if (newStatus === "preparing") {
      showToast(`👨‍🍳 Order #${order.id} is now being prepared fresh!`, "info");
    }
  }

  async pullFromCloud(playChimeOnNew = true) {
    if (this.isSyncing || !this.config.enabled) return;
    this.isSyncing = true;
    this.updateStatusPill("syncing", "Cloud: Syncing...");

    try {
      // 1. Pull Orders
      const ordersUrl = `${this.getApiBaseUrl()}/orders.json`;
      const cloudOrders = await this.httpGet(ordersUrl);

      if (cloudOrders && typeof cloudOrders === "object") {
        let incomingOrders = Array.isArray(cloudOrders)
          ? cloudOrders.filter(Boolean)
          : Object.values(cloudOrders);

        let hasNewPending = false;
        let newOrderSample = null;

        incomingOrders.forEach(co => {
          if (!co || !co.id) return;
          const isMyOrder = this.store.isMyBooking(co.id);

          if (!this.knownOrderIds.has(co.id)) {
            this.knownOrderIds.add(co.id);
            if (co.status === "pending") {
              hasNewPending = true;
              newOrderSample = co;
            }
            if (!this.store.orders.some(lo => lo.id === co.id)) {
              this.store.orders.unshift(co);
            }
            // If this order was already updated to ready or completed on cloud
            if (isMyOrder && co.status && co.status !== "pending") {
              this.handleCustomerOrderUpdate(co, "pending", co.status);
            }
          } else {
            const local = this.store.orders.find(lo => lo.id === co.id);
            if (local && co.status && local.status !== co.status) {
              const oldStatus = local.status;
              local.status = co.status;
              if (isMyOrder) {
                this.handleCustomerOrderUpdate(co, oldStatus, co.status);
              }
            }
          }
        });

        this.store.saveOrders();

        if (hasNewPending && playChimeOnNew) {
          soundSynth.playOrderBell();
          this.triggerVibrate(600);
          if (newOrderSample) {
            showToast(`🔔 New Live Order: ${newOrderSample.id} (${newOrderSample.customer.name}) - Rs. ${newOrderSample.totalAmount}`, "success");
          }
        }

        renderStaffOrders();
      }

      // 2. Pull Milk Ledger
      const milkUrl = `${this.getApiBaseUrl()}/milkLedger.json`;
      const cloudMilk = await this.httpGet(milkUrl);
      if (cloudMilk && typeof cloudMilk === "object") {
        let incomingMilk = Array.isArray(cloudMilk) ? cloudMilk.filter(Boolean) : Object.values(cloudMilk);
        let milkUpdated = false;
        incomingMilk.forEach(cm => {
          if (!cm || !cm.id) return;
          if (!this.knownMilkIds.has(cm.id)) {
            this.knownMilkIds.add(cm.id);
            if (!this.store.milkLedger.some(lm => lm.id === cm.id)) {
              this.store.milkLedger.unshift(cm);
              milkUpdated = true;
            }
          }
        });
        if (milkUpdated) {
          this.store.saveMilkLedger();
          renderMilkLedger();
        }
      }

      // 3. Pull Sales Ledger
      const salesUrl = `${this.getApiBaseUrl()}/salesLedger.json`;
      const cloudSales = await this.httpGet(salesUrl);
      if (cloudSales && typeof cloudSales === "object") {
        let incomingSales = Array.isArray(cloudSales) ? cloudSales.filter(Boolean) : Object.values(cloudSales);
        let salesUpdated = false;
        incomingSales.forEach(cs => {
          if (!cs || !cs.id) return;
          if (!this.knownSalesIds.has(cs.id)) {
            this.knownSalesIds.add(cs.id);
            if (!this.store.salesLedger.some(ls => ls.id === cs.id)) {
              this.store.salesLedger.unshift(cs);
              salesUpdated = true;
            }
          }
        });
        if (salesUpdated) {
          this.store.saveSalesLedger();
          renderSalesLedger();
        }
      }

      this.lastSyncTimestamp = new Date();
      this.updateStatusPill("connected", "Cloud: Live Synced");
    } catch (e) {
      this.updateStatusPill("offline", "Cloud: Local Mode");
    } finally {
      this.isSyncing = false;
    }
  }

  notifyLocalChannel(msg) {
    try {
      if (this.broadcastChannel) {
        this.broadcastChannel.postMessage(msg);
      }
    } catch (e) {}
  }

  updateStatusPill(state, text) {
    const pill = document.getElementById("cloudSyncStatusPill");
    const statusText = document.getElementById("cloudSyncStatusText");
    if (!pill || !statusText) return;

    pill.className = `cloud-sync-pill ${state}`;
    statusText.textContent = text;
  }

  startPolling() {
    if (this.pollTimer) clearInterval(this.pollTimer);
    this.pullFromCloud(false);
    this.pollTimer = setInterval(() => {
      this.pullFromCloud(true);
    }, this.config.syncIntervalMs || 3500);
  }

  stopPolling() {
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
  }
}

const cloudSync = new CloudSyncManager(store);

// =============================================================================
// 5. TOAST NOTIFICATIONS, WHATSAPP DISPATCH & UTILS
// =============================================================================
function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-bell'}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Clean international WhatsApp phone number formatter
function formatWaPhone(raw) {
  let digits = (raw || "").replace(/[^0-9]/g, '');
  if (digits.startsWith("0092")) {
    digits = digits.substring(2);
  } else if (digits.startsWith("0")) {
    digits = "92" + digits.substring(1);
  } else if (!digits.startsWith("92")) {
    digits = "92" + digits;
  }
  return digits;
}

// Global Customer Live Ready Banner Helpers
window.showCustomerReadyBanner = function(order) {
  if (!order) return;
  let banner = document.getElementById("customerLiveReadyBanner");
  if (!banner) {
    banner = document.createElement("div");
    banner.id = "customerLiveReadyBanner";
    banner.className = "customer-live-ready-banner";
    document.body.appendChild(banner);
  }

  banner.innerHTML = `
    <div class="ready-banner-icon"><i class="fa-solid fa-bell-concierge"></i></div>
    <div class="ready-banner-text">
      <strong>Order #${order.id} is READY!</strong>
      <span>آپ کا آرڈر تیار ہے۔ کاؤنٹر سے وصول کریں۔</span>
    </div>
    <button type="button" class="btn-ready-banner-view" onclick="openConfirmationModalFromTrack('${order.id}')">View Slip</button>
    <button type="button" class="btn-ready-banner-close" onclick="hideCustomerReadyBanner()"><i class="fa-solid fa-xmark"></i></button>
  `;
  banner.style.display = "flex";
};

window.hideCustomerReadyBanner = function() {
  const banner = document.getElementById("customerLiveReadyBanner");
  if (banner) banner.style.display = "none";
};

// Build itemized Customer Confirmation Receipt for WhatsApp
function buildCustomerReceiptMessage(order) {
  const itemsSummaryText = order.items.map(i => `• ${i.qty} ${i.unit} × ${i.nameEn} ${i.options ? `(${i.options})` : ''} = Rs. ${i.subtotal}`).join('%0A');

  return (
    `🥛 *AL SADIQ MILK & FRESH DRINKS* 🥛%0A` +
    `📍 *GT Road, Dina (With Focus College)*%0A` +
    `📞 *Shop Helpline:* 0370-9589018 | 0342-1008375%0A` +
    `----------------------------------------%0A` +
    `🧾 *YOUR BOOKING RECEIPT*%0A` +
    `🎫 *Booking Token #:* *${order.id}*%0A` +
    `👤 *Customer Name:* ${encodeURIComponent(order.customer.name)}%0A` +
    `📱 *Customer Mobile:* ${encodeURIComponent(order.customer.phone)}%0A` +
    `🚚 *Order Type:* ${order.customer.mode === 'delivery' ? 'HOME DELIVERY (ہوم ڈیلیوری)' : 'SHOP PICKUP (دکان سے وصولی)'}%0A` +
    `⏰ *Pickup / Delivery Time:* ${encodeURIComponent(order.customer.date + ' • ' + order.customer.timeSlot)}%0A` +
    (order.customer.address ? `📍 *Delivery Address:* ${encodeURIComponent(order.customer.address)}%0A` : '') +
    (order.customer.notes ? `📝 *Special Note:* ${encodeURIComponent(order.customer.notes)}%0A` : '') +
    `----------------------------------------%0A` +
    `🛒 *ITEMS ORDERED:*%0A${itemsSummaryText}%0A` +
    `----------------------------------------%0A` +
    `💰 *TOTAL PAYABLE:* *Rs. ${order.totalAmount}*%0A` +
    `💵 *Payment Policy:* Pay at Dina counter upon pickup / delivery%0A` +
    `----------------------------------------%0A` +
    `✅ _Thank you for choosing Al Sadiq Pure Dairy & Drinks!_`
  );
}

// Build Kitchen / Counter Dispatch Slip for WhatsApp
function buildShopKitchenSlipMessage(order) {
  const itemsSummaryText = order.items.map(i => `• ${i.qty} ${i.unit} × ${i.nameEn} ${i.options ? `(${i.options})` : ''} = Rs. ${i.subtotal}`).join('%0A');

  return (
    `🥛 *AL SADIQ - NEW BOOKING ORDER* 🥛%0A` +
    `📍 *GT Road, Dina (Counter Dispatch)*%0A` +
    `----------------------------------------%0A` +
    `📋 *ORDER TOKEN #:* *${order.id}*%0A` +
    `👤 *Customer:* ${encodeURIComponent(order.customer.name)}%0A` +
    `📞 *Customer Mobile:* ${encodeURIComponent(order.customer.phone)}%0A` +
    `🛵 *Mode:* ${order.customer.mode === 'delivery' ? 'HOME DELIVERY' : 'SHOP PICKUP'}%0A` +
    `⏰ *Time Slot:* ${encodeURIComponent(order.customer.date + ' • ' + order.customer.timeSlot)}%0A` +
    (order.customer.address ? `📍 *Address:* ${encodeURIComponent(order.customer.address)}%0A` : '') +
    (order.customer.notes ? `📝 *Note:* ${encodeURIComponent(order.customer.notes)}%0A` : '') +
    `----------------------------------------%0A` +
    `🛒 *ITEMS LIST:*%0A${itemsSummaryText}%0A` +
    `----------------------------------------%0A` +
    `💰 *TOTAL AMOUNT:* *Rs. ${order.totalAmount}*%0A` +
    `----------------------------------------%0A` +
    `✅ _Dispatched via Al Sadiq Online System_`
  );
}

// Universal WhatsApp Dispatcher (Bypasses popup blocker & bridges to Android native intent)
function dispatchWhatsAppReceipt(phoneNumber, encodedMessageText) {
  const cleanPhone = formatWaPhone(phoneNumber);
  const waUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodedMessageText}`;

  // If inside Android WebView app
  if (window.Android && typeof window.Android.openWhatsApp === "function") {
    try {
      const decodedMsg = decodeURIComponent(encodedMessageText.replace(/%0A/g, "\n"));
      window.Android.openWhatsApp(cleanPhone, decodedMsg);
      return true;
    } catch (e) {
      console.warn("Android.openWhatsApp error:", e);
    }
  }

  // Web fallback
  try {
    const win = window.open(waUrl, "_blank");
    if (!win || win.closed || typeof win.closed === "undefined") {
      window.location.href = waUrl;
    }
    return true;
  } catch (e) {
    window.location.href = waUrl;
    return true;
  }
}

// =============================================================================
// 5. UI CONTROLLERS & RENDERING ENGINE
// =============================================================================

// Language Toggle
function setLanguage(lang) {
  store.currentLang = lang;
  localStorage.setItem(STORAGE_KEYS.LANG, lang);
  document.body.setAttribute("data-lang", lang);
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ur" ? "rtl" : "ltr");

  const langLabel = document.getElementById("currentLangLabel");
  if (langLabel) {
    langLabel.textContent = lang === "en" ? "اردو" : "English";
  }

  renderDailyRates();
  renderProducts();
  renderCart();
  renderStaffOrders();
  renderMilkLedger();
  renderSalesLedger();
}

// Render Daily Highlight Rates Bar & Hero Price Tags
function renderDailyRates() {
  // Find key dairy products
  const cow = store.menu.find(i => i.id === "cow_milk");
  const buffalo = store.menu.find(i => i.id === "buffalo_milk");
  const mixed = store.menu.find(i => i.id === "mixed_milk");
  const dahi = store.menu.find(i => i.id === "fresh_dahi");

  // 1. Update Hero Price Badges dynamically
  const heroCowRate = document.getElementById("heroCowRateDisplay");
  const heroBuffaloRate = document.getElementById("heroBuffaloRateDisplay");
  const heroMixedRate = document.getElementById("heroMixedRateDisplay");
  const heroDahiRate = document.getElementById("heroDahiRateDisplay");

  if (heroCowRate && cow) {
    heroCowRate.textContent = `${store.currentLang === 'ur' ? 'گائے کا دودھ' : 'Cow Milk'}: Rs. ${cow.price} / ${cow.unit}`;
  }
  if (heroBuffaloRate && buffalo) {
    heroBuffaloRate.textContent = `${store.currentLang === 'ur' ? 'بھینس کا دودھ' : 'Buffalo Milk'}: Rs. ${buffalo.price} / ${buffalo.unit}`;
  }
  if (heroMixedRate && mixed) {
    heroMixedRate.textContent = `${store.currentLang === 'ur' ? 'مکس دودھ' : 'Mixed Milk'}: Rs. ${mixed.price} / ${mixed.unit}`;
  }
  if (heroDahiRate && dahi) {
    heroDahiRate.textContent = `${store.currentLang === 'ur' ? 'تازہ دہی' : 'Fresh Dahi'}: Rs. ${dahi.price} / ${dahi.unit}`;
  }

  // 2. Update Tank Header Rates in Staff Dashboard Module 2
  const tagCow = document.getElementById("tankRateTagCow");
  const tagBuffalo = document.getElementById("tankRateTagBuffalo");
  const tagMixed = document.getElementById("tankRateTagMixed");

  if (tagCow && cow) tagCow.textContent = `Rs. ${cow.price} / ${cow.unit}`;
  if (tagBuffalo && buffalo) tagBuffalo.textContent = `Rs. ${buffalo.price} / ${buffalo.unit}`;
  if (tagMixed && mixed) tagMixed.textContent = `Rs. ${mixed.price} / ${mixed.unit}`;

  // 3. Update Daily Rates Grid Bar
  const container = document.getElementById("dailyRatesGrid");
  if (container) {
    const highlightIds = ["cow_milk", "buffalo_milk", "mixed_milk", "fresh_dahi", "desi_ghee"];
    const items = store.menu.filter(item => highlightIds.includes(item.id));

    container.innerHTML = items.map(item => `
      <div class="rate-item-card" onclick="openCustomizeModal('${item.id}')" style="cursor:pointer;" title="Click to Order">
        <div class="rate-item-info">
          <strong>${store.currentLang === 'ur' ? item.nameUr : item.nameEn}</strong>
          <small>${item.badge || 'Fresh Farm'}</small>
        </div>
        <div class="rate-item-price">
          Rs. ${item.price} <span class="rate-unit">/${item.unit}</span>
        </div>
      </div>
    `).join("");
  }
}

// Render Catalog Products
function renderProducts() {
  const container = document.getElementById("menuProductsGrid");
  if (!container) return;

  let filtered = store.menu.filter(item => {
    if (store.activeCategory !== "all" && item.category !== store.activeCategory) {
      return false;
    }
    if (store.activeFilter === "popular" && !item.popular) return false;
    if (store.activeFilter === "fitness" && !item.fitness) return false;
    if (store.activeFilter === "chilled" && !item.chilled) return false;

    if (store.searchQuery.trim()) {
      const q = store.searchQuery.toLowerCase();
      const matchEn = item.nameEn.toLowerCase().includes(q) || item.descEn.toLowerCase().includes(q);
      const matchUr = item.nameUr.toLowerCase().includes(q) || item.descUr.toLowerCase().includes(q);
      return matchEn || matchUr;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-box" style="grid-column: 1 / -1;">
        <i class="fa-solid fa-glass-water"></i>
        <h3>No matching items found</h3>
        <p>Try searching for pure milk, shake, or mojito.</p>
      </div>
    `;
    return;
  }

  const categoryHeaders = {
    dairy: { en: "Pure Farm Dairy & Fresh Milk", ur: "خالص فارم ڈیری و تازہ دودھ", icon: "fa-cow" },
    milkshakes: { en: "Wholesome Fruit Milkshakes", ur: "تازہ پھلوں کے ملک شیکس", icon: "fa-blender" },
    protein: { en: "High Protein & Energy Shakes", ur: "پروٹین و انرجی شیکس", icon: "fa-dumbbell" },
    mojitos: { en: "Chilled Mojitos & Fresh Juices", ur: "ٹھنڈے موجیتوز اور تازہ جوسز", icon: "fa-champagne-glasses" },
    specials: { en: "Al Sadiq Signature Special Drinks", ur: "الصادق اسپیشل ڈرنکس", icon: "fa-star" }
  };

  if (store.activeCategory === "all" && !store.searchQuery.trim()) {
    const categories = ["dairy", "milkshakes", "protein", "mojitos", "specials"];
    let html = "";

    categories.forEach(catKey => {
      const catItems = filtered.filter(i => i.category === catKey);
      if (catItems.length === 0) return;

      const meta = categoryHeaders[catKey];
      html += `
        <div class="category-section-block" id="cat-block-${catKey}">
          <div class="cat-section-header">
            <div class="cat-section-title-wrap">
              <div class="cat-badge-icon"><i class="fa-solid ${meta.icon}"></i></div>
              <h2 class="cat-section-title">
                ${store.currentLang === 'ur' ? meta.ur : meta.en}
              </h2>
            </div>
            <span class="cat-section-count">${catItems.length} Items</span>
          </div>
          <div class="products-grid">
            ${catItems.map(item => createProductCardHtml(item)).join("")}
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  } else {
    container.innerHTML = `
      <div class="products-grid" style="margin-top: 1.5rem;">
        ${filtered.map(item => createProductCardHtml(item)).join("")}
      </div>
    `;
  }
}

function createProductCardHtml(item) {
  const isUrdu = store.currentLang === "ur";
  const title = isUrdu ? item.nameUr : item.nameEn;
  const subTitle = isUrdu ? item.nameEn : item.nameUr;
  const initialQty = item.unit === "KG" ? 1 : 1;

  return `
    <div class="product-card-compact" data-item-id="${item.id}">
      <div class="card-top-row">
        <div class="card-mini-thumb">
          <img src="${item.image}" alt="${item.nameEn}" loading="lazy">
        </div>
        <div class="card-info-col">
          <h3 class="card-compact-title">${title}</h3>
          <span class="card-compact-urdu">${subTitle}</span>
          <div class="card-price-badge">Rs. ${item.price} / ${item.unit}</div>
        </div>
      </div>
      <div class="card-bottom-actions">
        <div class="card-qty-stepper">
          <button type="button" class="card-qty-btn" onclick="stepCardQty('${item.id}', -1)">-</button>
          <span class="card-qty-value" id="cardQtyVal_${item.id}">1</span>
          <button type="button" class="card-qty-btn" onclick="stepCardQty('${item.id}', 1)">+</button>
        </div>
        <div class="card-action-btns-group">
          <button type="button" class="btn-card-add-more" onclick="addCardItemToCart('${item.id}')" title="Add to Order">
            <i class="fa-solid fa-plus"></i> <span>Add</span>
          </button>
          <button type="button" class="btn-card-quick-book" onclick="quickBookDirect('${item.id}')" title="Book Now">
            <i class="fa-solid fa-bolt"></i>
            <span>${isUrdu ? 'فوری بک کریں' : 'Book Now'}</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

// Track card quantities in memory
const itemCardQuantities = {};

window.stepCardQty = function(itemId, delta) {
  const item = store.menu.find(i => i.id === itemId);
  if (!item) return;

  const current = itemCardQuantities[itemId] || 1;
  const step = (item.unit === "KG") ? 0.5 : 1;
  let next = current + (delta * step);
  if (next < step) next = step;
  if (next > 50) next = 50;

  itemCardQuantities[itemId] = next;
  const valElem = document.getElementById(`cardQtyVal_${itemId}`);
  if (valElem) valElem.textContent = next;
};

window.addCardItemToCart = function(itemId) {
  const item = store.menu.find(i => i.id === itemId);
  if (!item) return;

  const qty = itemCardQuantities[itemId] || 1;
  store.addToCart(item, qty, "", "");
  renderCart();
  showToast(`Added ${qty} ${item.unit} of ${store.currentLang === 'ur' ? item.nameUr : item.nameEn}`, "success");
};

// Instant Direct Quick-Booking (1-Click flow to checkout!)
window.quickBookDirect = function(itemId) {
  const item = store.menu.find(i => i.id === itemId);
  if (!item) return;

  const qty = itemCardQuantities[itemId] || 1;
  store.addToCart(item, qty, "", "");
  renderCart();
  closeCartDrawer();
  openCheckoutModal();
};

// Global direct jump for hero buttons
window.filterCategoryDirect = function(catKey) {
  store.activeCategory = catKey;
  document.querySelectorAll(".cat-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.category === catKey);
  });
  renderProducts();
};

// =============================================================================
// 6. CUSTOMIZATION MODAL ENGINE
// =============================================================================
let activeModalItem = null;
let currentModalQty = 1;
let currentModalOptions = {};

function openCustomizeModal(itemId) {
  const item = store.menu.find(i => i.id === itemId);
  if (!item) return;

  activeModalItem = item;
  currentModalQty = 1;
  currentModalOptions = {};

  const modal = document.getElementById("customizationModal");
  const modalImg = document.getElementById("modalItemImage");
  const modalTitle = document.getElementById("modalItemTitle");
  const modalUrdu = document.getElementById("modalItemUrdu");
  const modalDesc = document.getElementById("modalItemDesc");
  const modalRate = document.getElementById("modalRateDisplay");
  const modalQtyInput = document.getElementById("modalQtyInput");
  const modalQtyUnit = document.getElementById("modalQtyUnit");
  const quickPills = document.getElementById("quickQtyPills");
  const optionsContainer = document.getElementById("customOptionsContainer");
  const notesInput = document.getElementById("modalItemNotes");

  modalImg.src = item.image;
  modalTitle.textContent = item.nameEn;
  modalUrdu.textContent = item.nameUr;
  modalDesc.textContent = store.currentLang === 'ur' ? item.descUr : item.descEn;
  modalRate.textContent = `Rs. ${item.price} / ${item.unit}`;
  modalQtyInput.value = currentModalQty;
  modalQtyUnit.textContent = item.unit;
  notesInput.value = "";

  // Populate Quick Quantity Pills based on category
  if (item.isDairy) {
    if (item.unit === "Liter") {
      quickPills.innerHTML = [1, 2, 3, 5, 10].map(n => `
        <button type="button" class="quick-qty-btn ${n === 1 ? 'active' : ''}" onclick="setModalQty(${n})">${n} Liters</button>
      `).join("");
    } else {
      quickPills.innerHTML = [0.5, 1, 2, 5].map(n => `
        <button type="button" class="quick-qty-btn ${n === 1 ? 'active' : ''}" onclick="setModalQty(${n})">${n} KG</button>
      `).join("");
    }
  } else {
    quickPills.innerHTML = [1, 2, 3, 4, 6].map(n => `
      <button type="button" class="quick-qty-btn ${n === 1 ? 'active' : ''}" onclick="setModalQty(${n})">${n} Glasses</button>
    `).join("");
  }

  // Options: Sugar / Ice / Topping
  let optionsHtml = "";
  if (!item.isDairy) {
    optionsHtml += `
      <div class="custom-field-group">
        <label class="field-title"><i class="fa-solid fa-snowflake"></i> Chilled Ice Level (برف کی مقدار)</label>
        <div class="radio-pill-group">
          <label class="active" onclick="selectOpt('ice', 'Normal Ice (نارمل ٹھنڈا)')">
            <input type="radio" name="optIce" checked>
            <span>Normal Chilled</span>
          </label>
          <label onclick="selectOpt('ice', 'Extra Chilled (زیادہ ٹھنڈا)')">
            <input type="radio" name="optIce">
            <span>Extra Ice</span>
          </label>
          <label onclick="selectOpt('ice', 'No Ice / Room Temp (بغیر برف)')">
            <input type="radio" name="optIce">
            <span>No Ice</span>
          </label>
        </div>
      </div>
      <div class="custom-field-group">
        <label class="field-title"><i class="fa-solid fa-cubes-stacked"></i> Sweetness & Sugar (چینی کی مقدار)</label>
        <div class="radio-pill-group">
          <label class="active" onclick="selectOpt('sugar', 'Standard Sugar (معمول کے مطابق)')">
            <input type="radio" name="optSugar" checked>
            <span>Standard</span>
          </label>
          <label onclick="selectOpt('sugar', 'Less Sugar (کم چینی)')">
            <input type="radio" name="optSugar">
            <span>Less Sugar</span>
          </label>
          <label onclick="selectOpt('sugar', 'No Sugar / Diet (بغیر چینی)')">
            <input type="radio" name="optSugar">
            <span>Sugar Free / Diet</span>
          </label>
        </div>
      </div>
    `;
  }

  optionsContainer.innerHTML = optionsHtml;
  updateModalTotal();
  modal.classList.add("active");
}

window.setModalQty = function(qty) {
  currentModalQty = qty;
  document.getElementById("modalQtyInput").value = qty;
  document.querySelectorAll(".quick-qty-btn").forEach(btn => {
    btn.classList.toggle("active", parseFloat(btn.textContent) === qty);
  });
  updateModalTotal();
};

window.selectOpt = function(key, val) {
  currentModalOptions[key] = val;
};

function updateModalTotal() {
  if (!activeModalItem) return;
  const total = Math.round(activeModalItem.price * currentModalQty);
  document.getElementById("modalItemCalcTotal").textContent = total;
}

// =============================================================================
// 7. CART DRAWER & CHECKOUT FLOW
// =============================================================================
function openCartDrawer() {
  document.getElementById("cartOverlay").classList.add("active");
  renderCart();
}

function closeCartDrawer() {
  document.getElementById("cartOverlay").classList.remove("active");
}

function renderCart() {
  const itemsList = document.getElementById("cartItemsList");
  const subtotalText = document.getElementById("cartSubtotalText");
  const totalText = document.getElementById("cartTotalText");
  const navTotalText = document.getElementById("cartTotalPriceNav");
  const navCountBadge = document.getElementById("cartCountBadge");
  const deliveryRow = document.getElementById("deliveryFeeRow");
  const modeHint = document.getElementById("modeHintText");

  // Sticky Bottom Bar Elements
  const stickyBar = document.getElementById("stickyBottomCartBar");
  const stickyBadge = document.getElementById("stickyCartBadge");
  const stickyTotal = document.getElementById("stickyCartTotalPrice");
  const stickyItemsText = document.getElementById("stickyCartItemsText");

  const count = store.getCartCount();
  const subtotal = store.getCartTotal();

  if (navTotalText) navTotalText.textContent = subtotal.toLocaleString();
  if (navCountBadge) navCountBadge.textContent = count;
  if (subtotalText) subtotalText.textContent = subtotal.toLocaleString();
  if (totalText) totalText.textContent = subtotal.toLocaleString();

  // Update Sticky Bottom Quick-Checkout Bar
  if (stickyBar) {
    if (count > 0) {
      stickyBar.style.display = "block";
      if (stickyBadge) stickyBadge.textContent = count;
      if (stickyTotal) stickyTotal.textContent = `Rs. ${subtotal.toLocaleString()}`;
      if (stickyItemsText) {
        stickyItemsText.textContent = `${count} item${count > 1 ? 's' : ''} • Tap to view order`;
      }
    } else {
      stickyBar.style.display = "none";
    }
  }

  if (deliveryRow) {
    deliveryRow.style.display = store.orderMode === "delivery" ? "flex" : "none";
  }

  if (modeHint) {
    modeHint.innerHTML = store.orderMode === "delivery" 
      ? '<i class="fa-solid fa-motorcycle"></i> <strong>Free Home Delivery in Dina City</strong>. Pay upon delivery.'
      : '<i class="fa-solid fa-store"></i> <strong>Counter Pickup at GT Road Dina</strong>. Pay at shop counter upon collection.';
  }

  if (!itemsList) return;

  if (store.cart.length === 0) {
    itemsList.innerHTML = `
      <div class="cart-empty-box">
        <i class="fa-solid fa-basket-shopping"></i>
        <h3>Your Order Cart is Empty</h3>
        <p>Choose fresh farm milk, shakes, or chilled mojitos from the menu to start your order.</p>
      </div>
    `;
    return;
  }

  itemsList.innerHTML = store.cart.map(item => `
    <div class="cart-item-row" data-cart-id="${item.cartItemId}">
      <img src="${item.image}" alt="${item.nameEn}" class="cart-item-img">
      <div class="cart-item-details">
        <div class="cart-item-header">
          <span class="cart-item-name">${store.currentLang === 'ur' ? item.nameUr : item.nameEn}</span>
          <button type="button" class="btn-modal-close" style="width:24px; height:24px; font-size:0.75rem;" onclick="removeCartItem('${item.cartItemId}')">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        ${item.options ? `<span class="cart-item-options">${item.options}</span>` : ""}
        ${item.notes ? `<span class="cart-item-options" style="color:var(--brand-gold);">Note: ${item.notes}</span>` : ""}
        <div class="cart-item-price-qty">
          <div class="cart-item-stepper">
            <button type="button" class="cart-step-btn" onclick="stepCartQty('${item.cartItemId}', -1)"><i class="fa-solid fa-minus"></i></button>
            <span class="cart-step-val">${item.qty} ${item.unit}</span>
            <button type="button" class="cart-step-btn" onclick="stepCartQty('${item.cartItemId}', 1)"><i class="fa-solid fa-plus"></i></button>
          </div>
          <span class="cart-item-total">Rs. ${item.subtotal}</span>
        </div>
      </div>
    </div>
  `).join("");
}

window.stepCartQty = function(cartItemId, delta) {
  const item = store.cart.find(i => i.cartItemId === cartItemId);
  const step = item && item.unit === "KG" ? (delta * 0.5) : delta;
  store.updateCartQty(cartItemId, step);
  renderCart();
};

window.removeCartItem = function(cartItemId) {
  store.cart = store.cart.filter(i => i.cartItemId !== cartItemId);
  store.saveCart();
  renderCart();
};

// Direct Checkout Jump from Sticky Bar
window.proceedToCheckoutDirect = function() {
  closeCartDrawer();
  openCheckoutModal();
};

// Checkout Modal
function openCheckoutModal() {
  if (store.cart.length === 0) {
    showToast("Please add at least one item to your cart before booking.", "alert");
    return;
  }

  closeCartDrawer();
  const modal = document.getElementById("checkoutModal");
  const title = document.getElementById("checkoutModeTitle");
  const sub = document.getElementById("checkoutModeSub");
  const addrGroup = document.getElementById("deliveryAddressGroup");
  const totalAmount = document.getElementById("checkoutTotalAmount");
  const dateSelect = document.getElementById("custDate");

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const formatOpt = (d, label) => `${label} (${d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })})`;
  dateSelect.innerHTML = `
    <option value="Today" selected>${formatOpt(today, 'Today / آج')}</option>
    <option value="Tomorrow">${formatOpt(tomorrow, 'Tomorrow / کل')}</option>
  `;

  if (store.orderMode === "delivery") {
    title.textContent = "Home Delivery Booking (ہوم ڈیلیوری)";
    sub.textContent = "Free Fast Delivery across Dina Area";
    addrGroup.style.display = "block";
    document.getElementById("custAddress").required = true;
  } else {
    title.textContent = "Shop Counter Pickup (دکان سے وصولی)";
    sub.textContent = "Al Sadiq Milk & Fresh Drinks, GT Road, Dina";
    addrGroup.style.display = "none";
    document.getElementById("custAddress").required = false;
  }

  totalAmount.textContent = store.getCartTotal().toLocaleString();
  modal.classList.add("active");
}

// Confirmation & Live Tracker Modal
function openConfirmationModal(order) {
  const modal = document.getElementById("confirmationModal");
  const tokenElem = document.getElementById("confirmTokenNumber");
  const nameElem = document.getElementById("confirmCustName");
  const timeElem = document.getElementById("confirmTimeSlot");
  const totalElem = document.getElementById("confirmTotalDisplay");
  const itemsList = document.getElementById("confirmItemsList");
  const qrContainer = document.getElementById("confirmQrCode");

  tokenElem.textContent = order.id;
  nameElem.textContent = order.customer.name;
  timeElem.textContent = `${order.customer.date} • ${order.customer.timeSlot}`;
  totalElem.textContent = order.totalAmount.toLocaleString();

  itemsList.innerHTML = order.items.map(item => `
    <div style="display:flex; justify-content:space-between; font-size:0.85rem; padding:0.25rem 0;">
      <span>${item.qty} ${item.unit} × ${item.nameEn} ${item.options ? `(${item.options})` : ''}</span>
      <strong>Rs. ${item.subtotal}</strong>
    </div>
  `).join("");

  // QR Code Generation
  qrContainer.innerHTML = "";
  if (window.QRCode) {
    new QRCode(qrContainer, {
      text: `ALSADIQ-ORDER-${order.id}-${order.customer.phone}`,
      width: 72,
      height: 72,
      colorDark: "#0f172a",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.M
    });
  }

  // Format WhatsApp Customer Receipt & Shop Kitchen Slip
  const customerReceiptMsg = buildCustomerReceiptMessage(order);
  const shopKitchenSlipMsg = buildShopKitchenSlipMessage(order);

  const num1 = store.whatsappSettings.num1 || "0370-9589018";
  const num2 = store.whatsappSettings.num2 || "0342-1008375";

  const custPhoneDisplay = document.getElementById("confirmCustPhoneDisplay");
  if (custPhoneDisplay) {
    custPhoneDisplay.textContent = order.customer.phone || "Customer Mobile";
  }

  const btnCustWa = document.getElementById("sendWhatsAppCustomerReceiptBtn");
  const btnWa1 = document.getElementById("sendWhatsAppOrderBtn1");
  const btnWa2 = document.getElementById("sendWhatsAppOrderBtn2");
  const btnDual = document.getElementById("sendWhatsAppDualBtn");

  if (btnCustWa) {
    btnCustWa.onclick = (e) => {
      e.preventDefault();
      dispatchWhatsAppReceipt(order.customer.phone, customerReceiptMsg);
      showToast(`Receipt opened for customer WhatsApp (${order.customer.phone})`, "success");
    };
  }

  if (btnWa1) {
    btnWa1.innerHTML = `<i class="fa-brands fa-whatsapp"></i> Send to Shop 1 (${num1})`;
    btnWa1.onclick = (e) => {
      e.preventDefault();
      dispatchWhatsAppReceipt(num1, shopKitchenSlipMsg);
      showToast(`Dispatched order slip to Shop Counter 1 (${num1})`, "success");
    };
  }

  if (btnWa2) {
    btnWa2.innerHTML = `<i class="fa-brands fa-whatsapp"></i> Send to Shop 2 (${num2})`;
    btnWa2.onclick = (e) => {
      e.preventDefault();
      dispatchWhatsAppReceipt(num2, shopKitchenSlipMsg);
      showToast(`Dispatched order slip to Shop Counter 2 (${num2})`, "success");
    };
  }

  if (btnDual) {
    btnDual.onclick = () => {
      // First dispatch to primary shop counter
      dispatchWhatsAppReceipt(num1, shopKitchenSlipMsg);
      setTimeout(() => {
        dispatchWhatsAppReceipt(num2, shopKitchenSlipMsg);
      }, 700);
      showToast("Dispatched order slip to both WhatsApp counter numbers!", "success");
    };
  }

  // Auto dispatch trigger on booking
  if (store.whatsappSettings.autoOpen) {
    try {
      // Prioritize dispatching order slip to shop counter 1
      dispatchWhatsAppReceipt(num1, shopKitchenSlipMsg);
    } catch (e) {
      console.warn("Auto-open WhatsApp blocked by browser:", e);
    }
  }

  updateTrackerStepper(order.status);

  if (window.confetti) {
    window.confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  modal.classList.add("active");
}

function updateTrackerStepper(status) {
  const steps = ["pending", "preparing", "ready", "completed"];
  const currentIndex = steps.indexOf(status);
  const statusLabels = {
    pending: "Order Booked & Received / موصول ہو گیا",
    preparing: "In Preparation / آرڈر تیار ہو رہا ہے",
    ready: "Ready for Pickup / تیار ہے",
    completed: "Order Completed / مکمل ہو گیا"
  };

  const badge = document.getElementById("confirmStatusBadge");
  if (badge) {
    badge.textContent = statusLabels[status] || (status ? status.toUpperCase() : "Active");
    badge.className = `status-pill-badge status-${status}`;
  }

  document.querySelectorAll("#orderStatusStepper .step-node").forEach((node, idx) => {
    node.classList.remove("active", "completed");
    if (idx < currentIndex) {
      node.classList.add("completed");
    } else if (idx === currentIndex) {
      node.classList.add("active");
    }
  });

  const line1 = document.getElementById("stepLine1");
  const line2 = document.getElementById("stepLine2");
  const line3 = document.getElementById("stepLine3");

  if (line1) line1.classList.toggle("active", currentIndex >= 1);
  if (line2) line2.classList.toggle("active", currentIndex >= 2);
  if (line3) line3.classList.toggle("active", currentIndex >= 3);
}

// =============================================================================
// 8. STAFF DASHBOARD & COUNTER POS ENGINE
// =============================================================================
let staffFilterStatus = "all";
let staffSearchQuery = "";
let milkLedgerFilter = "all";
let salesLedgerFilter = "all";

// Open Quick Counter Sale helper
window.openQuickCounterSale = function() {
  updateCounterSaleProducts();
  const modal = document.getElementById("counterSaleModal");
  if (modal) modal.classList.add("active");
};

// Switch between Staff Tabs (Orders vs Milk Inward vs Sales Register)
window.switchStaffModule = function(moduleName) {
  const tabOrders = document.getElementById("tabBtnOrders");
  const tabMilk = document.getElementById("tabBtnMilk");
  const tabSales = document.getElementById("tabBtnSales");

  const mobOrders = document.getElementById("mobStaffBtnOrders");
  const mobMilk = document.getElementById("mobStaffBtnMilk");
  const mobSales = document.getElementById("mobStaffBtnSales");

  const modOrders = document.getElementById("staffModuleOrders");
  const modMilk = document.getElementById("staffModuleMilk");
  const modSales = document.getElementById("staffModuleSales");

  if (tabOrders) tabOrders.classList.toggle("active", moduleName === "orders");
  if (tabMilk) tabMilk.classList.toggle("active", moduleName === "milk");
  if (tabSales) tabSales.classList.toggle("active", moduleName === "sales");

  if (mobOrders) mobOrders.classList.toggle("active", moduleName === "orders");
  if (mobMilk) mobMilk.classList.toggle("active", moduleName === "milk");
  if (mobSales) mobSales.classList.toggle("active", moduleName === "sales");

  if (modOrders) modOrders.style.display = moduleName === "orders" ? "block" : "none";
  if (modMilk) modMilk.style.display = moduleName === "milk" ? "block" : "none";
  if (modSales) modSales.style.display = moduleName === "sales" ? "block" : "none";

  if (moduleName === "orders") renderStaffOrders();
  else if (moduleName === "milk") renderMilkLedger();
  else if (moduleName === "sales") renderSalesLedger();
};

// --- MODULE 1: Render Customer Bookings Queue ---
function renderStaffOrders() {
  const ordersList = document.getElementById("staffOrdersList");
  const liveBadge = document.getElementById("staffLiveOrderBadge");
  const badgeOrdersCount = document.getElementById("badgeOrdersCount");
  const mobBadge = document.getElementById("mobBadgeOrders");
  
  const kpiTotal = document.getElementById("kpiTotalBookings");
  const kpiActive = document.getElementById("kpiActiveCount");
  const kpiMilkVol = document.getElementById("kpiMilkVolume");
  const kpiMilkBreakdown = document.getElementById("kpiMilkBreakdown");
  const kpiDrinks = document.getElementById("kpiDrinksCount");
  const kpiRevenue = document.getElementById("kpiTotalRevenue");

  const countAll = document.getElementById("countAll");
  const countPending = document.getElementById("countPending");
  const countPreparing = document.getElementById("countPreparing");
  const countReady = document.getElementById("countReady");
  const countCompleted = document.getElementById("countCompleted");

  const orders = store.orders;

  const activeOrders = orders.filter(o => o.status !== "completed" && o.status !== "cancelled");
  const pendingOrders = orders.filter(o => o.status === "pending");
  const preparingOrders = orders.filter(o => o.status === "preparing");
  const readyOrders = orders.filter(o => o.status === "ready");
  const completedOrders = orders.filter(o => o.status === "completed");

  let totalCowMilkLiters = 0;
  let totalBuffaloMilkLiters = 0;
  let totalOtherMilkLiters = 0;
  let totalDrinksCount = 0;
  let totalRev = 0;

  orders.forEach(o => {
    totalRev += o.totalAmount;
    o.items.forEach(i => {
      if (i.id === "cow_milk") totalCowMilkLiters += i.qty;
      else if (i.id === "buffalo_milk") totalBuffaloMilkLiters += i.qty;
      else if (i.unit === "Liter") totalOtherMilkLiters += i.qty;
      else if (i.unit === "Glass" || i.unit === "Bottle") totalDrinksCount += i.qty;
    });
  });

  const totalMilkLiters = totalCowMilkLiters + totalBuffaloMilkLiters + totalOtherMilkLiters;

  if (kpiTotal) kpiTotal.textContent = orders.length;
  if (kpiActive) kpiActive.textContent = `${activeOrders.length} Active Now`;
  if (kpiMilkVol) kpiMilkVol.textContent = `${totalMilkLiters} Liters`;
  if (kpiMilkBreakdown) kpiMilkBreakdown.textContent = `Cow: ${totalCowMilkLiters}L | Buffalo: ${totalBuffaloMilkLiters}L`;
  if (kpiDrinks) kpiDrinks.textContent = `${totalDrinksCount} Drinks`;
  if (kpiRevenue) kpiRevenue.textContent = `Rs. ${totalRev.toLocaleString()}`;

  if (liveBadge) {
    liveBadge.textContent = pendingOrders.length;
    liveBadge.style.display = pendingOrders.length > 0 ? "inline-flex" : "none";
  }
  if (mobBadge) {
    mobBadge.textContent = pendingOrders.length;
    mobBadge.style.display = pendingOrders.length > 0 ? "inline-block" : "none";
  }
  if (badgeOrdersCount) badgeOrdersCount.textContent = orders.length;

  if (countAll) countAll.textContent = orders.length;
  if (countPending) countPending.textContent = pendingOrders.length;
  if (countPreparing) countPreparing.textContent = preparingOrders.length;
  if (countReady) countReady.textContent = readyOrders.length;
  if (countCompleted) countCompleted.textContent = completedOrders.length;

  if (!ordersList) return;

  let displayOrders = orders.filter(o => {
    if (staffFilterStatus !== "all" && o.status !== staffFilterStatus) return false;
    if (staffSearchQuery.trim()) {
      const q = staffSearchQuery.toLowerCase();
      const matchId = o.id.toLowerCase().includes(q);
      const matchName = o.customer.name.toLowerCase().includes(q);
      const matchPhone = o.customer.phone.toLowerCase().includes(q);
      return matchId || matchName || matchPhone;
    }
    return true;
  });

  if (displayOrders.length === 0) {
    ordersList.innerHTML = `
      <div class="cart-empty-box" style="grid-column: 1 / -1; background:#fff; border-radius:var(--radius-lg); border:1px solid var(--border-color);">
        <i class="fa-solid fa-clipboard-check"></i>
        <h3>No orders in this section</h3>
        <p>Incoming customer bookings will appear here instantly.</p>
      </div>
    `;
    return;
  }

  ordersList.innerHTML = displayOrders.map(order => {
    const formattedTime = new Date(order.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    return `
      <div class="order-staff-card status-${order.status}" id="order-card-${order.id}">
        <div class="card-top-row">
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <span class="token-badge-staff">${order.id}</span>
            <span class="order-type-chip ${order.customer.mode === 'delivery' ? 'type-delivery' : 'type-pickup'}">
              <i class="fa-solid ${order.customer.mode === 'delivery' ? 'fa-motorcycle' : 'fa-store'}"></i>
              ${order.customer.mode === 'delivery' ? 'Home Delivery' : 'Shop Pickup'}
            </span>
          </div>
          <button type="button" class="btn-delete-order" onclick="deleteBookingOrder('${order.id}')" title="Delete Booking / آرڈر حذف کریں">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>

        <div class="cust-info-block">
          <strong>${order.customer.name}</strong>
          <div class="cust-contact-line">
            <a href="tel:${order.customer.phone}"><i class="fa-solid fa-phone"></i> ${order.customer.phone}</a>
            <button type="button" class="btn-order-wa-status" onclick="sendCustomerWhatsAppStatus('${order.id}')" title="Send WhatsApp Receipt/Status to Customer">
              <i class="fa-brands fa-whatsapp"></i> WA Receipt
            </button>
          </div>
          ${order.customer.address ? `<div style="font-size:0.78rem; color:var(--brand-cyan); margin-top:0.2rem;"><i class="fa-solid fa-location-dot"></i> ${order.customer.address}</div>` : ""}
        </div>

        <div class="time-slot-line">
          <i class="fa-solid fa-clock"></i>
          <span>Slot: ${order.customer.date} • ${order.customer.timeSlot} (${formattedTime})</span>
        </div>

        <div class="staff-items-preview">
          ${order.items.map(item => `
            <div class="staff-item-row">
              <div>
                <span class="staff-item-name">${item.qty} ${item.unit} × ${item.nameEn}</span>
                ${item.options ? `<span class="staff-item-note">${item.options}</span>` : ""}
              </div>
              <strong>Rs. ${item.subtotal}</strong>
            </div>
          `).join("")}
          ${order.customer.notes ? `<div style="font-size:0.75rem; color:var(--brand-gold-hover); margin-top:0.3rem;"><i class="fa-regular fa-comment"></i> ${order.customer.notes}</div>` : ""}
        </div>

        <div class="staff-card-total-row">
          <span>Total (Pay on Collection):</span>
          <span style="color:var(--brand-emerald-dark); font-size:1.15rem;">Rs. ${order.totalAmount}</span>
        </div>

        <div class="staff-card-actions">
          ${order.status === 'pending' ? `
            <button type="button" class="btn-staff-action btn-action-primary" onclick="setOrderStatus('${order.id}', 'preparing')">
              <i class="fa-solid fa-blender"></i> Accept & Prep
            </button>
          ` : ''}

          ${order.status === 'preparing' ? `
            <button type="button" class="btn-staff-action btn-action-ready" onclick="setOrderStatus('${order.id}', 'ready')">
              <i class="fa-solid fa-bell-concierge"></i> Mark Ready
            </button>
          ` : ''}

          ${order.status === 'ready' ? `
            <button type="button" class="btn-staff-action btn-action-ready" onclick="setOrderStatus('${order.id}', 'completed')">
              <i class="fa-solid fa-circle-check"></i> Complete & Paid
            </button>
            <button type="button" class="btn-staff-action" style="background:#25D366; color:#ffffff; font-weight:700;" onclick="sendCustomerWhatsAppStatus('${order.id}')" title="Send WhatsApp Ready Message to Customer">
              <i class="fa-brands fa-whatsapp"></i> Send WA Ready
            </button>
          ` : ''}

          ${order.status === 'completed' ? `
            <button type="button" class="btn-staff-action" disabled style="opacity:0.6; background:#e2e8f0; color:#475569;">
              <i class="fa-solid fa-check-double"></i> Finished
            </button>
            <button type="button" class="btn-staff-action" style="background:#059669; color:#ffffff; font-weight:700;" onclick="sendCustomerWhatsAppStatus('${order.id}')" title="Send WhatsApp Final Receipt">
              <i class="fa-brands fa-whatsapp"></i> WA Receipt
            </button>
          ` : ''}

          <button type="button" class="btn-staff-action btn-action-print" onclick="openKitchenSlip('${order.id}')" title="Print KOT Slip">
            <i class="fa-solid fa-print"></i> KOT
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// Send WhatsApp Receipt or Live Status Update to Customer from Staff Dashboard
window.sendCustomerWhatsAppStatus = function(orderId) {
  const order = store.orders.find(o => o.id === orderId);
  if (!order) return;

  let statusHeader = "";
  if (order.status === "pending") {
    statusHeader = `Assalam-o-Alaikum *${order.customer.name}*!%0AYour booking *#${order.id}* for *Rs. ${order.totalAmount}* has been received at Al Sadiq Dina. We will prepare your order for *${order.customer.date} • ${order.customer.timeSlot}*. Thank you!`;
  } else if (order.status === "preparing") {
    statusHeader = `Assalam-o-Alaikum *${order.customer.name}*!%0AYour order *#${order.id}* is currently *BEING PREPARED* fresh at Al Sadiq counter Dina. We will notify you once ready for pickup!`;
  } else if (order.status === "ready") {
    statusHeader = `🥛 *AL SADIQ DINA - ORDER READY!* 🥛%0AAssalam-o-Alaikum *${order.customer.name}*!%0AYour pure dairy order *#${order.id}* (Total: *Rs. ${order.totalAmount}*) is *READY FOR PICKUP* at our GT Road Dina counter (near Focus College). Please collect at your convenience!`;
  } else if (order.status === "completed") {
    statusHeader = `Assalam-o-Alaikum *${order.customer.name}*!%0AThank you for ordering with Al Sadiq Milk & Fresh Drinks Dina! We hope you loved our pure dairy. Please visit again!`;
  }

  const custReceipt = buildCustomerReceiptMessage(order);
  const fullMsg = statusHeader ? `${statusHeader}%0A%0A----------------------------------------%0A${custReceipt}` : custReceipt;
  dispatchWhatsAppReceipt(order.customer.phone, fullMsg);
  showToast(`WhatsApp receipt sent to customer (${order.customer.phone})`, "success");
};

window.deleteBookingOrder = function(orderId) {
  const isUrdu = store.currentLang === 'ur';
  const confirmMsg = isUrdu 
    ? `کیا آپ واقعی بکنگ آرڈر "${orderId}" کو سسٹم سے مستقل ڈیلیٹ (حذف) کرنا چاہتے ہیں؟`
    : `Are you sure you want to permanently delete order "${orderId}"?`;

  if (confirm(confirmMsg)) {
    store.orders = store.orders.filter(o => o.id !== orderId);
    store.saveOrders();
    cloudSync.deleteRemoteOrder(orderId);
    showToast(isUrdu ? `آرڈر ${orderId} کامیابی سے ڈیلیٹ کر دیا گیا!` : `Order ${orderId} deleted successfully!`, "alert");
    renderStaffOrders();
  }
};

window.clearCompletedBookings = function() {
  const completed = store.orders.filter(o => o.status === "completed");
  if (completed.length === 0) {
    showToast(store.currentLang === 'ur' ? "کوئی مکمل شدہ آرڈر موجود نہیں ہے" : "No completed orders found", "alert");
    return;
  }
  const isUrdu = store.currentLang === 'ur';
  const msg = isUrdu 
    ? `کیا آپ تمام (${completed.length}) مکمل شدہ آرڈرز فہرست سے صاف کرنا چاہتے ہیں؟`
    : `Delete all (${completed.length}) completed orders from the queue?`;

  if (confirm(msg)) {
    completed.forEach(co => cloudSync.deleteRemoteOrder(co.id));
    store.orders = store.orders.filter(o => o.status !== "completed");
    store.saveOrders();
    showToast(isUrdu ? "تمام مکمل شدہ آرڈرز ڈیلیٹ کر دیے گئے" : "Completed orders deleted successfully", "success");
    renderStaffOrders();
  }
};

function setOrderStatus(orderId, newStatus, autoSendWhatsApp = true) {
  const order = store.updateOrderStatus(orderId, newStatus);
  if (!order) return;

  // Sync status to cloud immediately so customer gets real-time app update
  cloudSync.updateRemoteOrderStatus(orderId, newStatus);

  showToast(`Order ${orderId} marked as ${newStatus.toUpperCase()}`, "success");
  renderStaffOrders();
  renderMilkLedger();
  renderSalesLedger();

  if (store.currentOrderTrackingId === orderId) {
    updateTrackerStepper(newStatus);
  }

  // Automatically prompt/launch WhatsApp message with ready or completed receipt for the customer
  if (autoSendWhatsApp && (newStatus === "ready" || newStatus === "completed")) {
    sendCustomerWhatsAppStatus(orderId);
  }
}

// --- MODULE 2: Render Daily Milk Inward & Stock Register ---
function renderMilkLedger() {
  const summary = store.getMilkStockSummary();

  const kpiIn = document.getElementById("kpiMilkInTotal");
  const kpiInBreakdown = document.getElementById("kpiMilkInBreakdown");
  const kpiOut = document.getElementById("kpiMilkOutTotal");
  const kpiOutBreakdown = document.getElementById("kpiMilkOutBreakdown");
  const kpiDahi = document.getElementById("kpiMilkDahiTotal");
  const kpiDahiYield = document.getElementById("kpiDahiMatkaYield");
  const kpiBal = document.getElementById("kpiMilkBalanceTotal");
  const kpiBalBreakdown = document.getElementById("kpiMilkBalBreakdown");

  if (kpiIn) kpiIn.textContent = `${summary.totalIn} L`;
  if (kpiInBreakdown) kpiInBreakdown.textContent = `Cow: ${summary.cowIn}L | Buffalo: ${summary.buffaloIn}L | Mixed: ${summary.mixedIn}L`;

  if (kpiOut) kpiOut.textContent = `${summary.totalOut} L`;
  if (kpiOutBreakdown) kpiOutBreakdown.textContent = `Sales: ${summary.totalOut - summary.dahiTotal}L | Dahi: ${summary.dahiTotal}L`;

  if (kpiDahi) kpiDahi.textContent = `${summary.dahiTotal} L`;
  if (kpiDahiYield) kpiDahiYield.textContent = `Approx ~${Math.round(summary.dahiTotal * 0.9)} KG Dahi Yield`;

  if (kpiBal) kpiBal.textContent = `${summary.totalBal} L`;
  if (kpiBalBreakdown) kpiBalBreakdown.textContent = `Cow: ${summary.cowBal}L | Buffalo: ${summary.buffaloBal}L | Mixed: ${summary.mixedBal}L`;

  // Tank Visual Fill Meters
  const meterCow = document.getElementById("meterFillCow");
  const meterBuffalo = document.getElementById("meterFillBuffalo");
  const meterMixed = document.getElementById("meterFillMixed");

  const cowPercent = summary.cowIn > 0 ? Math.min(100, Math.round((summary.cowBal / summary.cowIn) * 100)) : 0;
  const buffaloPercent = summary.buffaloIn > 0 ? Math.min(100, Math.round((summary.buffaloBal / summary.buffaloIn) * 100)) : 0;
  const mixedPercent = summary.mixedIn > 0 ? Math.min(100, Math.round((summary.mixedBal / summary.mixedIn) * 100)) : 0;

  if (meterCow) meterCow.style.width = `${cowPercent}%`;
  if (meterBuffalo) meterBuffalo.style.width = `${buffaloPercent}%`;
  if (meterMixed) meterMixed.style.width = `${mixedPercent}%`;

  const lblCowIn = document.getElementById("lblCowIn");
  const lblCowOut = document.getElementById("lblCowOut");
  const lblCowBal = document.getElementById("lblCowBal");
  if (lblCowIn) lblCowIn.textContent = `${summary.cowIn} L`;
  if (lblCowOut) lblCowOut.textContent = `${summary.cowOut} L`;
  if (lblCowBal) lblCowBal.textContent = `${summary.cowBal} L`;

  const lblBuffaloIn = document.getElementById("lblBuffaloIn");
  const lblBuffaloOut = document.getElementById("lblBuffaloOut");
  const lblBuffaloBal = document.getElementById("lblBuffaloBal");
  if (lblBuffaloIn) lblBuffaloIn.textContent = `${summary.buffaloIn} L`;
  if (lblBuffaloOut) lblBuffaloOut.textContent = `${summary.buffaloOut} L`;
  if (lblBuffaloBal) lblBuffaloBal.textContent = `${summary.buffaloBal} L`;

  const lblMixedIn = document.getElementById("lblMixedIn");
  const lblMixedOut = document.getElementById("lblMixedOut");
  const lblMixedBal = document.getElementById("lblMixedBal");
  if (lblMixedIn) lblMixedIn.textContent = `${summary.mixedIn} L`;
  if (lblMixedOut) lblMixedOut.textContent = `${summary.mixedOut} L`;
  if (lblMixedBal) lblMixedBal.textContent = `${summary.mixedBal} L`;

  // Render Table
  const tableBody = document.getElementById("milkLedgerTableBody");
  if (!tableBody) return;

  let displayEntries = store.milkLedger.filter(e => {
    if (milkLedgerFilter !== "all" && e.type !== milkLedgerFilter) return false;
    return true;
  });

  if (displayEntries.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align:center; padding:2rem; color:var(--text-muted);">
          No milk ledger records found for this filter.
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = displayEntries.map(entry => {
    let typeBadge = "";
    if (entry.type === "IN") {
      typeBadge = `<span class="badge-pill" style="background:#dcfce7; color:#15803d; font-weight:800;"><i class="fa-solid fa-arrow-down"></i> IN (آمد)</span>`;
    } else if (entry.type === "OUT") {
      typeBadge = `<span class="badge-pill" style="background:#fee2e2; color:#b91c1c; font-weight:800;"><i class="fa-solid fa-arrow-up"></i> OUT (اخراج)</span>`;
    } else if (entry.type === "DAHI") {
      typeBadge = `<span class="badge-pill" style="background:#f3e8ff; color:#7e22ce; font-weight:800;"><i class="fa-solid fa-bowl-food"></i> DAHI (دہی)</span>`;
    } else {
      typeBadge = `<span class="badge-pill" style="background:#e0f2fe; color:#0369a1; font-weight:800;"><i class="fa-solid fa-blender"></i> USAGE (شیکس)</span>`;
    }

    const milkVarietyName = entry.milkType === "buffalo" ? "Buffalo (بھینس)" : (entry.milkType === "cow" ? "Cow (گائے)" : "Mixed (مکس)");

    return `
      <tr>
        <td><strong>${entry.timestamp}</strong><br><small style="color:var(--text-muted);">${entry.date || ''}</small></td>
        <td>${typeBadge}</td>
        <td><strong>${milkVarietyName}</strong></td>
        <td><strong style="font-size:1rem; color:var(--text-main);">${entry.liters} L</strong></td>
        <td><span style="color:var(--brand-emerald-dark); font-weight:800;">${entry.closingBal ? entry.closingBal + ' L' : '-'}</span></td>
        <td>
          <strong>${entry.source || 'Farm Supply'}</strong>
          ${entry.notes ? `<br><small style="color:var(--text-muted);">${entry.notes}</small>` : ''}
        </td>
        <td>
          <button type="button" class="btn-modal-close" style="width:26px; height:26px; font-size:0.75rem;" onclick="deleteMilkEntry('${entry.id}')" title="Delete Entry">
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

window.deleteMilkEntry = function(entryId) {
  if (confirm("Delete this milk ledger record?")) {
    store.milkLedger = store.milkLedger.filter(e => e.id !== entryId);
    store.saveMilkLedger();
    if (typeof cloudSync !== "undefined" && cloudSync.deleteRemoteMilkEntry) {
      cloudSync.deleteRemoteMilkEntry(entryId);
    }
    showToast("Milk entry deleted", "alert");
    renderMilkLedger();
  }
};

// --- MODULE 3: Render Daily Sales & Revenue Register ---
function renderSalesLedger() {
  const summary = store.getSalesSummary();

  const kpiGross = document.getElementById("kpiSalesGrossTotal");
  const kpiCount = document.getElementById("kpiSalesCountTotal");
  const kpiMilkSales = document.getElementById("kpiSalesMilkTotal");
  const kpiDahiSales = document.getElementById("kpiSalesDahiTotal");
  const kpiDrinksSales = document.getElementById("kpiSalesDrinksTotal");

  const salesCountAll = document.getElementById("salesCountAll");
  const salesCountBookings = document.getElementById("salesCountBookings");
  const salesCountWalkin = document.getElementById("salesCountWalkin");

  if (kpiGross) kpiGross.textContent = `Rs. ${summary.grossTotal.toLocaleString()}`;
  if (kpiCount) kpiCount.textContent = `${summary.count} Total Invoices / Slips`;
  if (kpiMilkSales) kpiMilkSales.textContent = `Rs. ${summary.milkTotal.toLocaleString()}`;
  if (kpiDahiSales) kpiDahiSales.textContent = `Rs. ${summary.dahiTotal.toLocaleString()}`;
  if (kpiDrinksSales) kpiDrinksSales.textContent = `Rs. ${summary.drinksTotal.toLocaleString()}`;

  const bookingsCount = store.salesLedger.filter(s => s.type === "booking").length;
  const walkinCount = store.salesLedger.filter(s => s.type === "walkin").length;

  if (salesCountAll) salesCountAll.textContent = store.salesLedger.length;
  if (salesCountBookings) salesCountBookings.textContent = bookingsCount;
  if (salesCountWalkin) salesCountWalkin.textContent = walkinCount;

  const tableBody = document.getElementById("salesLedgerTableBody");
  if (!tableBody) return;

  let displaySales = store.salesLedger.filter(s => {
    if (salesLedgerFilter !== "all" && s.type !== salesLedgerFilter) return false;
    return true;
  });

  if (displaySales.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align:center; padding:2rem; color:var(--text-muted);">
          No sales transactions recorded for this filter.
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = displaySales.map(sale => `
    <tr>
      <td><strong>${sale.time}</strong></td>
      <td><span class="badge-pill" style="background:#f1f5f9; color:#0f172a; font-weight:800;">${sale.id}</span></td>
      <td><strong>${sale.customer}</strong></td>
      <td>
        <span class="badge-pill ${sale.type === 'booking' ? 'badge-gym' : 'badge-general'}" style="font-size:0.75rem;">
          ${sale.type === 'booking' ? 'Online Booking' : 'Counter Walk-in'}
        </span>
      </td>
      <td>${sale.itemsSummary}</td>
      <td><span style="font-weight:700; color:#047857;">${sale.paymentMode}</span></td>
      <td><strong style="font-family:var(--font-heading); font-size:1.1rem; color:var(--brand-emerald-dark);">Rs. ${sale.amount}</strong></td>
      <td>
        <button type="button" class="btn-modal-close" style="width:26px; height:26px; font-size:0.75rem;" onclick="deleteSalesEntry('${sale.id}')" title="Delete Sale">
          <i class="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  `).join("");
}

window.deleteSalesEntry = function(saleId) {
  if (confirm("Delete this sales entry?")) {
    store.salesLedger = store.salesLedger.filter(s => s.id !== saleId);
    store.saveSalesLedger();
    if (typeof cloudSync !== "undefined" && cloudSync.deleteRemoteSalesEntry) {
      cloudSync.deleteRemoteSalesEntry(saleId);
    }
    showToast("Sales entry deleted", "alert");
    renderSalesLedger();
  }
};

// =============================================================================
// 9. QUICK DIALOGS & ACTION HANDLERS
// =============================================================================

// Helper to set quantity in Milk Inward Modal
window.setInwardQty = function(liters) {
  const input = document.getElementById("inwardLiters");
  if (input) input.value = liters;
};

// Helper to set quantity in Milk Usage Modal
window.setUsageQty = function(liters) {
  const input = document.getElementById("usageLiters");
  if (input) input.value = liters;
};

// Quick Counter Sale item select population
window.updateCounterSaleProducts = function() {
  const cat = document.getElementById("saleCategory").value;
  const select = document.getElementById("saleItemSelect");
  if (!select) return;

  const items = store.menu.filter(i => {
    if (cat === "milk") return i.id.includes("milk");
    if (cat === "dairy") return i.category === "dairy" && !i.id.includes("milk");
    if (cat === "shakes") return i.category === "milkshakes" || i.category === "protein";
    if (cat === "mojitos") return i.category === "mojitos" || i.category === "specials";
    return true;
  });

  select.innerHTML = items.map(item => `
    <option value="${item.id}" data-price="${item.price}" data-unit="${item.unit}">
      ${item.nameEn} (${item.nameUr}) - Rs. ${item.price}/${item.unit}
    </option>
  `).join("");

  calcCounterSaleTotal();
};

window.calcCounterSaleTotal = function() {
  const select = document.getElementById("saleItemSelect");
  const qtyInput = document.getElementById("saleQty");
  const totalInput = document.getElementById("saleTotalAmount");

  if (!select || !qtyInput || !totalInput) return;
  const selectedOpt = select.options[select.selectedIndex];
  if (!selectedOpt) return;

  const price = parseFloat(selectedOpt.dataset.price) || 0;
  const qty = parseFloat(qtyInput.value) || 1;
  totalInput.value = Math.round(price * qty);
};

// Kitchen Order Ticket (KOT) Slip Modal
function openKitchenSlip(orderId) {
  const order = store.orders.find(o => o.id === orderId);
  if (!order) return;

  document.getElementById("kotTokenNumber").textContent = `TOKEN # ${order.id}`;
  document.getElementById("kotOrderType").textContent = order.customer.mode.toUpperCase();
  document.getElementById("kotDate").textContent = new Date(order.timestamp).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  document.getElementById("kotTime").textContent = order.customer.timeSlot;
  document.getElementById("kotCustomer").textContent = order.customer.name;
  document.getElementById("kotPhone").textContent = order.customer.phone;
  document.getElementById("kotGrandTotal").textContent = `Rs. ${order.totalAmount}`;

  const notesBox = document.getElementById("kotNotesBox");
  const notesText = document.getElementById("kotNotesText");
  if (order.customer.notes || order.customer.address) {
    notesBox.style.display = "block";
    notesText.textContent = `${order.customer.address ? 'Address: ' + order.customer.address + '\n' : ''}${order.customer.notes || ''}`;
  } else {
    notesBox.style.display = "none";
  }

  const itemsList = document.getElementById("kotItemsList");
  itemsList.innerHTML = order.items.map(item => `
    <div class="kot-item-entry">
      <span class="kot-col-qty">${item.qty} ${item.unit}</span>
      <span class="kot-col-item">
        <strong>${item.nameEn}</strong>
        ${item.options ? `<br><small>${item.options}</small>` : ''}
      </span>
      <span class="kot-col-amt">Rs. ${item.subtotal}</span>
    </div>
  `).join("");

  document.getElementById("kitchenSlipModal").classList.add("active");
}

// =============================================================================
// 9. LIVE MENU & PRICE MANAGER ENGINE
// =============================================================================
function openPriceManager() {
  const tableBody = document.getElementById("priceManagerTableBody");
  if (!tableBody) return;

  const searchQuery = (document.getElementById("menuManagerSearchInput")?.value || "").trim().toLowerCase();
  const catFilter = document.getElementById("menuManagerCatFilter")?.value || "all";

  let filtered = store.menu.filter(item => {
    if (catFilter !== "all" && item.category !== catFilter) return false;
    if (searchQuery) {
      const matchEn = (item.nameEn || "").toLowerCase().includes(searchQuery);
      const matchUr = (item.nameUr || "").toLowerCase().includes(searchQuery);
      const matchBadge = (item.badge || "").toLowerCase().includes(searchQuery);
      return matchEn || matchUr || matchBadge;
    }
    return true;
  });

  if (filtered.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center; padding:2rem; color:var(--text-muted);">
          <i class="fa-solid fa-magnifying-glass" style="font-size:1.5rem; margin-bottom:0.5rem; display:block;"></i>
          No menu items match your search.
        </td>
      </tr>
    `;
  } else {
    tableBody.innerHTML = filtered.map(item => `
      <tr>
        <td>
          <div class="menu-item-thumb-row">
            <img src="${item.image || 'assets/alsadiq_fresh_drink.jpg'}" alt="${item.nameEn}" class="menu-item-thumb">
            <div class="menu-item-names">
              <strong>${item.nameEn}</strong>
              <small>${item.nameUr}</small>
              ${item.badge ? `<span style="font-size:0.68rem; background:var(--brand-emerald-subtle); color:var(--brand-emerald-dark); padding:0.1rem 0.35rem; border-radius:3px; font-weight:700; display:inline-block; margin-top:2px;">${item.badge}</span>` : ""}
            </div>
          </div>
        </td>
        <td>
          <span class="badge-pill" style="font-size:0.72rem; text-transform:uppercase;">${item.category}</span>
        </td>
        <td>
          <div style="display:flex; align-items:center; gap:0.25rem;">
            <span style="font-size:0.75rem; color:var(--text-muted);">Rs.</span>
            <input type="number" class="styled-input price-edit-input" style="width:75px; padding:0.3rem 0.4rem; font-weight:800; font-size:0.85rem;" data-item-id="${item.id}" value="${item.price}" min="1" step="5">
            <span style="font-size:0.72rem; color:var(--text-muted);">/${item.unit}</span>
          </div>
        </td>
        <td>
          <select class="styled-input" style="padding:0.3rem 0.5rem; font-size:0.8rem;" data-stock-id="${item.id}">
            <option value="true" ${item.inStock ? 'selected' : ''}>In Stock</option>
            <option value="false" ${!item.inStock ? 'selected' : ''}>Sold Out</option>
          </select>
        </td>
        <td>
          <div style="display:flex; align-items:center; justify-content:center; gap:0.35rem;">
            <button type="button" class="btn-item-action-edit" onclick="openEditItemModal('${item.id}')" title="Edit Item Details (ترمیم کریں)">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button type="button" class="btn-item-action-delete" onclick="deleteMenuItem('${item.id}')" title="Delete Item (حذف کریں)">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </td>
      </tr>
    `).join("");
  }

  document.getElementById("priceManagerModal").classList.add("active");
}

function savePriceChanges() {
  document.querySelectorAll(".price-edit-input").forEach(input => {
    const itemId = input.dataset.itemId;
    const newPrice = parseFloat(input.value);
    const item = store.menu.find(i => i.id === itemId);
    if (item && !isNaN(newPrice) && newPrice > 0) {
      item.price = newPrice;
    }
  });

  document.querySelectorAll("[data-stock-id]").forEach(select => {
    const itemId = select.dataset.stockId;
    const inStock = select.value === "true";
    const item = store.menu.find(i => i.id === itemId);
    if (item) {
      item.inStock = inStock;
    }
  });

  store.saveMenu();
  showToast(store.currentLang === 'ur' ? "مینو اور قیمتیں کامیابی سے محفوظ ہو گئیں!" : "Menu prices and availability updated successfully!", "success");
  document.getElementById("priceManagerModal").classList.remove("active");
  renderDailyRates();
  renderProducts();
  renderStaffOrders();
}

window.openAddItemModal = function() {
  document.getElementById("editItemId").value = "";
  document.getElementById("itemEditorModalTitle").textContent = "Add New Menu Item";
  document.getElementById("itemEditorModalUrdu").textContent = "مینو میں نیا آئٹم شامل کریں";
  document.getElementById("btnSaveItemLabel").textContent = "Add Item (شامل کریں)";
  
  document.getElementById("editItemNameEn").value = "";
  document.getElementById("editItemNameUr").value = "";
  document.getElementById("editItemCategory").value = "milkshakes";
  document.getElementById("editItemPrice").value = "";
  document.getElementById("editItemUnit").value = "Glass";
  document.getElementById("editItemBadge").value = "Fresh Special";
  document.getElementById("editItemInStock").value = "true";
  document.getElementById("editItemImage").value = "assets/alsadiq_fresh_drink.jpg";
  document.getElementById("editItemDescEn").value = "";
  document.getElementById("editItemDescUr").value = "";

  document.querySelectorAll(".preset-thumb-option").forEach(opt => {
    opt.classList.toggle("selected", opt.dataset.img === "assets/alsadiq_fresh_drink.jpg");
  });

  document.getElementById("menuItemEditorModal").classList.add("active");
};

window.openEditItemModal = function(itemId) {
  const item = store.menu.find(i => i.id === itemId);
  if (!item) return;

  document.getElementById("editItemId").value = item.id;
  document.getElementById("itemEditorModalTitle").textContent = `Edit Item: ${item.nameEn}`;
  document.getElementById("itemEditorModalUrdu").textContent = `ترمیم: ${item.nameUr}`;
  document.getElementById("btnSaveItemLabel").textContent = "Save Changes (تبدیلی محفوظ کریں)";

  document.getElementById("editItemNameEn").value = item.nameEn || "";
  document.getElementById("editItemNameUr").value = item.nameUr || "";
  document.getElementById("editItemCategory").value = item.category || "dairy";
  document.getElementById("editItemPrice").value = item.price || "";
  document.getElementById("editItemUnit").value = item.unit || "Liter";
  document.getElementById("editItemBadge").value = item.badge || "";
  document.getElementById("editItemInStock").value = item.inStock ? "true" : "false";
  document.getElementById("editItemImage").value = item.image || "assets/alsadiq_fresh_drink.jpg";
  document.getElementById("editItemDescEn").value = item.descEn || "";
  document.getElementById("editItemDescUr").value = item.descUr || "";

  document.querySelectorAll(".preset-thumb-option").forEach(opt => {
    opt.classList.toggle("selected", opt.dataset.img === item.image);
  });

  document.getElementById("menuItemEditorModal").classList.add("active");
};

window.deleteMenuItem = function(itemId) {
  const item = store.menu.find(i => i.id === itemId);
  if (!item) return;

  const isUrdu = store.currentLang === 'ur';
  const msg = isUrdu 
    ? `کیا آپ واقعی "${item.nameUr || item.nameEn}" کو مینو سے مستقل ڈیلیٹ (حذف) کرنا چاہتے ہیں؟`
    : `Are you sure you want to permanently delete "${item.nameEn}" from the menu?`;

  if (confirm(msg)) {
    store.menu = store.menu.filter(i => i.id !== itemId);
    store.saveMenu();
    showToast(isUrdu ? `"${item.nameUr || item.nameEn}" مینو سے حذف کر دیا گیا` : `"${item.nameEn}" removed from menu`, "alert");
    renderDailyRates();
    renderProducts();
    openPriceManager();
  }
};

function saveMenuItemForm(e) {
  e.preventDefault();
  const id = document.getElementById("editItemId").value.trim();
  const nameEn = document.getElementById("editItemNameEn").value.trim();
  const nameUr = document.getElementById("editItemNameUr").value.trim();
  const category = document.getElementById("editItemCategory").value;
  const price = parseFloat(document.getElementById("editItemPrice").value);
  const unit = document.getElementById("editItemUnit").value;
  const badge = document.getElementById("editItemBadge").value.trim();
  const inStock = document.getElementById("editItemInStock").value === "true";
  const image = document.getElementById("editItemImage").value.trim() || "assets/alsadiq_fresh_drink.jpg";
  const descEn = document.getElementById("editItemDescEn").value.trim();
  const descUr = document.getElementById("editItemDescUr").value.trim();

  if (!nameEn || !nameUr || isNaN(price) || price <= 0) {
    showToast("Please fill in valid name and price fields", "alert");
    return;
  }

  const isDairy = category === "dairy";
  const fitness = category === "protein";
  const chilled = category === "mojitos";

  if (id) {
    // Update existing item
    const existing = store.menu.find(i => i.id === id);
    if (existing) {
      existing.nameEn = nameEn;
      existing.nameUr = nameUr;
      existing.category = category;
      existing.price = price;
      existing.unit = unit;
      existing.badge = badge;
      existing.inStock = inStock;
      existing.image = image;
      existing.descEn = descEn;
      existing.descUr = descUr;
      existing.isDairy = isDairy;
      existing.fitness = fitness;
      existing.chilled = chilled;
    }
  } else {
    // Create new item
    const slug = nameEn.toLowerCase().replace(/[^a-z0-9]+/g, "_").slice(0, 20);
    const newId = `${category}_${slug}_${Date.now().toString().slice(-4)}`;
    
    const newItem = {
      id: newId,
      category,
      nameEn,
      nameUr,
      price,
      unit,
      image,
      descEn: descEn || `${nameEn} - Freshly prepared at Al Sadiq GT Road Dina.`,
      descUr: descUr || `${nameUr} - الصادق ملک اینڈ فریش ڈرنکس۔`,
      inStock,
      badge: badge || "New",
      popular: true,
      isDairy,
      fitness,
      chilled
    };
    store.menu.push(newItem);
  }

  store.saveMenu();
  showToast(store.currentLang === 'ur' ? "مینو آئٹم کامیابی سے محفوظ ہو گیا!" : "Menu item saved successfully!", "success");
  document.getElementById("menuItemEditorModal").classList.remove("active");
  renderDailyRates();
  renderProducts();
  openPriceManager();
}

// Track Order Modal
function executeTrackOrder() {
  const input = document.getElementById("trackLookupInput").value.trim().toLowerCase();
  const resultsWrap = document.getElementById("trackResultsContainer");
  if (!input) {
    showToast("Please enter your mobile number or token #", "alert");
    return;
  }

  const matches = store.orders.filter(o => 
    o.id.toLowerCase() === input ||
    o.customer.phone.replace(/[^0-9]/g, '').includes(input.replace(/[^0-9]/g, ''))
  );

  if (matches.length === 0) {
    resultsWrap.innerHTML = `
      <div class="track-empty-state">
        <i class="fa-solid fa-circle-exclamation" style="color:var(--brand-red);"></i>
        <h3>No Booking Found</h3>
        <p>No active booking matching "${input}". Please check the number or token.</p>
      </div>
    `;
    return;
  }

  resultsWrap.innerHTML = matches.map(order => `
    <div class="booking-token-card" style="margin-bottom:1rem; cursor:pointer;" onclick="openConfirmationModalFromTrack('${order.id}')">
      <div class="token-left">
        <span class="token-label">Token #</span>
        <h2 style="color:var(--brand-gold);">${order.id}</h2>
        <div class="token-meta">
          <span>${order.customer.name}</span>
          <span>Status: <strong style="color:#10b981; text-transform:uppercase;">${order.status}</strong></span>
        </div>
      </div>
      <div class="token-right">
        <strong style="font-size:1.2rem;">Rs. ${order.totalAmount}</strong>
        <small>Click to View Slip</small>
      </div>
    </div>
  `).join("");
}

window.openConfirmationModalFromTrack = function(orderId) {
  const order = store.orders.find(o => o.id === orderId);
  if (order) {
    store.saveCustomerBooking(order.id);
    store.currentOrderTrackingId = order.id;
    const trackModal = document.getElementById("trackOrderModal");
    if (trackModal) trackModal.classList.remove("active");
    if (typeof hideCustomerReadyBanner === "function") hideCustomerReadyBanner();
    openConfirmationModal(order);
  }
};

// Daily Operations & Financial Ledger (Z-Report)
function openDailyReportModal() {
  const milkSummary = store.getMilkStockSummary();
  const salesSummary = store.getSalesSummary();

  const reportDate = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  const reportTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const reportText = `
============================================================
              AL SADIQ MILK & FRESH DRINKS
       GT Road, Dina (With Focus College) • 0370-9589018
              DAILY OPERATIONS & FINANCIAL SHEET
============================================================
Date: ${reportDate} | Generated at: ${reportTime}

------------------------------------------------------------
1. DAILY MILK STOCK & TANK SUMMARY (دودھ آمد و موجودہ سٹاک)
------------------------------------------------------------
• Total Milk Received Inward (آمد):     ${milkSummary.totalIn} Liters
  - Cow Milk In:                       ${milkSummary.cowIn} L
  - Buffalo Milk In:                   ${milkSummary.buffaloIn} L
  - Mixed Milk In:                     ${milkSummary.mixedIn} L

• Total Milk Dispatched / Sold (اخراج):  ${milkSummary.totalOut} Liters
• Milk Converted to Dahi (دہی تیاری):    ${milkSummary.dahiTotal} Liters (~${Math.round(milkSummary.dahiTotal * 0.9)} KG Dahi)

• Current Available Tank Stock (سٹاک):  ${milkSummary.totalBal} Liters
  - Cow Milk Available:                ${milkSummary.cowBal} L
  - Buffalo Milk Available:            ${milkSummary.buffaloBal} L
  - Mixed Milk Available:              ${milkSummary.mixedBal} L

------------------------------------------------------------
2. DAILY SALES & REVENUE SUMMARY (کل یومیہ بکری و آمدن)
------------------------------------------------------------
• Total Sales Revenue (کل رقم):        Rs. ${salesSummary.grossTotal.toLocaleString()}
• Total Transactions / Invoices:       ${salesSummary.count} Slips

  - Pure Milk Sales Revenue:           Rs. ${salesSummary.milkTotal.toLocaleString()}
  - Dahi & Dairy Items Revenue:        Rs. ${salesSummary.dahiTotal.toLocaleString()}
  - Milkshakes & Mojitos Revenue:      Rs. ${salesSummary.drinksTotal.toLocaleString()}

------------------------------------------------------------
3. ONLINE BOOKINGS & COUNTER QUEUE STATUS
------------------------------------------------------------
• Total Online Bookings:               ${store.orders.length}
• New / Pending:                       ${store.orders.filter(o => o.status === 'pending').length}
• In Kitchen Prep:                     ${store.orders.filter(o => o.status === 'preparing').length}
• Ready for Pickup:                    ${store.orders.filter(o => o.status === 'ready').length}
• Completed & Dispatched:              ${store.orders.filter(o => o.status === 'completed').length}

============================================================
Shop WhatsApp: 0370-9589018 & 0342-1008375
Pure Milk, Refreshing Life! - خالص دودھ، تازہ دم زندگی!
============================================================
  `;

  document.getElementById("dailyReportContent").innerHTML = `<pre style="white-space:pre-wrap; margin:0;">${reportText}</pre>`;

  const btnShare = document.getElementById("btnSendDailyReportWhatsApp");
  if (btnShare) {
    const encoded = encodeURIComponent(reportText);
    const num1Clean = formatWaPhone(store.whatsappSettings.num1 || "03709589018");
    btnShare.onclick = () => {
      window.open(`https://wa.me/${num1Clean}?text=${encoded}`, '_blank');
    };
  }

  document.getElementById("dailyReportModal").classList.add("active");
}

// =============================================================================
// 10. EVENT LISTENERS INITIALIZATION
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Initialize default language
  setLanguage(store.currentLang);

  // Nav Switcher (Customer vs Staff PIN Protected)
  const btnCustomer = document.getElementById("btnViewCustomer");
  const btnStaff = document.getElementById("btnViewStaff");
  const customerView = document.getElementById("customerView");
  const staffView = document.getElementById("staffView");
  const staffPinModal = document.getElementById("staffLoginPinModal");
  const staffPinInput = document.getElementById("staffPinInput");
  const staffPinErrorMsg = document.getElementById("staffPinErrorMsg");

  window.pressPinKey = function(key) {
    if (staffPinErrorMsg) staffPinErrorMsg.style.display = "none";
    if (!staffPinInput) return;

    if (key === "C") {
      staffPinInput.value = "";
    } else if (key === "DEL") {
      staffPinInput.value = staffPinInput.value.slice(0, -1);
    } else {
      if (staffPinInput.value.length < 8) {
        staffPinInput.value += key;
      }
    }
  };

  function switchToStaffView() {
    btnStaff.classList.add("active");
    btnCustomer.classList.remove("active");
    staffView.classList.add("active");
    customerView.classList.remove("active");
    renderStaffOrders();
    renderMilkLedger();
    renderSalesLedger();
    soundSynth.init();
    cloudSync.pullFromCloud(false);
  }

  function attemptStaffUnlock() {
    const enteredPin = (staffPinInput ? staffPinInput.value : "").trim();
    const validPin = (store.staffPin || "1234").trim();

    if (enteredPin === validPin) {
      store.isStaffAuthenticated = true;
      if (staffPinModal) staffPinModal.classList.remove("active");
      if (staffPinInput) staffPinInput.value = "";
      if (staffPinErrorMsg) staffPinErrorMsg.style.display = "none";
      switchToStaffView();
      showToast("🔓 Staff Dashboard Unlocked (ڈیش بورڈ کھل گیا)", "success");
    } else {
      if (staffPinErrorMsg) staffPinErrorMsg.style.display = "block";
      if (staffPinInput) {
        staffPinInput.value = "";
        staffPinInput.focus();
      }
      showToast("❌ Incorrect PIN. Try again.", "alert");
    }
  }

  btnCustomer.addEventListener("click", () => {
    btnCustomer.classList.add("active");
    btnStaff.classList.remove("active");
    customerView.classList.add("active");
    staffView.classList.remove("active");
  });

  btnStaff.addEventListener("click", () => {
    if (store.isStaffAuthenticated) {
      switchToStaffView();
    } else {
      if (staffPinInput) staffPinInput.value = "";
      if (staffPinErrorMsg) staffPinErrorMsg.style.display = "none";
      if (staffPinModal) staffPinModal.classList.add("active");
      setTimeout(() => { if (staffPinInput) staffPinInput.focus(); }, 150);
    }
  });

  const submitPinBtn = document.getElementById("submitStaffPinBtn");
  if (submitPinBtn) {
    submitPinBtn.addEventListener("click", attemptStaffUnlock);
  }

  if (staffPinInput) {
    staffPinInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        attemptStaffUnlock();
      }
    });
  }

  const cancelPinBtn = document.getElementById("cancelStaffPinBtn");
  if (cancelPinBtn) {
    cancelPinBtn.addEventListener("click", () => {
      if (staffPinModal) staffPinModal.classList.remove("active");
    });
  }

  // Lock Staff Dashboard Button
  const btnLockStaff = document.getElementById("btnLockStaffDashboard");
  if (btnLockStaff) {
    btnLockStaff.addEventListener("click", () => {
      store.isStaffAuthenticated = false;
      btnCustomer.classList.add("active");
      btnStaff.classList.remove("active");
      customerView.classList.add("active");
      staffView.classList.remove("active");
      showToast("🔒 Staff Dashboard Locked (ڈیش بورڈ لاک ہو گیا)", "alert");
    });
  }

  // Language Toggle Button
  document.getElementById("langToggleBtn").addEventListener("click", () => {
    const nextLang = store.currentLang === "en" ? "ur" : "en";
    setLanguage(nextLang);
  });

  // Category Tabs Filter
  document.querySelectorAll(".cat-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".cat-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      store.activeCategory = tab.dataset.category;
      renderProducts();
    });
  });

  // Quick Filter Pills
  document.querySelectorAll(".pill-filter").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".pill-filter").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      store.activeFilter = pill.dataset.filter;
      renderProducts();
    });
  });

  // Search Input
  const searchInput = document.getElementById("menuSearchInput");
  const searchClear = document.getElementById("searchClearBtn");

  searchInput.addEventListener("input", (e) => {
    store.searchQuery = e.target.value;
    searchClear.style.display = store.searchQuery ? "block" : "none";
    renderProducts();
  });

  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    store.searchQuery = "";
    searchClear.style.display = "none";
    renderProducts();
  });

  // Cart Drawer Triggers
  document.getElementById("openCartBtn").addEventListener("click", openCartDrawer);
  document.getElementById("closeCartBtn").addEventListener("click", closeCartDrawer);
  document.getElementById("cartOverlay").addEventListener("click", (e) => {
    if (e.target.id === "cartOverlay") closeCartDrawer();
  });

  // Order Mode Switcher in Cart
  const modePickupBtn = document.getElementById("modePickupBtn");
  const modeDeliveryBtn = document.getElementById("modeDeliveryBtn");

  modePickupBtn.addEventListener("click", () => {
    modePickupBtn.classList.add("active");
    modeDeliveryBtn.classList.remove("active");
    store.orderMode = "pickup";
    renderCart();
  });

  modeDeliveryBtn.addEventListener("click", () => {
    modeDeliveryBtn.classList.add("active");
    modePickupBtn.classList.remove("active");
    store.orderMode = "delivery";
    renderCart();
  });

  // Customization Modal Controls
  document.getElementById("modalQtyMinus").addEventListener("click", () => {
    const step = activeModalItem && activeModalItem.unit === "KG" ? 0.5 : 1;
    if (currentModalQty > step) {
      currentModalQty = Math.max(step, currentModalQty - step);
      document.getElementById("modalQtyInput").value = currentModalQty;
      updateModalTotal();
    }
  });

  document.getElementById("modalQtyPlus").addEventListener("click", () => {
    const step = activeModalItem && activeModalItem.unit === "KG" ? 0.5 : 1;
    currentModalQty = currentModalQty + step;
    document.getElementById("modalQtyInput").value = currentModalQty;
    updateModalTotal();
  });

  document.getElementById("modalQtyInput").addEventListener("input", (e) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val) && val > 0) {
      currentModalQty = val;
      updateModalTotal();
    }
  });

  document.getElementById("closeCustomizeModalBtn").addEventListener("click", () => {
    document.getElementById("customizationModal").classList.remove("active");
  });

  document.getElementById("confirmAddToCartBtn").addEventListener("click", () => {
    if (!activeModalItem) return;

    const optSummary = Object.values(currentModalOptions).filter(Boolean).join(", ");
    const note = document.getElementById("modalItemNotes").value.trim();

    store.addToCart(activeModalItem, currentModalQty, optSummary, note);
    document.getElementById("customizationModal").classList.remove("active");

    showToast(`${activeModalItem.nameEn} (${currentModalQty} ${activeModalItem.unit}) added to order!`, "success");
    renderCart();
  });

  // Proceed to Checkout
  document.getElementById("proceedCheckoutBtn").addEventListener("click", openCheckoutModal);
  document.getElementById("closeCheckoutModalBtn").addEventListener("click", () => {
    document.getElementById("checkoutModal").classList.remove("active");
  });
  document.getElementById("cancelCheckoutBtn").addEventListener("click", () => {
    document.getElementById("checkoutModal").classList.remove("active");
    openCartDrawer();
  });

  // Checkout Form Submission
  document.getElementById("checkoutForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const customerData = {
      name: document.getElementById("custName").value.trim(),
      phone: document.getElementById("custPhone").value.trim(),
      date: document.getElementById("custDate").value,
      timeSlot: document.getElementById("custTimeSlot").value,
      address: document.getElementById("custAddress").value.trim(),
      notes: document.getElementById("custSpecialNote").value.trim()
    };

    const newOrder = store.createOrder(customerData);
    store.currentOrderTrackingId = newOrder.id;

    // Push new booking to cloud database immediately for real-time staff sync
    cloudSync.pushOrder(newOrder);

    soundSynth.playOrderBell();

    document.getElementById("checkoutModal").classList.remove("active");
    renderCart();
    renderStaffOrders();
    openConfirmationModal(newOrder);
  });

  // Confirmation Modal Controls
  document.getElementById("closeConfirmationModalBtn").addEventListener("click", () => {
    document.getElementById("confirmationModal").classList.remove("active");
  });

  document.getElementById("printCustomerSlipBtn").addEventListener("click", () => {
    if (store.currentOrderTrackingId) {
      openKitchenSlip(store.currentOrderTrackingId);
    }
  });

  // Track Order Modal Controls
  document.getElementById("openTrackModalBtn").addEventListener("click", () => {
    document.getElementById("trackOrderModal").classList.add("active");
  });
  document.getElementById("closeTrackModalBtn").addEventListener("click", () => {
    document.getElementById("trackOrderModal").classList.remove("active");
  });
  document.getElementById("btnExecuteTrack").addEventListener("click", executeTrackOrder);
  document.getElementById("trackLookupInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") executeTrackOrder();
  });

  // Staff Dashboard Sound Toggle
  const soundToggle = document.getElementById("soundToggleBtn");
  const soundIcon = document.getElementById("soundIcon");
  const soundLabel = document.getElementById("soundLabel");

  soundToggle.addEventListener("click", () => {
    store.soundEnabled = !store.soundEnabled;
    localStorage.setItem(STORAGE_KEYS.SOUND, store.soundEnabled);
    soundIcon.className = store.soundEnabled ? "fa-solid fa-volume-high" : "fa-solid fa-volume-xmark";
    soundLabel.textContent = store.soundEnabled ? "Sound: ON" : "Sound: OFF";
    showToast(`Staff sound chime turned ${store.soundEnabled ? 'ON' : 'OFF'}`, "alert");
  });

  // Status Filter Tabs
  document.querySelectorAll("#staffStatusFilters .filter-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll("#staffStatusFilters .filter-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      staffFilterStatus = tab.dataset.status;
      renderStaffOrders();
    });
  });

  document.getElementById("staffOrderSearchInput").addEventListener("input", (e) => {
    staffSearchQuery = e.target.value;
    renderStaffOrders();
  });

  // Milk Ledger Filters
  document.querySelectorAll("#milkLedgerFilters .filter-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll("#milkLedgerFilters .filter-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      milkLedgerFilter = tab.dataset.filter;
      renderMilkLedger();
    });
  });

  // Sales Ledger Filters
  document.querySelectorAll("#salesLedgerFilters .filter-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll("#salesLedgerFilters .filter-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      salesLedgerFilter = tab.dataset.saleType;
      renderSalesLedger();
    });
  });

  // Kitchen Slip Close
  document.getElementById("closeKitchenSlipBtn").addEventListener("click", () => {
    document.getElementById("kitchenSlipModal").classList.remove("active");
  });
  document.getElementById("cancelKitchenSlipBtn").addEventListener("click", () => {
    document.getElementById("kitchenSlipModal").classList.remove("active");
  });

  // Price / Menu Manager Modal
  document.getElementById("openPriceManagerBtn").addEventListener("click", openPriceManager);
  document.getElementById("closePriceManagerBtn").addEventListener("click", () => {
    document.getElementById("priceManagerModal").classList.remove("active");
  });
  document.getElementById("savePriceChangesBtn").addEventListener("click", savePriceChanges);
  
  // Menu Manager Search & Category Filter
  const menuSearchInput = document.getElementById("menuManagerSearchInput");
  if (menuSearchInput) {
    menuSearchInput.addEventListener("input", openPriceManager);
  }
  const menuCatFilter = document.getElementById("menuManagerCatFilter");
  if (menuCatFilter) {
    menuCatFilter.addEventListener("change", openPriceManager);
  }

  // Item Editor Modal Handlers
  const itemEditorModal = document.getElementById("menuItemEditorModal");
  const closeItemEditor = () => {
    if (itemEditorModal) itemEditorModal.classList.remove("active");
  };
  document.getElementById("closeItemEditorModalBtn")?.addEventListener("click", closeItemEditor);
  document.getElementById("cancelItemEditorBtn")?.addEventListener("click", closeItemEditor);
  document.getElementById("menuItemEditorForm")?.addEventListener("submit", saveMenuItemForm);

  // Preset Image Picker Click Handlers
  document.querySelectorAll(".preset-thumb-option").forEach(thumb => {
    thumb.addEventListener("click", () => {
      document.querySelectorAll(".preset-thumb-option").forEach(t => t.classList.remove("selected"));
      thumb.classList.add("selected");
      const imgPath = thumb.dataset.img;
      const imgInput = document.getElementById("editItemImage");
      if (imgInput) imgInput.value = imgPath;
    });
  });

  document.getElementById("resetDefaultPricesBtn").addEventListener("click", () => {
    const isUrdu = store.currentLang === 'ur';
    const confirmMsg = isUrdu 
      ? "کیا آپ واقعی تمام مینو آئٹمز اور قیمتوں کو اصل فیکٹری حالت پر واپس لانا چاہتے ہیں؟"
      : "Reset all menu items and prices to original defaults?";
    if (confirm(confirmMsg)) {
      store.resetMenu();
      openPriceManager();
      renderDailyRates();
      renderProducts();
      showToast(isUrdu ? "مینو ڈیفالٹس پر بحال کر دیا گیا" : "Menu prices reset to defaults", "alert");
    }
  });

  // Milk Inward Modal
  const milkInwardModal = document.getElementById("milkInwardModal");
  const openMilkInwardModal = () => {
    document.getElementById("inwardLiters").value = "";
    milkInwardModal.classList.add("active");
  };

  document.getElementById("openMilkInwardModalBtn").addEventListener("click", openMilkInwardModal);
  const btnQuickMilkIn = document.getElementById("btnQuickMilkIn");
  if (btnQuickMilkIn) btnQuickMilkIn.addEventListener("click", openMilkInwardModal);

  document.getElementById("closeMilkInwardModalBtn").addEventListener("click", () => milkInwardModal.classList.remove("active"));
  document.getElementById("cancelMilkInwardBtn").addEventListener("click", () => milkInwardModal.classList.remove("active"));

  document.getElementById("milkInwardForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const type = document.querySelector('input[name="inwardMilkType"]:checked').value;
    const liters = parseFloat(document.getElementById("inwardLiters").value);
    const batch = document.getElementById("inwardBatch").value;
    const source = document.getElementById("inwardSource").value.trim();
    const notes = document.getElementById("inwardNotes").value.trim();

    store.addMilkEntry({
      type: "IN",
      milkType: type,
      liters: liters,
      batch: batch,
      source: source,
      notes: notes
    });

    showToast(`Recorded ${liters} L ${type.toUpperCase()} milk inward!`, "success");
    milkInwardModal.classList.remove("active");
    renderMilkLedger();
  });

  // Milk Usage / Dahi Modal
  const milkUsageModal = document.getElementById("milkUsageModal");
  const openMilkUsageModal = () => {
    document.getElementById("usageLiters").value = "";
    milkUsageModal.classList.add("active");
  };

  document.getElementById("openMilkUsageModalBtn").addEventListener("click", openMilkUsageModal);
  const btnQuickDahiPrep = document.getElementById("btnQuickDahiPrep");
  if (btnQuickDahiPrep) btnQuickDahiPrep.addEventListener("click", openMilkUsageModal);

  document.getElementById("closeMilkUsageModalBtn").addEventListener("click", () => milkUsageModal.classList.remove("active"));
  document.getElementById("cancelMilkUsageBtn").addEventListener("click", () => milkUsageModal.classList.remove("active"));

  document.getElementById("milkUsageForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const purpose = document.getElementById("usagePurpose").value;
    const type = document.querySelector('input[name="usageMilkType"]:checked').value;
    const liters = parseFloat(document.getElementById("usageLiters").value);
    const notes = document.getElementById("usageNotes").value.trim();

    store.addMilkEntry({
      type: purpose,
      milkType: type,
      liters: liters,
      batch: "Dahi / Prep",
      source: `Usage: ${purpose}`,
      notes: notes
    });

    showToast(`Deducted ${liters} L ${type.toUpperCase()} milk for ${purpose}!`, "success");
    milkUsageModal.classList.remove("active");
    renderMilkLedger();
  });

  // Quick Counter Sale Modal
  const counterSaleModal = document.getElementById("counterSaleModal");
  const openCounterSaleModal = () => {
    updateCounterSaleProducts();
    counterSaleModal.classList.add("active");
  };

  document.getElementById("openCounterSaleModalBtn").addEventListener("click", openCounterSaleModal);
  const btnOpenWalkin = document.getElementById("btnOpenWalkinSaleModal");
  if (btnOpenWalkin) btnOpenWalkin.addEventListener("click", openCounterSaleModal);

  document.getElementById("closeCounterSaleModalBtn").addEventListener("click", () => counterSaleModal.classList.remove("active"));
  document.getElementById("cancelCounterSaleBtn").addEventListener("click", () => counterSaleModal.classList.remove("active"));

  document.getElementById("counterSaleForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const cat = document.getElementById("saleCategory").value;
    const itemSelect = document.getElementById("saleItemSelect");
    const itemOpt = itemSelect.options[itemSelect.selectedIndex];
    const itemName = itemOpt ? itemOpt.text.split('-')[0].trim() : "Direct Item";
    const qty = parseFloat(document.getElementById("saleQty").value) || 1;
    const total = parseFloat(document.getElementById("saleTotalAmount").value) || 0;
    const customer = document.getElementById("saleCustomerName").value.trim() || "Walk-in Cash Customer";

    store.addSalesEntry({
      type: "walkin",
      category: cat,
      customer: customer,
      itemsSummary: `${itemName} (${qty} qty)`,
      amount: total,
      paymentMode: "Cash (نقد)"
    });

    // If milk was sold, deduct from milk tank
    if (cat === "milk") {
      const selectedId = itemSelect.value;
      const milkType = selectedId.includes("cow") ? "cow" : (selectedId.includes("buffalo") ? "buffalo" : "mixed");
      store.addMilkEntry({
        type: "OUT",
        milkType: milkType,
        liters: qty,
        batch: "Counter Cash Sale",
        source: `Counter Sale (${customer})`,
        notes: `Sold ${qty} Liters at counter`
      });
    }

    showToast(`Recorded Rs. ${total} counter cash sale!`, "success");
    counterSaleModal.classList.remove("active");
    renderSalesLedger();
    renderMilkLedger();
  });

  // Daily Operations / Z-Report Full Sheet Modal
  document.getElementById("exportDailySummaryBtn").addEventListener("click", openDailyReportModal);
  const btnPrintSales = document.getElementById("btnPrintSalesLedger");
  if (btnPrintSales) btnPrintSales.addEventListener("click", openDailyReportModal);

  const btnPrintMilk = document.getElementById("btnPrintMilkReport");
  if (btnPrintMilk) btnPrintMilk.addEventListener("click", openDailyReportModal);

  const btnShareSalesWa = document.getElementById("btnShareSalesWhatsApp");
  if (btnShareSalesWa) btnShareSalesWa.addEventListener("click", openDailyReportModal);

  document.getElementById("closeDailyReportModalBtn").addEventListener("click", () => {
    document.getElementById("dailyReportModal").classList.remove("active");
  });
  document.getElementById("closeDailyReportBtn").addEventListener("click", () => {
    document.getElementById("dailyReportModal").classList.remove("active");
  });

  // WhatsApp & Cloud Real-Time Sync Settings Modal
  const whatsappSettingsModal = document.getElementById("whatsappSettingsModal");
  const inputWa1 = document.getElementById("settingWhatsApp1");
  const inputWa2 = document.getElementById("settingWhatsApp2");
  const checkAutoOpen = document.getElementById("settingAutoOpenWhatsApp");
  const inputCloudSyncUrl = document.getElementById("settingCloudSyncUrl");
  const btnTestCloud = document.getElementById("btnTestCloudSync");
  const cloudTestStatus = document.getElementById("cloudTestStatus");
  const btnManualSync = document.getElementById("btnManualSync");

  // Manual Sync Button in Staff Header
  if (btnManualSync) {
    btnManualSync.addEventListener("click", async () => {
      showToast("Syncing orders with cloud...", "alert");
      await cloudSync.pullFromCloud(true);
      showToast("Live cloud sync completed!", "success");
    });
  }

  // Open Settings Modal
  document.getElementById("openWhatsAppSettingsBtn").addEventListener("click", () => {
    inputWa1.value = store.whatsappSettings.num1 || "0370-9589018";
    inputWa2.value = store.whatsappSettings.num2 || "0342-1008375";
    checkAutoOpen.checked = store.whatsappSettings.autoOpen !== false;
    const pinInput = document.getElementById("settingStaffPin");
    if (pinInput) {
      pinInput.value = store.staffPin || "1234";
    }
    if (inputCloudSyncUrl) {
      inputCloudSyncUrl.value = cloudSync.config.url || "https://alsadiqmilkfreshdrinks-default-rtdb.europe-west1.firebasedatabase.app";
    }
    if (cloudTestStatus) {
      cloudTestStatus.textContent = "Status: Ready";
      cloudTestStatus.style.color = "var(--text-muted)";
    }
    whatsappSettingsModal.classList.add("active");
  });

  document.getElementById("closeWhatsAppSettingsBtn").addEventListener("click", () => {
    whatsappSettingsModal.classList.remove("active");
  });

  document.getElementById("cancelWhatsAppSettingsBtn").addEventListener("click", () => {
    whatsappSettingsModal.classList.remove("active");
  });

  // Test Cloud Connection Button
  if (btnTestCloud) {
    btnTestCloud.addEventListener("click", async () => {
      if (cloudTestStatus) {
        cloudTestStatus.textContent = "Testing...";
        cloudTestStatus.style.color = "#0284c7";
      }
      const testUrl = inputCloudSyncUrl ? inputCloudSyncUrl.value.trim() : "";
      const isOk = await cloudSync.testConnection(testUrl);
      if (cloudTestStatus) {
        if (isOk) {
          cloudTestStatus.textContent = "🟢 Connected Successfully!";
          cloudTestStatus.style.color = "#10b981";
        } else {
          cloudTestStatus.textContent = "🔴 Offline / Check URL";
          cloudTestStatus.style.color = "#ef4444";
        }
      }
    });
  }

  // Save Settings
  document.getElementById("saveWhatsAppSettingsBtn").addEventListener("click", () => {
    const num1Val = inputWa1.value.trim() || "0370-9589018";
    const num2Val = inputWa2.value.trim() || "0342-1008375";
    const autoVal = checkAutoOpen.checked;

    store.whatsappSettings = {
      num1: num1Val,
      num2: num2Val,
      autoOpen: autoVal
    };
    store.saveWhatsAppSettings();

    const pinInput = document.getElementById("settingStaffPin");
    if (pinInput && pinInput.value.trim()) {
      store.saveStaffPin(pinInput.value.trim());
    }

    if (inputCloudSyncUrl && inputCloudSyncUrl.value.trim()) {
      cloudSync.saveConfig({ url: inputCloudSyncUrl.value.trim() });
    }

    showToast("Settings & Staff PIN saved successfully!", "success");
    whatsappSettingsModal.classList.remove("active");
  });

  // Sticky Bottom Cart Bar Click Handlers
  const stickyProceedBtn = document.getElementById("stickyProceedCheckoutBtn");
  if (stickyProceedBtn) {
    stickyProceedBtn.addEventListener("click", () => {
      openCheckoutModal();
    });
  }

  const stickySummaryBtn = document.getElementById("stickyCartSummaryBtn");
  if (stickySummaryBtn) {
    stickySummaryBtn.addEventListener("click", () => {
      openCartDrawer();
    });
  }

  // Cloud Status Pill click to open settings
  const cloudPill = document.getElementById("cloudSyncStatusPill");
  if (cloudPill) {
    cloudPill.style.cursor = "pointer";
    cloudPill.addEventListener("click", () => {
      document.getElementById("openWhatsAppSettingsBtn").click();
    });
  }

  // Radio button pill visual active toggle helper
  document.addEventListener("change", (e) => {
    if (e.target.type === "radio") {
      const group = e.target.closest(".radio-pill-group");
      if (group) {
        group.querySelectorAll("label").forEach(l => l.classList.remove("active"));
        const parentLabel = e.target.closest("label");
        if (parentLabel) parentLabel.classList.add("active");
      }
    }
  });

  // Check URL hash for direct Staff App launch on mobile (#staff)
  if (window.location.hash === "#staff" || localStorage.getItem("alsadiq_default_view") === "staff") {
    store.isStaffAuthenticated = true;
    btnCustomer.classList.remove("active");
    btnStaff.classList.add("active");
    customerView.classList.remove("active");
    staffView.classList.add("active");
  }

  // Initial renders
  renderDailyRates();
  renderProducts();
  renderCart();
  renderStaffOrders();
  renderMilkLedger();
  renderSalesLedger();

  // Start background Real-Time Cloud Synchronization
  cloudSync.startPolling();
});
