import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/Login.screen';
import RegisterScreen from '../screens/auth/Register.screen';
import LobbyyScreen from '../screens/game/Lobby.screen';
import ProfileScreen from '../screens/auth/Profile.screen';
import { AuthRouteNames } from './route-names';
import { Text } from 'react-native'

const AuthStack = createNativeStackNavigator()

const authRoutes = (
    <AuthStack.Navigator initialRouteName='Login'>
        <AuthStack.Screen name={AuthRouteNames.LOGIN} component={LoginScreen} options={{
            headerTitle: (props) => <Text {...props}>Login</Text>
        }}/>
        <AuthStack.Screen name={AuthRouteNames.REGISTER} component={RegisterScreen} options={{
            headerTitle: (props) => <Text {...props}>Register</Text>
        }}/>
        <AuthStack.Screen name={AuthRouteNames.LOBBY} component={LobbyyScreen} options={{
            headerTitle: (props) => <Text {...props}>Lobby</Text>,
        }}/>
        <AuthStack.Screen name={AuthRouteNames.PROFILE} component={ProfileScreen} options={{
            headerTitle: (props) => <Text {...props}>Profile</Text>,
        }}/>
    </AuthStack.Navigator>
)

export default authRoutes;