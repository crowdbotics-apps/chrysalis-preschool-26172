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
      <View style={styles.View_163_624}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
          }}
          style={styles.ImageBackground_I163_624_144_381}
        />
        <View style={styles.View_I163_624_144_386}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
            }}
            style={styles.ImageBackground_I163_624_144_387}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_I163_624_144_391}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_I163_624_144_395}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/665c/8610/b99729a49033a1a93a78f519fb447096"
          }}
          style={styles.ImageBackground_I163_624_144_400}
        />
      </View>
      <View style={styles.View_163_627} />
      <View style={styles.View_163_677}>
        <View style={styles.View_163_674}>
          <Text style={styles.Text_163_674}>Post Title Here...</Text>
        </View>
        <View style={styles.View_163_678}>
          <Text style={styles.Text_163_678}>Author</Text>
        </View>
        <View style={styles.View_163_675}>
          <Text style={styles.Text_163_675}>
            Labore sunt veniam amet est. Minim nisi dolor eu ad incididunt
            cillum elit ex ut. Dolore exercitation nulla tempor consequat
            aliquip occaecat. Nisi id ipsum irure aute. Deserunt sit aute irure
            quis nulla eu consequat fugiat Lorem sunt magna et consequat labore.
            Laboris incididunt id Lorem est duis deserunt nisi dolore eiusmod
            culpa exercitation consectetur. Fugiat do aliqua laboris cillum sint
            dolor officia adipisicing excepteur fugiat officia. Cupidatat ut
            elit consequat ea laborum occaecat laborum aute consectetur Lorem
            exercitation. Lorem anim minim officia aliquip commodo deserunt
            mollit. Duis deserunt quis cillum voluptate duis ipsum quis
            incididunt elit excepteur excepteur labore duis cillum. Voluptate
            sint nulla minim eiusmod in nulla. Ea id ad duis esse adipisicing
            culpa ex esse ea dolore consequat. Reprehenderit eu minim veniam
            aliquip do ipsum duis do qui adipisicing aliquip ad occaecat. Enim
            reprehenderit sunt do do. Ex fugiat nisi sit anim culpa nisi. Non
            labore fugiat culpa magna. Commodo esse Lorem ex duis do et do. Est
            laboris cupidatat ad est anim adipisicing sit labore do dolor
            officia. Fugiat consequat in excepteur reprehenderit id aliquip
            voluptate sint enim proident aliquip occaecat quis non. Ad nulla
            aliqua est amet aliqua sint est occaecat amet sunt. Ullamco laborum
            qui sint officia officia ad Lorem culpa minim voluptate occaecat id
            duis esse. Ullamco sunt magna consectetur excepteur. Id cupidatat
            proident ex ad elit laboris. Nulla aute sit occaecat laboris.
            Laboris minim aliquip exercitation elit commodo ipsum et fugiat sit
            anim laborum proident cillum laboris. Et cillum tempor esse sit anim
            et veniam. Tempor magna irure ex ea id fugiat. Ex eu sint tempor
            quis exercitation amet ut deserunt sit fugiat aliquip nostrud nulla.
            Eu sunt laborum elit consectetur tempor sunt dolore in sunt
            reprehenderit voluptate dolore adipisicing. Proident eiusmod
            reprehenderit quis sint exercitation voluptate non labore. Sunt non
            sint in Lorem occaecat dolore tempor ipsum et proident sit Lorem
            ipsum officia.
          </Text>
        </View>
      </View>
      <View style={styles.View_163_635}>
        <View style={styles.View_I163_635_150_580}>
          <View style={styles.View_I163_635_150_581} />
          <View style={styles.View_I163_635_150_582}>
            <View style={styles.View_I163_635_150_583} />
          </View>
        </View>
        <View style={styles.View_I163_635_150_584}>
          <View style={styles.View_I163_635_150_618} />
          <View style={styles.View_I163_635_150_619} />
          <View style={styles.View_I163_635_150_620} />
          <View style={styles.View_I163_635_150_621} />
          <View style={styles.View_I163_635_150_622} />
        </View>
        <View style={styles.View_I163_635_150_614} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_163_624: {
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
  ImageBackground_I163_624_144_381: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.273224043715847%")
  },
  View_I163_624_144_386: {
    flexGrow: 1,
    width: wp("17.7763671875%"),
    height: hp("1.548636415617062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31106770833334%"),
    top: hp("2.3675803929730193%")
  },
  ImageBackground_I163_624_144_387: {
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
  ImageBackground_I163_624_144_391: {
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
  ImageBackground_I163_624_144_395: {
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
  ImageBackground_I163_624_144_400: {
    flexGrow: 1,
    width: wp("7.580311584472656%"),
    height: hp("1.5148725665983607%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.920963541666667%"),
    top: hp("2.34528421704235%")
  },
  View_163_627: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("26.775956284153008%"),
    minHeight: hp("26.775956284153008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("10.382513661202186%"),
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_163_677: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("152.59562841530055%"),
    minHeight: hp("152.59562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("41.53005464480874%")
  },
  View_163_674: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_163_674: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_163_678: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.05464480874317%")
  },
  Text_163_678: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_163_675: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    minHeight: hp("142.75956284153006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.83606557377049%")
  },
  Text_163_675: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_163_635: {
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
  View_I163_635_150_580: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.06830601092896416%")
  },
  View_I163_635_150_581: {
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
  View_I163_635_150_582: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    top: hp("9.426229508196712%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_I163_635_150_583: {
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
  View_I163_635_150_584: {
    flexGrow: 1,
    width: wp("85.33333333333334%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("2.0491803278688536%")
  },
  View_I163_635_150_618: {
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
  View_I163_635_150_619: {
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
  View_I163_635_150_620: {
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
  View_I163_635_150_621: {
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
  View_I163_635_150_622: {
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
  View_I163_635_150_614: {
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
