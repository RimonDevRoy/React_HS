import { useEffect, useState } from 'react'

function useCurrencyInfo(currencyType) {
  // Here, useState is used because it will update UI whenever data is altered and if it were stored in a normal variable then it wouldn't have happened. Here, the default value of useState is given an empty object so that in case response does not come or network call fails, program will loop on an empty object and atleast would not crash.
  const [currencyData, setCurrencyData] = useState({})


  // useEffect is used here for API calling only on certain conditions.
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyType}.json`)
      .then((currencyReponse) => currencyReponse.json())
      .then((jsonCurrencyResponse) => setCurrencyData(jsonCurrencyResponse[currencyType]))
  }, [currencyType,])

  return currencyData

  /*
  Here, returning setCurrencyData will create problems because if any dependencies change, only the function given inside useEffect will re-run not the useCurrencyInfo and setCurrencyData is returned on the first load of useCurrencyInfo.
  */
}

export default useCurrencyInfo