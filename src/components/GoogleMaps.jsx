import { Center } from "@chakra-ui/react";

function GoogleMaps() {
  return (
    <Center height={{ base: "20rem", md: "30rem" }} minW={"none"}>
      <iframe
        title="wedding-venue"
        width={"100%"}
        height={"100%"}
        style={{ border: 0 }}
        loading="lazy"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
          &q=Mi+Casita+Private+Pool+Garden+Resort`}
      ></iframe>
    </Center>
  );
}

export default GoogleMaps;
