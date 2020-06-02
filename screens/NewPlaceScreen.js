import React from 'react';
import { ScrollView, View, Button, Text, TextInput, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const NewPlaceScreen = props => {
    return (
        <ScrollView>
          <View style={styles.form}>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.textInput} />
            <Button
                 style={styles.tosinButton} 
                 title="Save Place" 
                 color={Colors.primary} 
                 onPress = {() => {}} 
            />
        </View>  
        </ScrollView>
        
    );
};

NewPlaceScreen.navigationOptions = {
    headerTitle: 'Add Place'
};

const styles = StyleSheet.create({

    form: {
        margin: 30,

        borderBottomColor: 'red',
        borderBottomWidth: 1,
        borderTopColor: 'red',
        borderTopWidth: 1,
        borderLeftColor: 'red',
        borderLeftWidth: 1,
        borderRightColor: 'red',
        borderRightWidth: 1
    },

    label: {
        fontSize: 18,
        marginBottom: 15,

        borderBottomColor: 'red',
        borderBottomWidth: 1,
        borderTopColor: 'red',
        borderTopWidth: 1,
        borderLeftColor: 'red',
        borderLeftWidth: 1,
        borderRightColor: 'red',
        borderRightWidth: 1
    },

    textInput: {
        //borderBottomColor: '#ccc',
        //borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2,

        borderBottomColor: 'red',
        borderBottomWidth: 1,
        borderTopColor: 'red',
        borderTopWidth: 1,
        borderLeftColor: 'red',
        borderLeftWidth: 1,
        borderRightColor: 'red',
        borderRightWidth: 1
    },

    tosinButton: {

        borderBottomColor: 'red',
        borderBottomWidth: 1,
        borderTopColor: 'red',
        borderTopWidth: 10,
        borderLeftColor: 'red',
        borderLeftWidth: 1,
        borderRightColor: 'red',
        borderRightWidth: 1

    }

});

export default NewPlaceScreen;