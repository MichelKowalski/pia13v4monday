import { View, Text } from "react-native";
import { niceStyle } from "./(tabs)";

type PersonInfoStuff = { firstName: string; lastName: string };

export function FancyPersonRow({ firstName, lastName }: PersonInfoStuff) {
  return (
    <View style={{ backgroundColor: "yellow", height: 80 }}>
      <Text style={{ fontSize: 25 }}>{firstName}</Text>
      <Text style={niceStyle.nicetext}>{lastName}</Text>
    </View>
  );
}
