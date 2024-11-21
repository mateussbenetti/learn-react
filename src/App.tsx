import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import LinktreeHome from "./linktree/LinktreeHome";
import CarsCard from "./cars/CarsCard";
import CarsHome from "./cars/CarsHome";
import LinktreeLinks from "./learn-input/LinktreeLinks";
import NewForm from "./learn-input/NewForm";

library.add(fas);

function App() {
  // return <ImageBlockPage></ImageBlockPage>;
  //return <HomePage></HomePage>;
  // return <LinktreeHome />;
  // return <CarsHome />;
  // return <LinktreeLinks />;
  return <NewForm />;
}

export default App;
