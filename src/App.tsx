//import './App.css'
import Navbar from "./components/Navbar/Index";
import Router from "./Routes/Routes";
import { Suspense } from "react";
import Loading from "./components/Loading/Loading";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Router />
      </Suspense>
    </div>
  );
}

export default App;
