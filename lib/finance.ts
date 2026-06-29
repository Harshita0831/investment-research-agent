export async function getCompanyOverview(symbol: string) {
  const apiKey = process.env.ALPHA_VANTAGE_API_KEY;

  const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`;

  const response = await fetch(url);
  return response.json();
}