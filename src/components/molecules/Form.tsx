import CustomInput from "@/components/atoms/Input";
import CustomButton from "@/components/atoms/Button";

interface UserFormProps {
  onAddUser: (value: string) => void;
  onDeleteUser: (value: string) => void;
  value: string;
  setValue: (value: string) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onAddUser, onDeleteUser, value, setValue }) => (
  <div>
    <form onSubmit={(e) => { e.preventDefault(); onAddUser(value); }}>
      <CustomInput value={value} onChange={(e) => setValue(e.target.value)} placeholder="Add User" />
      <CustomButton onClick={() => onAddUser(value)}>전송</CustomButton>
    </form>
    <form onSubmit={(e) => { e.preventDefault(); onDeleteUser(value); }}>
      <CustomInput value={value} onChange={(e) => setValue(e.target.value)} placeholder="Delete User" />
      <CustomButton onClick={() => onDeleteUser(value)}>삭제</CustomButton>
    </form>
  </div>
);

export default UserForm;
