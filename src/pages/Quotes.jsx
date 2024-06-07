/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import "./Quotes.css";
import { PulseLoader } from "react-spinners";
import { useState } from "react";

const Quotes = () => {
  // eslint-disable-next-line no-unused-vars
  const [quotes, setQuote] = useState(null);
  const [loading, setLoading] = useState();

  async function handleGetQuote(event) {
    event.preventDefault;

    try {
      const api_url = "https://api.adviceslip.com/advice";
      setLoading(true);

      const result = await fetch(api_url);
      const response = await result.json();
      setLoading(false);
      setQuote(response.slip.advice);

    } catch (err) {
      setQuote("error fetching data");
      setLoading(false);
    }

    // eslint-disable-next-line no-undef
  }
  return (
    <div className="random-quotes">
      <h1 className="h1">Random Inspirational Quotes</h1>
      <p> {loading && <PulseLoader color="white" size={40} /> }</p>
      <p>{quotes}</p>
      <div className="get-quote">
        <form>
          <button onClick={handleGetQuote} className="button">
            Get Quote
          </button>
        </form>
      </div>
    </div>
  );
};
export default Quotes;
