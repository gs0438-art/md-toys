import { whatsappLink } from '@/config/brand';
import { products } from '@/config/products';

export interface EnquiryFormData {
  name: string;
  businessName: string;
  phone: string;
  city: string;
  additionalRequirement: string;
}

export function buildEnquiryMessage(
  items: { productId: string; quantity: number }[],
  formData: EnquiryFormData
): string {
  const productLines = items
    .map((item) => {
      const product = products.find((p) => p.id === item.productId);
      return product ? `${product.name} — ${item.quantity} units` : null;
    })
    .filter(Boolean)
    .join('\n');

  return (
    `Hello MD Toys,\n\n` +
    `I would like to request a bulk quotation.\n\n` +
    `Products:\n${productLines}\n\n` +
    `Name: ${formData.name}\n` +
    `Business: ${formData.businessName}\n` +
    `City: ${formData.city}\n` +
    `Phone: ${formData.phone}\n\n` +
    `Additional Requirement:\n${formData.additionalRequirement || '-'}\n\n` +
    `Please share your dealer/bulk/OEM pricing.`
  );
}

export function buildSingleProductMessage(
  productName: string,
  quantity = 1
): string {
  return (
    `Hello MD Toys,\n\n` +
    `I would like to enquire about:\n\n` +
    `${productName} — ${quantity} units\n\n` +
    `Please share your dealer/bulk/OEM pricing.`
  );
}

export function buildOemMessage(formData: EnquiryFormData): string {
  return (
    `Hello MD Toys,\n\n` +
    `I would like to start an OEM / private-label discussion.\n\n` +
    `Name: ${formData.name}\n` +
    `Business: ${formData.businessName}\n` +
    `City: ${formData.city}\n` +
    `Phone: ${formData.phone}\n\n` +
    `Requirement:\n${formData.additionalRequirement || '-'}\n\n` +
    `Please share your OEM process and MOQ details.`
  );
}

export function buildDealerMessage(formData: EnquiryFormData): string {
  return (
    `Hello MD Toys,\n\n` +
    `I would like to become a dealer.\n\n` +
    `Name: ${formData.name}\n` +
    `Business: ${formData.businessName}\n` +
    `City: ${formData.city}\n` +
    `Phone: ${formData.phone}\n\n` +
    `Additional details:\n${formData.additionalRequirement || '-'}`
  );
}

export function openWhatsApp(message: string) {
  window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
}
