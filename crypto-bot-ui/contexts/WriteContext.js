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

  const [botCheck, setBotcheck] = useState([
    {
      id: 1,
      bot: "test1",
      isCheck: false,
    },
    {
      id: 2,
      bot: "test2",
      isCheck: false,
    },
    {
      id: 3,
      bot: "test3",
      isCheck: false,
    },
    {
      id: 4,
      bot: "test4",
      isCheck: false,
    },
    {
      id: 5,
      bot: "test5",
      isCheck: false,
    },
    {
      id: 6,
      bot: "test6",
      isCheck: false,
    },
    {
      id: 7,
      bot: "test7",
      isCheck: false,
    },
  ]);

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
        botCheck,
        setBotcheck,
      }}
    >
      {children}
    </WriteContext.Provider>
  );
}

export default WriteContext;
