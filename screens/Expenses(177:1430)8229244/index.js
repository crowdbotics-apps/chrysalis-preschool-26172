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
      <View style={styles.View_177_1431}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
          }}
          style={styles.ImageBackground_I177_1431_144_381}
        />
        <View style={styles.View_I177_1431_144_386}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
            }}
            style={styles.ImageBackground_I177_1431_144_387}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_I177_1431_144_391}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_I177_1431_144_395}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/665c/8610/b99729a49033a1a93a78f519fb447096"
          }}
          style={styles.ImageBackground_I177_1431_144_400}
        />
      </View>
      <View style={styles.View_177_1432}>
        <View style={styles.View_I177_1432_144_2324}>
          <Text style={styles.Text_I177_1432_144_2324}>New</Text>
        </View>
        <View style={styles.View_I177_1432_144_2323}>
          <Text style={styles.Text_I177_1432_144_2323}>Expenses</Text>
        </View>
        <View style={styles.View_I177_1432_144_2329}>
          <Text style={styles.Text_I177_1432_144_2329}>Back</Text>
        </View>
      </View>
      <View style={styles.View_179_547}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbde/523c/77eaf514e18af32c7d9775d639fa3ae1"
          }}
          style={styles.ImageBackground_I179_547_179_54}
        />
        <View style={styles.View_I179_547_179_496}>
          <View style={styles.View_I179_547_179_397}>
            <View style={styles.View_I179_547_179_307}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2f7/0d02/8e3a5adca6230c54c6a3f20b1408208c"
                }}
                style={styles.ImageBackground_I179_547_179_307_179_63}
              />
              <View style={styles.View_I179_547_179_307_179_348}>
                <Text style={styles.Text_I179_547_179_307_179_348}>Item</Text>
              </View>
            </View>
            <View style={styles.View_I179_547_179_393}>
              <View style={styles.View_I179_547_179_393_179_58} />
            </View>
          </View>
          <View style={styles.View_I179_547_179_398}>
            <View style={styles.View_I179_547_179_399}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2f7/0d02/8e3a5adca6230c54c6a3f20b1408208c"
                }}
                style={styles.ImageBackground_I179_547_179_399_179_63}
              />
              <View style={styles.View_I179_547_179_399_179_348}>
                <Text style={styles.Text_I179_547_179_399_179_348}>Item</Text>
              </View>
            </View>
            <View style={styles.View_I179_547_179_400}>
              <View style={styles.View_I179_547_179_400_179_58} />
            </View>
          </View>
          <View style={styles.View_I179_547_179_404}>
            <View style={styles.View_I179_547_179_405}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2f7/0d02/8e3a5adca6230c54c6a3f20b1408208c"
                }}
                style={styles.ImageBackground_I179_547_179_405_179_63}
              />
              <View style={styles.View_I179_547_179_405_179_348}>
                <Text style={styles.Text_I179_547_179_405_179_348}>Item</Text>
              </View>
            </View>
            <View style={styles.View_I179_547_179_406}>
              <View style={styles.View_I179_547_179_406_179_58} />
            </View>
          </View>
          <View style={styles.View_I179_547_179_410}>
            <View style={styles.View_I179_547_179_411}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2f7/0d02/8e3a5adca6230c54c6a3f20b1408208c"
                }}
                style={styles.ImageBackground_I179_547_179_411_179_63}
              />
              <View style={styles.View_I179_547_179_411_179_348}>
                <Text style={styles.Text_I179_547_179_411_179_348}>Item</Text>
              </View>
            </View>
            <View style={styles.View_I179_547_179_412}>
              <View style={styles.View_I179_547_179_412_179_58} />
            </View>
          </View>
          <View style={styles.View_I179_547_179_416}>
            <View style={styles.View_I179_547_179_417}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2f7/0d02/8e3a5adca6230c54c6a3f20b1408208c"
                }}
                style={styles.ImageBackground_I179_547_179_417_179_63}
              />
              <View style={styles.View_I179_547_179_417_179_348}>
                <Text style={styles.Text_I179_547_179_417_179_348}>Item</Text>
              </View>
            </View>
            <View style={styles.View_I179_547_179_418}>
              <View style={styles.View_I179_547_179_418_179_58} />
            </View>
          </View>
          <View style={styles.View_I179_547_179_422}>
            <View style={styles.View_I179_547_179_423}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2f7/0d02/8e3a5adca6230c54c6a3f20b1408208c"
                }}
                style={styles.ImageBackground_I179_547_179_423_179_63}
              />
              <View style={styles.View_I179_547_179_423_179_348}>
                <Text style={styles.Text_I179_547_179_423_179_348}>Item</Text>
              </View>
            </View>
            <View style={styles.View_I179_547_179_424}>
              <View style={styles.View_I179_547_179_424_179_58} />
            </View>
          </View>
          <View style={styles.View_I179_547_179_428}>
            <View style={styles.View_I179_547_179_429}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2f7/0d02/8e3a5adca6230c54c6a3f20b1408208c"
                }}
                style={styles.ImageBackground_I179_547_179_429_179_63}
              />
              <View style={styles.View_I179_547_179_429_179_348}>
                <Text style={styles.Text_I179_547_179_429_179_348}>Item</Text>
              </View>
            </View>
            <View style={styles.View_I179_547_179_430}>
              <View style={styles.View_I179_547_179_430_179_58} />
            </View>
          </View>
          <View style={styles.View_I179_547_179_440}>
            <View style={styles.View_I179_547_179_441}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2f7/0d02/8e3a5adca6230c54c6a3f20b1408208c"
                }}
                style={styles.ImageBackground_I179_547_179_441_179_63}
              />
              <View style={styles.View_I179_547_179_441_179_348}>
                <Text style={styles.Text_I179_547_179_441_179_348}>Item</Text>
              </View>
            </View>
            <View style={styles.View_I179_547_179_442}>
              <View style={styles.View_I179_547_179_442_179_58} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_179_661}>
        <View style={styles.View_179_598}>
          <Text style={styles.Text_179_598}>Expenses</Text>
        </View>
        <View style={styles.View_179_631}>
          <View style={styles.View_I179_631_179_605}>
            <Text style={styles.Text_I179_631_179_605}>Item</Text>
          </View>
          <View style={styles.View_I179_631_179_617}>
            <Text style={styles.Text_I179_631_179_617}>Statistic</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
            }}
            style={styles.ImageBackground_I179_631_179_606}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e59/e7b6/3b245812081dfbd3cc9fce71e79abfb7"
            }}
            style={styles.ImageBackground_I179_631_179_608}
          />
        </View>
        <View style={styles.View_179_636}>
          <View style={styles.View_I179_636_179_605}>
            <Text style={styles.Text_I179_636_179_605}>Item</Text>
          </View>
          <View style={styles.View_I179_636_179_617}>
            <Text style={styles.Text_I179_636_179_617}>Statistic</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
            }}
            style={styles.ImageBackground_I179_636_179_606}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d45/2a8f/bf4e0883d719004a9c58e5b230a7ad30"
            }}
            style={styles.ImageBackground_I179_636_179_608}
          />
        </View>
        <View style={styles.View_179_641}>
          <View style={styles.View_I179_641_179_605}>
            <Text style={styles.Text_I179_641_179_605}>Item</Text>
          </View>
          <View style={styles.View_I179_641_179_617}>
            <Text style={styles.Text_I179_641_179_617}>Statistic</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
            }}
            style={styles.ImageBackground_I179_641_179_606}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e59/e7b6/3b245812081dfbd3cc9fce71e79abfb7"
            }}
            style={styles.ImageBackground_I179_641_179_608}
          />
        </View>
        <View style={styles.View_179_646}>
          <View style={styles.View_I179_646_179_605}>
            <Text style={styles.Text_I179_646_179_605}>Item</Text>
          </View>
          <View style={styles.View_I179_646_179_617}>
            <Text style={styles.Text_I179_646_179_617}>Statistic</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
            }}
            style={styles.ImageBackground_I179_646_179_606}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d45/2a8f/bf4e0883d719004a9c58e5b230a7ad30"
            }}
            style={styles.ImageBackground_I179_646_179_608}
          />
        </View>
        <View style={styles.View_179_651}>
          <View style={styles.View_I179_651_179_605}>
            <Text style={styles.Text_I179_651_179_605}>Item</Text>
          </View>
          <View style={styles.View_I179_651_179_617}>
            <Text style={styles.Text_I179_651_179_617}>Statistic</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
            }}
            style={styles.ImageBackground_I179_651_179_606}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e59/e7b6/3b245812081dfbd3cc9fce71e79abfb7"
            }}
            style={styles.ImageBackground_I179_651_179_608}
          />
        </View>
        <View style={styles.View_179_656}>
          <View style={styles.View_I179_656_179_605}>
            <Text style={styles.Text_I179_656_179_605}>Item</Text>
          </View>
          <View style={styles.View_I179_656_179_617}>
            <Text style={styles.Text_I179_656_179_617}>Statistic</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
            }}
            style={styles.ImageBackground_I179_656_179_606}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d45/2a8f/bf4e0883d719004a9c58e5b230a7ad30"
            }}
            style={styles.ImageBackground_I179_656_179_608}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_177_1431: {
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
  ImageBackground_I177_1431_144_381: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.273224043715847%")
  },
  View_I177_1431_144_386: {
    flexGrow: 1,
    width: wp("17.7763671875%"),
    height: hp("1.548636415617062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31106770833334%"),
    top: hp("2.3675803929730193%")
  },
  ImageBackground_I177_1431_144_387: {
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
  ImageBackground_I177_1431_144_391: {
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
  ImageBackground_I177_1431_144_395: {
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
  ImageBackground_I177_1431_144_400: {
    flexGrow: 1,
    width: wp("7.580311584472656%"),
    height: hp("1.5148725665983607%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.920963541666667%"),
    top: hp("2.34528421704235%")
  },
  View_177_1432: {
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
  View_I177_1432_144_2324: {
    flexGrow: 1,
    width: wp("9.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.13333333333334%"),
    top: hp("1.0928961748633892%")
  },
  Text_I177_1432_144_2324: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I177_1432_144_2323: {
    flexGrow: 1,
    width: wp("37.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.46666666666667%"),
    top: hp("0%")
  },
  Text_I177_1432_144_2323: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I177_1432_144_2329: {
    flexGrow: 1,
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0928961748633892%")
  },
  Text_I177_1432_144_2329: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_179_547: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("31.557377049180328%"),
    minHeight: hp("31.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("17.48633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_547_179_54: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("31.693989071038253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I179_547_179_496: {
    flexGrow: 1,
    width: wp("82.66666666666667%"),
    height: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("2.185792349726775%")
  },
  View_I179_547_179_397: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I179_547_179_307: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_547_179_307_179_63: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333335%"),
    top: hp("0%")
  },
  View_I179_547_179_307_179_348: {
    flexGrow: 1,
    width: wp("6.222540791829427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9234374999999995%"),
    top: hp("22.81420765027323%")
  },
  Text_I179_547_179_307_179_348: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_547_179_393: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("15.983606557377051%"),
    minHeight: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333335%"),
    top: hp("6.693989071038253%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_547_179_393_179_58: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("15.983606557377051%"),
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
  View_I179_547_179_398: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666664%"),
    top: hp("0%")
  },
  View_I179_547_179_399: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_547_179_399_179_63: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333338%"),
    top: hp("0%")
  },
  View_I179_547_179_399_179_348: {
    flexGrow: 1,
    width: wp("6.222540791829427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9234375000000021%"),
    top: hp("22.81420765027323%")
  },
  Text_I179_547_179_399_179_348: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_547_179_400: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333338%"),
    top: hp("12.158469945355193%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_547_179_400_179_58: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(75, 148, 96, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I179_547_179_404: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.333333333333336%"),
    top: hp("0%")
  },
  View_I179_547_179_405: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_547_179_405_179_63: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333307%"),
    top: hp("0%")
  },
  View_I179_547_179_405_179_348: {
    flexGrow: 1,
    width: wp("6.222540791829427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.923437499999995%"),
    top: hp("22.81420765027323%")
  },
  Text_I179_547_179_405_179_348: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_547_179_406: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("15.983606557377051%"),
    minHeight: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333307%"),
    top: hp("6.693989071038253%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_547_179_406_179_58: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("15.983606557377051%"),
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
  View_I179_547_179_410: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.999999999999996%"),
    top: hp("0%")
  },
  View_I179_547_179_411: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_547_179_411_179_63: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333414%"),
    top: hp("0%")
  },
  View_I179_547_179_411_179_348: {
    flexGrow: 1,
    width: wp("6.222540791829427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9234375000000057%"),
    top: hp("22.81420765027323%")
  },
  Text_I179_547_179_411_179_348: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_547_179_412: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333414%"),
    top: hp("12.158469945355193%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_547_179_412_179_58: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(75, 148, 96, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I179_547_179_416: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.66666666666667%"),
    top: hp("0%")
  },
  View_I179_547_179_417: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_547_179_417_179_63: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0%")
  },
  View_I179_547_179_417_179_348: {
    flexGrow: 1,
    width: wp("6.222540791829427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9234374999999986%"),
    top: hp("22.81420765027323%")
  },
  Text_I179_547_179_417_179_348: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_547_179_418: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("15.983606557377051%"),
    minHeight: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("6.693989071038253%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_547_179_418_179_58: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("15.983606557377051%"),
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
  View_I179_547_179_422: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.333333333333336%"),
    top: hp("0%")
  },
  View_I179_547_179_423: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_547_179_423_179_63: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0%")
  },
  View_I179_547_179_423_179_348: {
    flexGrow: 1,
    width: wp("6.222540791829427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9234375000000057%"),
    top: hp("22.81420765027323%")
  },
  Text_I179_547_179_423_179_348: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_547_179_424: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("12.158469945355193%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_547_179_424_179_58: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(75, 148, 96, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I179_547_179_428: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("0%")
  },
  View_I179_547_179_429: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_547_179_429_179_63: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0%")
  },
  View_I179_547_179_429_179_348: {
    flexGrow: 1,
    width: wp("6.222540791829427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9234374999999915%"),
    top: hp("22.81420765027323%")
  },
  Text_I179_547_179_429_179_348: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_547_179_430: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("15.983606557377051%"),
    minHeight: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("6.693989071038253%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_547_179_430_179_58: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("15.983606557377051%"),
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
  View_I179_547_179_440: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.66666666666666%"),
    top: hp("0%")
  },
  View_I179_547_179_441: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_547_179_441_179_63: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333485%"),
    top: hp("0%")
  },
  View_I179_547_179_441_179_348: {
    flexGrow: 1,
    width: wp("6.222540791829427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9234375000000057%"),
    top: hp("22.81420765027323%")
  },
  Text_I179_547_179_441_179_348: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_547_179_442: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333485%"),
    top: hp("12.158469945355193%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_547_179_442_179_58: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(75, 148, 96, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_179_661: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("47.950819672131146%"),
    minHeight: hp("47.950819672131146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("53.41530054644809%")
  },
  View_179_598: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_179_598: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_179_631: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.333333333333336%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_631_179_605: {
    flexGrow: 1,
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I179_631_179_605: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_631_179_617: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.06666666666666%"),
    top: hp("0%")
  },
  Text_I179_631_179_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I179_631_179_606: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.78142076502732%")
  },
  ImageBackground_I179_631_179_608: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158495%")
  },
  View_179_636: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.300546448087438%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_636_179_605: {
    flexGrow: 1,
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I179_636_179_605: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_636_179_617: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.06666666666666%"),
    top: hp("0%")
  },
  Text_I179_636_179_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I179_636_179_606: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.78142076502732%")
  },
  ImageBackground_I179_636_179_608: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%")
  },
  View_179_641: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.267759562841526%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_641_179_605: {
    flexGrow: 1,
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I179_641_179_605: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_641_179_617: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.06666666666666%"),
    top: hp("0%")
  },
  Text_I179_641_179_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I179_641_179_606: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.78142076502732%")
  },
  ImageBackground_I179_641_179_608: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%")
  },
  View_179_646: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.23497267759563%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_646_179_605: {
    flexGrow: 1,
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I179_646_179_605: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_646_179_617: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.06666666666666%"),
    top: hp("0%")
  },
  Text_I179_646_179_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I179_646_179_606: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.78142076502732%")
  },
  ImageBackground_I179_646_179_608: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%")
  },
  View_179_651: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.20218579234973%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_651_179_605: {
    flexGrow: 1,
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I179_651_179_605: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_651_179_617: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.06666666666666%"),
    top: hp("0%")
  },
  Text_I179_651_179_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I179_651_179_606: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.78142076502732%")
  },
  ImageBackground_I179_651_179_608: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%")
  },
  View_179_656: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43.16939890710383%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_656_179_605: {
    flexGrow: 1,
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("0%")
  },
  Text_I179_656_179_605: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_656_179_617: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.06666666666666%"),
    top: hp("0%")
  },
  Text_I179_656_179_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I179_656_179_606: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.781420765027306%")
  },
  ImageBackground_I179_656_179_608: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%")
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
