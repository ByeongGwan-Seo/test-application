import { Button } from "@chakra-ui/react";

interface CustomButtonProps {
  onClick: () => void; // 클릭 이벤트 핸들러 타입
  children: React.ReactNode; // 버튼의 자식 요소 타입
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children }) => (
  <Button onClick={onClick} colorScheme="teal">
    {children}
  </Button>
);

export default CustomButton;