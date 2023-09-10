import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';

const CustomHeader = (props) => {

    const { dropDownData, navigation, setDropDownValue, selectedValue } = props

    const [isOpen, setIsOpen] = useState(false)


    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    style={{ alignSelf: "center" }}
                    source={require("../assets/AIJadu/signUp/leftArrow.png")}
                />
            </TouchableOpacity>
            <Image source={require("../assets/AIJadu/signUp/AILogo.png")} />

            <View style={styles.bottomDownPicker}>
                <DropDownPicker
                    items={dropDownData}
                    open={isOpen}
                    setOpen={() => {
                        setIsOpen(!isOpen)
                    }}
                    value={selectedValue}
                    setValue={(val) => setDropDownValue(val)}
                    maxHeight={200}
                    autoScroll
                    placeholder="             I want to improve in"
                    placeholderStyle={{
                        fontWeight: "700",
                        fontSize: 12,
                        lineHeight: 16,
                    }}
                    showTickIcon={true}
                    showArrowIcon={true}
                    ArrowDownIconComponent={({ style }) => <Image source={require("../assets/AIJadu/icondropdown.png")} style={styles.arrowStyle} />}
                    ArrowUpIconComponent={({ style }) => <AntDesign name='up' color='#FEA01A' style={styles.arrowStyle} size={20} />}
                    dropDownDirection="Bottom"
                    disableBorderRadius={false}
                    theme="LIGHT"
                    style={styles.bottomDownPicker}
                    dropDownContainerStyle={{
                        borderWidth: 0,
                        marginTop: 5,
                    }}
                    containerStyle={{
                        borderWidth: 0,
                    }}
                />
            </View>
            <TouchableOpacity>
                <Image
                    style={{
                        alignSelf: "center",
                        justifyContent: "center",
                        marginTop: 7,
                    }}
                    source={require("../assets/AIJadu/Login/search1.png")}
                />
            </TouchableOpacity>
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 10
    },
    bottomDownPicker: {
        width: 222,
        borderRadius: 30,
        // height: 10,
        alignItems: "center",
        borderWidth: 0,
    },
    arrowStyle: {
        marginRight: 10
    }

})