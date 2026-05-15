import { useState } from 'react';
import { Heart, ShoppingCart, Filter, Mail, X, Settings } from 'lucide-react';
import AdminPanel from './components/AdminPanel';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  gradient: string;
  category: string;
  image?: string;
}

const initialProducts: Product[] = [
  { id: 1, name: 'Premium Sunglasses', price: 15479, rating: 4.8, reviews: 245, gradient: 'gradient-sunset', category: 'Accessories' },
  { id: 2, name: 'Ocean Watch', price: 23799, rating: 4.9, reviews: 312, gradient: 'gradient-ocean', category: 'Watches' },
  { id: 3, name: 'Eco Sneakers', price: 10709, rating: 4.7, reviews: 428, gradient: 'gradient-forest', category: 'Shoes' },
  { id: 4, name: 'Magic Headphones', price: 29749, rating: 4.9, reviews: 567, gradient: 'gradient-purple', category: 'Electronics' },
  { id: 5, name: 'Rose Gold Bag', price: 19039, rating: 4.6, reviews: 189, gradient: 'gradient-rose', category: 'Bags' },
  { id: 6, name: 'Golden Bracelet', price: 21419, rating: 4.8, reviews: 234, gradient: 'gradient-amber', category: 'Jewelry' },
  { id: 7, name: 'Smart Ring', price: 35699, rating: 4.7, reviews: 412, gradient: 'gradient-blue', category: 'Electronics' },
  { id: 8, name: 'Turquoise Scarf', price: 5949, rating: 4.9, reviews: 356, gradient: 'gradient-teal', category: 'Accessories' },
  { id: 9, name: 'Vintage Camera', price: 53549, rating: 4.8, reviews: 198, gradient: 'gradient-sunset', category: 'Electronics' },
  { id: 10, name: 'Canvas Tote', price: 7739, rating: 4.6, reviews: 272, gradient: 'gradient-ocean', category: 'Bags' },
  { id: 11, name: 'Leather Jacket', price: 39259, rating: 4.9, reviews: 456, gradient: 'gradient-purple', category: 'Clothing' },
  { id: 12, name: 'Silk Pillowcase', price: 4164, rating: 4.7, reviews: 521, gradient: 'gradient-rose', category: 'Home' },
];

const categories = ['All', 'Accessories', 'Watches', 'Shoes', 'Electronics', 'Bags', 'Jewelry', 'Clothing', 'Home'];

