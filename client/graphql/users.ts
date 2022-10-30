import { gql } from "graphql-tag";

export const GET_USERS = gql`
  query GET_USERS {
    users {
      id
      nickName
    }
  }
`;

export const GET_USER = gql`
  query GET_USER($id: ID!) {
    user(id: $id) {
      id
      nickName
    }
  }
`;
