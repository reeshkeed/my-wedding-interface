import { Heading, Text } from "@chakra-ui/react";

function Header(props) {
  return (
    <Heading
      lineHeight={1.1}
      fontWeight={600}
      fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
      fontFamily={props.fontFamily}
    >
      <Text
        as={"span"}
        position={"relative"}
        _after={{
          content: "''",
          width: "full",
          height: "30%",
          position: "absolute",
          bottom: 1,
          left: 0,
          bg: `${props.color}.400`,
          zIndex: -1,
        }}
      >
        {props.firstLine}
      </Text>
      <br />
      <Text as={"span"} color={`${props.color}.400`}>
        {props.secondLine}
      </Text>
    </Heading>
  );
}

export default Header;
