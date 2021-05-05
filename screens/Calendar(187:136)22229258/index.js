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
      <View style={styles.View_187_137} />
      <View style={styles.View_187_190}>
        <View style={styles.View_I187_190_144_356}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
            }}
            style={styles.ImageBackground_I187_190_144_356_144_381}
          />
          <View style={styles.View_I187_190_144_356_144_386}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
              }}
              style={styles.ImageBackground_I187_190_144_356_144_387}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
              }}
              style={styles.ImageBackground_I187_190_144_356_144_391}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
              }}
              style={styles.ImageBackground_I187_190_144_356_144_395}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1824/9aa5/06f6b9995237174c8b3aedbe446c444a"
            }}
            style={styles.ImageBackground_I187_190_144_356_144_400}
          />
        </View>
      </View>
      <View style={styles.View_187_255}>
        <View style={styles.View_187_250} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9791/1303/c0697178f5aee98e18f5f0bd9ca4093c"
          }}
          style={styles.ImageBackground_187_254}
        />
      </View>
      <View style={styles.View_187_256}>
        <View style={styles.View_187_257}>
          <View style={styles.View_I187_257_151_68} />
          <View style={styles.View_I187_257_151_69}>
            <Text style={styles.Text_I187_257_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I187_257_151_74}>
            <Text style={styles.Text_I187_257_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_187_258}>
          <View style={styles.View_I187_258_151_68} />
          <View style={styles.View_I187_258_151_69}>
            <Text style={styles.Text_I187_258_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I187_258_151_74}>
            <Text style={styles.Text_I187_258_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_187_259}>
          <View style={styles.View_I187_259_151_68} />
          <View style={styles.View_I187_259_151_69}>
            <Text style={styles.Text_I187_259_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I187_259_151_74}>
            <Text style={styles.Text_I187_259_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_187_260}>
          <View style={styles.View_I187_260_151_68} />
          <View style={styles.View_I187_260_151_69}>
            <Text style={styles.Text_I187_260_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I187_260_151_74}>
            <Text style={styles.Text_I187_260_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_187_261}>
          <Text style={styles.Text_187_261}>Hot deals</Text>
        </View>
      </View>
      <View style={styles.View_187_262}>
        <View style={styles.View_187_263}>
          <View style={styles.View_I187_263_151_68} />
          <View style={styles.View_I187_263_151_69}>
            <Text style={styles.Text_I187_263_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I187_263_151_74}>
            <Text style={styles.Text_I187_263_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_187_264}>
          <View style={styles.View_I187_264_151_68} />
          <View style={styles.View_I187_264_151_69}>
            <Text style={styles.Text_I187_264_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I187_264_151_74}>
            <Text style={styles.Text_I187_264_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_187_265}>
          <View style={styles.View_I187_265_151_68} />
          <View style={styles.View_I187_265_151_69}>
            <Text style={styles.Text_I187_265_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I187_265_151_74}>
            <Text style={styles.Text_I187_265_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_187_266}>
          <View style={styles.View_I187_266_151_68} />
          <View style={styles.View_I187_266_151_69}>
            <Text style={styles.Text_I187_266_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I187_266_151_74}>
            <Text style={styles.Text_I187_266_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_187_267}>
          <Text style={styles.Text_187_267}>Trending</Text>
        </View>
      </View>
      <View style={styles.View_187_191}>
        <View style={styles.View_I187_191_144_2323}>
          <Text style={styles.Text_I187_191_144_2323}>Market</Text>
        </View>
        <View style={styles.View_I187_191_144_2329}>
          <Text style={styles.Text_I187_191_144_2329}>Back</Text>
        </View>
      </View>
      <View style={styles.View_187_192}>
        <View style={styles.View_I187_192_150_580}>
          <View style={styles.View_I187_192_150_581} />
          <View style={styles.View_I187_192_150_582}>
            <View style={styles.View_I187_192_150_583} />
          </View>
        </View>
        <View style={styles.View_I187_192_150_584}>
          <View style={styles.View_I187_192_150_618} />
          <View style={styles.View_I187_192_150_619} />
          <View style={styles.View_I187_192_150_620} />
          <View style={styles.View_I187_192_150_621} />
          <View style={styles.View_I187_192_150_622} />
        </View>
        <View style={styles.View_I187_192_150_614} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_187_137: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(93, 176, 117, 1)"
  },
  View_187_190: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I187_190_144_356: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I187_190_144_356_144_381: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.273224043715847%")
  },
  View_I187_190_144_356_144_386: {
    flexGrow: 1,
    width: wp("17.7763671875%"),
    height: hp("1.548636415617062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31106770833334%"),
    top: hp("2.3675803929730193%")
  },
  ImageBackground_I187_190_144_356_144_387: {
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
  ImageBackground_I187_190_144_356_144_391: {
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
  ImageBackground_I187_190_144_356_144_395: {
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
  ImageBackground_I187_190_144_356_144_400: {
    flexGrow: 1,
    width: wp("7.580311584472656%"),
    height: hp("1.5148725665983607%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.920963541666667%"),
    top: hp("2.34528421704235%")
  },
  View_187_255: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("17.48633879781421%")
  },
  View_187_250: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  ImageBackground_187_254: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("8.606557377049182%")
  },
  View_187_256: {
    width: wp("130.13333333333333%"),
    minWidth: wp("130.13333333333333%"),
    height: hp("30.327868852459016%"),
    minHeight: hp("30.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("53.551912568306015%")
  },
  View_187_257: {
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
  View_I187_257_151_68: {
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
  View_I187_257_151_69: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234965%")
  },
  Text_I187_257_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I187_257_151_74: {
    flexGrow: 1,
    width: wp("12.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.85792349726774%")
  },
  Text_I187_257_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_258: {
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
  View_I187_258_151_68: {
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
  View_I187_258_151_69: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234965%")
  },
  Text_I187_258_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I187_258_151_74: {
    flexGrow: 1,
    width: wp("12.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.85792349726774%")
  },
  Text_I187_258_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_259: {
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
  View_I187_259_151_68: {
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
  View_I187_259_151_69: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234965%")
  },
  Text_I187_259_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I187_259_151_74: {
    flexGrow: 1,
    width: wp("12.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.85792349726774%")
  },
  Text_I187_259_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_260: {
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
  View_I187_260_151_68: {
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
  View_I187_260_151_69: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234965%")
  },
  Text_I187_260_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I187_260_151_74: {
    flexGrow: 1,
    width: wp("12.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.85792349726774%")
  },
  Text_I187_260_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_261: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_187_261: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_262: {
    width: wp("130.13333333333333%"),
    minWidth: wp("130.13333333333333%"),
    height: hp("30.327868852459016%"),
    minHeight: hp("30.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("88.25136612021858%")
  },
  View_187_263: {
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
  View_I187_263_151_68: {
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
  View_I187_263_151_69: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234972%")
  },
  Text_I187_263_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I187_263_151_74: {
    flexGrow: 1,
    width: wp("12.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.85792349726775%")
  },
  Text_I187_263_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_264: {
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
  View_I187_264_151_68: {
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
  View_I187_264_151_69: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234972%")
  },
  Text_I187_264_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I187_264_151_74: {
    flexGrow: 1,
    width: wp("12.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.85792349726775%")
  },
  Text_I187_264_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_265: {
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
  View_I187_265_151_68: {
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
  View_I187_265_151_69: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234972%")
  },
  Text_I187_265_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I187_265_151_74: {
    flexGrow: 1,
    width: wp("12.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.85792349726775%")
  },
  Text_I187_265_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_266: {
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
  View_I187_266_151_68: {
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
  View_I187_266_151_69: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234972%")
  },
  Text_I187_266_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I187_266_151_74: {
    flexGrow: 1,
    width: wp("12.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.85792349726775%")
  },
  Text_I187_266_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_267: {
    width: wp("27.200000000000003%"),
    minWidth: wp("27.200000000000003%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_187_267: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_191: {
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
  View_I187_191_144_2323: {
    flexGrow: 1,
    width: wp("27.200000000000003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%"),
    top: hp("0%")
  },
  Text_I187_191_144_2323: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I187_191_144_2329: {
    flexGrow: 1,
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0928961748633892%")
  },
  Text_I187_191_144_2329: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_192: {
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
  View_I187_192_150_580: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.06830601092896416%")
  },
  View_I187_192_150_581: {
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
  View_I187_192_150_582: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    top: hp("9.426229508196712%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_I187_192_150_583: {
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
  View_I187_192_150_584: {
    flexGrow: 1,
    width: wp("85.33333333333334%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("2.0491803278688536%")
  },
  View_I187_192_150_618: {
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
  View_I187_192_150_619: {
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
  View_I187_192_150_620: {
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
  View_I187_192_150_621: {
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
  View_I187_192_150_622: {
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
  View_I187_192_150_614: {
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
