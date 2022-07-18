import { ScrollView } from "react-native";
import React from "react";
import CategroryCard from "./CategroryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      <CategroryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategroryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategroryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategroryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategroryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategroryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategroryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategroryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategroryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
    </ScrollView>
  );
};

export default Categories;
