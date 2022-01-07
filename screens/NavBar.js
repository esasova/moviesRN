import React, { PureComponent } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


class NavBar extends PureComponent {
  render() {
    const { navigation, main } = this.props
    return (
      <SafeAreaView>
        {main ? (
          <View>
            <TouchableOpacity
            onPress={() => {
              navigation.navigate('Search')
            }}
            >
              <Icon name = {'search-outline'} size={40} color={'red'} />
            </TouchableOpacity>
          </View>
        )
        : (
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack()
              }}
            >
            <Icon name = {'chevron-back'} size={40} color={'red'}/>
            </TouchableOpacity>
          </View>
        )
      }
      </SafeAreaView>
    )
  }
}
const style = StyleSheet.create({
  mainNav: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
});

export default NavBar
