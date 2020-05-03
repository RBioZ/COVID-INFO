import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Menu from './pages/Menu';
import Info from './pages/Info';
import Dicas from './pages/Dicas';
import Sintomas from './pages/Sintomas';
import Teste from './pages/Teste';
import Devs from './pages/Devs';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name='Menu' component={Menu} />
                <AppStack.Screen name='Info' component={Info} />
                <AppStack.Screen name='Dicas' component={Dicas} />
                <AppStack.Screen name='Sintomas' component={Sintomas} />
                <AppStack.Screen name='Teste' component={Teste} />
                <AppStack.Screen name='Devs' component={Devs} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}