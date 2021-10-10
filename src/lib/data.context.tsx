import React, { FC, useContext, createContext } from "react";
import { gql, useQuery } from "@apollo/client";

interface IDataProps {}

const Context = createContext<IDataProps | undefined>(undefined);

export const QUERY = gql`
  {
    authors {
      id
      name
      title
    }
  }
`;

export const DataState: FC<IDataProps> = ({ children }) => {
  const query = useQuery(QUERY);

  return <Context.Provider value={query}>{children}</Context.Provider>;
};

export const useData = () => useContext(Context);
