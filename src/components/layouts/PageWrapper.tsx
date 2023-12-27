import {
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
      <ColorModeSwitcher alignSelf="flex-end" mr="5" mt="2" />

      <Container
        maxWidth="7xl"
        px={{ base: "4", md: "8", lg: "12" }}
        py={{ base: "2", md: "4", lg: "4" }}
        {...containerProps}
      >
        {children}
      </Container>
    </VStack>
  );
};
