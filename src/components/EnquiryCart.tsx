import { X, Trash2, Minus, Plus, MessageCircle, ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';
import { useEnquiry } from '@/context/EnquiryContext';
import { formatPrice } from '@/config/products';
import { buildEnquiryMessage, openWhatsApp, type EnquiryFormData } from '@/utils/whatsapp';
import { useState } from 'react';

export default function EnquiryCart() {
  const { isOpen, closeCart, itemsWithProducts, removeItem, updateQuantity, clearCart, totalItems } =
    useEnquiry();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    businessName: '',
    phone: '',
    city: '',
    additionalRequirement: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = buildEnquiryMessage(
      itemsWithProducts.map((i) => ({ productId: i.product.id, quantity: i.quantity })),
      formData
    );
    openWhatsApp(message);
  };

  const handleClose = () => {
    closeCart();
    setShowForm(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity"
        onClick={handleClose}
        aria-hidden="true"
      />
      <div
        className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
        role="dialog"
        aria-label="Enquiry cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-[#0B3D2E] text-white flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-base leading-tight">Enquiry Cart</h2>
              {totalItems > 0 && (
                <p className="text-xs text-white/60 leading-tight">
                  {totalItems} {totalItems === 1 ? 'product' : 'products'} selected
                </p>
              )}
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {itemsWithProducts.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center mb-5">
              <ShoppingBag className="w-10 h-10 text-gray-300" />
            </div>
            <p className="text-gray-700 font-semibold mb-1">Your enquiry cart is empty</p>
            <p className="text-sm text-gray-400 max-w-xs">
              Browse our products and add items to request a bulk quotation.
            </p>
            <button
              onClick={handleClose}
              className="mt-6 btn-primary"
            >
              Browse Products
            </button>
          </div>
        ) : showForm ? (
          /* === Enquiry form === */
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-base"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Business Name <span className="text-red-400">*</span>
                </label>
                <input
                  required
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="input-base"
                  placeholder="Your business name"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Phone <span className="text-red-400">*</span>
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input-base"
                    placeholder="Your phone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    City <span className="text-red-400">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="input-base"
                    placeholder="Your city"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Additional Requirement
                </label>
                <textarea
                  value={formData.additionalRequirement}
                  onChange={(e) =>
                    setFormData({ ...formData, additionalRequirement: e.target.value })
                  }
                  rows={3}
                  className="input-base resize-none"
                  placeholder="Any specific requirements, customisation, branding needs, etc."
                />
              </div>

              {/* Summary */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2.5">
                  Selected Products
                </p>
                <div className="space-y-1.5">
                  {itemsWithProducts.map(({ product, quantity }) => (
                    <div key={product.id} className="flex justify-between text-sm text-gray-700">
                      <span className="font-medium">{product.name}</span>
                      <span className="text-gray-500">{quantity} units</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-5 border-t border-gray-100 space-y-2 flex-shrink-0">
              <button
                type="submit"
                className="w-full btn-whatsapp-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Send via WhatsApp
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to cart
              </button>
            </div>
          </form>
        ) : (
          /* === Cart items === */
          <>
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {itemsWithProducts.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0 bg-gray-50"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[#0B3D2E] text-sm leading-tight mb-0.5">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-400 mb-2.5">From {formatPrice(product.startingPrice)}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="p-1.5 text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-30"
                          disabled={quantity <= 1}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-sm font-bold w-9 text-center text-[#0B3D2E]">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="p-1.5 text-gray-600 hover:bg-gray-50 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(product.id)}
                        className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
                        aria-label={`Remove ${product.name}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-5 border-t border-gray-100 space-y-2 flex-shrink-0 bg-gray-50/50">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">
                  {totalItems} {totalItems === 1 ? 'product' : 'products'} in enquiry
                </span>
              </div>
              <button
                onClick={() => setShowForm(true)}
                className="w-full btn-primary-lg"
              >
                Request Bulk Quote
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={clearCart}
                className="w-full py-2.5 text-sm font-medium text-gray-500 hover:text-red-500 transition-colors"
              >
                Clear all
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
