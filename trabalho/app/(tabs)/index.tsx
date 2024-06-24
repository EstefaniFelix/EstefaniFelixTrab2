import React from 'react';

import { Text, View,Image,StyleSheet, TouchableOpacity } from 'react-native';

import Sobre from './sobre';

export default function App() {

  const [page, setPage] = React.useState('home');

  const renderPage = () => {

    if (page === 'home') {
      return (
        <View style={styles.container}>
          <View style={styles.rectangle}>
      
            <View style={styles.overlay}>
              <Text style={styles.overlayText}>Localiza </Text>
            </View>
            <Image style={styles.overlayImage} source={require('../../assets/images/img1.png')} />
            <Text style={styles.overlayText2} > Explore sem limites.
            </Text>
            <Text style={styles.overlayText3} >
              seu guia confiável para onde quer que você vá. </Text>
          </View >
          <Text style={styles.text}> Descubra uma nova maneira de explorar o mundo ao seu redor com nosso aplicativo de localização.
            Encontre lugares com facilidade, obtenha direções precisas e desfrute de uma navegação suave onde quer que esteja.</Text>
          <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
            <Text style={styles.buttonText}> Confira </Text>
          </TouchableOpacity>
        </View >
      );
    } else if (page === 'sobre') {
      return <Sobre />;
    }
  };
  return <View style={styles.container}> {renderPage()} </View>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CAE9FF',
    alignItems: 'center',
  },
  rectangle: {
    width: 500,
    height: 500,
    backgroundColor: '#5FA8D3',
    marginBottom: 100,
    alignItems: 'center',
    borderRadius: 30,
    marginTop: -12,
  },

  overlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 200,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateX: -100 }, { translateY: -50 }],
  },
  overlayImage: {
    width: 300,
    height: 250,
    position: 'absolute',
    marginTop: 80,
    alignItems: 'center',
  },

  overlayText: {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 40,
    color: '#1B4965',
    marginTop: -440,
    marginRight: 300,
  },

  overlayText2: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 400,
    marginLeft: 50,
    marginRight: 30,

  },
  overlayText3: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E1E1E',
    marginTop: 425,

  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#1B4965',
    marginTop: 10,
    marginRight: 'auto',
  },

  text: {
    fontSize: 19,
    color: '#1E1E1E',
    marginTop: -80,
    marginBottom: 40,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#5FA8D3',
    padding: 10,
    borderRadius: 12,
  },

  buttonText: {
    color: '#CAE9FF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  img: {
    width: 300,
    height: 200,
    borderColor: '#000',
    borderRadius: 15,
    marginBottom: 100,
  },

}); 