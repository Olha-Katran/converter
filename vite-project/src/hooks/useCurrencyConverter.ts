import { useEffect, useState } from "react";
import { fetchExchangeRate } from "../utils/fetchExchangeRate";
import { currencyCodes } from "../data/currencyCodes";

const useCurrencyConverter = () => {
  const [fromAmount, setFromAmount] = useState<number>(0);
  const [toAmount, setToAmount] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState<string>("UAH");
  const [toCurrency, setToCurrency] = useState<string>("USD");
  const [conversionRate, setConversionRate] = useState<number>(1);

  const currencies: string[] = currencyCodes;

  useEffect(() => {
    const getExchangeRate = async () => {
      const rate = await fetchExchangeRate(fromCurrency, toCurrency);
      if (rate !== null) {
        setConversionRate(rate);
        setToAmount(parseFloat((fromAmount * rate).toFixed(2)));
      }
    };

    getExchangeRate();
  }, [fromCurrency, toCurrency]);

  const handleFromAmountChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value: number = parseFloat(e.target.value);
    setFromAmount(value);
    setToAmount(parseFloat((value * conversionRate).toFixed(2)));
  };

  const handleToAmountChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value: number = parseFloat(e.target.value);
    setToAmount(value);
    setFromAmount(parseFloat((value / conversionRate).toFixed(2)));
  };

  const handleFromCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setToCurrency(e.target.value);
  };

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  return {
    fromAmount,
    toAmount,
    fromCurrency,
    toCurrency,
    currencies,
    handleFromAmountChange,
    handleToAmountChange,
    handleFromCurrencyChange,
    handleToCurrencyChange,
    handleSwapCurrencies,
  };
};

export default useCurrencyConverter;
