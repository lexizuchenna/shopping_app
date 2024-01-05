import * as Font from "expo-font";
import {
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";

export const useFonts = async () => {
  const [loaded, error] = await Font.loadAsync({
    regular: Nunito_400Regular,
    medium: Nunito_500Medium,
    "semi-bold": Nunito_600SemiBold,
    bold: Nunito_700Bold,
    "extra-bold": Nunito_800ExtraBold,
  });

  console.log(loaded, error);
};
