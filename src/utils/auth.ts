import {DateTime} from 'luxon';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

let storageToken = localStorage.getItem('accessToken');

type SetTokensInput = {
  accessToken: string,
};

export const setTokens = (data: SetTokensInput): void => {
  storageToken = data.accessToken;
  localStorage.setItem('accessToken', data.accessToken);
};

export const logout = (): void => {
  storageToken = null;
  localStorage.removeItem('accessToken');
};

export const auth = () => {
  return async (): Promise<string | null> => {
    storageToken = storageToken || localStorage.getItem('accessToken');
    let refreshToken = localStorage.getItem('refreshToken');
    if (storageToken) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const accessToken: any = jwt_decode(storageToken || '');

      if (accessToken && accessToken.exp < DateTime.now().toSeconds() - 10) {
        try {
          const data = JSON.stringify({
            query: `mutation{
                      refresh(refresh_token:"${refreshToken}"){
                        accessToken
                        refreshToken
                      }
                    }`,
            variables: {}
          });

          const config = {
            method: 'post',
            url: 'http://localhost:4009/graphql',
            headers: {
              'Content-Type': 'application/json'
            },
            data: data
          };
          // @ts-ignore
          return axios(config)
            .then((response) => {
              storageToken = response!.data!.data!.refresh!.accessToken;
              let refreshToken = response!.data!.data!.refresh!.refreshToken;
              localStorage.setItem('accessToken', storageToken || '');
              localStorage.setItem('refreshToken', refreshToken || '');
              console.log(' **** Update accessToken from refreshToken ****')
              return storageToken
            })
            .catch((error) => {
              console.log(error);
              logout();
            });

        } catch (e) {
          logout();
        }
      }
    } else {
      logout();
    }
    return storageToken;
  };
};
