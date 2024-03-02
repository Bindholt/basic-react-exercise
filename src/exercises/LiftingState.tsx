import { BaseProps } from "../types";
import { User, users as usersDB, getNextId } from "../data/data";
import { useState } from "react";
import UserTableWithButtons from "../components/UserTableEdit";
import "./liftingState.css"
import UserFormControlled, {
  AddEditDeleteFunction,
} from "../components/UserFormControlled";


export default function LiftingState({ title }: BaseProps) {
  const [users, setUsers] = useState(usersDB);
  const [userToEdit, setUserToEdit] = useState<User | undefined>(undefined);


  const addEditDeleteUser: AddEditDeleteFunction = (user, isDelete) => {
    if(isDelete) {
        //delete user
        const userToDelete = users.find(u => u.id === user.id);
        if(userToDelete) {
            const index = users.indexOf(userToDelete);
            users.splice(index, 1);
            setUsers([...users]);
        }
    }

    if(user.id) {
        //edit user
        const userToEdit = users.find(u => u.id === user.id);
        if(userToEdit) {
            const index = users.indexOf(userToEdit);
            users[index] = user;
            setUsers([...users]);
        }
    }
    if(!user.id) {
        //add user
        user.id = getNextId();
        users.push(user);
        setUsers([...users]);
    }
  };


  const editUser = (id: number) => {
    const user = users.find(u => u.id === id);
    if(user) {
      setUserToEdit(user);
    }
  };
  <h2>{title}</h2>;
  return (
    <>      
        <div className="outer">
          <h2 style={{ margin: 0 }}>Root Component</h2>
          <p style={{ margin: 0 }}>
            This is where ALL the users live (Single Source of truth).{" "}
            <em>User Count:</em> <b>{users.length}</b>
          </p>
          <p><em>User To Edit:</em> <b>{JSON.stringify(userToEdit)}</b></p>


          <div className="outer-user-table">
            <div className="user-table">
              <UserTableWithButtons users={users} editUser={editUser} />
            </div>
            <div className="user-form">
              <UserFormControlled
                title="Add User"
                onSubmitUser={addEditDeleteUser}
                defaultUser={userToEdit}
              />
            </div>
          </div>
        </div>
    </>
  );
}
