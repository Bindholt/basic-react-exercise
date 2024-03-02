import { BaseProps } from "../types";
import { FormEvent } from "react";
import { User } from "../data/data";
import { useRef } from "react";


type UserFormProps = BaseProps & {
  onSubmitUser: (user: User) => void;
};


export default function UserForm({ title, onSubmitUser }: UserFormProps) {

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const activeRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    // const newUserObj = Object.fromEntries(formData.entries());
    
    // const newUser: User = {
    //     name: newUserObj.name.toString(),
    //     email: newUserObj.email.toString(),
    //     isActive: newUserObj.isActive === "on",
    // };

    const newUser: User = {
      name: nameRef.current?.value || "",
      email: emailRef.current?.value || "",
      isActive: activeRef.current?.checked || false,
    };
    //Read form inputs and submit the form to the parent
    onSubmitUser(newUser);
  };

  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        First Name: <input name="name" ref={nameRef} />
        Email: <input name="email" ref={emailRef} />
        Active: <input type="checkbox" name="isActive" ref={activeRef} />
        <button type="submit">Add User</button>
      </form>
    </>
  );
}
