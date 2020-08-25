import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';

const Header = ({ headers, onSorting }: { headers; onSorting }) => {
  const [sortingField, setSortingField] = React.useState('');
  const [sortingOrder, setSortingOrder] = React.useState('asc');

  const onSortingChange = (field: string) => {
    const order =
      field === sortingField && sortingOrder === 'asc' ? 'desc' : 'asc';

    setSortingField(field);
    setSortingOrder(order);
    onSorting(field, order);
  };

  return (
    <thead>
      <tr>
        {headers.map(({ name, field, sortable }) => (
          <th
            key={name}
            onClick={() => (sortable ? onSortingChange(field) : null)}
          >
            {name}

            {sortingField && sortingField === field && (
              <FontAwesomeIcon
                icon={sortingOrder === 'asc' ? 'arrow-down' : 'arrow-up'}
              />
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Header;
