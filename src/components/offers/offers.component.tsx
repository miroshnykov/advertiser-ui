import React from 'react';
import {Offer} from "../../common/interfaces/offer.interface";

interface OffersGridProps {
  offers: Offer[]
}

const OffersGrid: React.FC<OffersGridProps> = ({offers}: OffersGridProps) => {
  return (
    <div className="offers-grid">
      {offers.map((offer: any) => (
        <div key={offer.id}>
          <p>{offer.name} - {offer.id}</p>
        </div>
      ))}
    </div>
  );
}

export default OffersGrid;