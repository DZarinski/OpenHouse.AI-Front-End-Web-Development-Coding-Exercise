import { ChakraProvider, Flex, VStack, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Communities } from "./pages";

const queryClient = new QueryClient();

export const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <VStack textAlign="center" fontSize="xl">
        <Flex justifyContent="flex-end" w="100%">
          <ColorModeSwitcher justifySelf="flex-end" mr="5" mt="2" />
        </Flex>
        <Communities />
      </VStack>
    </QueryClientProvider>
  </ChakraProvider>
);
