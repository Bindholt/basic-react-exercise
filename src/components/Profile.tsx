interface ProfileProps {
    name: string;
    email:string;
    isActive:boolean;
    singleLine?:boolean;
}

export default function Profile({name, email, isActive, singleLine}:ProfileProps) {

    if (singleLine) return (
        <p>{name}, {email}, {isActive ? "Aktiv" : "Ikke Aktiv"}</p>
    ) 

    return (
        <>
            <p style={{fontWeight: "bold"}}>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Active{isActive ? "Yes" : "No" }</p>
        </>
    )
}