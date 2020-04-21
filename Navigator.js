import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import  ChatScreens from './screens/chatScreens';
import LoginScreen  from './screens/loginScreen';

const AppNavigator=createStackNavigator({
   Login:LoginScreen,
  Chat:ChatScreens

},
{
  headerMode:"none"
})
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;