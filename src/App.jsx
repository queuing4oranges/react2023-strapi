import Hero from "./Hero";
import { Navbar } from "./Navbar";
import { useGlobalContext } from "./context";

const App = () => {

  const { isSidebarOpen, openSidebar, closeSidebar } = useGlobalContext()

  console.log(isSidebarOpen);



  return (
    <>
    <Navbar />
    <Hero />
    
    
    </>
  )
};
export default App;
