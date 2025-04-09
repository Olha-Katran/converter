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

        </form>
    );
};

export default ConverterForm;
