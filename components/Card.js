import React from 'react';
import { StyleSheet, Pressable, Text} from 'react-native';

const Card = ({onPress, isTurnedOver, card}) => {
    return (
        <Pressable  onPress={onPress}  style={ isTurnedOver ? styles.cardUp : styles.cardDown} >
            {
            isTurnedOver ? (    
        <Text style={styles.text} >{card}</Text>
        ) : (
        <Text style={styles.text} >?</Text>
            ) }
        </Pressable>
    );
}

const styles = StyleSheet.create({
    cardUp:{
    width: 100,
    height: 100,
    margin: 10,
    alignItems: 'center',   
    justifyContent: 'center',
    backgroundColor:'#1e293b',
    borderWidth: 10,
    borderColor: '#334155',
},
 cardDown:{
    width: 100,
    height: 100,
    margin: 10,
    borderWidth: 10,
    borderColor: '#334155',
    alignItems: 'center',  
    justifyContent: 'center',
    backgroundColor:'#1e293b'
},
text: {
    fontSize:46,
    color:'#334155'
}
})

export default Card;
