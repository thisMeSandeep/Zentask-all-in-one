import { createContext, useState } from "react";

export const SidebarContext = createContext();

export default function SidebarProvider({children}) {
    const [toggle, setToggle] = useState(false);
    return(
        <SidebarContext.Provider value={{toggle,setToggle}}>
              {children}
        </SidebarContext.Provider>
    )
}
