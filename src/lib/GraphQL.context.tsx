import React from "react";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

// access key to the server
const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MzM3NTYxMTIsImF1ZCI6WyJodHRwczovL2FwaS1hcC1ub3J0aGVhc3QtMS5ncmFwaGNtcy5jb20vdjIvY2t1aXg4aDNuMXBuMDAxeHBhdXdvN2ZvYi9tYXN0ZXIiLCJodHRwczovL21hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiIwNzgyYTlkOS1lMjQ0LTRjZTMtOTc3Zi00NmZhMDQyZDFmMWUiLCJqdGkiOiJja3VqYzdncGMxeXVkMDF4cTJoNHJkcjI0In0.t8xefZANfdjZY86uBJtKLm2xq-IontmQW-Cj3ckrOFzoeX-C-beztiheuyST8VeYI9F-tigpIRkfMA0Ww5g191bqE0Olc4fZnGstv1XhOxtza-3wD6KzALNBnwbviZShm5GmJmrFysYx0zRCKR447M2BJpRTS08nZJJi_qErORnBU6ntwuWq3rlMCJCBfa15t5LglMwNXdwHypq8Zvb4j9WlkcT41CsPUWjWkVACHQuLn1ivAax_4vZ1B9CVKpxg-QtnFCLTDpN-4dcOHLBcsHXb5AewqZwQpKEaVhz9isYbMxVPcxd3kFr3EjtA1uwMxy5yO-Xi3I4uRy6RmgJHoD3YglAE1r3-43dm4kEAnGLiCYculyLxdtCyiKPqjuh3E8WPUbvMZPnXSkSu2VCM6X4zD5dbFydrQD3prvxYLxE7GZVzsOs7HMMaS-YsW-0UFnlYIh3kaTbBUrR6c8eofR4woP5IolGUUHr6BqJengclv7KM194QA5Jg0-4l9DA9XNrM17ebEchskVDzJW84mCkfTFQy73JDY5UmKvnsUG8DhDIk7LGWDBVgFpVsijjLZtOWIzP774nt9gcNrWEkwwF78en5c3EDhhQKYGyZx_P-qoaEbdkb4qQqf4d-Jb5_SUc6z8I6WaaWZ-d56rt7B38Ebr1k62Jot7xHeDRctSM";

export const GraphQLContext: React.FC = ({ children }) => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri:
        "https://api-ap-northeast-1.graphcms.com/v2/ckuix8h3n1pn001xpauwo7fob/master",
      headers: {
        authorization: token ? `Bearer ${token}` : ""
      }
    }),
    cache: new InMemoryCache({})
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
