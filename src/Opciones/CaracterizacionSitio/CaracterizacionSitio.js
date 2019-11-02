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
  {id:1, titulo: "Clima", subtitulo:"Evaluación del clima del sitio.", imagen:"1"},
  {id:2, titulo: "Suelo", subtitulo:"Evaluación del suelo del sitio.", imagen:"2"} ,
  {id:3, titulo: "Agua", subtitulo:"Evaluación del agua del sitio.", imagen:"3"},  
];

const CaracterizacionSitio = (props) => {

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

export default CaracterizacionSitio;