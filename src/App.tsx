import React from "react";
import { Example } from "./lib/Example";
import { GraphQLContext } from "./lib/GraphQL.context";
import "./styles.css";

export default function App() {
  return (
    <GraphQLContext>
      <h1>Lets Chat!</h1>
      <Example />
    </GraphQLContext>
  );
}
