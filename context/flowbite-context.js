import { Flowbite } from "flowbite-react";
import { flowbiteTheme as theme } from "../component/theme";

const FlowbiteContext = ({ children }) => {
  return <Flowbite theme={{ theme }}>{children}</Flowbite>;
};

export default FlowbiteContext;