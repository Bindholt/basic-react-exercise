import { BaseProps } from "../types";
import { users } from "../data/data";
import UserTable from "../components/UserTable";
//import UserTable from "../components/UserTable";
type Props = BaseProps;


export default function ListDemo({ title }: Props) {
  return (
    <>
        <h2>{title}</h2>
        {/** Render all users in a table RIGHT HERE */}
        <UserTable users={users} />  
    </>
  );
} 
