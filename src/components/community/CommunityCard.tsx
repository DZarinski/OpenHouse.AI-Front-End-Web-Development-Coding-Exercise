import {
  AspectRatio,
  Box,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

type CommunityProps = {
  name: string;
  group: string;
  imgUrl: string;
  averageHomePrice?: number;
};

export const CommunityCard = ({
  name,
  group,
  imgUrl,
  averageHomePrice,
}: CommunityProps) => {
  const textColor = "white";
  const boxShadowColor = useColorModeValue(
    "rgba(0, 0, 0, 0.25) 0px 10px 20px",
    "rgba(255, 255, 255, 0.15) 0px 10px 20px"
  );
  const hoverBorderColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box
      overflow="hidden"
      rounded="xl"
      position="relative"
      border="1px transparent solid"
      _hover={{
        boxShadow: boxShadowColor,
        cursor: "pointer",
        border: "1px solid",
        borderColor: hoverBorderColor,
      }}
    >
      <AspectRatio ratio={4 / 3} w="100%">
        <Image
          src={imgUrl}
          alt={name}
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
          {name}
        </Text>
        <Text fontSize="lg" color={textColor}>
          {group}
        </Text>
        {averageHomePrice && (
          <VStack spacing="0">
            <Text fontSize="md" color={textColor}>
              Average Home Price:
            </Text>
            <Text fontSize="md" color={textColor}>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(averageHomePrice)}
            </Text>
          </VStack>
        )}
      </Box>
    </Box>
  );
};
