import useCurrencyConverter from "../../hooks/useCurrencyConverter";
import './styles.css';

const ConverterForm = () => {
    const {
        fromAmount,
        toAmount,
        fromCurrency,
        toCurrency,
        currencies,
        handleFromAmountChange,
        handleToAmountChange,
        handleFromCurrencyChange,
        handleToCurrencyChange,
      } = useCurrencyConverter();

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
        if (e.target.value === "0") {
            e.target.value = "";
        }
    };

    const getFlagUrl = (currencyCode: string): string => {
        return `https://flagcdn.com/48x36/${currencyCode.slice(0, 2).toLowerCase()}.png`;
      };
      

    return (
        <form className="converter-form">
            <div className="form-group">
                <label className="form-label">From</label>
                <div className="input-group">
                    <input
                        type="number"
                        className="form-input"
                        value={fromAmount}
                        onChange={handleFromAmountChange}
                        onFocus={handleFocus}
                        required
                    />
                    <div className="currency-select-wrapper">
                        <img
                            src={getFlagUrl(fromCurrency)}
                            alt={`${fromCurrency} flag`}
                            className="currency-flag"
                        />
                        <select
                            className="currency-select"
                            value={fromCurrency}
                            onChange={handleFromCurrencyChange}
                        >
                            {currencies.map(currency => (
                            <option key={currency} value={currency}>{currency}</option>
                            ))}
                        </select>
                    </div>  
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">To</label>
                <div className="input-group">
                    <input
                        type="number"
                        className="form-input"
                        value={toAmount}
                        onChange={handleToAmountChange}
                        required
                    />
                    <div className="currency-select-wrapper">
                        <img
                            src={getFlagUrl(toCurrency)}
                            alt={`${toCurrency} flag`}
                            className="currency-flag"
                        />
                        <select
                            className="currency-select"
                            value={toCurrency}
                            onChange={handleToCurrencyChange}
                        >
                            {currencies.map(currency => (
                                <option key={currency} value={currency}>{currency}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

        </form>
    );
};

export default ConverterForm;
