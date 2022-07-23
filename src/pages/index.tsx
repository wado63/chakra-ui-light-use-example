import { FC } from "react";
import { chakra, HTMLChakraProps } from "@chakra-ui/react";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

const Index = () => (
  <chakra.div
    height="100vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <GradientText as="h2">Hello Chakra UI</GradientText>
    <DarkModeSwitch ml="16" fontSize="2vw" />
  </chakra.div>
);

const GradientText: FC<HTMLChakraProps<"span">> = (chakraProps) => (
  <chakra.span
    fontSize="6vw"
    background="linear-gradient(90deg, #4d62d0, #d152c9 30%, #e6b357)"
    backgroundClip="text"
    {...chakraProps}
  />
);

export default Index;
