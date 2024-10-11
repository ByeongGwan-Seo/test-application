import { Flex, FormControl, FormLabel } from "@chakra-ui/react";
import CustomInput from "@/components/atoms/Input";
import CustomButton from "@/components/atoms/Button";

interface UserFormProps {
  onAddUser: (value: string) => Promise<void>; // Promise<void>로 수정
  onDeleteUser: (value: string) => Promise<void>; // Promise<void>로 수정
  addUserValue: string; // Add User input value
  setAddUserValue: (value: string) => void; // Add User set function
  deleteUserValue: string; // Delete User input value
  setDeleteUserValue: (value: string) => void; // Delete User set function
}

const UserForm: React.FC<UserFormProps> = ({
  onAddUser,
  onDeleteUser,
  addUserValue,
  setAddUserValue,
  deleteUserValue,
  setDeleteUserValue,
}) => (
  <Flex direction="column" gap={4}>
    <FormControl>
      <FormLabel>Add User</FormLabel>
      <Flex>
        <CustomInput
          value={addUserValue}
          onChange={(e) => setAddUserValue(e.target.value)}
          placeholder="Add User"
          flex="1"
        />
        <CustomButton onClick={() => onAddUser(addUserValue)}>전송</CustomButton>
      </Flex>
    </FormControl>
    <FormControl>
      <FormLabel>Delete User</FormLabel>
      <Flex>
        <CustomInput
          value={deleteUserValue}
          onChange={(e) => setDeleteUserValue(e.target.value)}
          placeholder="Delete User"
          flex="1"
        />
        <CustomButton onClick={() => onDeleteUser(deleteUserValue)}>삭제</CustomButton>
      </Flex>
    </FormControl>
  </Flex>
);

export default UserForm;
