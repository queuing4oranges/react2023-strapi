import { createContext, useContext, useEffect, useState } from "react";
import sublinks from "./data";
const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)


export default function AppContext(props) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [pageId, setPageId] = useState(null)

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

return(
    <GlobalContext.Provider value={{isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId}}>
        {props.children}
    </GlobalContext.Provider>
    )
}