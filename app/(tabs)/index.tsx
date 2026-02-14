import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function App() {
    const router = useRouter

    return (
        <View style={myHome.container}>
            <View style={myHome.card}>
                <Text style={myHome.textTitle}>
                    Birds Name
                </Text>
                <Text>
                    by Thanakorn Rodsukho
                </Text>
                <Image
                    source={{ uri: "https://static.wikia.nocookie.net/houkai-star-rail/images/d/d7/NPC_Owlbert.png/revision/latest?cb=20250805041455" }}
                    style={{ width: 100, height: 100 }}
                />
                <TouchableOpacity style={myHome.box} onPress=>{() => router.navigate('/list')}
                    <Text>ไปยังหน้ารายการ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={myHome.box} onPress=>{() => router.navigate('/add')}
                    <Text>ไปยังหน้าเพิ่มรายการ</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const myHome = StyleSheet.create({
    textTitle: {
        fontSize: 20,
        fontWeight: 800
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgreen",
        gap: 10
    },
    card: {
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        backgroundColor: "white",
        borderRadius: 20
    },
    box: {
        justifyContent: "center",
        width: "50%",
        height: 30,
        backgroundColor: "green",
        borderRadius: 5,
        margin: 5
    },
    t: {
        textAlign: "center"
    }
})