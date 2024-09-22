import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  const [diceRolls, setDiceRolls] = useState([0, 1, 2]);

  return (
    <View>
      <Button
        title="Roll dice!"
        onPress={() => {   
          const newRolls = [...diceRolls, diceRolls.length-1, diceRolls.length, diceRolls.length+1];
          setDiceRolls(newRolls);
        }}
      />
      {diceRolls.map((diceRoll, index) => (
        <Text style={{ fontSize: 24 }} key={index}>
          {diceRoll}
        </Text>
      ))}
    </View>
  );
}