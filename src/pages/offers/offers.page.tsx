import React from 'react';
import {Offer} from '../../common/interfaces/offer.interface';
import {useGetOffers} from '../../hooks/offers/useGetOffers';
import OffersGrid from '../../components/offers/offers.component';


const Offers: React.FC = () => {
  const offers: [] | any[] = useGetOffers()

  return (
    <div className="home">
      <OffersGrid offers={offers || []}/>
    </div>
  );
}

export default Offers;
