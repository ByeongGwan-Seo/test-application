import { Text } from "@chakra-ui/react";

interface MessageProps {
  text: string;
}

const Message: React.FC<MessageProps> = ({ text }) => (
  <Text>
    {text}
  </Text>
);

export default Message;