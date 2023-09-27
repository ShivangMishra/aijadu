import { View } from "react-native";
import { Image, Text } from "react-native";

export default function Label(props) {
    const {icon, text} = props;
    return (<View style={{flexDirection: "row", alignItems: "center"}}>
        <Image source={icon} />
        <Text style={{marginLeft: 2}}>{text}</Text>
    </View>)
}