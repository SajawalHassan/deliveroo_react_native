import { SafeAreaView, Platform, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useLayoutEffect, useState } from "react";

import React from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    // Removing the React Navigation header
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "featured"] {
              ...,
            resturants[]->{
              ...,
              dishes[]->
            }
            }
    `
      )
      .then((data) => setFeaturedCategories(data));
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

        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default HomeScreen;
