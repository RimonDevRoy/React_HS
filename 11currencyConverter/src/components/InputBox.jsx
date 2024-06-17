import React, { useId } from "react";

// function InputBox({
//   label,
//   amount,
//   onAmountChange,
//   onCurrencyTypeChange,
//   currencyOptions = [],
//   selectCurrency = "usd",
//   amountDisable = false,
//   currencyDisable = false,
//   className = "",
// }) {
//   const amountInputId = useId()
//   // This enhances optimization as it gives an unique ID.

//   return (
//     <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
//       <div className="w-1/2">
//         <label
//           htmlFor={amountInputId}
//           className="text-black/40 mb-2 inline-block"
//         >
//           {label}
//         </label>
//         <input
//           id={amountInputId}
//           className="outline-none w-full bg-transparent py-1.5"
//           type="number"
//           placeholder="Amount"
//           disabled={amountDisable}
//           value={amount}
//           onChange={(ev) => {
//             onAmountChange && onAmountChange(Number(ev.target.value));
//           }}
//           // Because returns string
//         />
//       </div>
//       <div className="w-1/2 flex flex-wrap justify-end text-right">
//         <p className="text-black/40 mb-2 w-full">Currency Type</p>
//         <select
//           className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
//           value={selectCurrency}
//           onChange={(ev) => {
//             onCurrencyTypeChange && onCurrencyTypeChange(ev.target.value);
//           }}
//           disabled={currencyDisable}
//         >
//           {/* The && are given to check whether the functions exist. The reference of functions return true or false depending on if they are available or not */}

//           {currencyOptions.map((currency) => (
//             <option key={currency} value={currency}>
//               {currency}
//             </option>
//           ))}
//         </select>
//         {/* The value of option select is taken from the value attribute */}
//       </div>
//     </div>
//   );
// }

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value.slice(1)))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
