import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Card } from "react-native-elements";
import { withFirebase } from "../hoc";
import { Button } from "../components";
import { colors } from "../constants";

const Home = ({ api }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logOutUser = () => {
    api.logOut();
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = () => {
    api.db.ref(`users/${api.auth.currentUser.uid}`).once("value", userData => {
      setUser(userData.val());
      setLoading(false);
    });
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator color={colors.primary_light_green} size="large" />
      ) : (
        <Card title={user.email}>
          <Text style={styles.textMarginBottom}>
            Username - {user.userName}
          </Text>
          <Text style={styles.textMarginBottom}>
            Created At - {user.createdAt}
          </Text>
          <Text style={styles.textMarginBottom}>User ID - {user.userId}</Text>
        </Card>
      )}
      <Button
        text="LOG OUT"
        buttonStyle={{ marginTop: 10 }}
        onPress={logOutUser}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const HomeScreen = withFirebase(Home);

export { HomeScreen as Home };
