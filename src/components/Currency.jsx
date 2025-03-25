import { useState } from "react";
import "../css/currency.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_r2ppcXCkj2Nn97ftUaT2Pd6UBYBHAtS3iy2mcSuO";

function Currency() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState("");

  const exchange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    const result = response.data.data[toCurrency] * amount;
    setResult(result.toFixed(2));
  };

  return (
    <div className="currency-div">
      <div
        style={{
          marginBottom: 50,
          backgroundColor: "wheat",
          color: "black",
          padding: 10,
          borderRadius: 20,
        }}
      >
        <h2>Döviz Kuru Uygulaması</h2>
      </div>
      <div>
        <input
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="amount"
          value={amount}
        />
        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          className="from-currency-option"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>
        <FaRegArrowAltCircleRight
          style={{
            fontSize: 25,
            marginRight: 10,
            color: "black",
          }}
        />

        <select
          onChange={(e) => setToCurrency(e.target.value)}
          className="to-currency-option"
        >
          <option>TRY</option>
          <option>EUR</option>
          <option>USD</option>
        </select>
        <input
          value={result}
          onChange={(e) => setResult(e.target.value)}
          type="number"
          className="result"
        />
      </div>
      <div>
        <button onClick={exchange} className="exchange-button">
          Çevir
        </button>
      </div>
    </div>
  );
}

export default Currency;
