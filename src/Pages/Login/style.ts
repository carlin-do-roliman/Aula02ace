import {StyleSheet} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';


export const styles = StyleSheet.create({
    body:{
        backgroundColor:'#4287f5',
        flex:1,
        justifyContent:'center',
    },
    container:{
        flex:1,
        justifyContent:'center',
        marginHorizontal:7,
    },
    topo:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:50,
    },
    titulo:{
        fontSize:40,
        fontWeight:'bold',
        color:'#F5FFFF',
        marginLeft:7,
        
    },
    textInput:{
        height:45,
        borderColor:"#F5FFFF",
        backgroundColor:"#e6f0f0",
        borderWidth:1,
        borderRadius:5,
        color:'black',
        margin:15,
        padding:10,
        fontSize:15,
    },
    Image:{
        height:40,
        width:40,
        marginLeft:5,
    },
    viewButton:{
        // backgroundColor:'#3D7BE2',
        // alignItems:'center',
        // justifyContent:'center',
        borderRadius:5,
        flexDirection:'row',
        
    },
    button:{
        flex:5,
        backgroundColor:'#1f4ea6',
        justifyContent:'center',
        alignItems:'center',
        height:45,
        borderRadius:5,
        margin:15,
    },
    viewButtonText:{
        color:"#F5FFFF",
        fontSize:15,
        fontWeight:'bold',
    },
    link:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:65,
    },
    linker:{
        color:'white',
        textDecorationLine:'underline',
    },
});