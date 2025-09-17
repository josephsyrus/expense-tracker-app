import { Image } from "expo-image";
import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.heading}>Edit app/index.tsx to edit this screen.</Text>
      <Link href={"/about"}>Go To About page</Link>
      <Image 
                source={{
                    uri: "https://images.unsplash.com/photo-1757353071874-38ba5deb546e?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }}
                style={{
                    width: 200,
                    height:300
                }}
      ></Image>
      <Image
        source={require("@/assets/images/react-logo.png")}
        style={{width:200, height:200}}
      >

      </Image>
    </View>
  );
}



const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightpink"
  },
  heading:{
    color:"red",
    fontSize: 20
  }
})