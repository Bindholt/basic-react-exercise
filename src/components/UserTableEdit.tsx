import {User} from "../data/data";

interface UserTableProps  {
    users: User[];
    editUser: (userId: number) => void;
}

export default function UserTableEdit({ users, editUser }: UserTableProps ) {
    return (
        <table>
        <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Active</th>
            <th>#</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user) => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.isActive ? "Yes" : "No"}</td>
                    <td>
                        <button onClick={() => editUser(user.id? user.id : -1)}>Edit</button>
                    </td>
                </tr>
            ))}
        </tbody>
        </table>
    );
}