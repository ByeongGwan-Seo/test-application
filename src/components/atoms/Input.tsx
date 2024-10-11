import { Input } from "@chakra-ui/react";

interface CustomInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({value, onChange, placeholder}) => (
  <Input 
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    type="text"
  ></Input>
)

export default CustomInput