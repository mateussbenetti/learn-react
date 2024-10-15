import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import LinktreeHome from "./linktree/LinktreeHome";

library.add(fas);

function App() {
  // return <ImageBlockPage></ImageBlockPage>;
  //return <HomePage></HomePage>;
  return <LinktreeHome />;
}

export default App;
