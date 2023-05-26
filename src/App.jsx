import { useGlobalContext } from "./context";

const App = () => {

  const { isSidebarOpen, openSidebar, closeSidebar } = useGlobalContext()

  console.log(isSidebarOpen);



  return <h2>Strapi</h2>;
};
export default App;
