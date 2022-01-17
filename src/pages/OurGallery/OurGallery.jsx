import { Center, Grid, GridItem, Image } from "@chakra-ui/react";

import Header from "../../components/Header";

const GALLERY_ITEMS = [
  { id: 0, path: require("../../assets/gallery/img1.png"), span: 3 },
  { id: 1, path: require("../../assets/gallery/img1.png"), span: 2 },
  { id: 2, path: require("../../assets/gallery/img1.png"), span: 1 },
  { id: 3, path: require("../../assets/gallery/img1.png"), span: 2 },
  { id: 4, path: require("../../assets/gallery/img1.png"), span: 3 },
  { id: 5, path: require("../../assets/gallery/img1.png"), span: 2 },
  { id: 6, path: require("../../assets/gallery/img1.png"), span: 2 },
  { id: 7, path: require("../../assets/gallery/img1.png"), span: 3 },
];

export default function OurGallery() {
  return (
    <Center id="our-gallery">
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        width={"100%"}
        px={{
          base: "1rem",
          md: "2rem",
          lg: "4rem",
          xl: "6rem",
          "2xl": "20rem",
        }}
        my="5rem"
        gap={4}
      >
        <GridItem rowSpan={1} colSpan={2}>
          <Header firstLine="Our" secondLine="Gallery" color="blue" />
        </GridItem>
        {GALLERY_ITEMS.map((item) => {
          return (
            <GridItem key={item.id} colSpan={item.span}>
              <Image
                height={{ base: "10rem", md: "20rem", lg: "30rem" }}
                width="100%"
                borderRadius="md"
                src={item.path}
                objectFit="cover"
                align="top"
              />
            </GridItem>
          );
        })}
      </Grid>
    </Center>
  );
}
