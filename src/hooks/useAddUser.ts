import { db } from "@/app/firebase/firebasedb";
import { collection, addDoc } from "firebase/firestore";

const useAddUser = () => {
  const addUser = async (value: string | number | object | null) => {
    try {
      await addDoc(collection(db, "users"), {value});
      console.log("user added!");
      return true
    } catch (e) {
      console.log("error!", e);
    }
  };

  return { addUser };
}

export default useAddUser;
