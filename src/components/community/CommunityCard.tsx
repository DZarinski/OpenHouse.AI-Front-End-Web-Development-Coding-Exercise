import {
  AspectRatio,
  Box,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { CommunityType } from "../../hooks";

type CommunityProps = {
  community: CommunityType;
};

export const CommunityCard = ({ community }: CommunityProps) => {
  const textColor = "white";
  const boxShadowColor = useColorModeValue(
    "rgba(0, 0, 0, 0.1) 0px 10px 20px",
    "rgba(255, 255, 255, 0.1) 0px 10px 20px"
  );

  return (
    <Box
      overflow="hidden"
      rounded="xl"
      position="relative"
      _hover={{
        boxShadow: boxShadowColor,
        cursor: "pointer",
      }}
    >
      <AspectRatio ratio={4 / 3} w="100%">
        <Image
          src={community.imgUrl}
          alt={community.name}
          objectFit="cover"
          draggable="false"
          fallbackSrc="/fallbackImages/community.jpg"
          fallbackStrategy="beforeLoadOrError"
        />
      </AspectRatio>

      <Box
        position="absolute"
        inset={0}
        backgroundColor="rgba(0, 0, 0, 0.35)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="xl" fontWeight="bold" color={textColor}>
          {community.name}
        </Text>
        <Text fontSize="lg" color={textColor}>
          {community.group}
        </Text>
      </Box>
    </Box>
  );
};
