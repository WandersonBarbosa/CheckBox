import  React,{ Component } from 'react'

import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    TouchableOpacity,
    Dimensions,
    TextInput,
    FlatList
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

import api from './../service/api'
import Header from './component/Header'
import CategoriaItem from './component/CategoriaItem'

export default class Categorias extends Component{
    constructor(props){
        super(props)
        this.state ={
            isLoading: true,
            dados: [],
            salva: []    
        }
    }

    componentDidMount(){

        this.setState({dados: api})

    }
    salvadata = (id,valor)=>{
        const todos = [...this.state.salva]
        todos.push({
            id,
            valor
        })
        this.setState({salva: todos})
    }

    removerData = (valor)=>{
        const { salva } = this.state
        const index = salva.indexOf(valor) 
        salva.splice(index,1)
        this.setState({salva: salva})
    }

    renderCategorias = () => (

        <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.dados}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <CategoriaItem data={item} 
                salvadata={this.salvadata} 
                removerData={this.removerData} 
            /> }
        />
    )
    render(){
        return(
            <View style={styles.container}>
                <StatusBar
                    barStyle='light-content'
                    translucent={true}
                    backgroundColor={'#4f4f9c'}
                />
               {this.renderCategorias()}
               <View>
                   <Text>{JSON.stringify(this.state.salva)}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e2e2e2',
        paddingTop:40
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
