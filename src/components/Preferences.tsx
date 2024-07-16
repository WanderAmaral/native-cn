import { View, Text } from "react-native";
import { Title } from "./Title";
import { Option } from "@/components/Options";
import { Switch } from "./Switch";
import { useState } from "react";
import { Checkbox } from "./Checkbox";

export default function Preferences() {
  const [isEnable, setIsEnable] = useState(false);

  return (
    <View className="w-full">
      <Title>Preferências</Title>
      <Option>
        <Option.Icon icon="dark-mode" />
        <Option.Title>Dark mode</Option.Title>
        <Switch onValueChange={setIsEnable} value={isEnable} />
      </Option>
      <Option>
        <Option.Icon icon="email" />
        <Option.Title>Public email</Option.Title>
        <Checkbox />
      </Option>
    </View>
  );
}
