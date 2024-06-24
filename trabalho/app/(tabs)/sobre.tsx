import React from 'react';

import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Sobre from '.';

export default function App() {

    const [page, setPage] = React.useState('sobre');

    const renderPage = () => {
        if (page === 'sobre') {
            return (
                <View style={styles.container}>

                    <View>
                        <Text style={styles.title}>Localiza </Text>
                    </View>
                    <Text style={styles.text} >Experimente o poder da localização em tempo real a qualquer momento com nosso app.
                    </Text>

                    <Image style={styles.img1} source={require('../../assets/images/img2.png')} />

                    <Text style={styles.text2} >Localização Atual </Text>

                    <Image style={styles.img} source={require('../../assets/images/img3.png')} />

                    <Text style={styles.text3} >Latitude: 0.00 </Text>
                    <Text style={styles.text3} >Longitude: 0.00 </Text>
                    <TouchableOpacity style={styles.button2} onPress={() => setPage('home')}>
                            <Text style={styles.buttonText}> Obter Localização </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => setPage('home')}>
                            <Text style={styles.buttonText}> Home </Text>
                        </TouchableOpacity>
               
                </View>
            );

        } else if (page === 'home') {
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
        justifyContent:'center',

    },

    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#1B4965',
        marginRight: 305,
    },

    text: {
        fontSize: 20,
        color: '#1E1E1E',
        fontWeight: 'bold',
        textAlign: 'justify',
        margin:30,
    },
    text2: {
        fontSize: 18,
        color: '#1E1E1E',
        fontWeight: 'bold',
        textAlign: 'justify',
        marginRight:305,
        margin:10,
    },
    text3: {
        fontSize: 15,
        color: '#1E1E1E',
        fontWeight: 'bold',
        textAlign: 'justify',
        marginRight:305,
       
    },
    button: {
        backgroundColor: '#5FA8D3',
        padding: 10,
        borderRadius: 12,    
        alignItems: 'center',

    },
    button2: {
        backgroundColor: '#5FA8D3',
        padding: 10,
        borderRadius: 12,    
        alignItems: 'center',
        marginBottom:10,
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
        alignItems: 'center',
        marginBottom:10,
    },
    img1: {
        width: 250,
        height: 100,
        borderColor: '#000',
        borderRadius: 15,
        alignItems: 'center',
        marginBottom:10,
    },

});

