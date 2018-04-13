import  React,{ Component } from 'react'

import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity, AsyncStorage,
    CheckBox,
    Alert
} from 'react-native'


export default class CategoriaItem extends Component{
    constructor(props){
        super(props)

        this.state = {
            checked: false,
        };
    }
    addRow = (id, valor)=>{
        const {checked , salva}= this.state
        
        if(checked == false){
            this.props.salvadata(id,valor)
        }else{
            this.props.removerData(valor)
        }
        this.setState({checked: !checked})
    }
    render(){
        const {data} = this.props
        return(
            <View style={styles.container}>
                
                <CheckBox
                  center
                  value={this.state.checked}
                  onChange={() =>this.addRow(data.id,data.valor)}
                />
                <View style={styles.cdr}>
                    <Text style={styles.txt} >{data.valor}</Text>
                </View>
                {/*<Text>{JSON.stringify(data)}</Text>*/}
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ccc',
    },
    txt: {
        padding:20,
        color:'#6c6c6c',
        fontSize:16,
        paddingLeft:20


    },
    cdr:{
        backgroundColor:'#F6F6F6',
        borderBottomWidth:1,
        borderBottomColor:'#cfcfcf'
    }
})
