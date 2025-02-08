import './BookCard.css'

function BookCard({ book }) {
    return <div className='Book'>
        <div className='Book-Text'>
            <h3>{book.fullName}</h3>
            <h4>{book.occupation}</h4>
        </div>
    </div>
}

export default BookCard;