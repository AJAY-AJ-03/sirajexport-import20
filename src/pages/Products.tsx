import React, { useState, useMemo } from 'react';
import { Search, Filter, X, MessageCircle } from 'lucide-react';

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
  }
];

const brands = ["Aachi", "Iyarkai", "Wipro", "Cycle", "Lays", "Dalda", "Unibic"];

const brandWhatsAppNumbers = {
  "Aachi": "918531859695",
  "Iyarkai": "918531859695",
  "Wipro": "918531859695",
  "Cycle": "918531859695",
  "Lays": "918531859695",
  "Dalda": "918531859695",
  "Unibic": "918531859695"
};

const getBrandMessage = (brand: string, products: Product[]) => {
  const categories = [...new Set(products.map(p => p.category))];
  
  const messages = {
    "Aachi": `Hi, I'm interested in Aachi products, particularly your ${categories.join(", ")}. Could you provide details about pricing and availability?`,
    "Iyarkai": `Hello, I'd like to know more about Iyarkai's ${categories.join(", ")}. Please share product details and bulk purchase options.`,
    "Wipro": `Hi, I'm looking for Wipro's ${categories.join(", ")}. Can you share current prices and minimum order quantities?`,
    "Cycle": `Hello, I'm interested in Cycle brand's ${categories.join(", ")}. Please provide product catalog and pricing information.`,
    "Lays": `Hi, I want to enquire about Lays ${categories.join(", ")}. Could you share details about available flavors and pack sizes?`,
    "Dalda": `Hello, I'm interested in Dalda's ${categories.join(", ")}. Please provide product specifications and bulk order details.`,
    "Unibic": `Hi, I'd like to know more about Unibic's ${categories.join(", ")}. Could you share information about available varieties and pricing?`
  };

  return messages[brand as keyof typeof messages] || `Hi, I'm interested in ${brand} products. Can you provide more information?`;
};

function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBrand = !selectedBrand || product.brand === selectedBrand;

      return matchesSearch && matchesBrand;
    });
  }, [searchQuery, selectedBrand]);

  const groupedProducts = useMemo(() => {
    const groups = filteredProducts.reduce((acc, product) => {
      if (!acc[product.brand]) {
        acc[product.brand] = [];
      }
      acc[product.brand].push(product);
      return acc;
    }, {} as Record<string, Product[]>);

    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
  }, [filteredProducts]);

  const handleWhatsAppEnquiry = (brand: string, brandProducts: Product[]) => {
    const number = brandWhatsAppNumbers[brand as keyof typeof brandWhatsAppNumbers];
    const message = getBrandMessage(brand, brandProducts);
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-purple-700 text-white py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Our Products</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Discover our collection of premium products from India's most trusted brands.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Brand Scrollbar for Mobile */}
        <div className="md:hidden mb-6 -mx-4 px-4 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {brands.map(brand => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(selectedBrand === brand ? null : brand)}
                className={`flex-shrink-0 px-4 py-2 rounded-full border transition-colors ${
                  selectedBrand === brand
                    ? 'bg-purple-600 text-white border-purple-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-purple-600'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Sidebar Filters */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-20">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900">Brands</h2>
              </div>

              <div className="space-y-2">
                {brands.map(brand => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(selectedBrand === brand ? null : brand)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedBrand === brand
                        ? 'bg-purple-100 text-purple-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Selected Brand Tag */}
            {selectedBrand && (
              <div className="mb-4 flex items-center">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm flex items-center">
                  {selectedBrand}
                  <button
                    onClick={() => setSelectedBrand(null)}
                    className="ml-2 hover:text-purple-900"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </span>
              </div>
            )}

            {/* Products Grid */}
            <div className="space-y-12">
              {groupedProducts.map(([brand, brandProducts]) => (
                <div key={brand} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">{brand}</h2>
                    <button
                      onClick={() => handleWhatsAppEnquiry(brand, brandProducts)}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm sm:text-base"
                    >
                      <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="hidden sm:inline">Enquire {brand}</span>
                      <span className="sm:hidden">Enquire {brand}</span>
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {brandProducts.map(product => (
                      <div
                        key={`${product.id}-${product.brand}`}
                        className="bg-gray-50 rounded-xl overflow-hidden group hover:shadow-md transition-shadow"
                      >
                        <div className="relative h-48 sm:h-64">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 right-4">
                            <div className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm">
                              {product.category}
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                          <p className="text-gray-600 text-sm">{product.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;