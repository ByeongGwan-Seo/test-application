import { Input } from "@chakra-ui/react";

interface CustomInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  flex?: string
}

const CustomInput: React.FC<CustomInputProps> = ({value, onChange, placeholder, flex}) => (
  <Input 
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    type="text"
    flex={flex}
  ></Input>
)

export default CustomInput