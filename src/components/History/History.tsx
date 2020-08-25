import * as React from 'react';
import { fetchHistoryRequest } from '../../state/history/historyActions';
import { TableHeader, Pagination } from '../DataTable/index';
import useLoader from '../../hooks/useLoader';
import './History.scss';
import { useDispatch, useSelector } from 'react-redux';
import { HistoryState, ITableHeader } from '../../state/history/historyTypes';

// npm i react-bootstrap-validation-fixed
// npm i react-bootstrap-validation-fixed
// npm i react-bootstrap-validation-fixed
// npm i react-bootstrap-validation-fixed

const History: React.SFC = () => {
  const [loader, showLoader, hideLoader] = useLoader();
  const [totalItems, setTotalItems] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [search, setSearch] = React.useState('');
  const [sorting, setSorting] = React.useState({ field: '', order: '' });
  const dispatchHistory = useDispatch();
  const ITEMS_PER_PAGE = 50;

  const { historyRespData } = useSelector(
    ({ history }: { history: HistoryState }) => ({
      historyRespData: history.data,
    })
  );

  React.useEffect(() => {
    showLoader;
    dispatchHistory(fetchHistoryRequest());
    hideLoader;
  }, [fetchHistoryRequest]);

  const headers = [
    { name: 'Date of Event', field: 'event_date_utc', sortable: false },
    { name: 'Description', field: 'details', sortable: true },
    // { name: 'Email', field: 'email', sortable: true },
    // { name: 'Comment', field: 'body', sortable: false },
  ];

  return (
    <>
      <div className="history_container">
        <div className="pagination">
          <Pagination
            total={totalItems}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            onPageChange={(page: number) => setCurrentPage(page)}
          />
        </div>
        <div className="wrap-table">
          <table>
            <TableHeader
              headers={headers}
              onSorting={(field: string, order: string) =>
                setSorting({ field, order })
              }
            />
            <tbody>
              {historyRespData &&
                historyRespData.map((history) => (
                  <tr>
                    <th scope="row" key={history.id}>
                      {history.id}
                    </th>
                    <td>{history.title}</td>
                    {/* <td>{history.email}</td>
                  <td>{history.body}</td>  */}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {loader}
    </>
  );
};

export default History;
