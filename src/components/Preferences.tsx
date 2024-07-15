import { View, Text } from "react-native";
import { Title } from "./Title";
import { Option } from "@/components/Options";

export default function Preferences() {
  return (
    <View className="w-full">
      <Title>Preferências</Title>
      <Option>
        <Option.Title></Option.Title>
      </Option>
    </View>
  );
}
