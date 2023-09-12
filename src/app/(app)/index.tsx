import { Session } from "@supabase/supabase-js";
import { View, Text, Button } from "react-native";
import { supabase } from "../../supabase/client";

export default function Home({ session }: { session: Session }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
      }}
    >
      <Text style={{ fontSize: 24 }}>Home</Text>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        {session.user.email}
      </Text>
      <Button title="Logout" onPress={() => supabase.auth.signOut()}></Button>
    </View>
  );
}
