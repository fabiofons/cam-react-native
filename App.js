import { createStackNavigator, createAppContainer } from "react-navigation";
import  HomeScreen  from "./Home";
import CameraScreen from "./Camera";

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Camera: { screen: CameraScreen }
});

const App = createAppContainer(AppNavigator);

export default App;
