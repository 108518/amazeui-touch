import React from 'react';
import {
  Container,
  Pagination
} from 'amazeui-touch';

function Log(item) {
  console.log('I am clicked', item)
}

const PaginationExample = (props) => (
  <Container {...props}>
    <Pagination onChange={Log} onPrevious={Log} />
    <Pagination showHead showEnd />
    <Pagination showTotal={(total) => `all: ${total}` }  />
  </Container>
)

export default PaginationExample;
