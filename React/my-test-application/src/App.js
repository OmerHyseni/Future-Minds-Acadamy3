
import './App.css';
import Card from './components/UserCard/Card';
import BookCard from './components/BookCard/BookCard';
function App() {

  let users = [
    {
      fullName: 'Omer Hyseni',
      occupation: 'FMA Student'
    },
    {
      fullName: 'Omer Hyseni',
      occupation: 'FMA Student'
    },
    {
      fullName: 'Omer Hyseni',
      occupation: 'FMA Student'
    },
    {
      fullName: 'Omer Hyseni',
      occupation: 'FMA Student'
    },

  ]

  let Books = [
    {
      fullName: 'Book',
      occupation: 'FMA Student'
    },
    {
      fullName: 'Adem',
      occupation: 'FMA Student'
    },
    {
      fullName: 'Adem',
      occupation: 'FMA Student'
    },
    {
      fullName: 'Adem',
      occupation: 'FMA Student'
    },
    {
      fullName: 'Adem',
      occupation: 'FMA Student'
    },
    {
      fullName: 'Adem',
      occupation: 'FMA Student'
    },
  ]





  return (
    <>
      <h1>These are the users</h1>
      <div className='UserCardss'>
        {users.map(user => <Card user={user}></Card>)}

      </div>
      <h1>Books</h1>
      <div className='BookCards'>
        {Books.map(book => <BookCard book={book}></BookCard>)}
      </div>

    </>

  );
}

export default App;
