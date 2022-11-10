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
    // },
    //   {
    //     id: '2',
    //     name: "Test Bot2",
    //     type: "type2",
    //     amount: "1000",
    //     pnl: "100.1",
    //     roe: "10.1",
    //     method : '',
    //   },
    //   {
    //     id: 3,
    //     name: "Test Bot3",
    //     type: "type3",
    //     amount: "1000",
    //     pnl: "100.1",
    //     roe: "10.1",
    //     method : '',
    //   },
  ]);
  const [checked, setChecked] = useState(new Set());

  const AddBotData = ({ name, amount, pnl, roe, method, status }) => {
    const new_data = {
      id: uuidv4(),
      name,
      amount,
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
        AddBotData,
        DeleteBotData,
        ModifyBotData,
        AddChecked_func,
        DeleteChecked_func,
      }}
    >
      {children}
    </BotContext.Provider>
  );
}

export default BotContext;
