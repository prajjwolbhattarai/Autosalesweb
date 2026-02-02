
export enum InventorySize {
  SIZE_1_15 = '1–15 vehicles',
  SIZE_16_30 = '16–30 vehicles',
  SIZE_31_60 = '31–60 vehicles',
  SIZE_61_100 = '61–100 vehicles',
  SIZE_100_PLUS = '100+ vehicles',
  CUSTOM = 'Custom Amount'
}

export enum Commitment {
  MONTHLY = 'Monthly (no commitment)',
  THREE_MONTHS = '3-month minimum',
  SIX_TWELVE_MONTHS = '6–12 month commitment'
}

export enum PhotoOption {
  NONE = 'None',
  PER_VEHICLE = '€40 per vehicle',
  BUNDLE_10 = 'Up to 10 cars/month (€250)',
  BUNDLE_25 = 'Up to 25 cars/month (€500)'
}

export enum AdOption {
  NONE = 'None',
  BASIC = 'Basic (€750/mo)',
  STANDARD = 'Standard (€1,000/mo)',
  ADVANCED = 'Advanced (€1,500/mo)'
}

export interface CalculatorState {
  dealershipName: string;
  contactPerson: string;
  phone: string;
  email: string;
  city: string;
  inventorySize: InventorySize;
  customInventoryCount: number;
  commitment: Commitment;
  photoOption: PhotoOption;
  platforms: string[];
  adOption: AdOption;
  consentContact: boolean;
  consentPricing: boolean;
}

export interface PricingBreakdown {
  setupFee: number;
  baseMonthly: number;
  commitmentAdjustment: number;
  photoFee: number;
  adFee: number;
  totalMonthly: number;
  totalOneTime: number;
}
