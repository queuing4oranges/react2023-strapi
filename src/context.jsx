import { createContext, useContext, useState } from "react";

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)


export default function AppContext(props) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

return(
    <GlobalContext.Provider value={{isSidebarOpen, openSidebar, closeSidebar}}>
        {props.children}
    </GlobalContext.Provider>
    )
}