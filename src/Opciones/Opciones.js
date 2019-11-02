import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

const opciones= [
  {id:1, titulo: "Caracterización del Sitio", subtitulo:"Evaluación del sitio de cultivo.", imagen:"1"},
  {id:2, titulo: "Control Agronómico del Cultivo", subtitulo:"Seguimiento y control del cultivo.", imagen:"2"} ,
  {id:3, titulo: "Producción", subtitulo:"Cálculo del rendimiento cultivo.", imagen:"3"}, 
  {id:4, titulo: "Economía", subtitulo:"Cálculo de ingresos y reportes de producción del cultivo.", imagen:"4"}, 
  {id:5, titulo: "Guías", subtitulo:"Guías informativas del cultivo.", imagen:"5"}, 
  {id:6, titulo: "Otros", subtitulo:"Otras opciones.", imagen:"6"}, 
];

const Opciones = (props) => {

    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          data={opciones}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <TouchableOpacity>
                <View style={styles.card}>
                  <Image style={styles.cardImage} source={{uri:item.imagen}}/>
                  <View style={styles.cardContent}>
                    <View>
                      <Text style={styles.title}>{item.titulo}</Text>
                      <Text style={styles.subTitle}>{item.subtitulo}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }


const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  list: {
    backgroundColor:"lightblue",
  },
  card:{
    marginRight: 4,
    marginLeft: 4,
    marginTop: 2,
    marginBottom: 2,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "lightblue",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
    flex: 1,
    position: 'absolute',
    zIndex: 100,
    left: 0,
    right: 0,
    backgroundColor: 'transparent'
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  title:{
    fontSize:22,
    color: "#ffffff",
    marginTop: 10,
    fontWeight:'bold'
  },
  icon: {
    width:25,
    height:25,
  },
  subTitle:{
    fontSize:13,
    color: "#ffffff",
    marginTop: 5
  },
});

export default Opciones;