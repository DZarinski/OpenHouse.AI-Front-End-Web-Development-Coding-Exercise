import {
  Heading,
  SimpleGrid,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useMemo } from "react";
import { CommunityCard, PageWrapper } from "../components";
import { useAverageHomePrices, useFetchCommunities } from "../hooks";

export const Communities = () => {
  const communities = useFetchCommunities();
  const averageHomePrices = useAverageHomePrices();

  // sort communities alphabetically with useMemo
  const sortedCommunities = useMemo(() => {
    if (communities.data) {
      return [...communities.data].sort((a, b) => a.name.localeCompare(b.name));
    }
  }, [communities.data]);

  // Adjust the number of columns based on the screen width
  const columns = useBreakpointValue(
    { base: 1, md: 2, lg: 3, xl: 4 },
    { ssr: false }
  );

  return (
    <PageWrapper>
      <VStack spacing="30">
        <Heading size="xl">Choose a community</Heading>
        <SimpleGrid columns={columns} w="100%" spacing="10">
          {sortedCommunities?.map((community) => (
            <CommunityCard
              key={community.id}
              community={community}
              averageHomePrice={averageHomePrices.get(community.id)}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </PageWrapper>
  );
};
