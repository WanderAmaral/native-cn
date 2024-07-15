import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";
import { View, Text } from "react-native";

export default function User() {
  return (
    <View className="items-center">
      <Avatar className="w-32 h-32 border-4 border-gray-600">
        <AvatarImage source={{ uri: "https://github.com/WanderAmaral.png" }} />
        <AvatarFallback className="bg-gray-500">RG</AvatarFallback>
      </Avatar>

      <Text className="text-white font-normal text-2xl mt-5">
        Wander Amaral
      </Text>
      <Text className="text-gray-400 text-xl">@wanderamaral013</Text>
    </View>
  );
}
