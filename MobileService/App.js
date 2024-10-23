import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, Image } from 'react-native';

// Importer les pages
import InsertionVente from './scr/InsertionVente';
import Listevente from './scr/Listevente';
import Accueil from './scr/Accueil';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: '#ffcc00',
          tabBarInactiveTintColor: '#ffffff',
          tabBarShowLabel: false, // Masquer les labels des onglets
        }}
      >
        <Tab.Screen 
          name="Ajouter une Vente" 
          component={InsertionVente} 
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle-outline" color={color} size={size} />
            ),
            headerTitle: () => <HeaderTitle title="Gestion Market" />, // Affiche icône + texte
            headerStyle: styles.header, 
            headerTintColor: '#ffcc00', 
          }} 
        />
        <Tab.Screen 
          name="Accueil" 
          component={Accueil} 
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
            headerTitle: () => <HeaderTitle title="Gestion Market" />, // Affiche icône + texte
            headerStyle: styles.header, 
            headerTintColor: '#ffcc00', 
          }} 
        />
        <Tab.Screen 
          name="Liste des ventes" 
          component={Listevente} 
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list-outline" color={color} size={size} />
            ),
            headerTitle: () => <HeaderTitle title="Gestion Market" />, // Affiche icône + texte
            headerStyle: styles.header, 
            headerTintColor: '#ffcc00', 
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Composant pour le titre du Header avec une icône personnalisée
const HeaderTitle = ({ title }) => (
  <View style={styles.headerContainer}>
    {/* Icône personnalisée à gauche */}
    <Image source={require('./assets/icon.png')} style={styles.icon} />
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#333333',
    borderTopColor: '#555555',
    borderTopWidth: 1,
  },
  header: {
    backgroundColor: '#444444',
  },
  headerContainer: {
    flexDirection: 'row', // Affiche l'icône et le texte sur la même ligne
    alignItems: 'center', // Centre l'icône et le texte verticalement
  },
  headerTitle: {
    color: '#ffcc00',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10, // Espace entre l'icône et le texte
  },
  icon: {
    width: 24, // Largeur de l'icône
    height: 24, // Hauteur de l'icône
    resizeMode: 'contain', // S'assure que l'image est bien contenue dans les dimensions définies
  },
});
