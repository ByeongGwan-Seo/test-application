import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase/firebasedb";

const useFetchUsers = () => {
  const [users, setUsers] = useState<{id: string; value: string}[]>([]);

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

  return users;
};

export default useFetchUsers