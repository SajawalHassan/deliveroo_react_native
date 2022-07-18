import React, { useEffect, useState } from "react";

import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";

import ResurantCard from "./ResurantCard";
import sanityClient from "../../sanity";

const FeaturedRow = ({ title, description, id }) => {
  const [resturants, setResturants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "featured" && _id == $id] {
  ...,
  resturants[] -> {
    ...,
    dishes[] ->,
    type => {
      name
    }
  }
}[0]
    `,
        { id: id }
      )
      .then((data) => setResturants(data.resturants));
  }, []);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={25} color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {resturants.map((resturant) => (
          <ResurantCard
            key={resturant._id}
            id={resturant._id}
            name={resturant.name}
            imgUrl={resturant.image}
            address={resturant.address}
            title={resturant.name}
            dishes={resturant.dishes}
            genre={resturant.type.name}
            description={resturant.short_description}
            rating={resturant.rating}
            type={resturant.type.name}
            long={resturant.long}
            lat={resturant.lat}
          />
        ))}
        {/* 
        <ResurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo Sushi"
          rating={4.5}
          genre="japanese"
          address="123 Main St"
          short_description="This is a short description"
          dishes={["sushi", "sashimi", "tempura"]}
          long={20}
          lat={0}
        />
        <ResurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo Sushi"
          rating={4.5}
          genre="japanese"
          address="123 Main St"
          short_description="This is a short description"
          dishes={["sushi", "sashimi", "tempura"]}
          long={20}
          lat={0}
        />
        <ResurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo Sushi"
          rating={4.5}
          genre="japanese"
          address="123 Main St"
          short_description="This is a short description"
          dishes={["sushi", "sashimi", "tempura"]}
          long={20}
          lat={0}
        />
        <ResurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo Sushi"
          rating={4.5}
          genre="japanese"
          address="123 Main St"
          short_description="This is a short description"
          dishes={["sushi", "sashimi", "tempura"]}
          long={20}
          lat={0}
        /> */}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
