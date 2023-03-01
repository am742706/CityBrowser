import { StatusBar } from 'expo-status-bar';
import { Linking, StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer} from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import Button from './Button';


const Drawer = createDrawerNavigator();
SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

function Art({navigation}){
  return(
    <View>
      <Image source={require('./assets/art.png')} style={styles.image} />
      <TouchableOpacity  onPress={() => WebBrowser.openBrowserAsync('https://www.artic.edu/')} style={styles.button}>
        <Text style={styles.text}>More Information</Text>
      </TouchableOpacity>
    </View>
  );
}
function Mile({navigation}){
  return(
    <View>
      <Image source={require('./assets/mile.png')} style={styles.image} />
      <TouchableOpacity  onPress={() => WebBrowser.openBrowserAsync('https://www.themagnificentmile.com/')} style={styles.button}>
        <Text style={styles.text}>More Information</Text>
      </TouchableOpacity>
    </View>
  );
}
function Navy({navigation}){
  return(
    <View>
      <Image source={require('./assets/pier.png')} style={styles.image} />
      <TouchableOpacity  onPress={() => WebBrowser.openBrowserAsync('https://navypier.org/')} style={styles.button}>
        <Text style={styles.text}>More Information</Text>
      </TouchableOpacity>
    </View>
  );
}
function Water({navigation}){
  return(
    <View>
      <Image source={require('./assets/water.png')} style={styles.image} />
      <TouchableOpacity  onPress={() => WebBrowser.openBrowserAsync('https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html')} style={styles.button}>
        <Text style={styles.text}>More Information</Text>
      </TouchableOpacity>
    </View>
  );
}
function Willis({navigation}){
  return(
    <View>
      <Image source={require('./assets/willis.png')} style={styles.image} />
      <TouchableOpacity  onPress={() => WebBrowser.openBrowserAsync('https://www.willistower.com/')} style={styles.button}>
        <Text style={styles.text}>More Information</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Art Institute of Chicago" component={Art} />
        <Drawer.Screen name="Magnificent Mile" component={Mile} />
        <Drawer.Screen name="Navy Pier" component={Navy} />
        <Drawer.Screen name="Water Tower" component={Water} />
        <Drawer.Screen name="Willis Tower" component={Willis} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginTop: 100,
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 360,
    width: 240,
  },
  button: {
    margin: 10,
    marginLeft: 110,
    backgroundColor: '#3498db',
    borderRadius: 3,
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
    width: 175,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});
