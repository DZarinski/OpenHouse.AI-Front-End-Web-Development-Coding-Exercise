import {
  Box,
  Container,
  ContainerProps,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

type PageWrapperProps = ContainerProps & {
  containerProps?: ContainerProps;
};

export const PageWrapper = ({
  children,
  ...containerProps
}: PropsWithChildren<PageWrapperProps>) => {
  return (
    <VStack
      textAlign="center"
      fontSize="xl"
      backgroundColor={useColorModeValue("gray.50", "gray.900")}
      height="100vh"
    >
      <Box alignSelf="flex-end">
        <ColorModeSwitcher mr="5" mt="2" />
      </Box>

      <Container
        maxWidth="7xl"
        px={{ base: "4", md: "8", lg: "12" }}
        pb="20"
        {...containerProps}
      >
        {children}
      </Container>
    </VStack>
  );
};
