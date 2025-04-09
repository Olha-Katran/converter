export const fetchExchangeRate = async (
    fromCurrency: string,
    toCurrency: string,
 ): Promise<number | null> => {
    const apiKey = import.meta.env.VITE_API_KEY;

    const API_URL = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`;

    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Not found");
        const data = await response.json();
        return data.conversion_rate;
      } catch (error) {
        console.error(error);
        return null;
      }
 };