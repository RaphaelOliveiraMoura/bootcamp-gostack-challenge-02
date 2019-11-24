import React from 'react';
import PropTypes from 'prop-types';

import { Container, Item } from './styles';

export default function Pagination({ pages, currentPage, setCurrentPage }) {
  return (
    <Container>
      {Array(pages)
        .fill(0)
        .map((_, index) => {
          const pageNumber = index + 1;
          return (
            <Item
              key={String(pageNumber)}
              active={currentPage === pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber}
            </Item>
          );
        })}
    </Container>
  );
}

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};
