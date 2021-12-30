import {gql, useQuery} from "@apollo/client";

const GET_OFFERS = gql`
    query offer {
        getOffers {
            id
            name
            descriptions
            payin
            conversion_type
            is_cpm_option_enabled
            offer_id_redirect
            currency_id
            sfl_vertical_id
            step
            status
            currencies {
                id
                symbol
            }
        }
    }
`

export const useGetOffers = (): any => {
  const {data} = useQuery(GET_OFFERS);
  console.log('data offers:', data)
  return data?.getOffers;
}
