import React from "react";
import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const BotContext = createContext();

export function BotContextProvider({ children }) {
  const [BotData, setBotData] = useState([
    // {
    //   id: "1",
    //   name: "Test Bot1",
    //   type: "type1",
    //   amount: "1000",
    //   pnl: "100.1",
    //   roe: "10.1",
    //   method: "",
  ]);
  const [checked, setChecked] = useState(new Set());
  const [apiKey, setApiKey] = useState("");
  const [secret, setSecret] = useState("");
  const [TradeLog, setTradeLog] = useState([]);


  const AddBotData = ({ name, amount, stoploss, pnl, roe, method, status }) => {
    const new_data = {
      id: uuidv4(),
      name,
      amount,
      stoploss,
      pnl,
      roe,
      method,
      status,
    };
    setBotData([...BotData, new_data]);
  };

  const DeleteBotData = (id) => {
    //추후 체크박스 형태로 바꿀 때 변경할 것.
    const new_data = BotData.filter((data) => data.id !== id);
    setBotData(new_data);
  };

  const ModifyBotData = (modify) => {
    const new_data = BotData.map((data) => {
      data.id === modify.id ? modify : data;
    });
    setBotData(new_data);
  };

  const AddChecked_func = (id) => {
    checked.add(id);
    setChecked(checked);
  };

  const DeleteChecked_func = (id) => {
    checked.delete(id);
    setChecked(checked);
  };

  return (
    <BotContext.Provider
      value={{
        checked,
        setChecked,
        BotData,
        setBotData,
        apiKey,
        setApiKey,
        secret,
        setSecret,
        AddBotData,
        DeleteBotData,
        ModifyBotData,
        AddChecked_func,
        DeleteChecked_func,
        TradeLog,
        setTradeLog,
        
      }}
    >
      {children}
    </BotContext.Provider>
  );
}

export default BotContext;
