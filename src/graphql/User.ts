import gql from 'graphql-tag';

export const GET_CURRENT_USER = gql`
    query currentUser{
        currentUser{
            id
            name
            email
        }
    }
`

export const LOGIN_USER = gql`
    mutation login($email: String!, $password:String!){
        login(email: $email, password: $password){
            accessToken
            refreshToken
            user {
                id
                name
                email
            }
        }
    }
`

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

export const REFRESH_TOKEN = gql`
    mutation refresh($refresh_token: String!){
        refresh(refresh_token:$refresh_token){
            accessToken
        }
    }
`