import RideCard from "@/components/ride-card";
import { mockRides } from "@/constants/dummy";
import { SignedIn, useUser } from "@clerk/clerk-expo";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeRoute = () => {
  const { user } = useUser();

  return (
    <SafeAreaView className="bg-general-500">
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
      </SignedIn>
      <FlatList
        data={mockRides.slice(0, 5)}
        renderItem={({ item }) => <RideCard ride={item} />}
      />
    </SafeAreaView>
  );
};

export default HomeRoute;
