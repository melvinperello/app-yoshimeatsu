import React from "react";
import { ActivityIndicator } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";

import { Button } from "react-native-elements";
import { ThemeProvider } from "react-native-elements";
import { Image } from "react-native-elements";
import { Text } from "react-native-elements";

export default class MenuHome extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props){
    super(props)
    this.navMenuSelection = this.navMenuSelection.bind(this)
  }

  navMenuSelection(){
    const { navigate } = this.props.navigation;
    navigate('MenuSelection',{name: 'MenuSelection'});
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          {/* Icon and Name */}
          <View style={styles.viewFavIco}>
            <Text h1>Yoshimeatsu</Text>
            <Text style={{ fontSize: 17 }}>TOMAS MORATO</Text>
            <View style={{ paddingTop: 15 }}>
              <Image
                source={require("../assets/img/yoshimeatsu-icon.png")}
                style={{ width: 200, height: 200 }}
                PlaceholderContent={<ActivityIndicator />}
              />
            </View>
          </View>
          {/* Table No */}
          <View style={styles.viewTableNo}>
            <Text h2>Table # 01</Text>
          </View>
          {/* Buttons */}
          <View style={styles.viewButton}>
            <Button onPress={this.navMenuSelection} style={{ backgroundColor: "#B32C29" }} title="Open Menu" />
          </View>
        </View>
      </ThemeProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  },
  viewFavIco: {
    alignItems: "center"
  },
  viewTableNo: {
    paddingTop: 50,
    paddingBottom: 50,
    alignItems: "center"
  },
  viewButton: {
    alignItems: "stretch"
  }
});

const theme = {
  Button: {
    raised: true,
    titleStyle: {
      color: "white"
    },
    buttonStyle: {
      backgroundColor: "#B32C29",
      height: 50
    },
    containerStyle: {
      marginLeft: 20,
      marginRight: 20
    }
  }
};
