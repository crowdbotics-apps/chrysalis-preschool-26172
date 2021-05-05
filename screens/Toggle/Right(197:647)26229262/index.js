import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_197_698}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdb5/52eb/57549a6c34a2f9d5c44b0bc3442e36e5"
          }}
          style={styles.ImageBackground_197_699}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de28/df3c/29dd49642fec21b5baaf0ba4e6d193d7"
          }}
          style={styles.ImageBackground_197_700}
        />
        <View style={styles.View_197_701}>
          <Text style={styles.Text_197_701}>Photos</Text>
        </View>
        <View style={styles.View_197_702}>
          <Text style={styles.Text_197_702}>Posts</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_197_698: {
    flexGrow: 1,
    width: wp("75.55066079295155%"),
    height: hp("46.2962962962963%"),
    minHeight: hp("46.2962962962963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.334801762114537%"),
    top: hp("26.851851851851855%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_197_699: {
    width: wp("75.55066079295155%"),
    height: hp("46.2962962962963%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_197_700: {
    flexGrow: 1,
    width: wp("37.77533039647577%"),
    height: hp("42.592592592592595%"),
    top: hp("1.8518518518518476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.44493392070484%")
  },
  View_197_701: {
    width: wp("12.114537444933921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.220264317180614%"),
    top: hp("14.814814814814817%")
  },
  Text_197_701: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_197_702: {
    width: wp("9.47136563876652%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.757709251101321%"),
    top: hp("14.814814814814817%")
  },
  Text_197_702: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 108 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
