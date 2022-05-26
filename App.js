import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ImageBackground,
  ScrollView
} from "react-native";

const image = {
  uri: "https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI=",
};

export default function App() {
  const [allRestaurants, setAllRestaurants] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://my-first-firestore-st.web.app/restaurants/"
        );
        const data = await response.json();
        setAllRestaurants(data);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={image}
        style={styles.container}
      >
        <ScrollView>
          {allRestaurants ? (
            allRestaurants?.map((singleRest) => (
              <Text style={styles.text} key={singleRest.id}>
                {singleRest.name}{" "}
              </Text>
            ))
          ) : (
            <ActivityIndicator size="large" color="orange" />
          )}
          <Text> Hello, there!</Text>
          <StatusBar style="auto" />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 34,
    marginVertical: 120,
    color: "white",
    backgroundColor: "black",
  },
});
