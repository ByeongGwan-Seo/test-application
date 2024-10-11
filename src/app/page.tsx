"use client"

import { db } from "./firebase/firebasedb"
import { collection, addDoc, deleteDoc, query, where, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

export default function Home() {
  const [value, setValue] = useState<string | number | object | null>(null);
  const [deleteMessage, setDeleteMessage] = useState<string>("");
  const [users, setUsers] = useState<{ id: string; value: string }[]>([]);

  // 유저 목록 불러오기
  

  

  // 유저 이름 등록
  const onClickUpLoadButton = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        value
      });
      console.log("Document's ID: ", docRef.id);
      window.location.reload()
    } catch (e) {
      console.error("Error: ", e);
    }
  }

  //유저 삭제
  const onClickDeleteButton = async () => {
    // 삭제 input에 아무 것도 입력하지 않았을때
    if(!value) {
      setDeleteMessage("뭘 삭제하라구요?")
      return;
    }
    
    const userRef = collection(db, "users")
    const findingQuery = query(userRef, where("value", "==", value))

    try {
      const loadedDoc = await getDocs(findingQuery);

      // 데이터베이스에 입력한 유저가 없을때
      if (loadedDoc.empty) {
        setDeleteMessage("그게 누군데요?");
        return
      }

      for (const doc of loadedDoc.docs) {
        // 쿼리를 돌린 후 해당 유저가 있을 경우에 삭제
        await deleteDoc(doc.ref)
      }
      window.location.reload()
    } catch (e) {
      console.error("Error: ", e);
    }
  }

  return (
    <div>
      <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <input onChange={(event) => setValue(event.target.value)} />
        <button onClick={onClickUpLoadButton}>전송</button>
      </form>
    </div>
      <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <input onChange={(event) => setValue(event.target.value)} />
        <button onClick={onClickDeleteButton}>삭제a</button>
      </form>
      </div>  
      {deleteMessage && <p>{deleteMessage}</p>}
      <h2>사용자 목록</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.value}</li> 
        ))}
      </ul>
    </div>
  );
}
