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

                    <Image style={styles.img} source={require('../../assets/images/img2.png')} />

                    <Image style={styles.img} source={require('../../assets/images/img3.png')} />
                        <TouchableOpacity style={styles.button} onPress={() => setPage('home')}>
                            <Text style={styles.buttonText}> Clique aqui </Text>
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
        fontWeight: 'bold',
    },

    button: {
        backgroundColor: '#5FA8D3',
        padding: 10,
        borderRadius: 12,
        position: 'absolute',
        transform: [{ scaleX: -1 }],

    },
    buttonText: {
        color: '#CAE9FF',
        fontSize: 18,
        fontWeight: 'bold',
        position: 'absolute',
        transform: [{ scaleX: -1 }],

    },

    img: {
        width: 300,
        height: 200,
        borderColor: '#000',
        borderRadius: 15,
        marginBottom: 100,

    },

});