export default function App() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [wishlist, setWishlist] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState<number>(0);
  const [notification, setNotification] = useState<{ message: string; id?: number } | null>(null);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [emailForm, setEmailForm] = useState({ name: '', email: '', message: '' });

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((p: Product) => p.category === selectedCategory);

  const toggleWishlist = (id: number) => {
    const newWishlist = new Set(wishlist);
    if (newWishlist.has(id)) {
      newWishlist.delete(id);
    } else {
      newWishlist.add(id);
    }
    setWishlist(newWishlist);
  };

  const handleQuickAdd = (productId: number, productName: string) => {
    setCart(cart + 1);
    setNotification({ message: `Added "${productName}" to cart`, id: productId });
    setTimeout(() => setNotification(null), 2000);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = emailForm;
    
    // Create mailto link with the admin email
    const mailtoLink = `mailto:nahjani0024@gmail.com?subject=Contact from ${name}&body=Name: ${name}\\nEmail: ${email}\\n\\nMessage:\\n${message}`;
    window.location.href = mailtoLink;
    
    // Show confirmation
    setNotification({ message: 'Opening email client...' });
    setTimeout(() => {
      setEmailForm({ name: '', email: '', message: '' });
      setShowEmailModal(false);
      setNotification(null);
    }, 2000);
  };

  const handleAddProduct = (product: Product) => {
    setProducts([...products, product]);
    setNotification({ message: `Product "${product.name}" added successfully!` });
    setTimeout(() => setNotification(null), 2000);
  };

  const handleEditProduct = (updatedProduct: Product) => {
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
    setNotification({ message: `Product "${updatedProduct.name}" updated successfully!` });
    setTimeout(() => setNotification(null), 2000);
  };

  const handleDeleteProduct = (id: number) => {
    const productName = products.find(p => p.id === id)?.name || 'Product';
    setProducts(products.filter(p => p.id !== id));
    setNotification({ message: `"${productName}" deleted successfully!` });
    setTimeout(() => setNotification(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <ShoppingCart className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-slate-900">Shopping HUB</h1>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowAdminPanel(true)}
                className="px-3 py-2 rounded-lg bg-slate-100 text-slate-700 font-medium text-sm hover:bg-slate-200 transition-all flex items-center gap-2"
                title="Admin Panel"
              >
                <Settings className="h-4 w-4" />
                <span className="hidden sm:inline">Admin</span>
              </button>
              <button 
                onClick={() => setShowEmailModal(true)}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm hover:shadow-lg transition-all flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">Contact</span>
              </button>
              <div className="relative">
                <button className="relative p-2 text-slate-600 hover:text-slate-900 transition-colors">
                  <Heart className="h-6 w-6" />
                  {wishlist.size > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {wishlist.size}
                    </span>
                  )}
                </button>
              </div>
              <button className="relative p-2 text-slate-600 hover:text-slate-900 transition-colors">
                <ShoppingCart className="h-6 w-6" />
                {cart > 0 && (
                  <span className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cart}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg shadow-lg flex items-center gap-2">
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            {notification.message}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-3">
            Discover Our Collection
          </h2>
          <p className="text-lg text-slate-600">
            Curated premium products for your lifestyle
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-slate-600" />
            <h3 className="text-sm font-semibold text-slate-700">Categories</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product: Product) => (
            <div
              key={product.id}
              className="product-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100"
            >
               {/* Product Image with Gradient */}
               <div className="relative overflow-hidden bg-gradient-to-br h-64">
                 {product.image ? (
                   <img 
                     src={product.image} 
                     alt={product.name}
                     className="w-full h-full object-cover"
                   />
                 ) : (
                   <div className={`absolute inset-0 product-image ${product.gradient}`}></div>
                 )}
                 
                 {/* Wishlist Button */}
                 <button
                   onClick={() => toggleWishlist(product.id)}
                   className={`wishlist-btn absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all ${
                     wishlist.has(product.id)
                       ? 'bg-red-500/90 active'
                       : 'bg-white/80 hover:bg-white'
                   }`}
                 >
                   <Heart
                     className={`h-5 w-5 ${
                       wishlist.has(product.id)
                         ? 'fill-current text-white'
                         : 'text-red-500'
                     }`}
                   />
                 </button>

                 {/* Quick Add Button */}
                 <button
                   onClick={() => handleQuickAdd(product.id, product.name)}
                   className="quick-add-btn absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white font-semibold py-4 flex items-center justify-center gap-2 hover:from-black hover:via-black/50 opacity-0 hover:opacity-100 transition-opacity"
                 >
                   <ShoppingCart className="h-5 w-5" />
                   Add to Cart
                 </button>
               </div>

              {/* Product Info */}
              <div className="p-4">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  {product.category}
                </p>
                <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400'
                            : i < product.rating
                            ? 'text-yellow-300'
                            : 'text-gray-300'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-slate-600 ml-2">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-bold text-slate-900">
                    ৳ {product.price.toLocaleString()}
                  </span>
                  <button
                    onClick={() => handleQuickAdd(product.id, product.name)}
                    className="hidden sm:flex quick-add-btn px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium text-sm hover:shadow-lg active:scale-95"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="mb-4">
              <Filter className="h-16 w-16 mx-auto text-slate-300" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              No products found
            </h3>
            <p className="text-slate-600">Try adjusting your filters</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <div className="h-6 w-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg"></div>
                Shopping HUB
              </h4>
              <p className="text-slate-400 text-sm mb-3">
                Curated premium products for modern lifestyles.
              </p>
              <p className="text-slate-400 text-sm">
                <strong>Email:</strong> <a href="mailto:nahjani0024@gmail.com" className="text-indigo-400 hover:text-indigo-300">nahjani0024@gmail.com</a>
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Shop</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Legal</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-400">
            <p>&copy; 2024 Shopping HUB. All rights reserved.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900">Contact Us</h2>
              <button
                onClick={() => setShowEmailModal(false)}
                className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="h-6 w-6 text-slate-600" />
              </button>
            </div>

            {/* Modal Content */}
            <form onSubmit={handleEmailSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={emailForm.name}
                  onChange={(e) => setEmailForm({ ...emailForm, name: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={emailForm.email}
                  onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Message
                </label>
                <textarea
                  required
                  value={emailForm.message}
                  onChange={(e) => setEmailForm({ ...emailForm, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all active:scale-95"
              >
                Send Email
              </button>

              <p className="text-xs text-slate-500 text-center">
                We'll respond to nahjani0024@gmail.com within 24 hours
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Admin Panel */}
      <AdminPanel
        isOpen={showAdminPanel}
        onClose={() => setShowAdminPanel(false)}
        products={products}
        onAddProduct={handleAddProduct}
        onEditProduct={handleEditProduct}
        onDeleteProduct={handleDeleteProduct}
      />
    </div>
  );
}
