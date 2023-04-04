//react native boiler plate
import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const Drink = props => {
    const [count, setCount] = useState(0);
    const windowWidth = Dimensions.get('window').width;    

    return (
      <View style={styles.container}>
        <View style={styles.row}>

            <TouchableOpacity
                style={styles.subbutton}
                onPress={() => setCount(count - 1)}
            >
                <Text style={styles.btext}>-1</Text>
            </TouchableOpacity>
            
            <Text style={styles.text}>{props.name}: </Text>
            
            
            <Text style={styles.text}>{count}</Text>
            
            <TouchableOpacity
                style={styles.addbutton}
                onPress={() => setCount(count + 1)}
                
            >
                <Text style={styles.btext}>+1</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
    };

export default Drink;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    addbutton: {
        alignSelf: 'right',
        justifyContent: 'right',
        backgroundColor: 'green',
        padding: 10,
        margin: 10,
        width: 150,
        height: 80,
        borderRadius: 10,
    },
    subbutton: {
        alignItems: 'edge',
        justifyContent: 'center',
        backgroundColor: 'red',
        padding: 10,
        margin: 10,
        width: 150,
        height: 80,
        borderRadius: 10,
        
    },
    text: {
        fontSize: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'grey',
        width: 500,
        
        
    },
    btext: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
