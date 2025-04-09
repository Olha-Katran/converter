import React, { useEffect, useState } from 'react';
import './styles.css';

const Header: React.FC = () => {
    const [usdRate, setUsdRate] = useState<number | null>(null);
    const [eurRate, setEurRate] = useState<number | null>(null);

    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        const fetchExchangeRates = async () => {
            try {
              const response = await fetch(`https://api.exchangerate-api.com/v4/latest/UAH?apikey=${apiKey}`);
              
              const data = await response.json();
              setUsdRate(data.rates.USD);
              setEurRate(data.rates.EUR);
            } catch (error) {
              console.error('Error fetching exchange rates:', error);
            }
        };
        fetchExchangeRates();
    }, [apiKey]);

    return (
        <header>
            {usdRate && eurRate ? (
                <div className='rate'>
                    <p>1 USD = <span>{(1 / usdRate).toFixed(2)} UAH</span></p>
                    <p>1 EUR = <span>{(1 / eurRate).toFixed(2)} UAH</span></p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </header>
    )
};

export default Header;