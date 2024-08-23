import { Href, Redirect } from "expo-router";

const url: Href = `/(auth)/welcome`;

const RootPage = () => {
  return <Redirect href={url} />;
};

export default RootPage;
