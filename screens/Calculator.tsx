import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const Calculator: React.FC = () => {
  const [input, setInput] = useState('0');

  const handleInput = (value: string) => {
    if(value === 'C'){
      setInput('0')
    }
    else
    setInput(input==='0'?value: input+value)
  };
  const handleCaculate = () => {
    try{ 
      const result = eval(input)
      setInput(Number.isFinite(result)?result.toString(): 'Error'); }
      catch{
        setInput('error')
      }
  };
  type layoutItem={inputvalue: String | any ; displayText?:String; style: any; handler: (value:string)=> void;}

  const layout:layoutItem[][] = [
    [
      {inputvalue: '7', style: styles.button, handler: handleInput},
      {inputvalue: '8', style: styles.button, handler: handleInput},
      {inputvalue: '9', style: styles.button, handler: handleInput},
      {inputvalue: '/', displayText: '÷', style: styles.operatorButton, handler: handleInput},
    ],

    [
      {inputvalue: '4', style: styles.button, handler: handleInput},
      {inputvalue: '5', style: styles.button, handler: handleInput},
      {inputvalue: '6', style: styles.button, handler: handleInput},
      {inputvalue: '*', displayText: '×', style: styles.operatorButton, handler: handleInput},
    ],
    [
      {inputvalue: '1', style: styles.button, handler: handleInput},
      {inputvalue: '2', style: styles.button, handler: handleInput},
      {inputvalue: '3', style: styles.button, handler: handleInput},
      {inputvalue: '-', style: styles.operatorButton, handler: handleInput},
    ],
    [
      {inputvalue: '0', style: styles.button, handler: handleInput},
      {inputvalue: '.', style: styles.button, handler: handleInput},
      {inputvalue: 'C', style: styles.button, handler: handleInput},
      {inputvalue: '+', style: styles.operatorButton, handler: handleInput},
    ],
    [
      {inputvalue: '=', style: styles.calculateBtn, handler: handleCaculate},
    ]
  ];
  return (
    <SafeAreaView style={styles.coantainer}>
      <View style={styles.inputCoantainer}>
        <TextInput multiline={false} style={styles.input} editable={false}>
          {input}
        </TextInput>
        </View>
        <View style={styles.buttoncoantainer}>
          {layout.map(rows => (
            <View style={styles.row}>
              {rows.map(row => (
                <TouchableOpacity
                  key={row.inputvalue}
                  style={row.style}
                  onPress={() => row.handler(row.inputvalue)}>
                  <Text style={styles.buttonText}>{row?.displayText? row.displayText : row.inputvalue}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      
    </SafeAreaView>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  coantainer: {
    flex: 2,
    backgroundColor: '#000',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 40,
  },
  buttoncoantainer: {
    flex: 3,
    justifyContent: 'space-around',
  },
  inputCoantainer: {
    height: 160,
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: '#505050',
    flex: 1,
    padding: 16,
    borderRadius: 38,
    margin: 6,
  },
  input: {fontSize: 48, color: '#fff', textAlign: 'right'},
  row: {flexDirection: 'row'},
  buttonText: {fontSize: 28, textAlign: 'center', color: '#fff'},
  calculateBtn:{backgroundColor:'#FF9500',
borderRadius:38,
padding:16,
width:"100%"},
operatorButton:{
  backgroundColor:'#FF9500',
  flex:1,
  padding:16,
  borderRadius:38,
  margin:6
}
});
