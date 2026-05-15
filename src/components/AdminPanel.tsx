import { useState } from 'react';
import { X, Plus, Edit2, Trash2, Eye, EyeOff, Upload } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  gradient: string;
  category: string;
  image?: string;
}

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onAddProduct: (product: Product) => void;
  onEditProduct: (product: Product) => void;
  onDeleteProduct: (id: number) => void;
}

const gradients = [
  'gradient-sunset',
  'gradient-ocean',
  'gradient-forest',
  'gradient-purple',
  'gradient-rose',
  'gradient-amber',
  'gradient-blue',
  'gradient-teal'
];

const categories = ['Accessories', 'Watches', 'Shoes', 'Electronics', 'Bags', 'Jewelry', 'Clothing', 'Home'];

const ADMIN_USERNAME = 'nishadcorex';
const ADMIN_PASSWORD = 'webShop320$';

export default function AdminPanel({
  isOpen,
  onClose,
  products,
  onAddProduct,
  onEditProduct,
  onDeleteProduct,
}: AdminPanelProps) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [loginError, setLoginError] = useState('');

  const [formData, setFormData] = useState<Product>({
    id: 0,
    name: '',
    price: 0,
    rating: 4.5,
    reviews: 0,
    gradient: 'gradient-sunset',
    category: 'Accessories',
    image: '',
  });

  const handleLogin = () => {
    setLoginError('');

    if (!username || !password) {
      setLoginError('Please enter both username and password');
      return;
    }

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setUsername('');
      setPassword('');
    } else {
      setLoginError('Invalid username or password');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    setLoginError('');
  };

  const handleAddProduct = () => {
    if (!formData.name || formData.price <= 0) {
      alert('Please fill in product name and price');
      return;
    }

    const newProduct: Product = {
      ...formData,
      id: Math.max(...products.map(p => p.id), 0) + 1,
    };

    onAddProduct(newProduct);
    setFormData({
      id: 0,
      name: '',
      price: 0,
      rating: 4.5,
      reviews: 0,
      gradient: 'gradient-sunset',
      category: 'Accessories',
      image: '',
    });
    setShowAddForm(false);
  };

  const handleEditProduct = () => {
    if (!editingProduct) return;

    if (!editingProduct.name || editingProduct.price <= 0) {
      alert('Please fill in product name and price');
      return;
    }

    onEditProduct(editingProduct);
    setEditingProduct(null);
    setShowAddForm(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, isEditing: boolean) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result as string;
        if (isEditing && editingProduct) {
          setEditingProduct({ ...editingProduct, image: imageData });
        } else {
          setFormData({ ...formData, image: imageData });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[95vh] flex flex-col overflow-hidden">
        {/* Header - Fixed */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex-shrink-0">
          <h2 className="text-3xl font-bold">
            {!isAuthenticated ? 'Admin Login' : 'Admin Panel - Product Management'}
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="overflow-y-auto flex-1 p-6">
          {!isAuthenticated ? (
            // Login Form
            <div className="max-w-md mx-auto space-y-6 py-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Admin Authentication</h3>
                <p className="text-slate-600">Enter your credentials to access the product management panel</p>
              </div>

              <div className="space-y-4">
                {/* Username */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      setLoginError('');
                    }}
                    onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    placeholder="Enter username"
                    autoFocus
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setLoginError('');
                      }}
                      onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 pr-10"
                      placeholder="Enter password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-900"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Error Message */}
                {loginError && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {loginError}
                  </div>
                )}

                {/* Login Button */}
                <button
                  onClick={handleLogin}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all"
                >
                  Login to Admin Panel
                </button>
              </div>

              <div className="text-center text-xs text-slate-500">
                <p>Demo credentials are required to access the admin panel</p>
              </div>
            </div>
          ) : (
            // Admin Dashboard
            <div className="space-y-6">
              {/* Controls */}
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Search products by name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm"
                />
                <button
                  onClick={() => {
                    setShowAddForm(true);
                    setFormData({
                      id: 0,
                      name: '',
                      price: 0,
                      rating: 4.5,
                      reviews: 0,
                      gradient: 'gradient-sunset',
                      category: 'Accessories',
                      image: '',
                    });
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center gap-2 whitespace-nowrap"
                >
                  <Plus className="h-5 w-5" />
                  Add Product
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all whitespace-nowrap"
                >
                  Logout
                </button>
              </div>

              {/* Add/Edit Form */}
              {(showAddForm || editingProduct) && (
                <div className="border-2 border-indigo-300 rounded-lg p-6 bg-indigo-50">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {editingProduct ? 'Edit Product' : 'Add New Product'}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Product Name */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Product Name *
                      </label>
                      <input
                        type="text"
                        value={editingProduct ? editingProduct.name : formData.name}
                        onChange={(e) =>
                          editingProduct
                            ? setEditingProduct({ ...editingProduct, name: e.target.value })
                            : setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        placeholder="e.g., Premium Sunglasses"
                      />
                    </div>

                    {/* Price */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Price (৳ Taka) *
                      </label>
                      <input
                        type="number"
                        value={editingProduct ? editingProduct.price : formData.price}
                        onChange={(e) =>
                          editingProduct
                            ? setEditingProduct({ ...editingProduct, price: Number(e.target.value) })
                            : setFormData({ ...formData, price: Number(e.target.value) })
                        }
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        placeholder="e.g., 15000"
                        min="0"
                      />
                    </div>

                    {/* Category */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Category
                      </label>
                      <select
                        value={editingProduct ? editingProduct.category : formData.category}
                        onChange={(e) =>
                          editingProduct
                            ? setEditingProduct({ ...editingProduct, category: e.target.value })
                            : setFormData({ ...formData, category: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      >
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>

                    {/* Gradient/Image Style */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Image Style (Gradient)
                      </label>
                      <select
                        value={editingProduct ? editingProduct.gradient : formData.gradient}
                        onChange={(e) =>
                          editingProduct
                            ? setEditingProduct({ ...editingProduct, gradient: e.target.value })
                            : setFormData({ ...formData, gradient: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      >
                        {gradients.map(grad => (
                          <option key={grad} value={grad}>{grad.replace('gradient-', '')}</option>
                        ))}
                      </select>
                    </div>

                    {/* Rating */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Rating (0-5)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        max="5"
                        value={editingProduct ? editingProduct.rating : formData.rating}
                        onChange={(e) =>
                          editingProduct
                            ? setEditingProduct({ ...editingProduct, rating: Number(e.target.value) })
                            : setFormData({ ...formData, rating: Number(e.target.value) })
                        }
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      />
                    </div>

                    {/* Review Count */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Review Count
                      </label>
                      <input
                        type="number"
                        value={editingProduct ? editingProduct.reviews : formData.reviews}
                        onChange={(e) =>
                          editingProduct
                            ? setEditingProduct({ ...editingProduct, reviews: Number(e.target.value) })
                            : setFormData({ ...formData, reviews: Number(e.target.value) })
                        }
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        min="0"
                      />
                    </div>

                    {/* Image Upload */}
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Product Image (Optional)
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(e, !!editingProduct)}
                          className="flex-1"
                          id="image-upload"
                        />
                        <label htmlFor="image-upload" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer flex items-center gap-2 transition-all whitespace-nowrap">
                          <Upload className="h-4 w-4" />
                          Upload
                        </label>
                      </div>
                      {(editingProduct?.image || formData.image) && (
                        <div className="mt-3">
                          <p className="text-xs text-slate-600 mb-2">Preview:</p>
                          <img
                            src={editingProduct?.image || formData.image}
                            alt="Preview"
                            className="h-24 w-24 object-cover rounded-lg border border-slate-300"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Form Buttons */}
                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={editingProduct ? handleEditProduct : handleAddProduct}
                      className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all"
                    >
                      {editingProduct ? 'Save Changes' : 'Add Product'}
                    </button>
                    <button
                      onClick={() => {
                        setShowAddForm(false);
                        setEditingProduct(null);
                      }}
                      className="flex-1 bg-slate-400 text-white font-semibold py-3 rounded-lg hover:bg-slate-500 transition-all"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              {/* Products Table */}
              <div className="border border-slate-300 rounded-lg overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-200 border-b border-slate-300 sticky top-0">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-slate-900">ID</th>
                      <th className="px-4 py-3 text-left font-bold text-slate-900">Name</th>
                      <th className="px-4 py-3 text-left font-bold text-slate-900">Category</th>
                      <th className="px-4 py-3 text-right font-bold text-slate-900">Price</th>
                      <th className="px-4 py-3 text-center font-bold text-slate-900">Rating</th>
                      <th className="px-4 py-3 text-center font-bold text-slate-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="px-4 py-8 text-center text-slate-500">
                          {searchTerm ? 'No products found matching your search' : 'No products available'}
                        </td>
                      </tr>
                    ) : (
                      filteredProducts.map(product => (
                        <tr key={product.id} className="border-b border-slate-200 hover:bg-blue-50 transition-colors">
                          <td className="px-4 py-3 text-slate-900 font-bold">#{product.id}</td>
                          <td className="px-4 py-3 text-slate-900 font-semibold">{product.name}</td>
                          <td className="px-4 py-3 text-slate-700">{product.category}</td>
                          <td className="px-4 py-3 text-right text-slate-900 font-bold">
                            ৳ {product.price.toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-center">
                            <span className="inline-block bg-yellow-200 text-yellow-900 px-3 py-1 rounded-full font-bold text-xs">
                              {product.rating}
                            </span>
                          </td>
                           <td className="px-4 py-3 text-center flex justify-center gap-2">
                             <button
                               onClick={() => {
                                 setEditingProduct(product);
                                 setShowAddForm(true);
                               }}
                               className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors font-bold"
                               title="Edit Product"
                             >
                               <Edit2 className="h-5 w-5" />
                             </button>
                            <button
                              onClick={() => {
                                if (window.confirm(`Are you sure you want to delete "${product.name}"?`)) {
                                  onDeleteProduct(product.id);
                                }
                              }}
                              className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors font-bold"
                              title="Delete Product"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* Summary */}
              <div className="bg-slate-100 border border-slate-300 rounded-lg p-4 text-sm font-semibold text-slate-900 text-center">
                Total Products: {products.length} | Displayed: {filteredProducts.length}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
