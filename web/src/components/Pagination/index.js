import React from 'react';
import PropTypes from 'prop-types';

import { Container, Item } from './styles';

export default function Pagination({ pages, currentPage, setCurrentPage }) {
  let lastSpread = null;

  return (
    <Container>
      {Array(pages)
        .fill(0)
        .map((_, index) => {
          const pageNumber = index + 1;

          let spread = false;
          let visible = false;

          if (
            pageNumber === 1 ||
            pageNumber === currentPage - 1 ||
            pageNumber === currentPage ||
            pageNumber === currentPage + 1 ||
            pageNumber === pages
          ) {
            visible = true;
          }

          if (!visible) spread = true;

          let showSpread = false;

          if (lastSpread !== pageNumber - 1 && spread) {
            showSpread = true;
          }

          if (spread) lastSpread = pageNumber;

          return (
            <>
              {visible ? (
                <Item
                  key={String(pageNumber)}
                  active={currentPage === pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </Item>
              ) : (
                showSpread && <p>...</p>
              )}
            </>
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
