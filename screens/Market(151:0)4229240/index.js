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
      <View style={styles.View_151_409}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
          }}
          style={styles.ImageBackground_I151_409_144_381}
        />
        <View style={styles.View_I151_409_144_386}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
            }}
            style={styles.ImageBackground_I151_409_144_387}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_I151_409_144_391}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_I151_409_144_395}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/665c/8610/b99729a49033a1a93a78f519fb447096"
          }}
          style={styles.ImageBackground_I151_409_144_400}
        />
      </View>
      <View style={styles.View_151_2}>
        <View style={styles.View_I151_2_144_2324}>
          <Text style={styles.Text_I151_2_144_2324}>Filter</Text>
        </View>
        <View style={styles.View_I151_2_144_2323}>
          <Text style={styles.Text_I151_2_144_2323}>Market</Text>
        </View>
        <View style={styles.View_I151_2_144_2329}>
          <Text style={styles.Text_I151_2_144_2329}>Back</Text>
        </View>
      </View>
      <View style={styles.View_151_3}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdb5/52eb/57549a6c34a2f9d5c44b0bc3442e36e5"
          }}
          style={styles.ImageBackground_I151_3_144_2659}
        />
        <View style={styles.View_I151_3_144_2660}>
          <Text style={styles.Text_I151_3_144_2660}>Search</Text>
        </View>
      </View>
      <View style={styles.View_151_100}>
        <View style={styles.View_151_86}>
          <View style={styles.View_I151_86_151_68} />
          <View style={styles.View_I151_86_151_69}>
            <Text style={styles.Text_I151_86_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I151_86_151_74}>
            <Text style={styles.Text_I151_86_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_151_92}>
          <View style={styles.View_I151_92_151_68} />
          <View style={styles.View_I151_92_151_69}>
            <Text style={styles.Text_I151_92_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I151_92_151_74}>
            <Text style={styles.Text_I151_92_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_151_96}>
          <View style={styles.View_I151_96_151_68} />
          <View style={styles.View_I151_96_151_69}>
            <Text style={styles.Text_I151_96_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I151_96_151_74}>
            <Text style={styles.Text_I151_96_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_151_217}>
          <View style={styles.View_I151_217_151_68} />
          <View style={styles.View_I151_217_151_69}>
            <Text style={styles.Text_I151_217_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I151_217_151_74}>
            <Text style={styles.Text_I151_217_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_151_90}>
          <Text style={styles.Text_151_90}>Hot deals</Text>
        </View>
      </View>
      <View style={styles.View_151_101}>
        <View style={styles.View_151_102}>
          <View style={styles.View_I151_102_151_68} />
          <View style={styles.View_I151_102_151_69}>
            <Text style={styles.Text_I151_102_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I151_102_151_74}>
            <Text style={styles.Text_I151_102_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_151_103}>
          <View style={styles.View_I151_103_151_68} />
          <View style={styles.View_I151_103_151_69}>
            <Text style={styles.Text_I151_103_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I151_103_151_74}>
            <Text style={styles.Text_I151_103_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_151_104}>
          <View style={styles.View_I151_104_151_68} />
          <View style={styles.View_I151_104_151_69}>
            <Text style={styles.Text_I151_104_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I151_104_151_74}>
            <Text style={styles.Text_I151_104_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_151_221}>
          <View style={styles.View_I151_221_151_68} />
          <View style={styles.View_I151_221_151_69}>
            <Text style={styles.Text_I151_221_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I151_221_151_74}>
            <Text style={styles.Text_I151_221_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_151_105}>
          <Text style={styles.Text_151_105}>Trending</Text>
        </View>
      </View>
      <View style={styles.View_151_115}>
        <View style={styles.View_151_116}>
          <View style={styles.View_I151_116_151_68} />
          <View style={styles.View_I151_116_151_69}>
            <Text style={styles.Text_I151_116_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I151_116_151_74}>
            <Text style={styles.Text_I151_116_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_151_117}>
          <View style={styles.View_I151_117_151_68} />
          <View style={styles.View_I151_117_151_69}>
            <Text style={styles.Text_I151_117_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I151_117_151_74}>
            <Text style={styles.Text_I151_117_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_151_118}>
          <View style={styles.View_I151_118_151_68} />
          <View style={styles.View_I151_118_151_69}>
            <Text style={styles.Text_I151_118_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I151_118_151_74}>
            <Text style={styles.Text_I151_118_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_151_119}>
          <Text style={styles.Text_151_119}>Deals</Text>
        </View>
      </View>
      <View style={styles.View_151_6}>
        <View style={styles.View_I151_6_150_580}>
          <View style={styles.View_I151_6_150_581} />
          <View style={styles.View_I151_6_150_582}>
            <View style={styles.View_I151_6_150_583} />
          </View>
        </View>
        <View style={styles.View_I151_6_150_584}>
          <View style={styles.View_I151_6_150_618} />
          <View style={styles.View_I151_6_150_619} />
          <View style={styles.View_I151_6_150_620} />
          <View style={styles.View_I151_6_150_621} />
          <View style={styles.View_I151_6_150_622} />
        </View>
        <View style={styles.View_I151_6_150_614} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_151_409: {
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
  ImageBackground_I151_409_144_381: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.273224043715847%")
  },
  View_I151_409_144_386: {
    flexGrow: 1,
    width: wp("17.7763671875%"),
    height: hp("1.548636415617062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31106770833334%"),
    top: hp("2.3675803929730193%")
  },
  ImageBackground_I151_409_144_387: {
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
  ImageBackground_I151_409_144_391: {
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
  ImageBackground_I151_409_144_395: {
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
  ImageBackground_I151_409_144_400: {
    flexGrow: 1,
    width: wp("7.580311584472656%"),
    height: hp("1.5148725665983607%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.920963541666667%"),
    top: hp("2.34528421704235%")
  },
  View_151_2: {
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
  View_I151_2_144_2324: {
    flexGrow: 1,
    width: wp("10.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.06666666666668%"),
    top: hp("1.0928961748633892%")
  },
  Text_I151_2_144_2324: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_2_144_2323: {
    flexGrow: 1,
    width: wp("27.200000000000003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%"),
    top: hp("0%")
  },
  Text_I151_2_144_2323: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_2_144_2329: {
    flexGrow: 1,
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0928961748633892%")
  },
  Text_I151_2_144_2329: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_3: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("17.48633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I151_3_144_2659: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I151_3_144_2660: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.185792349726775%")
  },
  Text_I151_3_144_2660: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_100: {
    width: wp("130.13333333333333%"),
    minWidth: wp("130.13333333333333%"),
    height: hp("30.327868852459016%"),
    minHeight: hp("30.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("28.688524590163933%")
  },
  View_151_86: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.147540983606557%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_86_151_68: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I151_86_151_69: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234972%")
  },
  Text_I151_86_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_86_151_74: {
    flexGrow: 1,
    width: wp("12.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.857923497267763%")
  },
  Text_I151_86_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_92: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.6%"),
    top: hp("6.147540983606557%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_92_151_68: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I151_92_151_69: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234972%")
  },
  Text_I151_92_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_92_151_74: {
    flexGrow: 1,
    width: wp("12.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.857923497267763%")
  },
  Text_I151_92_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_96: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.2%"),
    top: hp("6.147540983606557%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_96_151_68: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I151_96_151_69: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234972%")
  },
  Text_I151_96_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_96_151_74: {
    flexGrow: 1,
    width: wp("12.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.857923497267763%")
  },
  Text_I151_96_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_217: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("100.8%"),
    top: hp("6.147540983606557%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_217_151_68: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I151_217_151_69: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234972%")
  },
  Text_I151_217_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_217_151_74: {
    flexGrow: 1,
    width: wp("12.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.857923497267763%")
  },
  Text_I151_217_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_90: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_151_90: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_101: {
    width: wp("130.13333333333333%"),
    minWidth: wp("130.13333333333333%"),
    height: hp("30.327868852459016%"),
    minHeight: hp("30.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("63.387978142076506%")
  },
  View_151_102: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.147540983606561%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_102_151_68: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I151_102_151_69: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234972%")
  },
  Text_I151_102_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_102_151_74: {
    flexGrow: 1,
    width: wp("12.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.85792349726775%")
  },
  Text_I151_102_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_103: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.6%"),
    top: hp("6.147540983606561%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_103_151_68: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I151_103_151_69: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234972%")
  },
  Text_I151_103_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_103_151_74: {
    flexGrow: 1,
    width: wp("12.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.85792349726775%")
  },
  Text_I151_103_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_104: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.2%"),
    top: hp("6.147540983606561%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_104_151_68: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I151_104_151_69: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234972%")
  },
  Text_I151_104_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_104_151_74: {
    flexGrow: 1,
    width: wp("12.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.85792349726775%")
  },
  Text_I151_104_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_221: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("100.8%"),
    top: hp("6.147540983606561%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_221_151_68: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I151_221_151_69: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234972%")
  },
  Text_I151_221_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_221_151_74: {
    flexGrow: 1,
    width: wp("12.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.85792349726775%")
  },
  Text_I151_221_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_105: {
    width: wp("27.200000000000003%"),
    minWidth: wp("27.200000000000003%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_151_105: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_115: {
    width: wp("96.53333333333333%"),
    minWidth: wp("96.53333333333333%"),
    height: hp("30.327868852459016%"),
    minHeight: hp("30.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("98.08743169398907%")
  },
  View_151_116: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.147540983606547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_116_151_68: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I151_116_151_69: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234987%")
  },
  Text_I151_116_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_116_151_74: {
    flexGrow: 1,
    width: wp("12.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.857923497267763%")
  },
  Text_I151_116_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_117: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.6%"),
    top: hp("6.147540983606547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_117_151_68: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I151_117_151_69: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234987%")
  },
  Text_I151_117_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_117_151_74: {
    flexGrow: 1,
    width: wp("12.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.857923497267763%")
  },
  Text_I151_117_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_118: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.2%"),
    top: hp("6.147540983606547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_118_151_68: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I151_118_151_69: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234987%")
  },
  Text_I151_118_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_118_151_74: {
    flexGrow: 1,
    width: wp("12.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.857923497267763%")
  },
  Text_I151_118_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_119: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_151_119: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_6: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.407103825136613%"),
    minHeight: hp("11.407103825136613%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99.59016393442623%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_6_150_580: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.06830601092896416%")
  },
  View_I151_6_150_581: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_I151_6_150_582: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    top: hp("9.426229508196712%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_I151_6_150_583: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I151_6_150_584: {
    flexGrow: 1,
    width: wp("85.33333333333334%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("2.0491803278688536%")
  },
  View_I151_6_150_618: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(93, 176, 117, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I151_6_150_619: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.199999999999996%"),
    top: hp("0%"),
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I151_6_150_620: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.4%"),
    top: hp("0%"),
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I151_6_150_621: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.6%"),
    top: hp("0%"),
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I151_6_150_622: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.8%"),
    top: hp("0%"),
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I151_6_150_614: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(189, 197, 205, 1)"
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
