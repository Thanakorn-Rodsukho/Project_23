import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"

                options={{
                    title: "หน้าแรก",
                    headerTitleAlign: "center",
                    tabBarActiveTintColor: "#000000",

                    tabBarStyle: {
                        backgroundColor: "#0096FF",
                    },

                    tabBarIcon: () => (
                        <Ionicons name="home" size={20} color="black" />
                    )
                }}
            />
            <Tabs.Screen
                name="list"

                options={{
                    title: "รายการ",
                    headerTitleAlign: "center",
                    tabBarActiveTintColor: "#000000",

                    tabBarStyle: {
                        backgroundColor: "#0096FF",
                    },

                    tabBarIcon: () => (
                        <Ionicons name="list" size={20} color="black" />
                    )
                }}
            />
            <Tabs.Screen
                name="add"

                options={{
                    title: "เพิ่ม",
                    headerTitleAlign: "center",
                    tabBarActiveTintColor: "#000000",

                    tabBarStyle: {
                        backgroundColor: "#0096FF",
                    },

                    tabBarIcon: () => (
                        <Ionicons name="add" size={20} color="black" />
                    )
                }}
            />
        </Tabs>
    )
}