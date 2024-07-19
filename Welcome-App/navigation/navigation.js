import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* ... your screens here ... */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "My App" }} // Optional: Set a title for HomeScreen
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="New Account"
          component={NewAccount}
          options={{ title: "New Account" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
