import { Box, BoxProps, ContainerProps } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

type PageWrapperProps = BoxProps & {
  footer?: React.ReactNode;
  containerProps?: ContainerProps;
};

export const PageWrapper = ({
  children,
  footer,
  ...boxProps
}: PropsWithChildren<PageWrapperProps>) => {
  return (
    <Box
      maxW="7xl"
      w="full"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "2", md: "4", lg: "4" }}
      {...boxProps}
    >
      {children}
    </Box>
  );
};
