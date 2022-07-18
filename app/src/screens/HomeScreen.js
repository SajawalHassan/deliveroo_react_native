import { SafeAreaView, Platform, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useLayoutEffect } from "react";

import React from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    // Removing the React Navigation header
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView
      className={Platform.OS === "android" ? `pt-12 bg-white` : `bg-white pt-5`}
    >
      <Header />
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Categories />

        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from out pertners"
        />

        <FeaturedRow
          id="456"
          title="Tasty Discounts!"
          description="Everyone's been enjoying these juicy discounts!"
        />

        <FeaturedRow
          id="789"
          title="Offer's near you"
          description="Why not support your local businesses?"
        />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default HomeScreen;
