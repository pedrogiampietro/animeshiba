import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading';
import Home from './screens/Home';
import Animedetails from './screens/Animedetails';
import Episodewatch from './screens/Episodewatch';
import Search from './screens/Search';
import Watchlist from './screens/Watchlist';


const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'pop-bold': require("./assets/fonts/Poppins-Bold.ttf"),
    'pop-medium': require("./assets/fonts/Poppins-Medium.ttf"),
    'pop-regular': require("./assets/fonts/Poppins-Regular.ttf"),
    'lob-bold': require("./assets/fonts/LobsterTwo-Bold.ttf"),
    'lob-regular': require("./assets/fonts/LobsterTwo-Regular.ttf"),
  })

  if(!fontsLoaded){
    return <AppLoading />
  }


  return (
    <GestureHandlerRootView style={styles.container}>
    <StatusBar style="light" />
    <View style={styles.container}>                 
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen  name='Home' component={Home} options={{ headerShown: false }} />
            <Stack.Screen  name='Animedetails' component={Animedetails} options={{ headerShown: false }}  />
            <Stack.Screen  name='Episodewatch' component={Episodewatch} options={{ headerShown: false }}  />
            <Stack.Screen  name='Search' component={Search} options={{ headerShown: false }}  />
            <Stack.Screen  name='Watchlist' component={Watchlist} options={{ headerShown: false }}  />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
