import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from 'react-native-elements';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          title="Take a Pic!!"
          type="outline"
          color="red"
          onPress={() => navigate('Camera')}
        />  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:30
  },
});

export default HomeScreen;