import { View, StyleSheet, FlatList, Text, TextInput, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"

type Bird = {
    id: string,
    name: string,
    highlight: string
}
export default function List() {
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

    async function removeBird(id: string) {
        const newBird = allBird.filter((_, i) => _.id != id)
        await AsyncStorage.setItem("Bird", JSON.stringify(newBird))
        setallBird(newBird)
    }
    return (
        <View>
            <View>
            </View>
        </View>
    )
}