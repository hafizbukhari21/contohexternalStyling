import {StyleSheet} from 'react-native'

const mainStyle = StyleSheet.create({
    mainContainer:{
        padding:20,
        justifyContent:"center"
    },
    textBox:{
        height: 40, 
        borderColor: 'red', 
        borderWidth:2, 
        fontSize:20
    },
    output:{
        marginTop:10,
        justifyContent:"center",
        display:"flex",
        textAlign:"center"
    },
    textOutput:{
        borderWidth:2,
        borderColor:"red",
        textAlign:"center",
        paddingVertical:10,
        marginBottom:5
    }


})

export default mainStyle