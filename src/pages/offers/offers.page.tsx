import React from 'react';
import {Offer} from '../../common/interfaces/offer.interface';

import {DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid';
import Divider from "@mui/material/Divider";
import {useQuery} from "@apollo/client";
import {GET_OFFERS} from "../../graphql/Offer";

const columns: GridColDef[] = [
  {field: 'id', headerName: 'ID', width: 90},
  {
    field: 'name',
    headerName: 'offer name',
    width: 150,
    editable: true,
  },
  {
    field: 'conversion_type',
    headerName: 'conversion_type',
    width: 150,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'status',
    type: 'string',
    width: 110,
    editable: true,
  },
  {
    field: 'currency_id',
    headerName: 'currency_id',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.currency_id && params.row.currencies[params.row.currency_id - 1].symbol || ''}`,
  },
];

export default function OffersData() {
  const {data} = useQuery(GET_OFFERS);
  console.log('data offers:', data)
  const offers: [] | any[] = data?.getOffers||[];
  return (
    <div style={{height: 800, width: '100%'}}>
      <h2 style={{marginTop:70 }}> OFFERS </h2>
      <DataGrid
        rows={offers}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
