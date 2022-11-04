import React from 'react';
import { createContext, useState } from 'react';
import {v4 as uuidv4} from 'uuid';

const BotContext = createContext();

export function BotContextProvider({children}){
    const [BotData, setBotData] = useState([
        {
            id: 1,
            name: "Test Bot1",
            type: "type1",
            amount: "1000",
            pnl: "100.1",
            roe: "10.1",
          },
          {
            id: 2,
            name: "Test Bot2",
            type: "type2",
            amount: "1000",
            pnl: "100.1",
            roe: "10.1",
          },
          {
            id: 3,
            name: "Test Bot3",
            type: "type3",
            amount: "1000",
            pnl: "100.1",
            roe: "10.1",
          },
    ]);

    const AddBotData = ({name, type, amount, pnl, roe}) => {
      const new_data = {
        id : uuidv4(),
        name,
        type,
        amount,
        pnl,
        roe,
      };
      setBotData([...BotData, new_data])
    };
  
    const DeleteBotData = (name) => {          //추후 체크박스 형태로 바꿀 때 변경할 것.
      const new_data = BotData.filter((data) => data.name !== name)
      setBotData(new_data);
    };

    const ModifyBotData = (modify) => {
      const new_data = BotData.map((data) => {
        data.id === modify.id ? modify : data
      })
      setBotData(new_data);
    };
    return(
        <BotContext.Provider value={{BotData, setBotData, AddBotData, DeleteBotData, ModifyBotData}}>
            {children}
        </BotContext.Provider>
    );
}

export default BotContext;