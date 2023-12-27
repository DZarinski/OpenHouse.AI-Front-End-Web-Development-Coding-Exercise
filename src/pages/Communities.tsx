import {
  Heading,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useMemo } from "react";
import { CommunityCard, ErrorAlert, PageWrapper } from "../components";
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
        {communities.isLoading && <Spinner mt="10" size="xl" />}
        {communities.isError && (
          <ErrorAlert
            title="Oops!"
            description="There was a problem loading the communities."
            onRetry={() => communities.refetch()}
          />
        )}
        {communities.isSuccess &&
          sortedCommunities &&
          (sortedCommunities.length === 0 ? (
            <Text>
              No communities are currently available. Please check back later.
            </Text>
          ) : (
            <SimpleGrid columns={columns} w="100%" spacing="10">
              {sortedCommunities.map((community) => (
                <CommunityCard
                  key={community.id}
                  name={community.name}
                  group={community.group}
                  imgUrl={community.imgUrl}
                  averageHomePrice={averageHomePrices.get(community.id)}
                />
              ))}
            </SimpleGrid>
          ))}
      </VStack>
    </PageWrapper>
  );
};
