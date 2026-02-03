
export interface PackageFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  videosTotal: number;
  longFormCount: number;
  regularCount: number;
  commitment: string;
  support: string[];
  platforms: string[];
  adCredit?: string;
  features: PackageFeature[];
  description: string;
  isPopular?: boolean;
  paymentLink: string;
}

export interface Message {
  role: 'user' | 'model';
  parts: { text: string }[];
}
