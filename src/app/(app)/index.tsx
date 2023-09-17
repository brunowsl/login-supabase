import { Session } from "@supabase/supabase-js";
import { View, Text, Button, StyleSheet } from "react-native";
import { supabase } from "../../supabase/client";

export default function Home({ session }: { session: Session }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>Home</Text>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        {session.user.email}
      </Text>
      <Button title="Logout" onPress={() => supabase.auth.signOut()}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    backgroundColor: "#f8f8f8",
  },
});
