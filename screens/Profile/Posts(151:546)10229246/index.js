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
      <View style={styles.View_151_641} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/241e/3884/6ca7988b7a199f886a271d24f482c687"
        }}
        style={styles.ImageBackground_151_686}
      />
      <View style={styles.View_151_547}>
        <View style={styles.View_I151_547_144_356}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
            }}
            style={styles.ImageBackground_I151_547_144_356_144_381}
          />
          <View style={styles.View_I151_547_144_356_144_386}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
              }}
              style={styles.ImageBackground_I151_547_144_356_144_387}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
              }}
              style={styles.ImageBackground_I151_547_144_356_144_391}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
              }}
              style={styles.ImageBackground_I151_547_144_356_144_395}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1824/9aa5/06f6b9995237174c8b3aedbe446c444a"
            }}
            style={styles.ImageBackground_I151_547_144_356_144_400}
          />
        </View>
      </View>
      <View style={styles.View_151_548}>
        <View style={styles.View_I151_548_144_2324}>
          <Text style={styles.Text_I151_548_144_2324}>Logout</Text>
        </View>
        <View style={styles.View_I151_548_144_2323}>
          <Text style={styles.Text_I151_548_144_2323}>Profile</Text>
        </View>
        <View style={styles.View_I151_548_144_2329}>
          <Text style={styles.Text_I151_548_144_2329}>Settings</Text>
        </View>
      </View>
      <View style={styles.View_151_689}>
        <View style={styles.View_151_687}>
          <Text style={styles.Text_151_687}>Victoria Robertson</Text>
        </View>
        <View style={styles.View_151_688}>
          <Text style={styles.Text_151_688}>A mantra goes here</Text>
        </View>
      </View>
      <View style={styles.View_151_886}>
        <View style={styles.View_I151_886_151_711}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdb5/52eb/57549a6c34a2f9d5c44b0bc3442e36e5"
            }}
            style={styles.ImageBackground_I151_886_151_711_151_696}
          />
          <View style={styles.View_I151_886_151_711_151_700}>
            <Text style={styles.Text_I151_886_151_711_151_700}>Photos</Text>
          </View>
          <View style={styles.View_I151_886_151_711_151_768}>
            <Text style={styles.Text_I151_886_151_711_151_768}>Search</Text>
          </View>
          <View style={styles.View_I151_886_151_711_151_701}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de28/df3c/29dd49642fec21b5baaf0ba4e6d193d7"
              }}
              style={styles.ImageBackground_I151_886_151_711_151_699}
            />
            <View style={styles.View_I151_886_151_711_151_697}>
              <Text style={styles.Text_I151_886_151_711_151_697}>Posts</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_151_897}>
        <View style={styles.View_I151_897_147_490} />
        <View style={styles.View_I151_897_147_491}>
          <Text style={styles.Text_I151_897_147_491}>Header</Text>
        </View>
        <View style={styles.View_I151_897_147_493}>
          <Text style={styles.Text_I151_897_147_493}>8m ago</Text>
        </View>
        <View style={styles.View_I151_897_147_492}>
          <Text style={styles.Text_I151_897_147_492}>
            He&#39;ll want to use your yacht, and I don&#39;t want this thing
            smelling like fish.
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c2/45e8/5178e9b1433ff11bdf4885b8fb87cf51"
          }}
          style={styles.ImageBackground_I151_897_147_494}
        />
      </View>
      <View style={styles.View_151_903}>
        <View style={styles.View_I151_903_147_490} />
        <View style={styles.View_I151_903_147_491}>
          <Text style={styles.Text_I151_903_147_491}>Header</Text>
        </View>
        <View style={styles.View_I151_903_147_493}>
          <Text style={styles.Text_I151_903_147_493}>8m ago</Text>
        </View>
        <View style={styles.View_I151_903_147_492}>
          <Text style={styles.Text_I151_903_147_492}>
            He&#39;ll want to use your yacht, and I don&#39;t want this thing
            smelling like fish.
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c2/45e8/5178e9b1433ff11bdf4885b8fb87cf51"
          }}
          style={styles.ImageBackground_I151_903_147_494}
        />
      </View>
      <View style={styles.View_151_909}>
        <View style={styles.View_I151_909_147_490} />
        <View style={styles.View_I151_909_147_491}>
          <Text style={styles.Text_I151_909_147_491}>Header</Text>
        </View>
        <View style={styles.View_I151_909_147_493}>
          <Text style={styles.Text_I151_909_147_493}>8m ago</Text>
        </View>
        <View style={styles.View_I151_909_147_492}>
          <Text style={styles.Text_I151_909_147_492}>
            He&#39;ll want to use your yacht, and I don&#39;t want this thing
            smelling like fish.
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c2/45e8/5178e9b1433ff11bdf4885b8fb87cf51"
          }}
          style={styles.ImageBackground_I151_909_147_494}
        />
      </View>
      <View style={styles.View_151_915}>
        <View style={styles.View_I151_915_147_490} />
        <View style={styles.View_I151_915_147_491}>
          <Text style={styles.Text_I151_915_147_491}>Header</Text>
        </View>
        <View style={styles.View_I151_915_147_493}>
          <Text style={styles.Text_I151_915_147_493}>8m ago</Text>
        </View>
        <View style={styles.View_I151_915_147_492}>
          <Text style={styles.Text_I151_915_147_492}>
            He&#39;ll want to use your yacht, and I don&#39;t want this thing
            smelling like fish.
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c2/45e8/5178e9b1433ff11bdf4885b8fb87cf51"
          }}
          style={styles.ImageBackground_I151_915_147_494}
        />
      </View>
      <View style={styles.View_151_567}>
        <View style={styles.View_I151_567_150_580}>
          <View style={styles.View_I151_567_150_581} />
          <View style={styles.View_I151_567_150_582}>
            <View style={styles.View_I151_567_150_583} />
          </View>
        </View>
        <View style={styles.View_I151_567_150_584}>
          <View style={styles.View_I151_567_150_618} />
          <View style={styles.View_I151_567_150_619} />
          <View style={styles.View_I151_567_150_620} />
          <View style={styles.View_I151_567_150_621} />
          <View style={styles.View_I151_567_150_622} />
        </View>
        <View style={styles.View_I151_567_150_614} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_151_641: {
    flexGrow: 1,
    width: wp("100.26666666666667%"),
    height: hp("33.46994535519126%"),
    minHeight: hp("33.46994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(93, 176, 117, 1)"
  },
  ImageBackground_151_686: {
    width: wp("42.13333333333333%"),
    height: hp("21.584699453551913%"),
    minHeight: hp("21.584699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.799999999999997%"),
    top: hp("17.48633879781421%")
  },
  View_151_547: {
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
  View_I151_547_144_356: {
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
  ImageBackground_I151_547_144_356_144_381: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.273224043715847%")
  },
  View_I151_547_144_356_144_386: {
    flexGrow: 1,
    width: wp("17.7763671875%"),
    height: hp("1.548636415617062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31113281249999%"),
    top: hp("2.3675803929730193%")
  },
  ImageBackground_I151_547_144_356_144_387: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.288867187500017%"),
    top: hp("0.00036687798838785923%")
  },
  ImageBackground_I151_547_144_356_144_391: {
    width: wp("4.072633616129558%"),
    minWidth: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    minHeight: hp("1.49802888026003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.873893229166669%"),
    top: hp("0%")
  },
  ImageBackground_I151_547_144_356_144_395: {
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
  ImageBackground_I151_547_144_356_144_400: {
    flexGrow: 1,
    width: wp("7.580311584472656%"),
    height: hp("1.5148725665983607%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.920963541666667%"),
    top: hp("2.34528421704235%")
  },
  View_151_548: {
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
  View_I151_548_144_2324: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.06666666666666%"),
    top: hp("1.0928961748633892%")
  },
  Text_I151_548_144_2324: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_548_144_2323: {
    flexGrow: 1,
    width: wp("25.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.6%"),
    top: hp("0%")
  },
  Text_I151_548_144_2323: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_548_144_2329: {
    flexGrow: 1,
    width: wp("17.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0928961748633892%")
  },
  Text_I151_548_144_2329: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_689: {
    width: wp("72.53333333333333%"),
    minWidth: wp("72.53333333333333%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%"),
    top: hp("41.2568306010929%")
  },
  View_151_687: {
    width: wp("72.53333333333333%"),
    minWidth: wp("72.53333333333333%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_151_687: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_688: {
    width: wp("40.266666666666666%"),
    minWidth: wp("40.266666666666666%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("6.010928961748633%")
  },
  Text_151_688: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_886: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("53.14207650273224%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_886_151_711: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I151_886_151_711_151_696: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I151_886_151_711_151_700: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.8%"),
    top: hp("2.185792349726782%")
  },
  Text_I151_886_151_711_151_700: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_886_151_711_151_768: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.26666666666667%"),
    top: hp("2.185792349726782%")
  },
  Text_I151_886_151_711_151_768: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_886_151_711_151_701: {
    flexGrow: 1,
    width: wp("45.733333333333334%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333332%"),
    top: hp("0.2732240437158495%")
  },
  ImageBackground_I151_886_151_711_151_699: {
    flexGrow: 1,
    width: wp("45.733333333333334%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I151_886_151_711_151_697: {
    width: wp("11.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("1.9125683060109324%")
  },
  Text_I151_886_151_711_151_697: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_897: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("10.519128809861146%"),
    minHeight: hp("10.519128809861146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("62.158469945355186%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_897_147_490: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
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
  View_I151_897_147_491: {
    flexGrow: 1,
    width: wp("15.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    top: hp("0%")
  },
  Text_I151_897_147_491: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_897_147_493: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    top: hp("0.2732240437158495%")
  },
  Text_I151_897_147_493: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_897_147_492: {
    flexGrow: 1,
    width: wp("71.73333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    top: hp("3.6885245901639294%")
  },
  Text_I151_897_147_492: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I151_897_147_494: {
    flexGrow: 1,
    width: wp("73.86666666666667%"),
    height: hp("0.000003308211931961339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    top: hp("10.519125683060118%")
  },
  View_151_903: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("10.519128809861146%"),
    minHeight: hp("10.519128809861146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("74.86338797814209%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_903_147_490: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
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
  View_I151_903_147_491: {
    flexGrow: 1,
    width: wp("15.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    top: hp("0%")
  },
  Text_I151_903_147_491: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_903_147_493: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    top: hp("0.2732240437158282%")
  },
  Text_I151_903_147_493: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_903_147_492: {
    flexGrow: 1,
    width: wp("71.73333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    top: hp("3.6885245901639223%")
  },
  Text_I151_903_147_492: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I151_903_147_494: {
    flexGrow: 1,
    width: wp("73.86666666666667%"),
    height: hp("0.000003308211931961339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    top: hp("10.519125683060096%")
  },
  View_151_909: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("10.519128809861146%"),
    minHeight: hp("10.519128809861146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("87.56830601092896%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_909_147_490: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
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
  View_I151_909_147_491: {
    flexGrow: 1,
    width: wp("15.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    top: hp("0%")
  },
  Text_I151_909_147_491: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_909_147_493: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    top: hp("0.2732240437158424%")
  },
  Text_I151_909_147_493: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_909_147_492: {
    flexGrow: 1,
    width: wp("71.73333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    top: hp("3.6885245901639365%")
  },
  Text_I151_909_147_492: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I151_909_147_494: {
    flexGrow: 1,
    width: wp("73.86666666666667%"),
    height: hp("0.000003308211931961339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    top: hp("10.51912568306011%")
  },
  View_151_915: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("10.519128809861146%"),
    minHeight: hp("10.519128809861146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("100.27322404371584%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_915_147_490: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
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
  View_I151_915_147_491: {
    flexGrow: 1,
    width: wp("15.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    top: hp("0%")
  },
  Text_I151_915_147_491: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_915_147_493: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    top: hp("0.2732240437158566%")
  },
  Text_I151_915_147_493: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_915_147_492: {
    flexGrow: 1,
    width: wp("71.73333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    top: hp("3.6885245901639507%")
  },
  Text_I151_915_147_492: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I151_915_147_494: {
    flexGrow: 1,
    width: wp("73.86666666666667%"),
    height: hp("0.000003308211931961339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    top: hp("10.519125683060125%")
  },
  View_151_567: {
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
  View_I151_567_150_580: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.06830601092896416%")
  },
  View_I151_567_150_581: {
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
  View_I151_567_150_582: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    top: hp("9.426229508196712%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_I151_567_150_583: {
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
  View_I151_567_150_584: {
    flexGrow: 1,
    width: wp("85.33333333333334%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("2.0491803278688536%")
  },
  View_I151_567_150_618: {
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
  View_I151_567_150_619: {
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
  View_I151_567_150_620: {
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
  View_I151_567_150_621: {
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
  View_I151_567_150_622: {
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
  View_I151_567_150_614: {
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
