import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState, useEffect, useRef } from 'react';

export default function App() {
  const [name, setName] = useState("Gleidson")
  const [number, setNumber] = useState(1)

  const numberRef = useRef(0)

  console.log(numberRef)


  useEffect(() => {
    console.log("Roda a cada renderização.")
    // setNumber((prevNumber) => prevNumber + 1 )
    numberRef.current = Math.random()
  })

  useEffect(() => {
    console.log("Somei um")
  },[number])

  useEffect(() => {
    console.log("Só executa uma vez")
  }, [])

  const changeNumber = () => {
    // setNumber( number + 1 )
    // setNumber( number + 1 )
    setNumber((prevNumber) => prevNumber + 1)
    setNumber((prevNumber) => prevNumber + 1)
  }

  return (
    <View style={styles.container}>
      <Text>Meu nome é {name}.</Text>

      <TextInput
        onChangeText={setName}
        value={name}
        style= {styles.input}
      />
      <Text>O numero Ref é {numberRef.current}</Text>
      <Text>O número é {number}.</Text>
      <Button
        onPress={changeNumber}
        title='Aumenta número'
        color="#841584"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10, 
  }
});
