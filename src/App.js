import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isPageLoader, setIspageLoader] = useState(true)

  const pageLoader = () => {
    setTimeout(() => {
      setIspageLoader(!isPageLoader)
    }, 2000)
  }
  useEffect(() => {
    pageLoader();
  },[])
 

  return (
    <div>
      {isPageLoader ? <LoadingScreen /> :
        <Dashboard />
      }
    </div>
  );
}

export default App;
