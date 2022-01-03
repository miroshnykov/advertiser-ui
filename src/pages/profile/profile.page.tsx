import {useQuery} from "@apollo/client";
import React from "react";
import {GET_CURRENT_USER} from "../../graphql/User";

export default function Profile() {
  const {data} = useQuery(GET_CURRENT_USER);
  console.log('data offers:', data)
  const currentUser = data?.currentUser || {}
  return (
    <div style={{height: 800, width: '100%'}}>
      <h2 style={{marginTop:70 }}> User </h2>
      <pre>{JSON.stringify(currentUser)}</pre>
    </div>
  );
}
