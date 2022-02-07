import { gql, useMutation } from "@apollo/client";
import { createRef, useState } from "react";
import { useData } from "./data.context";
import styled from "styled-components";

const Button = styled.button``;

export const Form = ({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const { refetch } = useData();
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  const mutation = gql`
    mutation Create($name: String!, $title: String!) {
      createAuthor(data: { name: $name, title: $title }) {
        id
        name
        title
      }
    }
  `;

  const [mutate] = useMutation(mutation);

  const handleClick = (e) => {
    e.preventDefault();

    mutate({
      variables: {
        name,
        title
      },
      update: () => {
        refetch();
        onClose();
      }
    });
  };

  return (
    <dialog open={open}>
      <form onSubmit={handleClick}>
        <header>
          <h1>Add New</h1>
        </header>
        <article>
          {/* author */}
          <div>
            <label>Author</label>
            <br />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="author"
            />
            <br />
          </div>

          {/* title */}
          <div>
            <label>Title</label>
            <br />
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              name="title"
            />
            <br />
          </div>
        </article>
        <footer>
          <Button type="submit">OK</Button>
          <a href="#" onClick={() => onClose()} type="button">
            Cancel
          </a>
        </footer>
      </form>
    </dialog>
  );
};
