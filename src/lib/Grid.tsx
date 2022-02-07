import React, { useState } from "react";
import { Form } from "./Form";
import { DataState, useData } from "./data.context";
import { gql, useMutation } from "@apollo/client";

export const Grid = () => {
  const { data, refetch } = useData();

  const [mutate] = useMutation(gql`
    mutation Delete($id: ID!) {
      deleteAuthor(where: { id: $id }) {
        id
      }
    }
  `);

  return (
    <table border="1">
      <thead>{/* <!-- todo --> */}</thead>
      <tbody>
        {data?.authors?.map((e) => (
          <tr>
            <td>{e.name}</td>
            <td>{e.title}</td>
            <td>
              <button
                onClick={() => {
                  mutate({
                    variables: {
                      id: e.id
                    },
                    update: () => {
                      refetch();
                    }
                  });
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
                </svg>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
