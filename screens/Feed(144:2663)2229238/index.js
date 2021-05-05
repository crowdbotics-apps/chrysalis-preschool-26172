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
      <View style={styles.View_151_365}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
          }}
          style={styles.ImageBackground_I151_365_144_381}
        />
        <View style={styles.View_I151_365_144_386}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
            }}
            style={styles.ImageBackground_I151_365_144_387}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_I151_365_144_391}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_I151_365_144_395}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/665c/8610/b99729a49033a1a93a78f519fb447096"
          }}
          style={styles.ImageBackground_I151_365_144_400}
        />
      </View>
      <View style={styles.View_144_2665}>
        <View style={styles.View_I144_2665_144_2324}>
          <Text style={styles.Text_I144_2665_144_2324}>Filter</Text>
        </View>
        <View style={styles.View_I144_2665_144_2323}>
          <Text style={styles.Text_I144_2665_144_2323}>Feed</Text>
        </View>
        <View style={styles.View_I144_2665_144_2329}>
          <Text style={styles.Text_I144_2665_144_2329}>Back</Text>
        </View>
      </View>
      <View style={styles.View_144_2666}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdb5/52eb/57549a6c34a2f9d5c44b0bc3442e36e5"
          }}
          style={styles.ImageBackground_I144_2666_144_2659}
        />
        <View style={styles.View_I144_2666_144_2660}>
          <Text style={styles.Text_I144_2666_144_2660}>Search</Text>
        </View>
      </View>
      <View style={styles.View_150_991}>
        <View style={styles.View_150_493}>
          <View style={styles.View_I150_493_147_490} />
          <View style={styles.View_I150_493_147_491}>
            <Text style={styles.Text_I150_493_147_491}>Header</Text>
          </View>
          <View style={styles.View_I150_493_147_493}>
            <Text style={styles.Text_I150_493_147_493}>8m ago</Text>
          </View>
          <View style={styles.View_I150_493_147_492}>
            <Text style={styles.Text_I150_493_147_492}>
              He&#39;ll want to use your yacht, and I don&#39;t want this thing
              smelling like fish.
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c2/45e8/5178e9b1433ff11bdf4885b8fb87cf51"
            }}
            style={styles.ImageBackground_I150_493_147_494}
          />
        </View>
        <View style={styles.View_150_534}>
          <View style={styles.View_I150_534_147_490} />
          <View style={styles.View_I150_534_147_491}>
            <Text style={styles.Text_I150_534_147_491}>Header</Text>
          </View>
          <View style={styles.View_I150_534_147_493}>
            <Text style={styles.Text_I150_534_147_493}>8m ago</Text>
          </View>
          <View style={styles.View_I150_534_147_492}>
            <Text style={styles.Text_I150_534_147_492}>
              He&#39;ll want to use your yacht, and I don&#39;t want this thing
              smelling like fish.
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c2/45e8/5178e9b1433ff11bdf4885b8fb87cf51"
            }}
            style={styles.ImageBackground_I150_534_147_494}
          />
        </View>
        <View style={styles.View_150_540}>
          <View style={styles.View_I150_540_147_490} />
          <View style={styles.View_I150_540_147_491}>
            <Text style={styles.Text_I150_540_147_491}>Header</Text>
          </View>
          <View style={styles.View_I150_540_147_493}>
            <Text style={styles.Text_I150_540_147_493}>8m ago</Text>
          </View>
          <View style={styles.View_I150_540_147_492}>
            <Text style={styles.Text_I150_540_147_492}>
              He&#39;ll want to use your yacht, and I don&#39;t want this thing
              smelling like fish.
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c2/45e8/5178e9b1433ff11bdf4885b8fb87cf51"
            }}
            style={styles.ImageBackground_I150_540_147_494}
          />
        </View>
        <View style={styles.View_150_546}>
          <View style={styles.View_I150_546_147_490} />
          <View style={styles.View_I150_546_147_491}>
            <Text style={styles.Text_I150_546_147_491}>Header</Text>
          </View>
          <View style={styles.View_I150_546_147_493}>
            <Text style={styles.Text_I150_546_147_493}>8m ago</Text>
          </View>
          <View style={styles.View_I150_546_147_492}>
            <Text style={styles.Text_I150_546_147_492}>
              He&#39;ll want to use your yacht, and I don&#39;t want this thing
              smelling like fish.
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c2/45e8/5178e9b1433ff11bdf4885b8fb87cf51"
            }}
            style={styles.ImageBackground_I150_546_147_494}
          />
        </View>
      </View>
      <View style={styles.View_150_552} />
      <View style={styles.View_150_668}>
        <View style={styles.View_I150_668_150_580}>
          <View style={styles.View_I150_668_150_581} />
          <View style={styles.View_I150_668_150_582}>
            <View style={styles.View_I150_668_150_583} />
          </View>
        </View>
        <View style={styles.View_I150_668_150_584}>
          <View style={styles.View_I150_668_150_618} />
          <View style={styles.View_I150_668_150_619} />
          <View style={styles.View_I150_668_150_620} />
          <View style={styles.View_I150_668_150_621} />
          <View style={styles.View_I150_668_150_622} />
        </View>
        <View style={styles.View_I150_668_150_614} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_151_365: {
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
  ImageBackground_I151_365_144_381: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.273224043715847%")
  },
  View_I151_365_144_386: {
    flexGrow: 1,
    width: wp("17.7763671875%"),
    height: hp("1.548636415617062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31106770833334%"),
    top: hp("2.3675803929730193%")
  },
  ImageBackground_I151_365_144_387: {
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
  ImageBackground_I151_365_144_391: {
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
  ImageBackground_I151_365_144_395: {
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
  ImageBackground_I151_365_144_400: {
    flexGrow: 1,
    width: wp("7.580311584472656%"),
    height: hp("1.5148725665983607%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.920963541666667%"),
    top: hp("2.34528421704235%")
  },
  View_144_2665: {
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
  View_I144_2665_144_2324: {
    flexGrow: 1,
    width: wp("10.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.06666666666668%"),
    top: hp("1.0928961748633892%")
  },
  Text_I144_2665_144_2324: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I144_2665_144_2323: {
    flexGrow: 1,
    width: wp("18.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.800000000000004%"),
    top: hp("0%")
  },
  Text_I144_2665_144_2323: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I144_2665_144_2329: {
    flexGrow: 1,
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0928961748633892%")
  },
  Text_I144_2665_144_2329: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_2666: {
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
  ImageBackground_I144_2666_144_2659: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I144_2666_144_2660: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.185792349726775%")
  },
  Text_I144_2666_144_2660: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_150_991: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("48.633883950488816%"),
    minHeight: hp("48.633883950488816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("26.50273224043716%")
  },
  View_150_493: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("10.519128809861146%"),
    minHeight: hp("10.519128809861146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I150_493_147_490: {
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
  View_I150_493_147_491: {
    flexGrow: 1,
    width: wp("15.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    top: hp("0%")
  },
  Text_I150_493_147_491: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I150_493_147_493: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    top: hp("0.27322404371584597%")
  },
  Text_I150_493_147_493: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I150_493_147_492: {
    flexGrow: 1,
    width: wp("71.73333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    top: hp("3.688524590163933%")
  },
  Text_I150_493_147_492: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I150_493_147_494: {
    flexGrow: 1,
    width: wp("73.86666666666667%"),
    height: hp("0.000003308211931961339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    top: hp("10.51912568306011%")
  },
  View_150_534: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("10.519128809861146%"),
    minHeight: hp("10.519128809861146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.704918032786878%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I150_534_147_490: {
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
  View_I150_534_147_491: {
    flexGrow: 1,
    width: wp("15.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    top: hp("0%")
  },
  Text_I150_534_147_491: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I150_534_147_493: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    top: hp("0.2732240437158495%")
  },
  Text_I150_534_147_493: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I150_534_147_492: {
    flexGrow: 1,
    width: wp("71.73333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    top: hp("3.6885245901639365%")
  },
  Text_I150_534_147_492: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I150_534_147_494: {
    flexGrow: 1,
    width: wp("73.86666666666667%"),
    height: hp("0.000003308211931961339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    top: hp("10.51912568306011%")
  },
  View_150_540: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("10.519128809861146%"),
    minHeight: hp("10.519128809861146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.40983606557377%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I150_540_147_490: {
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
  View_I150_540_147_491: {
    flexGrow: 1,
    width: wp("15.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    top: hp("0%")
  },
  Text_I150_540_147_491: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I150_540_147_493: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    top: hp("0.2732240437158495%")
  },
  Text_I150_540_147_493: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I150_540_147_492: {
    flexGrow: 1,
    width: wp("71.73333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    top: hp("3.6885245901639294%")
  },
  Text_I150_540_147_492: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I150_540_147_494: {
    flexGrow: 1,
    width: wp("73.86666666666667%"),
    height: hp("0.000003308211931961339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    top: hp("10.519125683060103%")
  },
  View_150_546: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("10.519128809861146%"),
    minHeight: hp("10.519128809861146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.114754098360656%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I150_546_147_490: {
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
  View_I150_546_147_491: {
    flexGrow: 1,
    width: wp("15.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    top: hp("0%")
  },
  Text_I150_546_147_491: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I150_546_147_493: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    top: hp("0.2732240437158424%")
  },
  Text_I150_546_147_493: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I150_546_147_492: {
    flexGrow: 1,
    width: wp("71.73333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    top: hp("3.6885245901639223%")
  },
  Text_I150_546_147_492: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I150_546_147_494: {
    flexGrow: 1,
    width: wp("73.86666666666667%"),
    height: hp("0.000003308211931961339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    top: hp("10.519125683060096%")
  },
  View_150_552: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("31.145087487059214%"),
    minHeight: hp("31.145087487059214%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("77.3224043715847%"),
    backgroundColor: "rgba(240, 240, 240, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_150_668: {
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
  View_I150_668_150_580: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.06830601092896416%")
  },
  View_I150_668_150_581: {
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
  View_I150_668_150_582: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    top: hp("9.426229508196712%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_I150_668_150_583: {
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
  View_I150_668_150_584: {
    flexGrow: 1,
    width: wp("85.33333333333334%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("2.0491803278688536%")
  },
  View_I150_668_150_618: {
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
  View_I150_668_150_619: {
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
  View_I150_668_150_620: {
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
  View_I150_668_150_621: {
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
  View_I150_668_150_622: {
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
  View_I150_668_150_614: {
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
