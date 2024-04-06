import React from "react";
import { Redirect } from "expo-router";

export default function tabIndex() {
  return <Redirect href={"/(tabs)/home"} />;
}
