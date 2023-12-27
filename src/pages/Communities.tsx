import {
  Heading,
  SimpleGrid,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { CommunityCard, PageWrapper } from "../components";
import { useFetchCommunities, useFetchHomes } from "../hooks";

export const Communities = () => {
  const communities = useFetchCommunities();
  console.log(communities.data);

  const homes = useFetchHomes();
  console.log(homes.data);

  // Adjust the number of columns based on the screen width
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3, xl: 4 });

  return (
    <PageWrapper>
      <VStack spacing="30">
        <Heading size="xl">Choose a community</Heading>
        <SimpleGrid columns={columns} w="100%" spacing="10">
          {communities.data?.map((community) => (
            <CommunityCard key={community.id} community={community} />
          ))}
        </SimpleGrid>
      </VStack>
    </PageWrapper>
  );
};
