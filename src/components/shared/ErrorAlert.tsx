import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Flex,
  Link,
  Text,
} from "@chakra-ui/react";

type ErrorAlertProps = {
  title: string;
  description: string;
  onRetry?: () => void;
};

export const ErrorAlert = ({
  title,
  description,
  onRetry,
}: ErrorAlertProps) => (
  <Alert status="error">
    <AlertIcon />
    <AlertTitle mr={2}>{title}</AlertTitle>
    <AlertDescription>
      <Flex direction="row" align="center">
        <Text>{description}</Text>
        {onRetry && (
          <Link onClick={onRetry} ml={2} cursor="pointer">
            Click here to try again.
          </Link>
        )}
      </Flex>
    </AlertDescription>
  </Alert>
);
