import { Image, View, Text, ScrollView } from "react-native";

import User from "@/components/User";
import Preferences from "@/components/Preferences";
import { Skills } from "@/components/Skills";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { useToast } from "@/components/Toast";

export default function Profile() {

  const {toast} = useToast()

  return (
    <View className="flex-1 bg-gray-700">
      <ScrollView>
        <Image
          source={require("@/assets/banner.png")}
          className="w-full h-52 -mb-16"
        />
        <View className="flex-1 px-4 pb-4">
          <User />
          <Skills />
          <Preferences />
          <View className="w-full mt-6 flex-1">
            <Text className="text-white text-base font-bold mb-2">Company</Text>
            <Input placeholder="Company" inputClasses="mb-6 mt-2" />
            <Button label="Save" variant={'default'} onPress={() => toast("Saved!")} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
