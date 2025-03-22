import React, { useState, useMemo, useEffect, useRef } from 'react';
import { MessageCircle, ChevronDown, Package, Layers, Store } from 'lucide-react';
import products from './Product.ts' 

const brands = ["Aachi", "Iyarkai", "Wipro", "Cycle", "Lays", "Dalda", "Unibic", "AMUTHAM JAGGERY", "APSARA PENCILS", "CELLO", "FORTUNE", "MANI MARK", "MAYIL MARK APPALAM", "RAIL MARK","NAGA", "SAVOURITE", "TRU SALT", "UDHAYA KRISHNA GHEE"];

const brandCategories = {
  "MASALA": ["Aachi"],
  "JAGGERY": ["AMUTHAM JAGGERY"],
  "STATIONERY": ["APSARA PENCILS", "CELLO"],
  "FRAGRANCE": ["Cycle"],
  "OIL": ["FORTUNE", "Iyarkai"],
  "BAKERY ITEMS": ["Unibic"],
  "FOOD ITEMS": ["MAYIL MARK APPALAM", "NAGA", "SAVOURITE"],
  "SNACKS ITEMS": ["Lays", "MANI MARK"],
  "HEALTH CARE": ["Wipro"],
  "SALT": ["TRU SALT"],
  "GHEE": ["UDHAYA KRISHNA GHEE"],
  "BISCUITS": ["Unibic"]
};

const brandWhatsAppNumbers = {
  "Aachi": "918531859695",
  "Iyarkai": "918531859695",
  "Wipro": "918531859695",
  "Cycle": "918531859695",
  "Lays": "918531859695",
  "Dalda": "918531859695",
  "Unibic": "918531859695",
  "AMUTHAM JAGGERY": "918531859695",
  "APSARA PENCILS": "918531859695",
  "CELLO": "918531859695",
  "FORTUNE": "918531859695",
  "MANI MARK": "918531859695",
  "MAYIL MARK APPALAM": "918531859695",
  "RAIL MARK": "918531859695",
  "NAGA": "918531859695",
  "SAVOURITE": "918531859695",
  "TRU SALT": "918531859695",
  "UDHAYA KRISHNA GHEE": "918531859695"
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
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<'category' | 'brand'>('category');
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (productsRef.current) {
      const yOffset = -100;
      const element = productsRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [selectedCategory, selectedBrand]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      if (filterType === 'category' && selectedCategory) {
        const brandsInCategory = brandCategories[selectedCategory as keyof typeof brandCategories] || [];
        return brandsInCategory.includes(product.brand);
      }
      if (filterType === 'brand' && selectedBrand) {
        return product.brand === selectedBrand;
      }
      return true;
    });
  }, [selectedBrand, selectedCategory, filterType]);

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

  const clearFilters = () => {
    setSelectedBrand(null);
    setSelectedCategory(null);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-purple-700 text-white py-12 md:py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-black/30"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=2070")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Our Products</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Discover our collection of premium products from India's most trusted brands.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Mobile Filters */}
        <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-white shadow-md px-4 py-3 space-y-3">
          <div className="grid grid-cols-2 gap-2 mb-3">
            <button
              onClick={() => setFilterType('category')}
              className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                filterType === 'category'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Layers className="h-4 w-4" />
              Categories
            </button>
            <button
              onClick={() => setFilterType('brand')}
              className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                filterType === 'brand'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Store className="h-4 w-4" />
              Brands
            </button>
          </div>

          {filterType === 'category' ? (
            <select
              value={selectedCategory || ''}
              onChange={(e) => {
                setSelectedCategory(e.target.value || null);
                setSelectedBrand(null);
              }}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-sm"
            >
              <option value="">All Categories</option>
              {Object.keys(brandCategories).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          ) : (
            <select
              value={selectedBrand || ''}
              onChange={(e) => {
                setSelectedBrand(e.target.value || null);
                setSelectedCategory(null);
              }}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-sm"
            >
              <option value="">All Brands</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Content wrapper */}
        <div className="md:flex md:flex-row gap-8 mt-24 md:mt-0">
          {/* Desktop Sidebar Filters */}
          <div className="hidden md:block w-72 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-lg overflow-y-auto" style={{ position: 'sticky', top: '5rem', maxHeight: 'calc(100vh - 8rem)' }}>
              <div className="p-6 border-b">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setFilterType('category');
                      clearFilters();
                    }}
                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      filterType === 'category'
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Layers className="h-4 w-4" />
                    Categories
                  </button>
                  <button
                    onClick={() => {
                      setFilterType('brand');
                      clearFilters();
                    }}
                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      filterType === 'brand'
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Store className="h-4 w-4" />
                    Brands
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                {filterType === 'category' ? (
                  <div className="space-y-2">
                    {Object.entries(brandCategories).map(([category, categoryBrands]) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                        className={`w-full text-left p-3 rounded-lg transition-colors ${
                          selectedCategory === category
                            ? 'bg-purple-100 text-purple-700'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{category}</span>
                          <span className="text-sm text-gray-500">{categoryBrands.length}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2">
                    {brands.map(brand => (
                      <button
                        key={brand}
                        onClick={() => setSelectedBrand(selectedBrand === brand ? null : brand)}
                        className={`w-full text-left p-3 rounded-lg transition-colors ${
                          selectedBrand === brand
                            ? 'bg-purple-100 text-purple-700'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Package className="h-4 w-4" />
                          <span className="font-medium">{brand}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Products Content Area */}
          <div className="flex-1">
            {(selectedBrand || selectedCategory) && (
              <div className="mb-6 flex items-center justify-between bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-purple-700 font-medium">
                    {selectedCategory && `Category: ${selectedCategory}`}
                    {selectedBrand && `Brand: ${selectedBrand}`}
                  </span>
                </div>
                <button
                  onClick={clearFilters}
                  className="text-purple-600 hover:text-purple-800"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}

            {/* Products Grid */}
            <div className="space-y-8" ref={productsRef}>
              {groupedProducts.map(([brand, brandProducts]) => (
                <div key={brand} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-6 border-b">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{brand}</h2>
                      </div>
                      <button
                        onClick={() => handleWhatsAppEnquiry(brand, brandProducts)}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-2.5 rounded-lg hover:bg-green-600 transition-colors"
                      >
                        <MessageCircle className="h-5 w-5" />
                        <span>Enquire on WhatsApp</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {brandProducts.map(product => (
                        <div
                          key={`${product.id}-${product.brand}`}
                          className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                        >
                          <div className="relative h-48 sm:h-64">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-4 right-4">
                              <div className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                                {product.category}
                              </div>
                            </div>
                          </div>
                          <div className="p-4">
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                              {product.name}
                            </h3>
                            <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <div className="max-w-md mx-auto">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your filter criteria to find what you're looking for.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="text-purple-600 font-medium hover:text-purple-700"
                  >
                    Clear all filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;