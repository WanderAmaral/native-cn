import { colors } from "@/styles/colors";
import { Switch as NativeSwitch } from "react-native";

function Switch({
  ...props
}: React.ComponentPropsWithoutRef<typeof NativeSwitch>) {
  return (
    <NativeSwitch
      trackColor={{ true: colors.green["500"] }}
      thumbColor={colors.green["400"]}
      {...props}
    />
  );
}

export { Switch };
