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
      <View style={styles.View_152_1}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
          }}
          style={styles.ImageBackground_I152_1_144_381}
        />
        <View style={styles.View_I152_1_144_386}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
            }}
            style={styles.ImageBackground_I152_1_144_387}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_I152_1_144_391}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_I152_1_144_395}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/665c/8610/b99729a49033a1a93a78f519fb447096"
          }}
          style={styles.ImageBackground_I152_1_144_400}
        />
      </View>
      <View style={styles.View_152_2}>
        <View style={styles.View_I152_2_144_2324}>
          <Text style={styles.Text_I152_2_144_2324}>Filter</Text>
        </View>
        <View style={styles.View_I152_2_144_2323}>
          <Text style={styles.Text_I152_2_144_2323}>Messages</Text>
        </View>
        <View style={styles.View_I152_2_144_2329}>
          <Text style={styles.Text_I152_2_144_2329}>Back</Text>
        </View>
      </View>
      <View style={styles.View_152_3}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdb5/52eb/57549a6c34a2f9d5c44b0bc3442e36e5"
          }}
          style={styles.ImageBackground_I152_3_144_2659}
        />
        <View style={styles.View_I152_3_144_2660}>
          <Text style={styles.Text_I152_3_144_2660}>Message here...</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94a/b685/40bdc52fd9e7685b5d9abe83972b72da"
          }}
          style={styles.ImageBackground_I152_3_152_168}
        />
      </View>
      <View style={styles.View_152_108}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07e7/3810/46a0fc89a0685cf8f86e45992168f29b"
          }}
          style={styles.ImageBackground_I152_108_152_95}
        />
        <View style={styles.View_I152_108_152_96}>
          <Text style={styles.Text_I152_108_152_96}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            fringilla quam eu faci lisis mollis.{" "}
          </Text>
        </View>
      </View>
      <View style={styles.View_152_119}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07e7/3810/46a0fc89a0685cf8f86e45992168f29b"
          }}
          style={styles.ImageBackground_I152_119_152_95}
        />
        <View style={styles.View_I152_119_152_96}>
          <Text style={styles.Text_I152_119_152_96}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            fringilla quam eu faci lisis mollis.{" "}
          </Text>
        </View>
      </View>
      <View style={styles.View_152_111}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f166/3029/38b2645b437026488233e97f1aa1a5f4"
          }}
          style={styles.ImageBackground_I152_111_152_101}
        />
        <View style={styles.View_I152_111_152_102}>
          <Text style={styles.Text_I152_111_152_102}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </Text>
        </View>
      </View>
      <View style={styles.View_152_116}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f166/3029/38b2645b437026488233e97f1aa1a5f4"
          }}
          style={styles.ImageBackground_I152_116_152_101}
        />
        <View style={styles.View_I152_116_152_102}>
          <Text style={styles.Text_I152_116_152_102}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_152_1: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I152_1_144_381: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.273224043715847%")
  },
  View_I152_1_144_386: {
    flexGrow: 1,
    width: wp("17.7763671875%"),
    height: hp("1.548636415617062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31106770833334%"),
    top: hp("2.3675803929730193%")
  },
  ImageBackground_I152_1_144_387: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.288932291666669%"),
    top: hp("0.00036687798838785923%")
  },
  ImageBackground_I152_1_144_391: {
    width: wp("4.072633616129558%"),
    minWidth: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    minHeight: hp("1.49802888026003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.873828124999989%"),
    top: hp("0%")
  },
  ImageBackground_I152_1_144_395: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.045893101092895794%")
  },
  ImageBackground_I152_1_144_400: {
    flexGrow: 1,
    width: wp("7.580311584472656%"),
    height: hp("1.5148725665983607%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.920963541666667%"),
    top: hp("2.34528421704235%")
  },
  View_152_2: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("8.19672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I152_2_144_2324: {
    flexGrow: 1,
    width: wp("10.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.06666666666668%"),
    top: hp("1.0928961748633892%")
  },
  Text_I152_2_144_2324: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I152_2_144_2323: {
    flexGrow: 1,
    width: wp("39.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.4%"),
    top: hp("0%")
  },
  Text_I152_2_144_2323: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I152_2_144_2329: {
    flexGrow: 1,
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0928961748633892%")
  },
  Text_I152_2_144_2329: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_152_3: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("101.91256830601093%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I152_3_144_2659: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I152_3_144_2660: {
    flexGrow: 1,
    width: wp("32.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("2.1857923497267677%")
  },
  Text_I152_3_144_2660: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I152_3_152_168: {
    flexGrow: 1,
    width: wp("9.066666666666666%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.26666666666667%"),
    top: hp("1.0928961748633839%")
  },
  View_152_108: {
    width: wp("62.66666666666667%"),
    minWidth: wp("62.66666666666667%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("17.48633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I152_108_152_95: {
    flexGrow: 1,
    width: wp("62.66666666666667%"),
    height: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I152_108_152_96: {
    flexGrow: 1,
    width: wp("54.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.04918032786885%")
  },
  Text_I152_108_152_96: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_152_119: {
    width: wp("62.66666666666667%"),
    minWidth: wp("62.66666666666667%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("64.75409836065575%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I152_119_152_95: {
    flexGrow: 1,
    width: wp("62.66666666666667%"),
    height: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I152_119_152_96: {
    flexGrow: 1,
    width: wp("54.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.0491803278688394%")
  },
  Text_I152_119_152_96: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_152_111: {
    width: wp("62.66666666666667%"),
    minWidth: wp("62.66666666666667%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("36.885245901639344%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I152_111_152_101: {
    flexGrow: 1,
    width: wp("62.66666666666667%"),
    height: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I152_111_152_102: {
    flexGrow: 1,
    width: wp("54.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("2.0491803278688536%")
  },
  Text_I152_111_152_102: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_152_116: {
    width: wp("62.66666666666667%"),
    minWidth: wp("62.66666666666667%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%"),
    top: hp("50.81967213114754%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I152_116_152_101: {
    flexGrow: 1,
    width: wp("62.66666666666667%"),
    height: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I152_116_152_102: {
    flexGrow: 1,
    width: wp("54.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("2.0491803278688465%")
  },
  Text_I152_116_152_102: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
