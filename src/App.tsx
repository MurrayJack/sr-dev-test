import React from "react";
import { Example } from "./lib/Example";
import { GraphQLContext } from "./lib/GraphQL.context";
import "./styles.css";

export default function App() {
  return (
    <GraphQLContext>
      <span>Lets Chat!</span>
      <Example />
    </GraphQLContext>
  );
}
