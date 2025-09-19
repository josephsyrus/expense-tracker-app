import SafeScreen from "@/components/SafeScreen";
import { ClerkProvider } from '@clerk/clerk-expo'
import { Slot } from 'expo-router'
import { tokenCache } from '@clerk/clerk-expo/token-cache'

export default function RootLayout() {
  //screenOptions={{headerShown: false}} use this to remove the header on the top of the page
  // return <Stack/>;

  return(
    <ClerkProvider tokenCache={tokenCache}>
      <SafeScreen>
        <Slot/>
      </SafeScreen>
    </ClerkProvider>
  )
}
