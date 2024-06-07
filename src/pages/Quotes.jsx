/* eslint-disable no-undef */
import "./Quotes.css"

import ClipLoader from "react-spinners/ClipLoader";
import { useState } from 'react';

const Quotes = () => {
    
    // eslint-disable-next-line no-unused-vars
    const [quotes, setQuote] = useState("Everyday is a learning day")
    const [loading,setLoading] = useState(false);

    async function handleGetQuote(event) {
        event.preventDefault;

        const api_url = "https://api.adviceslip.com/advice"

       
        try{
         setLoading(true) 

        const result = await fetch(api_url)
        const response = await result.json()
        
        console.log(response.slip,quotes);  

        setQuote(response.slip);

        setLoading(false)
        }catch(err){
          console.log(err)
        }
        
        // eslint-disable-next-line no-undef
        
    }

    return (
        <div className="random-quotes">
            <h1 className="h1">Random Inspirational Quotes</h1>
             <p className="quote"> {loading ?  "Loading..." : quotes} </p>
            <div className="get-quote">
                <form>
                    <button onClick={handleGetQuote} className="button">Get Quote</button>
                </form>
                <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
            </div>
        </div>
        
    )
}
export default Quotes;