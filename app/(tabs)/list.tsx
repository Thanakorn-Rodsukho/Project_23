import { View, StyleSheet, FlatList, Text, TouchableOpacity } from "react-native";
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
        <View style={myList.bc}>
            <View>
                <Text style={myList.textTitle}>รายการรวมชื่อและลักษณะเด่นของนก 🦤</Text>
                <FlatList
                    contentContainerStyle={{ gap: 5 }}
                    data={allBird}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={myList.container}>
                            <Text>รหัส : {item.id}</Text>
                            <Text>ชื่อ : {item.name}</Text>
                            <Text>ลักษณะเด่น : {item.highlight}</Text>
                            <TouchableOpacity onPress={() => removeBird(item.id)}>
                                <Text style={{ color: "red" }}>ลบ</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}

const myList = StyleSheet.create({
    container: {
        margin: 5,
        padding: 5,
        backgroundColor: "lightgreen"
    },
    bc: {
        margin: 5
        
    },
    bc2: {
        backgroundColor: "lightgreen"
    },
    textTitle: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 200
    }
})