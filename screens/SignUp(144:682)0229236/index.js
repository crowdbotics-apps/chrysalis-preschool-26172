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
      <View style={styles.View_151_321}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
          }}
          style={styles.ImageBackground_I151_321_144_381}
        />
        <View style={styles.View_I151_321_144_386}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
            }}
            style={styles.ImageBackground_I151_321_144_387}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_I151_321_144_391}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_I151_321_144_395}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/665c/8610/b99729a49033a1a93a78f519fb447096"
          }}
          style={styles.ImageBackground_I151_321_144_400}
        />
      </View>
      <View style={styles.View_144_2337}>
        <View style={styles.View_I144_2337_144_2324}>
          <Text style={styles.Text_I144_2337_144_2324}>Login</Text>
        </View>
        <View style={styles.View_I144_2337_144_2323}>
          <Text style={styles.Text_I144_2337_144_2323}>Sign Up</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e8b/eed6/c14962247ad3d31c59e5c71aa05e15a8"
          }}
          style={styles.ImageBackground_I144_2337_151_511}
        />
      </View>
      <View style={styles.View_144_732}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2174/99c8/49e890478d77419c77714699a9d46aef"
          }}
          style={styles.ImageBackground_I144_732_144_620}
        />
        <View style={styles.View_I144_732_144_621}>
          <Text style={styles.Text_I144_732_144_621}>Name</Text>
        </View>
      </View>
      <View style={styles.View_144_736}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2174/99c8/49e890478d77419c77714699a9d46aef"
          }}
          style={styles.ImageBackground_I144_736_144_620}
        />
        <View style={styles.View_I144_736_144_621}>
          <Text style={styles.Text_I144_736_144_621}>Email</Text>
        </View>
      </View>
      <View style={styles.View_144_740}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2174/99c8/49e890478d77419c77714699a9d46aef"
          }}
          style={styles.ImageBackground_I144_740_144_620}
        />
        <View style={styles.View_I144_740_144_621}>
          <Text style={styles.Text_I144_740_144_621}>Password</Text>
        </View>
        <View style={styles.View_I144_740_144_728}>
          <Text style={styles.Text_I144_740_144_728}>Show</Text>
        </View>
      </View>
      <View style={styles.View_144_2295}>
        <View style={styles.View_I144_2295_144_2285}>
          <View style={styles.View_I144_2295_144_2285_144_2146} />
        </View>
        <View style={styles.View_I144_2295_144_2287}>
          <Text style={styles.Text_I144_2295_144_2287}>
            I would like to receive your newsletter and other promotional
            information.
          </Text>
        </View>
      </View>
      <View style={styles.View_144_2344}>
        <View style={styles.View_I144_2344_144_926}>
          <View style={styles.View_I144_2344_144_927} />
        </View>
        <View style={styles.View_I144_2344_144_928}>
          <View style={styles.View_I144_2344_144_929} />
        </View>
        <View style={styles.View_I144_2344_144_930}>
          <View style={styles.View_I144_2344_144_931}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/500c/8635/23c645fff4dbb9746420e7019da0cfda"
              }}
              style={styles.ImageBackground_I144_2344_144_932}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e18/6776/367af020468e89fabf1040391329d48a"
              }}
              style={styles.ImageBackground_I144_2344_144_938}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebf2/ae37/5fa6fd4ff8d0a4c08a929adc1044ab21"
              }}
              style={styles.ImageBackground_I144_2344_144_939}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9317/7973/938be6ac87418034d6928efdb86530b6"
            }}
            style={styles.ImageBackground_I144_2344_144_940}
          />
          <View style={styles.View_I144_2344_144_947}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c6e/bf8d/925017302edca47807f877089a17458f"
              }}
              style={styles.ImageBackground_I144_2344_144_948}
            />
            <View style={styles.View_I144_2344_144_949}>
              <Text style={styles.Text_I144_2344_144_949}>Go</Text>
            </View>
          </View>
          <View style={styles.View_I144_2344_144_950}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb1e/fafc/38bd3f8bc8fcd8744e55cb82fb70b08c"
              }}
              style={styles.ImageBackground_I144_2344_144_951}
            />
            <View style={styles.View_I144_2344_144_952}>
              <Text style={styles.Text_I144_2344_144_952}>space</Text>
            </View>
          </View>
          <View style={styles.View_I144_2344_144_953}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acdd/463d/0100a1c79169024aefd5598942a33048"
              }}
              style={styles.ImageBackground_I144_2344_144_954}
            />
            <View style={styles.View_I144_2344_144_955}>
              <Text style={styles.Text_I144_2344_144_955}>123</Text>
            </View>
          </View>
          <View style={styles.View_I144_2344_144_956}>
            <View style={styles.View_I144_2344_144_957}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb20/c976/95b76f9efb93520a356a6e2c5c3a165f"
                }}
                style={styles.ImageBackground_I144_2344_144_958}
              />
              <View style={styles.View_I144_2344_144_959}>
                <Text style={styles.Text_I144_2344_144_959}> </Text>
              </View>
            </View>
            <View style={styles.View_I144_2344_144_960}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c39/64fb/b73a8085ea4531d8f63951d655fd1d31"
                }}
                style={styles.ImageBackground_I144_2344_144_961}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e5e/469c/ab3e38f9d7e0700ffd7f6a210831a60a"
                }}
                style={styles.ImageBackground_I144_2344_144_964}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I144_2344_144_965}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I144_2344_144_966}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I144_2344_144_967}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I144_2344_144_968}
              />
            </View>
          </View>
          <View style={styles.View_I144_2344_144_969}>
            <View style={styles.View_I144_2344_144_970}>
              <View style={styles.View_I144_2344_144_971} />
              <View style={styles.View_I144_2344_144_972}>
                <Text style={styles.Text_I144_2344_144_972}> </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38db/3040/83282692e8b1d666d7858bbe0d4e3edc"
              }}
              style={styles.ImageBackground_I144_2344_144_973}
            />
          </View>
          <View style={styles.View_I144_2344_144_974}>
            <View style={styles.View_I144_2344_144_975} />
            <View style={styles.View_I144_2344_144_976}>
              <Text style={styles.Text_I144_2344_144_976}>M</Text>
            </View>
          </View>
          <View style={styles.View_I144_2344_144_977}>
            <View style={styles.View_I144_2344_144_978} />
            <View style={styles.View_I144_2344_144_979}>
              <Text style={styles.Text_I144_2344_144_979}>N</Text>
            </View>
          </View>
          <View style={styles.View_I144_2344_144_980}>
            <View style={styles.View_I144_2344_144_981} />
            <View style={styles.View_I144_2344_144_982}>
              <Text style={styles.Text_I144_2344_144_982}>B</Text>
            </View>
          </View>
          <View style={styles.View_I144_2344_144_983}>
            <View style={styles.View_I144_2344_144_984} />
            <View style={styles.View_I144_2344_144_985}>
              <Text style={styles.Text_I144_2344_144_985}>V</Text>
            </View>
          </View>
          <View style={styles.View_I144_2344_144_986}>
            <View style={styles.View_I144_2344_144_987} />
            <View style={styles.View_I144_2344_144_988}>
              <Text style={styles.Text_I144_2344_144_988}>C</Text>
            </View>
          </View>
          <View style={styles.View_I144_2344_144_989}>
            <View style={styles.View_I144_2344_144_990} />
            <View style={styles.View_I144_2344_144_991}>
              <Text style={styles.Text_I144_2344_144_991}>X</Text>
            </View>
          </View>
          <View style={styles.View_I144_2344_144_992}>
            <View style={styles.View_I144_2344_144_993} />
            <View style={styles.View_I144_2344_144_994}>
              <Text style={styles.Text_I144_2344_144_994}>Z</Text>
            </View>
          </View>
          <View style={styles.View_I144_2344_144_995}>
            <View style={styles.View_I144_2344_144_996} />
            <View style={styles.View_I144_2344_144_997}>
              <Text style={styles.Text_I144_2344_144_997}>L</Text>
            </View>
          </View>
          <View style={styles.View_I144_2344_144_998}>
            <View style={styles.View_I144_2344_144_999} />
            <View style={styles.View_I144_2344_144_1000}>
              <Text style={styles.Text_I144_2344_144_1000}>K</Text>
            </View>
          </View>
          <View style={styles.View_I144_2344_144_1001}>
            <View style={styles.View_I144_2344_144_1002} />
            <View style={styles.View_I144_2344_144_1003}>
              <Text style={styles.Text_I144_2344_144_1003}>J</Text>
            </View>
          </View>
          <View style={styles.View_I144_2344_144_1004}>
            <View style={styles.View_I144_2344_144_1005} />
            <View style={styles.View_I144_2344_144_1006}>
              <Text style={styles.Text_I144_2344_144_1006}>H</Text>
            </View>
          </View>
          <View style={styles.View_I144_2344_144_1007}>
            <View style={styles.View_I144_2344_144_1008} />
            <View style={styles.View_I144_2344_144_1009}>
              <Text style={styles.Text_I144_2344_144_1009}>G</Text>
            </View>
          </View>
          <View style={styles.View_I144_2344_144_1010}>
            <View style={styles.View_I144_2344_144_1011} />
            <View style={styles.View_I144_2344_144_1012}>
              <Text style={styles.Text_I144_2344_144_1012}>F</Text>
            </View>
          </View>
          <View style={styles.View_I144_2344_144_1013}>
            <View style={styles.View_I144_2344_144_1014} />
            <View style={styles.View_I144_2344_144_1015}>
              <Text style={styles.Text_I144_2344_144_1015}>D</Text>
            </View>
          </View>
          <View style={styles.View_I144_2344_144_1016}>
            <View style={styles.View_I144_2344_144_1017} />
            <View style={styles.View_I144_2344_144_1018}>
              <Text style={styles.Text_I144_2344_144_1018}>S</Text>
            </View>
          </View>
          <View style={styles.View_I144_2344_144_1019}>
            <View style={styles.View_I144_2344_144_1020} />
            <View style={styles.View_I144_2344_144_1021}>
              <Text style={styles.Text_I144_2344_144_1021}>A</Text>
            </View>
          </View>
          <View style={styles.View_I144_2344_144_1022}>
            <View style={styles.View_I144_2344_144_1023} />
            <View style={styles.View_I144_2344_144_1024}>
              <Text style={styles.Text_I144_2344_144_1024}>P</Text>
            </View>
          </View>
          <View style={styles.View_I144_2344_144_1025}>
            <View style={styles.View_I144_2344_144_1026} />
            <View style={styles.View_I144_2344_144_1027}>
              <Text style={styles.Text_I144_2344_144_1027}>O</Text>
            </View>
          </View>
          <View style={styles.View_I144_2344_144_1028}>
            <View style={styles.View_I144_2344_144_1029} />
            <View style={styles.View_I144_2344_144_1030}>
              <Text style={styles.Text_I144_2344_144_1030}>I</Text>
            </View>
          </View>
          <View style={styles.View_I144_2344_144_1031}>
            <View style={styles.View_I144_2344_144_1032} />
            <View style={styles.View_I144_2344_144_1033}>
              <Text style={styles.Text_I144_2344_144_1033}>U</Text>
            </View>
          </View>
          <View style={styles.View_I144_2344_144_1034}>
            <View style={styles.View_I144_2344_144_1035} />
            <View style={styles.View_I144_2344_144_1036}>
              <Text style={styles.Text_I144_2344_144_1036}>Y</Text>
            </View>
          </View>
          <View style={styles.View_I144_2344_144_1037}>
            <View style={styles.View_I144_2344_144_1038} />
            <View style={styles.View_I144_2344_144_1039}>
              <Text style={styles.Text_I144_2344_144_1039}>T</Text>
            </View>
          </View>
          <View style={styles.View_I144_2344_144_1040}>
            <View style={styles.View_I144_2344_144_1041} />
            <View style={styles.View_I144_2344_144_1042}>
              <Text style={styles.Text_I144_2344_144_1042}>R</Text>
            </View>
          </View>
          <View style={styles.View_I144_2344_144_1043}>
            <View style={styles.View_I144_2344_144_1044} />
            <View style={styles.View_I144_2344_144_1045}>
              <Text style={styles.Text_I144_2344_144_1045}>E</Text>
            </View>
          </View>
          <View style={styles.View_I144_2344_144_1046}>
            <View style={styles.View_I144_2344_144_1047} />
            <View style={styles.View_I144_2344_144_1048}>
              <Text style={styles.Text_I144_2344_144_1048}>W</Text>
            </View>
          </View>
          <View style={styles.View_I144_2344_144_1049}>
            <View style={styles.View_I144_2344_144_1050} />
            <View style={styles.View_I144_2344_144_1051}>
              <Text style={styles.Text_I144_2344_144_1051}>Q</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_144_2649}>
        <View style={styles.View_I144_2649_144_2127}>
          <Text style={styles.Text_I144_2649_144_2127}>Sign Up</Text>
        </View>
      </View>
      <View style={styles.View_144_2650}>
        <Text style={styles.Text_144_2650}>Forgot your password?</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_151_321: {
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
  ImageBackground_I151_321_144_381: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.273224043715847%")
  },
  View_I151_321_144_386: {
    flexGrow: 1,
    width: wp("17.7763671875%"),
    height: hp("1.548636415617062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31113281249999%"),
    top: hp("2.3675803929730193%")
  },
  ImageBackground_I151_321_144_387: {
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
  ImageBackground_I151_321_144_391: {
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
  ImageBackground_I151_321_144_395: {
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
  ImageBackground_I151_321_144_400: {
    flexGrow: 1,
    width: wp("7.580311584472656%"),
    height: hp("1.5148725665983607%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.920963541666667%"),
    top: hp("2.34528421704235%")
  },
  View_144_2337: {
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
  View_I144_2337_144_2324: {
    flexGrow: 1,
    width: wp("11.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("1.0928961748633892%")
  },
  Text_I144_2337_144_2324: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I144_2337_144_2323: {
    flexGrow: 1,
    width: wp("30.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.200000000000003%"),
    top: hp("0%")
  },
  Text_I144_2337_144_2323: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I144_2337_151_511: {
    flexGrow: 1,
    width: wp("6.033977762858073%"),
    height: hp("3.0911771326117177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.08365885416666607%"),
    top: hp("0.6402020897370235%")
  },
  View_144_732: {
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
  ImageBackground_I144_732_144_620: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I144_732_144_621: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.185792349726775%")
  },
  Text_I144_732_144_621: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_736: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("26.50273224043716%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I144_736_144_620: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I144_736_144_621: {
    flexGrow: 1,
    width: wp("10.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.1857923497267713%")
  },
  Text_I144_736_144_621: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_740: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("35.51912568306011%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I144_740_144_620: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I144_740_144_621: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.185792349726775%")
  },
  Text_I144_740_144_621: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I144_740_144_728: {
    flexGrow: 1,
    width: wp("11.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.73333333333333%"),
    top: hp("2.185792349726775%")
  },
  Text_I144_740_144_728: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_2295: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("46.72131147540984%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2295_144_2285: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.06830601092895705%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2295_144_2285_144_2146: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderColor: "rgba(232, 232, 232, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_I144_2295_144_2287: {
    flexGrow: 1,
    width: wp("85.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000001%"),
    top: hp("0%")
  },
  Text_I144_2295_144_2287: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_2344: {
    width: wp("100%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71.17486338797814%"),
    backgroundColor: "rgba(204, 206, 211, 1)"
  },
  View_I144_2344_144_926: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_927: {
    width: wp("100%"),
    height: hp("39.75409836065574%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(209, 213, 219, 1)"
  },
  View_I144_2344_144_928: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.10928961748634%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_929: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I144_2344_144_930: {
    flexGrow: 1,
    width: wp("98.4%"),
    height: hp("35.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8%"),
    top: hp("1.092896174863398%")
  },
  View_I144_2344_144_931: {
    width: wp("4%"),
    height: hp("3.415300546448088%"),
    top: hp("31.83060109289616%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%")
  },
  ImageBackground_I144_2344_144_932: {
    width: wp("4%"),
    height: hp("2.003851744646583%"),
    top: hp("1.4114484109513796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I144_2344_144_938: {
    width: wp("2.401971689860026%"),
    height: hp("2.458455393223163%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%")
  },
  ImageBackground_I144_2344_144_939: {
    width: wp("1.512916310628255%"),
    height: hp("2.003853568613855%"),
    top: hp("0.22780934318167567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2442708333333314%")
  },
  ImageBackground_I144_2344_144_940: {
    width: wp("7.199999999999999%"),
    height: hp("3.6885245901639343%"),
    top: hp("31.69398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%")
  },
  View_I144_2344_144_947: {
    width: wp("23.466666666666665%"),
    height: hp("5.737704918032787%"),
    top: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I144_2344_144_948: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I144_2344_144_949: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I144_2344_144_949: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I144_2344_144_950: {
    width: wp("48.53333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I144_2344_144_951: {
    flexGrow: 1,
    width: wp("48.53333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I144_2344_144_952: {
    flexGrow: 1,
    width: wp("48.53333333333333%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I144_2344_144_952: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I144_2344_144_953: {
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    top: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I144_2344_144_954: {
    flexGrow: 1,
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I144_2344_144_955: {
    flexGrow: 1,
    width: wp("23.200000000000003%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I144_2344_144_955: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I144_2344_144_956: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%")
  },
  View_I144_2344_144_957: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I144_2344_144_958: {
    flexGrow: 1,
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I144_2344_144_959: {
    flexGrow: 1,
    width: wp("11.200000000000001%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I144_2344_144_959: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I144_2344_144_960: {
    width: wp("6.042666625976563%"),
    height: hp("2.3216109458214595%"),
    top: hp("1.7295086970094786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.575976562500003%")
  },
  ImageBackground_I144_2344_144_961: {
    width: wp("6.042666625976563%"),
    height: hp("2.3216109458214595%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I144_2344_144_964: {
    width: wp("1.7841803232828777%"),
    height: hp("0.9131669998168945%"),
    top: hp("0.703361907291935%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7613281249999915%")
  },
  ImageBackground_I144_2344_144_965: {
    width: wp("0.3007041931152344%"),
    height: hp("0.15417674525839384%"),
    top: hp("0.6797998980746343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.287044270833334%")
  },
  ImageBackground_I144_2344_144_966: {
    width: wp("0.30211896896362306%"),
    height: hp("0.15477867074351492%"),
    top: hp("1.4832491431731398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.71731770833334%")
  },
  ImageBackground_I144_2344_144_967: {
    width: wp("0.30095300674438474%"),
    height: hp("0.15404927925985368%"),
    top: hp("1.4841345490002311%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.289713541666657%")
  },
  ImageBackground_I144_2344_144_968: {
    width: wp("0.3021279652913411%"),
    height: hp("0.1547740619690692%"),
    top: hp("0.6799557169929926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.72018229166666%")
  },
  View_I144_2344_144_969: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I144_2344_144_970: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_971: {
    flexGrow: 1,
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I144_2344_144_972: {
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.383333333333333%"),
    top: hp("1.092896174863398%")
  },
  Text_I144_2344_144_972: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  ImageBackground_I144_2344_144_973: {
    width: wp("5.034666442871093%"),
    height: hp("2.2481243467070366%"),
    top: hp("1.6666662497598708%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1093098958333334%")
  },
  View_I144_2344_144_974: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_975: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I144_2344_144_976: {
    width: wp("5.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000085%"),
    top: hp("1.092896174863398%")
  },
  Text_I144_2344_144_976: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I144_2344_144_977: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_978: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I144_2344_144_979: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("1.092896174863398%")
  },
  Text_I144_2344_144_979: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I144_2344_144_980: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_981: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I144_2344_144_982: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("1.092896174863398%")
  },
  Text_I144_2344_144_982: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I144_2344_144_983: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_984: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I144_2344_144_985: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.092896174863398%")
  },
  Text_I144_2344_144_985: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I144_2344_144_986: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_987: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I144_2344_144_988: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.092896174863398%")
  },
  Text_I144_2344_144_988: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I144_2344_144_989: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_990: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I144_2344_144_991: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333364%"),
    top: hp("1.092896174863398%")
  },
  Text_I144_2344_144_991: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I144_2344_144_992: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333332%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_993: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I144_2344_144_994: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%"),
    top: hp("1.092896174863398%")
  },
  Text_I144_2344_144_994: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I144_2344_144_995: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_996: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I144_2344_144_997: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    top: hp("1.0928961748633697%")
  },
  Text_I144_2344_144_997: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I144_2344_144_998: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_999: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I144_2344_144_1000: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("1.0928961748633697%")
  },
  Text_I144_2344_144_1000: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I144_2344_144_1001: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_1002: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I144_2344_144_1003: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("1.0928961748633697%")
  },
  Text_I144_2344_144_1003: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I144_2344_144_1004: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_1005: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I144_2344_144_1006: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.0928961748633697%")
  },
  Text_I144_2344_144_1006: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I144_2344_144_1007: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_1008: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I144_2344_144_1009: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.0928961748633697%")
  },
  Text_I144_2344_144_1009: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I144_2344_144_1010: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_1011: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I144_2344_144_1012: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("1.0928961748633697%")
  },
  Text_I144_2344_144_1012: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I144_2344_144_1013: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_1014: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I144_2344_144_1015: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333364%"),
    top: hp("1.0928961748633697%")
  },
  Text_I144_2344_144_1015: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I144_2344_144_1016: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333332%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_1017: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I144_2344_144_1018: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%"),
    top: hp("1.0928961748633697%")
  },
  Text_I144_2344_144_1018: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I144_2344_144_1019: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_1020: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I144_2344_144_1021: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333337%"),
    top: hp("1.0928961748633697%")
  },
  Text_I144_2344_144_1021: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I144_2344_144_1022: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.86666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_1023: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I144_2344_144_1024: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("1.0928961748633839%")
  },
  Text_I144_2344_144_1024: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I144_2344_144_1025: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.00000000000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_1026: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I144_2344_144_1027: {
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%"),
    top: hp("1.0928961748633839%")
  },
  Text_I144_2344_144_1027: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I144_2344_144_1028: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.86666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_1029: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I144_2344_144_1030: {
    width: wp("1.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666544%"),
    top: hp("1.0928961748633839%")
  },
  Text_I144_2344_144_1030: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I144_2344_144_1031: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_1032: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I144_2344_144_1033: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.0928961748633839%")
  },
  Text_I144_2344_144_1033: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I144_2344_144_1034: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.866666666666674%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_1035: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I144_2344_144_1036: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("1.0928961748633839%")
  },
  Text_I144_2344_144_1036: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I144_2344_144_1037: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_1038: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I144_2344_144_1039: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("1.0928961748633839%")
  },
  Text_I144_2344_144_1039: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I144_2344_144_1040: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.866666666666664%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_1041: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I144_2344_144_1042: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    top: hp("1.0928961748633839%")
  },
  Text_I144_2344_144_1042: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I144_2344_144_1043: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_1044: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I144_2344_144_1045: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.400000000000002%"),
    top: hp("1.0928961748633839%")
  },
  Text_I144_2344_144_1045: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I144_2344_144_1046: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_1047: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I144_2344_144_1048: {
    width: wp("5.866666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333321%"),
    top: hp("1.0928961748633839%")
  },
  Text_I144_2344_144_1048: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I144_2344_144_1049: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_2344_144_1050: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I144_2344_144_1051: {
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.866666666666667%"),
    top: hp("1.0928961748633839%")
  },
  Text_I144_2344_144_1051: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_144_2649: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("57.240437158469945%"),
    backgroundColor: "rgba(93, 176, 117, 1)"
  },
  View_I144_2649_144_2127: {
    flexGrow: 1,
    width: wp("16.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.6%"),
    top: hp("2.185792349726782%")
  },
  Text_I144_2649_144_2127: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_2650: {
    width: wp("47.46666666666667%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.400000000000002%"),
    top: hp("66.39344262295081%")
  },
  Text_144_2650: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
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
