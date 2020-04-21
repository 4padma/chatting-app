import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native';



export default class LoginScreen extends React.Component {
    state={
        name:""
    }
    continue=()=>{
        this.props.navigation.navigate("Chat",{name:this.state.name})
    }
    render(){
  return (
    <View style={styles.container}>
     <View style={styles.circle}>

     </View>
     <View style={{marginTop:64}}>

     </View>
     <View style={{marginHorizontal:32}}>
         <Text style={styles.header}>
             UserName
         </Text>
         <TextInput style={styles.input} placeholder="DesignIntoCode" onChangeText={name=>{this.setState({name})}}
         value={this.state.name}>

         </TextInput>
         <View style={{alignItems:"flex-end",marginTop:64}}>
             <TouchableOpacity style={styles.continue} onPress={this.continue}>
                <Text>click me!</Text>
             </TouchableOpacity>
         </View>
     </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f5f7',
   
  },
  circle:{
      width:500,
      height:500,
      borderRadius:500 / 2,
      backgroundColor:'#fff',
      position:'absolute',
      left:-120,
      top:-20,


  },
  header:{
      fontWeight:"800",
      fontSize:30,
      color:"#514E5A",
      marginTop:32
  },
  input:{
      marginTop:32,
      height:50,
      borderWidth:StyleSheet.hairlineWidth,
      borderColor:'#BAB7C3',
      borderRadius:30,
      paddingHorizontal:16,
      color:"#514E5A",
      fontWeight:"600"
  },
  continue:{

      width:70,
      height:70,
      borderRadius: 70 / 2,
      backgroundColor:"#9075E3",
      alignItems:"center",
      justifyContent:"center"
  }
});
