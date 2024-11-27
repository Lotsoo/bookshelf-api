const { addBookHandler, getAllBooksHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler } = require('./handler');

const routes = [
  {
    method: 'post',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'get',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'get',
    path: '/book/{bookId}',
    handler: getBookByIdHandler,
  },
  {
    method: 'put',
    path: '/book/{bookId}',
    handler: editBookByIdHandler,
  },
  {
    method: 'delete',
    path: '/book/{bookId}',
    handler: deleteBookByIdHandler,
  }
];

module.exports = routes;