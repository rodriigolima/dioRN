import React from 'react';
import { View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking } from 'react-native';


const App = () => {

    const hendlePressGoToGithub = async () => {
        const res = await Linking.canOpenURL('https://github.com/rodriigolima');
        if(res){
            await Linking.openURL('https://github.com/rodriigolima');
        }
    }
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={'#010409'} barStyle="light-content" />
            <View style={style.content}>
                <Image accessibilityLabel='Rodrigo image' style={style.avatar} source={{ uri: 'https://avatars.githubusercontent.com/u/23271567?v=4' }} />
                <Text accessibilityLabel='Nome rodrigo' style={[style.defaultText, style.name]}>Rodrigo Lima 
                </Text>
                <Text accessibilityLabel='Nickname rodrigo lima' style={[style.defaultText, style.nickname]}>rodriigolima
                </Text>
                <Text accessibilityLabel='Descrição rodrigo lima' style={[style.defaultText, style.description]}>Análise de desenvolvimento de sistema.
                </Text>
                <Pressable onPress={hendlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: '#010409',
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    content: {
        alignItems: 'center',
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: '#C9D1D9',
    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname: {
        fontSize: 18,
        color: '#4F565E',
    },
    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    button:{
        marginTop: 20,
        backgroundColor: '#4F565E',
        borderRadius: 10,
        padding: 20,
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 16,
    }
});