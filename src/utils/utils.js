import { CommonActions } from "@react-navigation/native";

export class NavigationHelper {
  static resetSecondLevel(
    firstRoute,
    secondRoute,
    navigation,
    paramsNavigation
  ) {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: firstRoute,
            state: {
              routes: [
                {
                  name: secondRoute,

                  // name: secondRoute,
                  params: {
                    paramasNavigation: paramsNavigation,
                  },
                },
              ],
            },
          },
        ],
      })
    );
  }
}
export function camelCaseText(text) {
  return text?.slice(0, 1)?.toUpperCase() + text?.slice(1, text?.lenght);
}
