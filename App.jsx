
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}> 

      <View style={styles.header}>

        <View style={styles.titulo}>
          <Text style={styles.titulo}>Cadastro</Text>
        </View>

        <TextInput style={styles.TextInput} placeholder="Nome"></TextInput>
        <TextInput style={styles.TextInput} placeholder="Email"></TextInput>
        <TextInput style={styles.TextInput} placeholder="Senha"></TextInput>
        <TextInput style={styles.TextInput} placeholder="Confirmar senha"></TextInput>

        <TouchableOpacity style={styles.botao}>
          <Text>Entrar</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height:500,
    width:350,
    backgroundColor: "#FCFCFC",
    borderRadius: 10,
    justifyContent: "center",
    padding: 10

  },
  container: {
    flex: 1,
    backgroundColor:"#38B6FF",
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: "center"
  },
  TextInput: {
    backgroundColor: "#A6A6A6",
    height: 66,
    width: "auto",
    margin: 12,
    borderRadius: 10,
    padding:20
  },
  botao: {
    height: 56,
    width: "auto",
    backgroundColor: '#4776DF',
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    margin:16,
  },
titulo: {
  justifyContent: "center",
  alignItems: "center",
  color: "#000",
  fontSize: 50,
},
});



// import { Icon } from 'react-native-elements';
// import { useState } from 'react';

  // const [LightTheme, SetLightTheme] = useState()

  // function SwitchTheme(){
  //   if(LightTheme)

  //     SetLightTheme(false)
  //   else
  //     SetLightTheme(true)
  //  }

// const [contador, AtaualizarContador] = useState(0)

// function handleCount(){
//   AtaualizarContador(contador + 100)
// }
