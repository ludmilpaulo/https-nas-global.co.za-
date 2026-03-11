import { StatusBar } from "expo-status-bar";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ContactScreen } from "./src/screens/ContactScreen";
import { HomeScreen } from "./src/screens/HomeScreen";
import { ServicesScreen } from "./src/screens/ServicesScreen";
import { theme } from "./src/theme";
import { getSystemLocale, t } from "./src/i18n";

export default function App() {
  const Tab = createBottomTabNavigator();
  const locale = getSystemLocale();

  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            background: theme.colors.background,
            card: theme.colors.card,
            text: theme.colors.text,
            border: theme.colors.border,
            primary: theme.colors.brand,
          },
        }}
      >
        <Tab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: theme.colors.card },
            headerTitleStyle: { color: theme.colors.text, fontWeight: "700" },
            tabBarStyle: {
              backgroundColor: theme.colors.card,
              borderTopColor: theme.colors.border,
            },
            tabBarActiveTintColor: theme.colors.brand,
            tabBarInactiveTintColor: theme.colors.muted,
          }}
        >
          <Tab.Screen
            name="home"
            component={HomeScreen}
            options={{ title: t("tabs.home", locale) }}
          />
          <Tab.Screen
            name="services"
            component={ServicesScreen}
            options={{ title: t("tabs.services", locale) }}
          />
          <Tab.Screen
            name="contact"
            component={ContactScreen}
            options={{ title: t("tabs.contact", locale) }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}
