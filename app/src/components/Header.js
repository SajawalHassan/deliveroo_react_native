import { Text, View, Image, TextInput } from "react-native";
import React from "react";
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";

const Header = () => {
  return (
    <View>
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="w-7 h-7 bg-gray-300 rounded-full p-4"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <View className="flex-row items-center space-x-1">
            <Text className="font-bold text-xl">Current location</Text>
            <ChevronDownIcon size={20} color="#00CCBB" />
          </View>
        </View>
        <UserIcon size={30} color="#00CCBB" />
      </View>
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-2 items-center">
          <SearchIcon color="gray" size={20} />
          <TextInput
            placeholder="Resturants and Cuisines"
            keyboardType="default"
          />
        </View>

        <AdjustmentsIcon color="#00CCBB" />
      </View>
    </View>
  );
};

export default Header;
