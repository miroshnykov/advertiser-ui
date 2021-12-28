import React from 'react';
import {Offer} from '../../common/interfaces/offer.interface';
import {useGetOffers} from '../../hooks/offers/useGetOffers';

import {DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid';

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

export default function DataGridDemo() {

  const offers: [] | any[] = useGetOffers()
  return (
    <div style={{height: 400, width: '100%'}}>
      <DataGrid
        rows={offers}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
