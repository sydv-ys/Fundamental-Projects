// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { useGlobalContext } from "./context";

function App() {
  const { name } = useGlobalContext();
  console.log(name);

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
