import { useState } from "react";

import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "Assistant"
>;

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export default function AssistantScreen({
  navigation,
}: Props) {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = () => {
    const message = input.trim();

    if (!message) {
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: message,
    };

    setMessages((currentMessages) => [
      ...currentMessages,
      userMessage,
    ]);

    setInput("");

    // Temporary JARVIS response.
    // Later this will come from our backend + OpenAI.
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Hello. How can I help you?",
      };

      setMessages((currentMessages) => [
        ...currentMessages,
        assistantMessage,
      ]);
    }, 500);
  };

  const renderMessage = ({
    item,
  }: {
    item: Message;
  }) => {
    const isUser = item.role === "user";

    return (
      <View
        style={[
          styles.messageContainer,
          isUser
            ? styles.userMessage
            : styles.assistantMessage,
        ]}
      >
        <Text style={styles.roleText}>
          {isUser ? "YOU" : "JARVIS"}
        </Text>

        <Text style={styles.messageText}>
          {item.content}
        </Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={
        Platform.OS === "ios"
          ? "padding"
          : undefined
      }
      keyboardVerticalOffset={90}
    >
      <View style={styles.topNavigation}>
        <Pressable
          style={styles.navigationButton}
          onPress={() =>
            navigation.navigate("History")
          }
        >
          <Text style={styles.navigationText}>
            History
          </Text>
        </Pressable>

        <Pressable
          style={styles.navigationButton}
          onPress={() =>
            navigation.navigate("Notes")
          }
        >
          <Text style={styles.navigationText}>
            Notes
          </Text>
        </Pressable>
      </View>

      {messages.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.logo}>
            JARVIS
          </Text>

          <Text style={styles.subtitle}>
            Personal AI Assistant
          </Text>

          <Text style={styles.status}>
            System ready
          </Text>

          <Text style={styles.description}>
            How can I help you?
          </Text>
        </View>
      ) : (
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          contentContainerStyle={styles.messageList}
        />
      )}

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Message JARVIS..."
          placeholderTextColor="#777777"
          multiline
        />

        <Pressable
          style={styles.sendButton}
          onPress={sendMessage}
        >
          <Text style={styles.sendButtonText}>
            Send
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },

  topNavigation: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#242424",
  },

  navigationButton: {
    backgroundColor: "#151515",
    borderWidth: 1,
    borderColor: "#333333",
    paddingVertical: 9,
    paddingHorizontal: 18,
    borderRadius: 10,
  },

  navigationText: {
    color: "#d4d4d4",
    fontWeight: "600",
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    fontSize: 44,
    fontWeight: "800",
    color: "#ffffff",
    letterSpacing: 8,
  },

  subtitle: {
    color: "#a3a3a3",
    fontSize: 16,
    marginTop: 10,
  },

  status: {
    color: "#d4d4d4",
    marginTop: 30,
    fontWeight: "500",
  },

  description: {
    color: "#737373",
    marginTop: 10,
  },

  messageList: {
    padding: 16,
  },

  messageContainer: {
    maxWidth: "85%",
    padding: 14,
    borderRadius: 14,
    marginVertical: 6,
  },

  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#333333",
  },

  assistantMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#151515",
    borderWidth: 1,
    borderColor: "#292929",
  },

  roleText: {
    color: "#a3a3a3",
    fontSize: 10,
    fontWeight: "700",
    marginBottom: 5,
  },

  messageText: {
    color: "#f5f5f5",
    fontSize: 16,
    lineHeight: 22,
  },

  inputArea: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 10,
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: "#242424",
    backgroundColor: "#080808",
  },

  input: {
    flex: 1,
    minHeight: 46,
    maxHeight: 110,
    backgroundColor: "#181818",
    borderWidth: 1,
    borderColor: "#303030",
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: "#ffffff",
  },

  sendButton: {
    backgroundColor: "#e5e5e5",
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 18,
  },

  sendButtonText: {
    color: "#000000",
    fontWeight: "700",
  },
});