interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  image: string;
  description: string;
  price: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Sambar Powder",
    brand: "Aachi",
    category: "Spices",
    image: "/Aachi-products/SambarPowder.jpg",
    description: "Authentic South Indian sambar powder blend made from premium spices",
    price: "₹120"
  },
  {
    id: 2,
    name: "Rasam Powder",
    brand: "Aachi",
    category: "Spices",
    image: "/Aachi-products/aachi-rasam-podi-powder.webp",
    description: "Traditional rasam spice mix with rich flavor",
    price: "₹110"
  },
  {
    id: 3,
    name: "Biryani Masala",
    brand: "Aachi",
    category: "Spices",
    image: "/Aachi-products/BiriyaniMasala.jpg",
    description: "Flavorful biryani spice blend for authentic taste",
    price: "₹150"
  },
  {
    id: 4,
    name: "Chicken 65 Masala",
    brand: "Aachi",
    category: "Spices",
    image: "/Aachi-products/Chicken65.jpg",
    description: "Crispy and spicy Chicken 65 masala blend",
    price: "₹130"
  },
  {
    id: 5,
    name: "Fish Fry Masala",
    brand: "Aachi",
    category: "Spices",
    image: "/Aachi-products/FishFry.jpg",
    description: "Tangy and spicy fish fry masala blend",
    price: "₹140"
  },
  {
    id: 6,
    name: "Garam Masala",
    brand: "Aachi",
    category: "Spices",
    image: "/Aachi-products/GaramMasala.webp",
    description: "Perfect blend of aromatic spices for Indian cuisine",
    price: "₹85"
  },
  {
    id: 7,
    name: "Chaat Masala",
    brand: "Aachi",
    category: "Spices",
    image: "/Aachi-products/ChaatMasala.jpg",
    description: "Tangy and spicy chaat masala for snacks",
    price: "₹70"
  },
  {
    id: 8,
    name: "Curry Masala",
    brand: "Aachi",
    category: "Spices",
    image: "/Aachi-products/CurryMasala.webp",
    description: "Rich and flavorful curry masala blend",
    price: "₹100"
  },
  {
    id: 9,
    name: "Pepper Powder",
    brand: "Aachi",
    category: "Spices",
    image: "/Aachi-products/PepperPowder.jpg",
    description: "Strong and aromatic black pepper powder",
    price: "₹90"
  },
  {
    id: 10,
    name: "Turmeric Powder",
    brand: "Aachi",
    category: "Spices",
    image: "/Aachi-products/turmeric.jpg",
    description: "Pure and natural turmeric powder with medicinal benefits",
    price: "₹60"
  },
  {
    id: 11,
    name: "Chilli Powder",
    brand: "Aachi",
    category: "Spices",
    image: "/Aachi-products/Chilli-Powder.webp",
    description: "Hot and flavorful red chilli powder",
    price: "₹80"
  },
  {
    id: 12,
    name: "Coriander Powder",
    brand: "Aachi",
    category: "Spices",
    image: "/Aachi-products/CorianderPowder.webp",
    description: "Freshly ground coriander powder with earthy aroma",
    price: "₹75"
  },
  {
    id: 13,
    name: "Cumin Powder",
    brand: "Aachi",
    category: "Spices",
    image: "/Aachi-products/CuminPowder.jpg",
    description: "Warm and aromatic cumin powder",
    price: "₹70"
  },
  {
    id: 14,
    name: "Mustard Seeds",
    brand: "Aachi",
    category: "Spices",
    image: "/Aachi-products/MustedSeed.jpg",
    description: "Essential mustard seeds for Indian cooking",
    price: "₹65"
  },
   {
    id: 15,
    name: "Iyarkai Gingelly Oil",
    brand: "Iyarkai",
    category: "Oil Products",
    image: "https://i0.wp.com/949838b8.delivery.rocketcdn.me/wp-content/uploads/2021/11/Iyarkai-Gingelly-Oil-1-Ltr.jpg?w=256&ssl=1",
    description: "Pure and natural gingelly oil with rich flavor and aroma",
    price: "₹200"
  },
 {
    id: 1,
    name: "Wipro Safewash Liquid Detergent",
    brand: "Wipro",
    category: "Home Care Products",
    image: "/wipro/WiproSafeWashLiquidDetergent.webp",
    description: "Gentle and effective liquid detergent for soft fabrics",
    price: "₹180"
  },
  {
    id: 2,
    name: "Wipro Softouch Fabric Conditioner",
    brand: "Wipro",
    category: "Home Care Products",
    image: "/wipro/WiproSoftouchFabricConditioner.jpg",
    description: "Keeps your clothes soft and fresh with a long-lasting fragrance",
    price: "₹160"
  },
  {
    id: 3,
    name: "Wipro Maxkleen Floor Cleaner",
    brand: "Wipro",
    category: "Home Care Products",
    image: "/wipro/WiproMaxkleenFloorCleaner.jpg",
    description: "Powerful floor cleaner with antibacterial properties",
    price: "₹150"
  },
  {
    id: 4,
    name: "Wipro Giffy Dishwash Liquid",
    brand: "Wipro",
    category: "Home Care Products",
    image: "/wipro/WiproGiffyDishwashLiquid.jpg",
    description: "Lemon-scented dishwash liquid that cuts through grease",
    price: "₹120"
  },
  {
    id: 6,
    name: "Wipro Santoor Sandal & Turmeric Soap",
    brand: "Wipro",
    category: "Personal Care Products",
    image: "/wipro/Wipro Santoor Soap.jpg",
    description: "Traditional soap with the goodness of sandalwood and turmeric",
    price: "₹45"
  },
  
  {
    id: 8,
    name: "Wipro Chandrika Ayurvedic Soap",
    brand: "Wipro",
    category: "Personal Care Products",
    image: "/wipro/WiproChandrika.jpg",
    description: "Ayurvedic soap with natural herbs for healthy skin",
    price: "₹40"
  },
  {
    id: 10,
    name: "Wipro Yardley Talcum Powder",
    brand: "Wipro",
    category: "Personal Care Products",
    image: "/wipro/WiproYardleyTalcumPowder.webp",
    description: "Classic talcum powder with a fresh and soothing scent",
    price: "₹90"
  },
  {
    id: 1,
    name: "Cycle Three in One Agarbatti",
    brand: "Cycle",
    category: "Agarbatti",
    image: "/cycle/CycleThreeInOneAgarbatti.webp",
    description: "A blend of three unique fragrances in one pack",
    price: "₹90"
  },
  {
    id: 2,
    name: "Cycle Rhythm Agarbatti",
    brand: "Cycle",
    category: "Agarbatti",
    image: "/cycle/CycleRhythmAgarbatti.webp",
    description: "Soothing and refreshing fragrance for daily use",
    price: "₹85"
  },
  {
    id: 7,
    name: "Cycle Lavender Agarbatti",
    brand: "Cycle",
    category: "Agarbatti",
    image: "/cycle/CycleLavenderAgarbatti.jpg",
    description: "Calming lavender aroma for stress relief",
    price: "₹100"
  },
  {
    id: 10,
    name: "Cycle Sambrani Agarbatti",
    brand: "Cycle",
    category: "Agarbatti",
    image: "/cycle/CycleSambraniAgarbatti.jpg",
    description: "Strong Sambrani fragrance for spiritual rituals",
    price: "₹110"
  },
  {
    id: 11,
    name: "Cycle Sambrani Dhoop Cones",
    brand: "Cycle",
    category: "Dhoop",
    image: "/cycle/CycleSambraniDhoopCones.webp",
    description: "Traditional Sambrani cones for a pure and sacred aroma",
    price: "₹60"
  },
  {
    id: 12,
    name: "Cycle Chandan Dhoop Cones",
    brand: "Cycle",
    category: "Dhoop",
    image: "/cycle/CycleChandanDhoopCones.jpg",
    description: "Chandan-scented dhoop cones for a calming atmosphere",
    price: "₹65"
  },
  {
    id: 1,
    name: "Dalda Vanaspati (Classic)",
    brand: "Dalda",
    category: "Vanaspati",
    image: "/dalta/DaldaVanaspati(Classic).webp",
    description: "Classic Dalda Vanaspati for rich flavor and texture in cooking",
    price: "₹150"
  },
 {
    id: 1,
    name: "Unibic Choco Chip Cookies",
    brand: "Unibic",
    category: "Cookies",
    image: "/unibic/UnibicChocoChipCookies.jpg",
    description: "Delicious chocolate chip cookies with rich flavor",
    price: "₹45"
  },
  {
    id: 2,
    name: "Unibic Butter Cookies",
    brand: "Unibic",
    category: "Cookies",
    image: "/unibic/UnibicButterCookies.webp",
    description: "Crunchy and buttery cookies with a melt-in-mouth texture",
    price: "₹40"
  },
  {
    id: 3,
    name: "Unibic Cashew Cookies",
    brand: "Unibic",
    category: "Cookies",
    image: "/unibic/UnibicCashewCookies.jpg",
    description: "Rich cashew flavor with a crispy texture",
    price: "₹50"
  },
  {
    id: 4,
    name: "Unibic Oatmeal Digestive Cookies",
    brand: "Unibic",
    category: "Cookies",
    image: "/unibic/UnibicOatmealDigestiveCookies.webp",
    description: "Healthy oatmeal cookies with digestive benefits",
    price: "₹55"
  },
  {
    id: 5,
    name: "Unibic Multigrain Cookies",
    brand: "Unibic",
    category: "Cookies",
    image: "/unibic/UnibicMultigrainCookies.jpg",
    description: "Wholesome multigrain cookies for a nutritious snack",
    price: "₹60"
  },
  {
    id: 6,
    name: "Unibic Coconut Cookies",
    brand: "Unibic",
    category: "Cookies",
    image: "/unibic/UnibicCoconutCookies.webp",
    description: "Tropical coconut flavor in every bite",
    price: "₹45"
  },
  {
    id: 7,
    name: "Unibic Fruit & Nut Cookies",
    brand: "Unibic",
    category: "Cookies",
    image: "/unibic/UnibicFruitNutCookies.webp",
    description: "A delightful mix of fruits and nuts in a cookie",
    price: "₹70"
  },
  {
    id: 8,
    name: "Unibic Almond & Honey Cookies",
    brand: "Unibic",
    category: "Cookies",
    image: "/unibic/UnibicAlmondHoneyCookies.jpg",
    description: "Sweet almond and honey flavor in a crunchy cookie",
    price: "₹65"
  },
  {
    id: 9,
    name: "Unibic Peanut Butter Cookies",
    brand: "Unibic",
    category: "Cookies",
    image: "/unibic/UnibicPeanutButterCookies.webp",
    description: "Creamy peanut butter flavor in a crispy cookie",
    price: "₹60"
  },
  {
    id: 10,
    name: "Unibic Milk & Honey Cookies",
    brand: "Unibic",
    category: "Cookies",
    image: "/unibic/UnibicMilk&HoneyCookies.jpg",
    description: "Sweet milk and honey combination for a rich taste",
    price: "₹50"
  },
  {
    id: 12,
    name: "Unibic Choco Nut Cookies",
    brand: "Unibic",
    category: "Chocolate-Based Cookies",
    image: "/unibic/UnibicChocoNutCookies.jpg",
    description: "Chocolate cookies loaded with nuts for extra crunch",
    price: "₹55"
  },
    {
    id: 1,
    name: "Lays Classic Salted",
    brand: "Lays",
    category: "Snacks",
    image: "/cycle/LaysClassicSalted.jpg",
    description: "Classic salted potato chips with a crispy texture",
    price: "₹20"
  },
  {
    id: 2,
    name: "Lays American Style Cream & Onion",
    brand: "Lays",
    category: "Snacks",
    image: "/cycle/LaysAmericanStyleCream&Onion.jpg",
    description: "Rich cream and onion flavored chips",
    price: "₹25"
  },
  {
    id: 3,
    name: "Lays India's Magic Masala",
    brand: "Lays",
    category: "Snacks",
    image: "/cycle/LaysIndia'sMagicMasala.jpg",
    description: "Spicy Indian masala-flavored potato chips",
    price: "₹30"
  },
  {
    id: 4,
    name: "Lays Spanish Tomato Tango",
    brand: "Lays",
    category: "Snacks",
    image: "/cycle/LaysSpanishTomatoTango.jpg",
    description: "Tangy tomato-flavored chips with a hint of spice",
    price: "₹25"
  },
  {
    id: 5,
    name: "Lays Classic Salt & Vinegar",
    brand: "Lays",
    category: "Snacks",
    image: "/cycle/LaysClassicSalt&Vinegar.jpg",
    description: "Perfect balance of salt and vinegar flavors",
    price: "₹30"
  },
  {
    id: 8,
    name: "Lays Cheese & Onion",
    brand: "Lays",
    category: "Snacks",
    image: "/cycle/LaysCheese&Onion.jpg",
    description: "Savory cheese and onion flavored chips",
    price: "₹25"
  },
  {
    id: 10,
    name: "Lays Chili Lemon",
    brand: "Lays",
    category: "Snacks",
    image: "/cycle/LaysChiliLemon.jpg",
    description: "Spicy chili flavor with a twist of lemon",
    price: "₹30"
  },
  {
    id: 10,
    name: "Amutham jaggery",
    brand: "AMUTHAM JAGGERY",
    category: "Snacks",
    image: "/amutham-jaggery/Amutham-jaggery.jpg",
    description: "Natural sweetener, rich in minerals and flavor.",
    price: "₹30"
  },
  {
    id: 10,
    name: "Apsara pencil",
    brand: "APSARA PENCILS",
    category: "stationary",
    image: "/apsara-pencils/apsara-pencils.webp",
    description: "Premium quality pencil for smooth and precise writing.",
    price: "₹30"
  },
  {
    id: 10,
    name: "Cello tape",
    brand: "CELLO",
    category: "stationary",
    image: "/cello/cello-tape.jpg",
    description: "Strong adhesive tape for sealing and crafting.",
    price: "₹30"
  },
  {
    id: 10,
    name: "Fortune sun-lite",
    brand: "FORTUNE",
    category: "oil",
    image: "/fortune/fortune-sunlite.jpg",
    description: "Light and healthy cooking oil for everyday use.",
    price: "₹30"
  },
  {
    id: 10,
    name: "Mani mark sweet",
    brand: "MANI MARK",
    category: "Snaks",
    image: "/manimark/manimark-sweet.webp",
    description: "Delightful treat, rich in flavor and sweetness.",
    price: "₹30"
  },
  {
    id: 10,
    name: "Mayil mark appalam",
    brand: "MAYIL MARK APPALAM",
    category: "Food items",
    image: "/mayilmarkappalam/maryilmark-appalam.webp",
    description: "Crispy and flavorful papad, perfect with any meal.",
    price: "₹30"
  },
  {
    id: 10,
    name: "Naga rava",
    brand: "NAGA",
    category: "Food items",
    image: "/naga/naga-rava.webp",
    description: "Premium quality semolina for soft and tasty dishes.",
    price: "₹30"
  },
  {
    id: 10,
    name: "Savorit vermicilli",
    brand: "SAVOURITE",
    category: "Food items",
    image: "/savourite/savorit-vermicelli.jpg",
    description: "Fine and smooth vermicelli, perfect for sweet and savory dishes.",
    price: "₹30"
  },
  {
    id: 10,
    name: "Tru salt",
    brand: "TRU SALT",
    category: "Food items",
    image: "/tru-salt/trusalt.webp",
    description: "Pure and refined salt for balanced seasoning.",
    price: "₹30"
  },
  {
    id: 10,
    name: "Udhaya krishna ghee",
    brand: "UDHAYA KRISHNA GHEE",
    category: "Food items",
    image: "/udhayakrishna/udaya-krishna-ghee.webp",
    description: "Rich and aromatic ghee for authentic taste and flavor.",
    price: "₹30"
  }
];

export default products