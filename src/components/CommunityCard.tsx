import { Box, Image, Text } from "@chakra-ui/react";

interface CommunityProps {
  community: {
    id: string;
    name: string;
    imgUrl: string;
    group: string;
  };
}

export const CommunityCard: React.FC<CommunityProps> = ({ community }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={community.imgUrl} alt={community.name} />

      <Box p="6">
        <Box alignItems="baseline">
          <Text
            mt="2"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {community.name}
          </Text>
        </Box>

        <Box>
          <Text mt="2">{community.group}</Text>
        </Box>
      </Box>
    </Box>
  );
};
