import React, { useRef, useEffect, useState } from 'react';
import styles from './styles';
import { Platform, View, Animated, Dimensions, Easing, Text, TextInput, TouchableHighlight, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import Profiles from '../../components/Profiles';
import SendingMessage from '../../components/SendingMessage';
import ReceivedMessage from '../../components/ReceivedMessage';
import YoutubePlayer from 'react-native-youtube-iframe';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const thirty = (30 * screenHeight) / 100;

function VirtualBar() {

    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(true);
    const fadeAnim = useRef(new Animated.Value(screenHeight)).current;
    const [textValue, setTextvalue] = useState('');
    const [messageSended, setMessageSended] = useState(false)
    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: thirty,
            duration: 1500,
            easing: Easing.bounce,
            useNativeDriver: false
        }).start();
    };
    useEffect(() => {
        fadeIn();
    }, []);

    const MessageSend = () => {
       setMessageSended(true);
    }


    return (
        <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
            <View style={styles.container}>
                <Animated.View style={[styles.BoxHeader, { height: fadeAnim }]}>
                    <YoutubePlayer
                        ref={playerRef}
                        width={screenWidth}
                        height={thirty}
                        videoId={"353lHGbvu8o"}
                        play={playing}
                        onChangeState={event => console.log(event)}
                        onReady={() => console.log("ready")}
                        onError={e => console.log(e)}
                        onPlaybackQualityChange={q => console.log(q)}
                        volume={50}
                        playbackRate={1}
                        playerParams={{
                            cc_lang_pref: "us",
                            showClosedCaptions: true
                        }}
                    />
                </Animated.View>
                <View style={styles.boxContainerBottom}>
                    <View style={styles.chatContainer}>
                        <Text style={{ fontSize: 20, color: '#7C7C7C', paddingTop: 10, paddingBottom: 20, alignSelf: 'center', width: '90%', fontWeight: 'bold' }}>Últimas Interações</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Profiles name="Kelviny" image="kelviny" />
                            <Profiles name="Kelviny" image="kelviny" />
                            <Profiles name="Kelviny" image="kelviny" />
                            <Profiles name="Kelviny" image="kelviny" />
                            <Profiles name="Kelviny" image="kelviny" />
                            <Profiles name="Kelviny" image="kelviny" />
                            <Profiles name="Kelviny" image="kelviny" />
                            <Profiles name="Kelviny" image="kelviny" />
                        </ScrollView>
                    </View>
                    <View style={{ height: 250 }}>
                        <ScrollView horizontal={false}>
                            <ReceivedMessage name="Kelviny" message="Eae mano beleza? bora conversar?" />
                            <SendingMessage name="Kelviny" message="Bora, Vou te pagar um suco de laran." />
                            <ReceivedMessage name="Kelviny" message="Eae mano beleza? bora conversar?" />
                            <SendingMessage name="Kelviny" message="Bora, Vou te pagar uma breja." />
                            <ReceivedMessage name="Kelviny" message="Eae mano beleza? bora conversar?" />
                            <SendingMessage name="Kelviny" message="Bora, Vou te pagar uma breja." />
                            <ReceivedMessage name="Kelviny" message="Eae mano beleza? bora conversar?" />
                            <SendingMessage name="Kelviny" message="Bora, Vou te pagar uma breja." />
                        </ScrollView>
                    </View>
                    <View style={{ width: '90%', alignSelf: 'center', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                        <TextInput style={{ width: '80%', height: 40, borderWidth: 1, borderRadius: 10 }} value={textValue} onChangeText={(t) => {setTextvalue(t)}} />
                        <View style={{ width: '20%' }}>
                            <TouchableOpacity onPress={MessageSend} style={{ width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', paddingLeft: 14, paddingRight: 14, paddingTop: 7, paddingBottom: 7, borderRadius: 5, marginLeft: 10 }}><Text style={{ fontSize: 17, fontWeight: 'bold', color: '#FFF' }}>Send</Text></TouchableOpacity>
                        </View> 
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>

    );
}


export default VirtualBar;