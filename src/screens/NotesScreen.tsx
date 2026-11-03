import {
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function NotesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Notes
      </Text>

      <Text style={styles.subtitle}>
        JARVIS will be able to save and manage notes.
      </Text>

      <View style={styles.emptyCard}>
        <Text style={styles.emptyTitle}>
          No notes
        </Text>

        <Text style={styles.emptyText}>
          Your saved notes will appear here.
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