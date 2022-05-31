import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppFormField from "../components/AppFormField";
import AppForm from "../components/AppForm";
import AppFormPicker from "../components/AppFormPicker";
import SubmitButton from "../components/SubmitButton";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/FormImagePicker";

const categories = [
  {
    label: "Furniture",
    value: 1,
    icon: "floor-lamp",
    backgroundColor: "#fc5c65",
  },
  {
    label: "Cars",
    value: 2,
    icon: "car",
    backgroundColor: "#fd9644",
  },
  {
    label: "Cameras",
    value: 3,
    icon: "camera",
    backgroundColor: "#fed330",
  },
  {
    label: "Games",
    value: 4,
    icon: "cards",
    backgroundColor: "#26de81",
  },
  {
    label: "Clothing",
    value: 5,
    icon: "shoe-heel",
    backgroundColor: "#2bcbba",
  },
  {
    label: "Sports",
    value: 6,
    icon: "basketball",
    backgroundColor: "#45aaf2",
  },
  {
    label: "Movies & Music",
    value: 7,
    icon: "headphones",
    backgroundColor: "#4b7bec",
  },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const ListingEditScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField name="title" placeholder="Title" maxLength={255} />
        <AppFormField
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          maxLength={8}
          width={120}
        />
        <AppFormPicker
          placeholder="Category"
          items={categories}
          name={"category"}
          width="50%"
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
        />
        <AppFormField
          name="description"
          placeholder="Description"
          maxLength={255}
          multiline
          numberOfLines={3}
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
