// import { Amplify } from "aws-amplify";
// import awsconfig from "./aws-exports";
// import Login from "./components/login";
// function App() {
//   Amplify.configure(awsconfig);
//   return (
//     <div className="App">
//       <h1> hello </h1>
//       <Login />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Amplify } from "aws-amplify";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
