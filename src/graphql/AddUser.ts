import gql from 'graphql-tag';

export const ADD_USER = gql`
    mutation register($email: String!, $name:String!, $password:String!, $resetPassword:String!){
        register(
            data: {
                email: $email,
                name: $name,
                password: $password,
                repeatPassword: $resetPassword
            }
        ) {
            id
            name
        }
    }
`