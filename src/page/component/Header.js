import React from 'react'
import {
    View, 
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const Header = props=>{
    return(
        <View style={styles.header}>
            <TouchableOpacity
                onPress={() =>null}>
                    <View>
                        <Icon name="arrow-left" style={{
                            color:'#fff',
                            marginLeft:10,
                            marginTop:15
                        }}/>
                    </View>
            </TouchableOpacity>

                <View>

                    <TextInput
                        selectTextOnFocus={false}
                        underlineColorAndroid="transparent"
                        placeholder="Qual serviço você precisa?"
                        placeholderTextColor='#ACABE7'
                        style={styles.iinpt}
                        onChangeText={(value) => this.consultaCategoria(value)}
                    />
                </View>

                    <TouchableOpacity
                        onPress={() => this.inserirFocus()}
                        style={{position: 'absolute', right: 30, top:48, zIndex:200
                    }}>
                        <Icon name="search" style={{color: '#ccc', marginTop:5}}/>
                    </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:100,
        backgroundColor:'#5857CE',
        alignSelf: 'flex-end',
        position: "absolute",
        top: 0, left: 0,
        width:width,
        flexDirection:'row',
        flex:1,
        padding:10,
        paddingTop:35,
        elevation: 0, //remove shadow on Android
        shadowOpacity: 0, //remove shadow on iOS
    },
})
export default Header