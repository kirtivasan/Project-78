import React,{Component} from 'react';
import { Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image 
} from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>

                <SafeAreaView style={styles.droidSafearea}></SafeAreaView>
                <ImageBackground source={require('../assets/space.gif')} style ={styles.backgroundImage}>
                <View style={styles.titleBar}>
                <Text style={styles.titleText}> Stellar App</Text>
                 
                </View>
                  
                <View>
                <Image source={require('../assets/main-icon.png')} style={styles.MainIcon}></Image>
                </View>

           
                <TouchableOpacity style={styles.routeCard} 
                onPress={()=>{
                    this.props.navigation.navigate("Space Crafts Screen")
                }}>
                    <Text style={styles.routeText}> Space Crafts</Text>
                    <Text style={styles.knowMore}>{"Know More "}</Text>
                    <Text styles={styles.bgDigit}>1</Text>
                    <Image source={require('../assets/spacecraft.png')} style={styles.iconImage}></Image>
                </TouchableOpacity>


                <TouchableOpacity style={styles.routeCard}
                 onPress={()=>{
                    this.props.navigation.navigate("Daily Pic Screen")
                }}>
                    <Text style={styles.routeText}> DailyPic</Text>
                    <Text style={styles.knowMore}>{"Know More "}</Text>
                    <Text styles={styles.bgDigit}>2</Text>
                    <Image source={require('../assets/daily_pictures.png')} style={styles.iconImage}></Image>
                </TouchableOpacity>


                <TouchableOpacity style={styles.routeCard}
                 onPress={()=>{
                    this.props.navigation.navigate("Star Map Screen")
                }}>
                    <Text style={styles.routeText}> StarMap</Text>
                    <Text style={styles.knowMore}>{"Know More"}</Text>
                    <Text styles={styles.bgDigit}>3</Text>
                    <Image source={require('../assets/star_map.png')} style={styles.iconImage}></Image>
                </TouchableOpacity>
                </ImageBackground>
                </View>

        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    droidSafearea:{
        marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
    },
    titlebar:{
        flex:0.15,
        justifyContent:"center",
        alignItems:"center"
    },
    titleText:{
        justifyContent:"center",
        fontSize:40,
        fontWeight:"Bold",
        color:"white"
    },
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:'white'
    },
    routeText:{
        fontSize:35,
        fontWeight:"bold",
        color:'Black',
        marginTop:75,
        paddingLeft:30
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover',
    },
    knowMore:{
        paddingLeft:30,
        color:"white",
        fontSize:15
    },
    bgDigit:{
        position:"absolute",
        color:'grey',
        fontSize:150,
        right:20,
        bottom:-15,
        zIndex:-1
    },
    iconImage:{
        position:'absolute',
        height:100,
        width:100,
        resizeMode:'contain',
        right:20,
        top:10
    },
    MainIcon:{
        position:'absolute',
        height:135,
        width:135,
        resizeMode:'contain',
        alignItems:"center",
        right:100,
        top:-70
    }
})