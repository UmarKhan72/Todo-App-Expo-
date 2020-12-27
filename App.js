import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, Text, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const setTextValue = (val) => {
    setText(val)
  };

  const deleteTodo = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const alert = (text) => {
    if (text.length >= 1) {
      setTodos(prevTodos => {
        return [
          ...prevTodos,
          { text, key: Math.random().toString() }
        ];
      });
    } else {
      Alert.alert('OOPS!', 'Todo must take 1 word.')
    }
  };

  const deleteAll = () => {
    setTodos("")
  }

  return (
    <View style={styles.container}>

      <View style={styles.content}>

        <Text style={styles.umtext}>TODO APP</Text>

        <TextInput style={styles.input} selectionColor='#af14c9' placeholder='Enter Todo' onChangeText={setTextValue} value={text} />

        <View style={styles.umview1} >

          <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={() => alert(text, setText(''))}>
            <Text style={styles.btnText}>ADD ITEM</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.5} style={styles.button1} onPress={deleteAll}>
            <Text style={styles.btnText}>DELETE ALL</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.list}>

          <FlatList
            data={todos}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity activeOpacity={0.4} onPress={() => deleteTodo(item.key)}>
                    <Text style={styles.item}>{item.text}</Text>
                  </TouchableOpacity>
                </View>)
            }} />

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#af14c9',
  },
  content: {
    flex: 1,
    marginTop: 80,
    padding: 40
  },
  list: {
    flex: 1,
  },
  umtext: {
    fontWeight: "bold",
    fontSize: 35,
    marginBottom: 15,
    color: "#d9d9d9",
    textAlign: 'center'
  },
  item: {
    borderWidth: 2,
    padding: 15,
    marginTop: 16,
    borderColor: '#fff',
    borderRadius: 10,
    color: '#fff',
    backgroundColor: '#CE93D8',
  },
  input: {
    borderColor: 'gray',
    backgroundColor: '#fbe3ff',
    color: '#000',
    height: 45,
    borderWidth: 2.5,
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
    // textAlign: 'center',
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#CE93D8",
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    marginLeft: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 14.5,
    fontWeight: 'bold'
  },
  button1: {
    backgroundColor: "#CE93D8",
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    marginLeft: 8,
    paddingLeft: 10,
    paddingRight: 10,
  },
  umview1: {
    flexDirection: 'row',
    margin: 15,
    justifyContent: 'center',
  },
  umbutton1: {
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
  },
  umbtnText: {
    color: "#000",
    fontSize: 12,
    fontWeight: 'bold',
  },
});

