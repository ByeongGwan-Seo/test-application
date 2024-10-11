import { Flex, Heading, List, ListItem } from "@chakra-ui/react";

interface UserListProps {
  users: {id: string; value: string}[];
}

const UserList: React.FC<UserListProps> = ({users}) => (
  <Flex>
    <Heading>사용자 목록</Heading>
    <List spacing={3}>
      {users.map((user) => (
        <ListItem key={user.id}>{user.value}</ListItem>
      ))}
    </List>
  </Flex>
);

export default UserList