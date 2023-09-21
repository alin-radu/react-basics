import { useState } from 'react';

import './App.css';

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th
        style={{
          paddingTop: '0.5rem',
          borderBottom: '1px solid black',
          textAlign: 'left',
        }}
        colSpan="2"
      >
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: 'red' }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow category={product.category} key={product.category} />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th
            style={{
              textAlign: 'left',
            }}
          >
            Name
          </th>
          <th
            style={{
              textAlign: 'left',
            }}
          >
            Price
          </th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <input
        style={{
          padding: '0.25rem',
          border: '1px solid black',
          borderRadius: '5px',
        }}
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label
        style={{
          paddingTop: '0.5rem',
        }}
      >
        <input
          style={{
            margin: '0',
          }}
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />{' '}
        Only show products in stock
      </label>
    </form>
  );
}

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div
      style={{
        padding: '1.5rem',
        border: '1px solid black',
        borderRadius: '10px',
      }}
    >
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={setFilterText}
          onInStockOnlyChange={setInStockOnly}
        />
      </div>
      <div
        style={{
          marginTop: '1.5rem',
        }}
      >
        <ProductTable
          filterText={filterText}
          inStockOnly={inStockOnly}
          products={products}
        />
      </div>
    </div>
  );
}

const PRODUCTS = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
];

export default function App() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
      }}
    >
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}
