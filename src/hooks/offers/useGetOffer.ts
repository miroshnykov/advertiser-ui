import {gql, useQuery} from "@apollo/client";

const GET_OFFER = gql`query Offer ($id: ID!) {
    getOffer(id: $id) {
        id
        name
        descriptions
        payin
        conversion_type
        is_cpm_option_enabled
        offer_id_redirect
        currency_id
        sfl_vertical_id
        status
        token
        geoRules
        use_start_end_date
        start_date
        end_date
        step
        advertiser_manager
        customPayin {
            id
            geo
            payin
        }
        currencies {
            id
            abbr
        }
        verticals {
            id
            name
        }
        landings {
            id
            name
            url
            isDefault
        }
        customLandings {
            id
            country
            name
            pos
            url
        }
        caps {
            enabled
            clicks_day
            clicks_week
            clicks_month
            clicks_redirect_offer_id
            clicks_redirect_offer_use_default
            sales_day
            sales_week
            sales_month
            sales_redirect_offer_id
            sales_redirect_offer_use_default
            start_date
            end_date
            use_start_end_date
        }
    }
}
`


export const useGetOffer = (id: number): any => {
  const {data} = useQuery(GET_OFFER, {
    variables: {id},
  });
  console.log('data offer:', data)
  return data?.getOffer;
}
