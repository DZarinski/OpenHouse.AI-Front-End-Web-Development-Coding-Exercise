import { Box, Heading } from "@chakra-ui/react";
import { useFetchCommunities, useFetchHomes } from "../hooks";

export const Home = () => {
  const communities = useFetchCommunities();
  console.log(communities.data);

  const homes = useFetchHomes();
  console.log(homes.data);

  return (
    <Box padding="6" boxShadow="lg">
      <Heading as="h2" size="xl">
        Welcome to the Home Page
      </Heading>
    </Box>
  );
};
