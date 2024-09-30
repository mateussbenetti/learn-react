import HomePage from "./home-page/HomePage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function App() {
  // return <ImageBlockPage></ImageBlockPage>;
  return <HomePage></HomePage>;
}

export default App;
