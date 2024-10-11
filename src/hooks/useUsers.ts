import { db } from "@/app/firebase/firebasedb";
import { 
  collection,
  addDoc, 
  getDocs, 
  query,
  where, 
  deleteDoc 
} from "firebase/firestore";
import { useState, useEffect } from "react";

const useUsers = () => {
  const [users, setUsers] = useState<{id: string; value: string}[]>([]);

  const addUser = async (value: string | number | object | null) => {
    try {
      await addDoc(collection(db, "users"), { value });
      console.log("user added!");
      fetchUsers();
      return true;
    } catch (e) {
      console.log("error!", e);
      return false;
    }
  };

  const deleteUser = async (value: string | number | object | null) => {
    if (!value) {
      return "뭘 삭제하라구요?";
    }

    const userRef = collection(db, "users");
    const findingQuery = query(userRef, where("value", "==", value));

    try {
      const loadedDoc = await getDocs(findingQuery);

      if (loadedDoc.empty) {
        return "그게 누군데요?";
      }

      for (const doc of loadedDoc.docs) {
        await deleteDoc(doc.ref);
      }

      await fetchUsers(); // 유저 삭제 후 목록 갱신
      return "유저가 삭제되었습니다.";
    } catch (e) {
      console.error("Error: ", e);
      return "삭제 중 오류 발생";
    }
  };

  const fetchUsers = async () => {
    const userRef = collection(db, "users");
    const querySnapshot = await getDocs(userRef);
    const userList = querySnapshot.docs.map(doc => ({
      id: doc.id,
      value: doc.data().value,
    }));
    setUsers(userList);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  

  return { users, addUser, deleteUser };
}

export default useUsers;