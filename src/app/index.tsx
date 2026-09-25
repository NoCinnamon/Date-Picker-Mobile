import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleSetPicker = () => {
    setShowPicker(!showPicker);
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainArea}>
        <Text style={styles.displayDatePrompt}>Pick a date:</Text> 
        <TextInput style={styles.displayDate}>{date.toDateString()}</TextInput>
      </View>
      
      <Pressable style={styles.button} onPress={toggleSetPicker}>
        <Text style={styles.buttonText}>{date.toDateString()}</Text>
      </Pressable>
      {showPicker && (
        <DateTimePicker
          mode="date"
          value={date}
          display="spinner"
          onValueChange={(_Eevent, selectDate) => {
            setDate(selectDate);
          }}
        />
      )}
      {!showPicker && <Pressable onPress={toggleSetPicker} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },

  mainArea: {
    margin: 18,
    marginBottom:60,
  },

  displayDatePrompt: {
    fontWeight: 'bold',
    fontSize: 28,
    alignItems:'flex-start',
  },

  displayDate: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  button: {
    backgroundColor: "#1a73e8",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
