import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
interface FormatCurrencyOptions {
  amount: number;
  currency?: string; // Optional; defaults to 'USD'
}


export const formatCurrency = ({ amount, currency = 'USD' }: FormatCurrencyOptions) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
};
