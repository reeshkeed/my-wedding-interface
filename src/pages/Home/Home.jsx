import { React, useContext } from "react";
import { Box } from "@chakra-ui/react";
import "./Home.css";
import HomeLoggedOut from "../../components/Home/HomeLoggedOut";
import HomeLoggedIn from "../../components/Home/HomeLoggedIn";
import TokenContext from "../../components/TokenContext";

export default function Home() {
  const { userData } = useContext(TokenContext);

  return (
    <Box id="home" px={{ base: "1rem" }} textAlign={"center"}>
      {userData ? <HomeLoggedIn /> : <HomeLoggedOut />}
    </Box>
  );
}
