import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Input, Button, Card, Text } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';

const InsertionVente = () => {
  const [lubricantType, setLubricantType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSubmit = () => {
    Alert.alert('Vente ajoutée', `Type de lubrifiant: ${lubricantType}\nQuantité: ${quantity}\nDate: ${date.toLocaleDateString()}`);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title style={styles.title}> Faire une Vente</Card.Title>
        <Card.Divider />
        
        <Input style={styles.marginTop}
          placeholder="Type de lubrifiant"
          value={lubricantType}
          onChangeText={setLubricantType}
          leftIcon={{ type: 'font-awesome', name: 'cog' }}
        />
        
        <Input
          placeholder="Quantité"
          value={quantity}
          onChangeText={setQuantity}
          keyboardType="numeric"
          leftIcon={{ type: 'font-awesome', name: 'cubes' }}
        />
        
        <Input
          placeholder="Date"
          value={date.toLocaleDateString()}
          onFocus={showDatepicker}
          editable={false}
          leftIcon={{ type: 'font-awesome', name: 'calendar' }}
        />

        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}

        <Button
          title="Valider"
          onPress={handleSubmit}
          buttonStyle={styles.button}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title  :{
    fontSize:18,
  },
  marginTop:{
    // marginTop: ,
  },
  button: {
    backgroundColor: '#ffcc00',
    marginTop: 10,
  },
});

export default InsertionVente;
