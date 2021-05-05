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
      <View style={styles.View_155_164}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
          }}
          style={styles.ImageBackground_I155_164_144_381}
        />
        <View style={styles.View_I155_164_144_386}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
            }}
            style={styles.ImageBackground_I155_164_144_387}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_I155_164_144_391}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_I155_164_144_395}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/665c/8610/b99729a49033a1a93a78f519fb447096"
          }}
          style={styles.ImageBackground_I155_164_144_400}
        />
      </View>
      <View style={styles.View_155_165}>
        <View style={styles.View_I155_165_144_2324}>
          <Text style={styles.Text_I155_165_144_2324}>Next</Text>
        </View>
        <View style={styles.View_I155_165_144_2323}>
          <Text style={styles.Text_I155_165_144_2323}>User Options</Text>
        </View>
        <View style={styles.View_I155_165_144_2329}>
          <Text style={styles.Text_I155_165_144_2329}>Back</Text>
        </View>
      </View>
      <View style={styles.View_155_173}>
        <View style={styles.View_I155_173_150_580}>
          <View style={styles.View_I155_173_150_581} />
          <View style={styles.View_I155_173_150_582}>
            <View style={styles.View_I155_173_150_583} />
          </View>
        </View>
        <View style={styles.View_I155_173_150_584}>
          <View style={styles.View_I155_173_150_618} />
          <View style={styles.View_I155_173_150_619} />
          <View style={styles.View_I155_173_150_620} />
          <View style={styles.View_I155_173_150_621} />
          <View style={styles.View_I155_173_150_622} />
        </View>
        <View style={styles.View_I155_173_150_614} />
      </View>
      <View style={styles.View_155_237}>
        <View style={styles.View_I155_237_155_97}>
          <Text style={styles.Text_I155_237_155_97}>Radio option here...</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
          }}
          style={styles.ImageBackground_I155_237_155_98}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a27/a63c/0cdb6320bf54552d28ee48384458d514"
          }}
          style={styles.ImageBackground_I155_237_155_247}
        />
      </View>
      <View style={styles.View_155_242}>
        <View style={styles.View_I155_242_155_8}>
          <Text style={styles.Text_I155_242_155_8}>Radio option here...</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
          }}
          style={styles.ImageBackground_I155_242_155_11}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09b5/2039/9b153a9423118f8549184506029f56bc"
          }}
          style={styles.ImageBackground_I155_242_155_82}
        />
      </View>
      <View style={styles.View_156_0}>
        <View style={styles.View_I156_0_155_97}>
          <Text style={styles.Text_I156_0_155_97}>Radio option here...</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
          }}
          style={styles.ImageBackground_I156_0_155_98}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a27/a63c/0cdb6320bf54552d28ee48384458d514"
          }}
          style={styles.ImageBackground_I156_0_155_247}
        />
      </View>
      <View style={styles.View_156_6}>
        <View style={styles.View_I156_6_155_8}>
          <Text style={styles.Text_I156_6_155_8}>Radio option here...</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
          }}
          style={styles.ImageBackground_I156_6_155_11}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09b5/2039/9b153a9423118f8549184506029f56bc"
          }}
          style={styles.ImageBackground_I156_6_155_82}
        />
      </View>
      <View style={styles.View_156_12}>
        <View style={styles.View_I156_12_155_8}>
          <Text style={styles.Text_I156_12_155_8}>Radio option here...</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
          }}
          style={styles.ImageBackground_I156_12_155_11}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09b5/2039/9b153a9423118f8549184506029f56bc"
          }}
          style={styles.ImageBackground_I156_12_155_82}
        />
      </View>
      <View style={styles.View_156_18}>
        <View style={styles.View_I156_18_155_97}>
          <Text style={styles.Text_I156_18_155_97}>Radio option here...</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
          }}
          style={styles.ImageBackground_I156_18_155_98}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a27/a63c/0cdb6320bf54552d28ee48384458d514"
          }}
          style={styles.ImageBackground_I156_18_155_247}
        />
      </View>
      <View style={styles.View_159_0}>
        <View style={styles.View_I159_0_144_2127}>
          <Text style={styles.Text_I159_0_144_2127}>I love it!</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_155_164: {
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
  ImageBackground_I155_164_144_381: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.273224043715847%")
  },
  View_I155_164_144_386: {
    flexGrow: 1,
    width: wp("17.7763671875%"),
    height: hp("1.548636415617062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31106770833334%"),
    top: hp("2.3675803929730193%")
  },
  ImageBackground_I155_164_144_387: {
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
  ImageBackground_I155_164_144_391: {
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
  ImageBackground_I155_164_144_395: {
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
  ImageBackground_I155_164_144_400: {
    flexGrow: 1,
    width: wp("7.580311584472656%"),
    height: hp("1.5148725665983607%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.920963541666667%"),
    top: hp("2.34528421704235%")
  },
  View_155_165: {
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
  View_I155_165_144_2324: {
    flexGrow: 1,
    width: wp("9.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.86666666666666%"),
    top: hp("1.0928961748633892%")
  },
  Text_I155_165_144_2324: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I155_165_144_2323: {
    flexGrow: 1,
    width: wp("50.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.8%"),
    top: hp("0%")
  },
  Text_I155_165_144_2323: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I155_165_144_2329: {
    flexGrow: 1,
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0928961748633892%")
  },
  Text_I155_165_144_2329: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_173: {
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
  View_I155_173_150_580: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.06830601092896416%")
  },
  View_I155_173_150_581: {
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
  View_I155_173_150_582: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    top: hp("9.426229508196712%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_I155_173_150_583: {
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
  View_I155_173_150_584: {
    flexGrow: 1,
    width: wp("85.33333333333334%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("2.0491803278688536%")
  },
  View_I155_173_150_618: {
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
  View_I155_173_150_619: {
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
  View_I155_173_150_620: {
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
  View_I155_173_150_621: {
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
  View_I155_173_150_622: {
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
  View_I155_173_150_614: {
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
  View_155_237: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("17.48633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I155_237_155_97: {
    flexGrow: 1,
    width: wp("39.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.04918032786885%")
  },
  Text_I155_237_155_97: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I155_237_155_98: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.693989071038249%")
  },
  ImageBackground_I155_237_155_247: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("2.185792349726775%")
  },
  View_155_242: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("24.043715846994534%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I155_242_155_8: {
    flexGrow: 1,
    width: wp("39.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267784%")
  },
  Text_I155_242_155_8: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I155_242_155_11: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.693989071038253%")
  },
  ImageBackground_I155_242_155_82: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("2.1857923497267784%")
  },
  View_156_0: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("30.601092896174865%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I156_0_155_97: {
    flexGrow: 1,
    width: wp("39.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.04918032786885%")
  },
  Text_I156_0_155_97: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I156_0_155_98: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.693989071038249%")
  },
  ImageBackground_I156_0_155_247: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("2.1857923497267713%")
  },
  View_156_6: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("37.15846994535519%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I156_6_155_8: {
    flexGrow: 1,
    width: wp("39.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726775%")
  },
  Text_I156_6_155_8: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I156_6_155_11: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.693989071038246%")
  },
  ImageBackground_I156_6_155_82: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("2.185792349726775%")
  },
  View_156_12: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("43.71584699453552%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I156_12_155_8: {
    flexGrow: 1,
    width: wp("39.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726775%")
  },
  Text_I156_12_155_8: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I156_12_155_11: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.693989071038246%")
  },
  ImageBackground_I156_12_155_82: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("2.185792349726775%")
  },
  View_156_18: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("50.27322404371585%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I156_18_155_97: {
    flexGrow: 1,
    width: wp("39.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.0491803278688465%")
  },
  Text_I156_18_155_97: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I156_18_155_98: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.693989071038253%")
  },
  ImageBackground_I156_18_155_247: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("2.185792349726775%")
  },
  View_159_0: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("90.43715846994536%"),
    backgroundColor: "rgba(93, 176, 117, 1)"
  },
  View_I159_0_144_2127: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.733333333333334%"),
    top: hp("2.1857923497267677%")
  },
  Text_I159_0_144_2127: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
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
