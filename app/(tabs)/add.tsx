import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"

type Bird = {
    id: string,
    name: string,
    highlight: string
}
export default function Add() {
    const [BirdName, setBirdName] = useState("")
    const [Highlight, setHighlight] = useState("")
    const [allBird, setallBird] = useState<Bird[]>([])

    useEffect(() => {
        loadBird()
    }, [allBird])

    async function loadBird() {
        const data = await AsyncStorage.getItem("Bird")
        if (data !== null) {
            setallBird(JSON.parse(data))
        }
    }

    async function addBird() {
        const Bird = {
            id: Date.now().toString(),
            name: BirdName,
            highlight: Highlight
        }

        console.log(Bird)

        const newBird = [...allBird, Bird]
        await AsyncStorage.setItem("Bird", JSON.stringify(newBird))

        setBirdName("")
        setHighlight("")
    }
    return (
        <View style={myStyle.container}>
            <View style={myStyle.card}>
                <Image
                    source={{ uri: "https://stardewvalleywiki.com/mediawiki/images/0/08/Shane_and_Charlie.png" }}
                    style={{ width: 100, height: 100 }}
                />
                <Text>ชื่อนก</Text>
                <TextInput style={myStyle.input}
                    value={BirdName}
                    onChangeText={setBirdName}
                />
                <Text>ลักษณะเด่น</Text>
                <TextInput style={myStyle.input}
                    value={Highlight}
                    onChangeText={setHighlight}
                />
                <TouchableOpacity style={myStyle.box} onPress={() => addBird()}>
                    <Text style={myStyle.t}>บันทึก</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const myStyle = StyleSheet.create({
    input: {
        width: "80%",
        borderWidth: 1,
        borderRadius: 10,
        margin: 5
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgreen"
    },
    card: {
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        backgroundColor: "white",
        borderRadius: 20,
    },
    box: {
        justifyContent: "center",
        width: "30%",
        height: 30,
        backgroundColor: "green",
        borderRadius: 5,
        margin: 5
    },
    t: {
        textAlign: "center"
    }
})