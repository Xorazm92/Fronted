import { bookData } from "../../data/bookData"
import { NotFound } from "../NotFound/notFound"
import { BookCard } from "./bookCard"
import { useParams } from "react-router-dom"

export const BookDetail = () => {
    const { id } = useParams();

    if (!bookData.some((item) => item.id == id)) {
        return <NotFound />
    }

    return (
        <div className="container">
            {bookData.map((item) => item.id == id &&
                <BookCard key={item.id} bookData={item} />
            )}
        </div>
    )
}