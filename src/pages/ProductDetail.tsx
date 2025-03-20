import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, ShoppingCart, Heart, Share2 } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  image: string;
  description: string;
  price?: string;
  ingredients?: string[];
  benefits?: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Garam Masala",
    brand: "Aachi Masalas",
    category: "Spices",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800",
    description: "Traditional blend of premium whole spices for authentic Indian cuisine",
    price: "₹180",
    ingredients: ["Cardamom", "Cinnamon", "Cloves", "Black Pepper", "Cumin"],
    benefits: ["Enhanced Flavor", "Authentic Taste", "Premium Quality Spices", "No Artificial Additives"]
  },
  {
    id: 2,
    name: "Pure Mustard Oil",
    brand: "Iyarkai",
    category: "Oils",
    image: "https://images.unsplash.com/photo-1620146344904-097a0002d797?auto=format&fit=crop&q=80&w=800",
    description: "Cold-pressed pure mustard oil for authentic North Indian cooking",
    price: "₹250",
    ingredients: ["100% Pure Mustard Seeds"],
    benefits: ["Rich in Omega-3", "Traditional Processing", "Authentic Flavor", "High Smoke Point"]
  },
  {
    id: 3,
    name: "Sambar Masala",
    brand: "Royal Foods",
    category: "Spices",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800",
    description: "Perfect blend for authentic South Indian sambar",
    price: "₹150",
    ingredients: ["Coriander", "Red Chillies", "Fenugreek", "Curry Leaves"],
    benefits: ["Traditional Recipe", "Perfect Blend", "No Preservatives"]
  },
  {
    id: 4,
    name: "Coconut Oil",
    brand: "Kerala Gold",
    category: "Oils",
    image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&q=80&w=800",
    description: "Pure cold-pressed coconut oil from Kerala",
    price: "₹350",
    ingredients: ["100% Pure Coconut"],
    benefits: ["Cold Pressed", "Rich in MCTs", "Versatile Usage"]
  },
  {
    id: 5,
    name: "Premium Groundnut Oil",
    brand: "Dalda",
    category: "Oils",
    image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&q=80&w=800",
    description: "High-quality groundnut oil for everyday cooking",
    price: "₹180",
    ingredients: ["100% Pure Groundnuts"],
    benefits: ["High Smoke Point", "Heart Healthy", "Natural Processing"]
  },
  {
    id: 6,
    name: "Biryani Masala",
    brand: "Royal Spices",
    category: "Spices",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800",
    description: "Special blend of spices for perfect biryani",
    price: "₹200",
    ingredients: ["Cardamom", "Star Anise", "Bay Leaves", "Black Stone Flower"],
    benefits: ["Authentic Aroma", "Perfect Blend", "Traditional Recipe"]
  }
];

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/products')}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-gray-600 hover:text-purple-600">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <Link to="/products" className="text-gray-600 hover:text-purple-600">Products</Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <span className="text-purple-600">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative h-[400px] md:h-[600px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                  <Heart className="h-6 w-6 text-gray-600" />
                </button>
                <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                  <Share2 className="h-6 w-6 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-8">
              <div className="mb-8">
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                  {product.category}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-2">{product.name}</h1>
                <p className="text-purple-600 font-semibold mb-4">{product.brand}</p>
                <p className="text-gray-600 text-lg mb-6">{product.description}</p>
                <div className="text-3xl font-bold text-gray-900 mb-8">{product.price}</div>
                
                <button className="w-full bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 mb-4">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
                
                <button className="w-full border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors">
                  Contact to Buy
                </button>
              </div>

              {/* Product Details */}
              <div className="border-t pt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Product Details</h2>
                
                {product.ingredients && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Ingredients:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                      {product.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.benefits && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Benefits:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                      {product.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map(relatedProduct => (
                <div
                  key={relatedProduct.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => navigate(`/products/${relatedProduct.id}`)}
                >
                  <div className="relative h-48">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{relatedProduct.name}</h3>
                    <p className="text-purple-600 font-semibold mb-2">{relatedProduct.brand}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">{relatedProduct.price}</span>
                      <button className="text-purple-600 hover:text-purple-700 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;