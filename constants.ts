
import { PricingPackage } from './types';

export const PACKAGES: PricingPackage[] = [
  {
    id: 'starter',
    name: 'Starter Growth',
    price: '15,000',
    videosTotal: 8,
    longFormCount: 0,
    regularCount: 8,
    commitment: '6 Months',
    support: ['Email', 'Chat'],
    platforms: ['YouTube'],
    description: 'Establish a professional presence with consistent high-quality shorts and regular uploads.',
    paymentLink: 'https://rzp.io/rzp/g17nbxaG',
    features: [
      { text: 'YouTube Channel Optimization', included: true },
      { text: 'Professional Video Editing (Shorts)', included: true, highlight: true },
      { text: 'YouTube SEO & Management', included: true },
      { text: 'Video Ideation & Research', included: true },
      { text: 'Monthly Content Calendar', included: true },
      { text: '8 Regular Videos / Shorts', included: true },
      { text: 'Email & Chat Support', included: true },
      { text: 'Long-form Video Editing', included: false },
      { text: 'Multi-platform Sharing', included: false },
    ]
  },
  {
    id: 'pro',
    name: 'Pro Accelerator',
    price: '25,000',
    videosTotal: 16,
    longFormCount: 4,
    regularCount: 12,
    commitment: '3 Months',
    support: ['Email', 'WhatsApp'],
    platforms: ['YouTube', 'Instagram', 'Facebook'],
    adCredit: '5,000',
    isPopular: true,
    description: 'Perfect for businesses ready to scale with a mix of high-impact long form and viral shorts.',
    paymentLink: 'https://rzp.io/rzp/ijJ8ioT',
    features: [
      { text: 'YouTube Channel Optimization', included: true },
      { text: 'Professional Video Editing (All Formats)', included: true, highlight: true },
      { text: 'YouTube SEO & Management', included: true },
      { text: '4 Long-form Videos (5-15 min)', included: true },
      { text: '12 Regular Videos / Shorts', included: true },
      { text: '5,000 Monthly Ad Credit', included: true, highlight: true },
      { text: 'Shared on IG & Facebook', included: true },
      { text: 'WhatsApp & Email Support', included: true },
      { text: 'Video Ideation & Research', included: true },
    ]
  },
  {
    id: 'elite',
    name: 'Elite Dominance',
    price: '45,000',
    videosTotal: 30,
    longFormCount: 5,
    regularCount: 25,
    commitment: '3 Months',
    support: ['Email', 'WhatsApp', 'Direct Calls'],
    platforms: ['YouTube', 'Instagram', 'Facebook'],
    adCredit: '5,000',
    description: 'Maximum volume and priority support for market leaders seeking total dominance.',
    paymentLink: 'https://rzp.io/rzp/O1NA1Ru2',
    features: [
      { text: 'YouTube Channel Optimization', included: true },
      { text: 'Premium Video Editing & Post-Production', included: true, highlight: true },
      { text: 'YouTube SEO & Management', included: true },
      { text: '5 Long-form Videos (5-15 min)', included: true },
      { text: '25 Regular Videos / Shorts', included: true },
      { text: 'Priority Call Support', included: true, highlight: true },
      { text: '5,000 Monthly Ad Credit', included: true },
      { text: 'Shared on IG & Facebook', included: true },
      { text: 'Full Content Strategy & Research', included: true },
    ]
  }
];

export const COMMON_BENEFITS = [
  'Professional Video Editing & Color Grading',
  'Regular high-quality leads for your business',
  'Expert Digital Marketing guidance',
  'Increased website traffic',
  'End-to-end SEO optimization'
];
