import { gql, useMutation } from "@apollo/client";
import { createRef, useState } from "react";
import { useData } from "./data.context";

export const Form = ({ open }: { open: boolean }) => {
  const formRef = createRef<HTMLDialogElement>();
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

  const handleClick = () => {
    mutate({
      variables: {
        name,
        title
      },
      update: () => {
        refetch();
      }
    });
  };

  return (
    <dialog ref={formRef} onClose={handleClick} open={open}>
      <form method="dialog">
        <header>
          <h1>Add New</h1>
        </header>
        <article>
          <label>Author</label>
          <br />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="author"
          />
          <br />
          <label>Title</label>
          <br />
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
          />
          <br />
        </article>
        <footer>
          <button>OK</button>
          <button>Cancel</button>
        </footer>
      </form>
    </dialog>
  );
};
