import { View, Text } from "react-native";
import { Title } from "@/components/Title";
import { SKILLS } from "@/utils/skills";
import { Badge } from "./Badge";

export function Skills() {
  return (
    <View className="w-full">
      <Title>Skills</Title>
      <View className="flex-row w-full flex-wrap gap-1">
        {SKILLS.map((skill) => (
          <Badge key={skill.name} label={skill.name} icon={skill.icon}/>
        ))}
      </View>
    </View>
  );
}
