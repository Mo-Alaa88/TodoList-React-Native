import React ,{useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './cmponents/header.js';
import TodoItem from './cmponents/todoItem.js';
import AddTodo from './cmponents/addTodo.js';


export default function App() {
  const [todos, setTodos] = useState([
    {text:'buy coffe', key:'1'},
    {text:'create an App', key:'2'},
    {text:'play on the switch', key:'3'},
  ]);
  const pressHandler = (key) => {
    setTodos((preveTodos)=>{
      return preveTodos.filter(todos=> todos.key != key);
    })
  };

  const submitHandler=(text)=>{
    if(text.length>3){
      setTodos((preveTodos)=>(
          [
            {text:text , key:Math.random().toString()},
            ...preveTodos
          ]
        )
      )
    }else{
      Alert.alert('oops!', 'Todos must be over 3 chars long',[
        {text:'Undersood',onPress:()=>console.log('alert')
        }
      ])
    }
  }
  return (
    <TouchableWithoutFeedback
    onPress={()=>{
      Keyboard.dismiss();
    }}
    >
      <View style={styles.container}>
        {/* to header */}
        <Header/>
        <View style={styles.content}>
          {/* to form */}
          <AddTodo submitHandler={submitHandler}/>
          {/* to todo */}
          <View style={styles.list}>
            <FlatList
            // numColumns={2}
            data={todos}
            renderItem={({item})=>(
              <TodoItem item={item} pressHandler={pressHandler}/>
              )}
              />
          </View>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:{
    padding:40,
  },
  list:{
    margin:20
  }
});
