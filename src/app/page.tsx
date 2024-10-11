"use client"

// hooks
import { useState } from "react";
import useUsers from "@/hooks/useUsers";
import UserForm from "@/components/molecules/Form";
import UserList from "@/components/organisms/UserList";
import Message from "@/components/atoms/Message";

export default function Home() {
  const [value, setValue] = useState<string>("");
  const [deleteMessage, setDeleteMessage] = useState<string>("");
  const { users, addUser, deleteUser } = useUsers();

  const handleAddUser = async (value: string) => {
    await addUser(value);
    window.location.reload();
  }

  const handleDeleteUser = async (value: string) => {
    const message = await deleteUser(value);
    setDeleteMessage(message);
  }

  return (
    <div>
      <UserForm 
        onAddUser={handleAddUser}
        onDeleteUser={handleDeleteUser}
        value={value}
        setValue={setValue}
      ></UserForm>
      {deleteMessage && <Message text={deleteMessage}></Message>}
      <UserList users={users}></UserList>
    </div>
  );
}
