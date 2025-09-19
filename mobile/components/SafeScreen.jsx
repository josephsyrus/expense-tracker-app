//this component is used to wrap all the other content of the app while applying the safe screen space at the top of the applications
import { View } from 'react-native'
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {COLORS} from "@/constants/colors";

//children is a special prop, which is whatever is inside the components tags
const SafeScreen = ({children}) => {
    const insets=useSafeAreaInsets();
    return (
        //can use insets.bottom for the bottom navigation bar overlap issue
        <View style={{paddingTop: insets.top, flex:1, backgroundColor: COLORS.background}}>
            {children}
        </View>
    )
}

export default SafeScreen;