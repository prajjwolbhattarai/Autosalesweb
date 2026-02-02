
import { InventorySize, Commitment, PhotoOption, AdOption } from './types';

// PLATFORM_PRICING must include all InventorySize keys. 
// CUSTOM is handled dynamically in App.tsx calculation logic.
export const PLATFORM_PRICING: Record<InventorySize, number> = {
  [InventorySize.SIZE_1_15]: 300,
  [InventorySize.SIZE_16_30]: 400,
  [InventorySize.SIZE_31_60]: 700,
  [InventorySize.SIZE_61_100]: 1000,
  [InventorySize.SIZE_100_PLUS]: 1500, // Estimated for 100+
  [InventorySize.CUSTOM]: 0, 
};

// SETUP_FEE_LOGIC must include all InventorySize keys.
// CUSTOM is handled dynamically in App.tsx calculation logic.
export const SETUP_FEE_LOGIC: Record<InventorySize, number> = {
  [InventorySize.SIZE_1_15]: 700,
  [InventorySize.SIZE_16_30]: 800,
  [InventorySize.SIZE_31_60]: 1000,
  [InventorySize.SIZE_61_100]: 1500, // Up to 80 is 2000, prompt says 31-80 is 2k, 80+ is 3k.
  [InventorySize.SIZE_100_PLUS]: 2000,
  [InventorySize.CUSTOM]: 0,
};

export const COMMITMENT_MULTIPLIERS: Record<Commitment, number> = {
  [Commitment.MONTHLY]: 1.20,
  [Commitment.THREE_MONTHS]: 1.00,
  [Commitment.SIX_TWELVE_MONTHS]: 0.90,
};

export const PHOTO_PRICES: Record<PhotoOption, number> = {
  [PhotoOption.NONE]: 0,
  [PhotoOption.PER_VEHICLE]: 40,
  [PhotoOption.BUNDLE_10]: 250,
  [PhotoOption.BUNDLE_25]: 500,
};

export const AD_PRICES: Record<AdOption, number> = {
  [AdOption.NONE]: 0,
  [AdOption.BASIC]: 750,
  [AdOption.STANDARD]: 1000,
  [AdOption.ADVANCED]: 1500,
};

export const PLATFORMS_LIST = [
  'mobile.de (Included)',
  'AutoScout24 (Included)',
  'Kleinanzeigen (Included)',
  'Dealership Website',
  'Google Vehicle Listings'
];
