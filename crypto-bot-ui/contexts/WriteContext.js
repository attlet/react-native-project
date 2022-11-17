import React from "react";
import { createContext, useState } from "react";

const WriteContext = createContext();

export function WriteContextProvider({ children }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [isLong, setLong] = useState(false);
  const [isShort, setShort] = useState(false);
  const [method, setMethod] = useState([]);
  const [leverage, setLeverage] = useState("");

  const [test1, setTest1] = useState(false);
  const [test2, setTest2] = useState(false);
  const [test3, setTest3] = useState(false);

  const [BuyStoploss, setBuyStoploss] = useState("");
  const [SellStoploss, setSellStoploss] = useState("");

  return (
    <WriteContext.Provider
      value={{
        name,
        amount,
        isLong,
        isShort,
        method,
        test1,
        test2,
        test3,
        BuyStoploss,
        SellStoploss,
        setName,
        setAmount,
        setMethod,
        setTest1,
        setTest2,
        setTest3,
        setLong,
        setShort,
        setBuyStoploss,
        setSellStoploss,
        leverage,
        setLeverage,
      }}
    >
      {children}
    </WriteContext.Provider>
  );
}

export default WriteContext;
