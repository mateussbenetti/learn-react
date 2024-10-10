import HomePage from "./home-page/HomePage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import HomePageProject from "./home-page-3.0/HomePageProject";

library.add(fas);

function App() {
  // return <ImageBlockPage></ImageBlockPage>;
  //return <HomePage></HomePage>;
  return <HomePageProject />;
}

export default App;
