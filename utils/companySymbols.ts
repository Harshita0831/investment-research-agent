const companySymbols: Record<string, string> = {
  apple: "AAPL",
  tesla: "TSLA",
  microsoft: "MSFT",
  google: "GOOGL",
  alphabet: "GOOGL",
  amazon: "AMZN",
  meta: "META",
  netflix: "NFLX",
  nvidia: "NVDA",
};

export function getStockSymbol(company: string): string {
  const key = company.trim().toLowerCase();
  return companySymbols[key] || company.toUpperCase();
}