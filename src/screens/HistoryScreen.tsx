import {
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Conversation History
      </Text>

      <Text style={styles.subtitle}>
        Your previous conversations will appear here.
      </Text>

      <View style={styles.emptyCard}>
        <Text style={styles.emptyTitle}>
          No conversations
        </Text>

        <Text style={styles.emptyText}>
          Start a conversation with JARVIS.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 20,
  },

  title: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "700",
  },

  subtitle: {
    color: "#737373",
    marginTop: 7,
    marginBottom: 25,
  },

  emptyCard: {
    backgroundColor: "#121212",
    borderWidth: 1,
    borderColor: "#292929",
    borderRadius: 14,
    padding: 20,
  },

  emptyTitle: {
    color: "#e5e5e5",
    fontSize: 16,
    fontWeight: "600",
  },

  emptyText: {
    color: "#737373",
    marginTop: 7,
  },
});