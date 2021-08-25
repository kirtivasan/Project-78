import React,{Component} from 'react';
import { SafeAreaView, StyleSheet, Text,View, TextInput} from 'react-native';

export default class StarMapScreen extends Component{
    constructor(){
        super();
        this.state={
         logitude:'',
         latitude:'',
        }
    }
    render(){
        const{
            logitude,latitude
        } = this.state;
        const path = 'https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'
        return(

            <View style={{flex:1,
            justifyContent:"center",
            alignItems:"center",backgroundColor:"#1A0023"}}>
              <SafeAreaView style={styles.droidSafeArea}/>
               <View style={{flex:0.3,marginTop:20,alignItems:"center"}}>
                   <Text style={styles.titleText}> Star Map</Text>
                   <TextInput style={styles.inputStyle}
                   placeHolder = "enter you logitude"
                   placeHolderTextColour = "White"
                   onChangeText={(text)=>{
                       this.setState({
                           logitude:text
                       })
                   }}/>

                  <TextInput style={styles.inputStyle}
                   placeHolder = "enter you latitude"
                   placeHolderTextColour = "White"
                   onChangeText={(text)=>{
                       this.setState({
                           latitude:text
                       })
                   }}/>
            </View>
            <WebView scalePageToFit = {true}
            source={{uri:part}}
            style={{marginTop:20,marginBottom:20}}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    droidSafearea:{
        marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover',
    },
    titleText:{
        justifyContent:"center",
        fontSize:40,
        fontWeight:"Bold",
        color:"white"
    },
    inputStyle:{
        height:40,
        borderColor:"grey",
        borderWidth:1,
        borderRadius:20,
        marginTop:20,
        marginRight:20,
        marginLeft:20,
        textAlign:"center",
        color:'white',
        width:200
    }
})