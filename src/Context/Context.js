import { createContext, useState } from "react";


export const Context = createContext()

export const ContextProvider = ({children}) => {

   const [index, setIndex] = useState(0);
   const [lastSeenAt, setLastSeenAt] = useState({
             x: null,
             y: null
    })
    const [totalDistance, setTotalDistance] = useState(0);

    return (
        <Context.Provider value={{ index, setIndex, lastSeenAt, setLastSeenAt, totalDistance, setTotalDistance }}>
            {children}
        </Context.Provider>
    )
}