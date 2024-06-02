import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GameRouteNames } from './route-names';
import { Text } from 'react-native'
import LobbyyScreen from '../screens/game/Lobby.screen';
import authRoutes from './auth.router';

const GameStack = createNativeStackNavigator()

const gameRoutes = (
    <GameStack.Navigator>
        <GameStack.Screen name={GameRouteNames.LOBBY} component={LobbyyScreen} options={{
            headerTitle: (props) => <Text {...props}>Lobby</Text>,
        }}/>
        
    </GameStack.Navigator>
)

export default authRoutes;