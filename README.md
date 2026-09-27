## Date Picker Practice

- iOS: uses the `DateTimePicker` component from the `@react-native-community/datetimepicker` package to pick a date.

## Flow:

- The screen starts with the picker closed, because showPicker's initial value is false.
- Press the blue button, it runs toggleSetPicker.
toggleSetPicker flips showPicker to true. React shows the date picker.
- When spin the picker to a new date. setDate saves that date. The text on the screen updates.
- Press the button again. showPicker flips back to false. The picker hides.

