import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Card } from '../components';

const cards = [

  "🐷",
  "🪝",
  "⚛️",
  "🔑",
  "🥕",
  "🥑",
 
]



export default function Game() {
  const [board, setBoard] = useState(() => shuffle([...cards, ...cards]));
  const [selectedCard, setSelectedCard]  = useState([]);
  const [matchedCard, setMatchedCard] = useState([]);
  const [score, setScore] = useState(0);


useEffect(() => {
  if (selectedCard.length < 2) return;
  if (board[selectedCard[0]] === board[selectedCard[1]]) {
    setMatchedCard([...matchedCard, ...selectedCard]);
    setSelectedCard([]);
    
  } else {
    const timeoutId  = setTimeout(() => setSelectedCard([]), 1000 );
    return () => clearTimeout(timeoutId); 
}

}, [selectedCard])

const handleTapCard = (index) => {
if(selectedCard.lenght >= 2 || selectedCard.includes(index)) return;
setSelectedCard([...selectedCard, index]);
setScore(score + 1);
}

const didPlayerWin = () => matchedCard.length === board.length;

const resetGame = () => {
setMatchedCard([]);
setScore(0);
setSelectedCard([]);
}

return (
    <View style={styles.container}>
<Text style={styles.title} >{didPlayerWin()? "Bravo" : "Memoire"}</Text>
<Text style={styles.title} >Score : {score}</Text>
    <View style={styles.board} >
      
       {
        board.map((card, index)  => {
        const isTurnedOver = selectedCard.includes(index) || matchedCard.includes(index);
        return(
          <Card key={index}
            isTurnedOver={isTurnedOver}
           onPress={() => handleTapCard(index)}
            card={card} />
)
} )
      }
      </View>
      {didPlayerWin() && <Button onPress={resetGame} title='reset' />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
  fontSize: 32,
  color:'white',
  fontWeight: '900',
}
, board: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
}
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap the elements at i and randomIndex
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}