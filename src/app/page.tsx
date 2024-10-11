"use client"

// hooks
import { useState } from "react";
import useUsers from "@/hooks/useUsers";

export default function Home() {
  const [value, setValue] = useState<string | number | object | null>(null);
  const [deleteMessage, setDeleteMessage] = useState<string>("");

  const { users, addUser, deleteUser } = useUsers();

  const onClickUpLoadButton = async () => {
    await addUser(value);
    window.location.reload();
  }

  const onClickDeleteButton = async () => {
    const message = await deleteUser(value);
    setDeleteMessage(message);
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
        <button onClick={onClickDeleteButton}>삭제</button>
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
