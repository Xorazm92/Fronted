import { Link } from "react-router-dom"
import { BookCard } from "../../component/card/card"
import { bookData } from "../../data/bookData"
export const Home = () => {
    return (
        <>
            <section className='pt-[64px]'>
                <div className='container'>
                    <h1 className='text-[32px] font-semibold'>Янги қўшилганлар</h1>
                    <div className='mt-[24px] flex gap-[24px]'>
                        {bookData.map((item) =>
                            item.status === "new" && (
                                <div key={item.id}>
                                    <Link
                                        to={`/books/${item.id}`}>
                                        <BookCard
                                            key={item.id}
                                            id={item.id}
                                            img={item.img}
                                            name={item.about.name}
                                            title={item.about.janr}
                                            type={item.type}
                                        />
                                    </Link>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>
            <section className='pt-[64px] pb-[93px]'>
                <div className='container'>
                    <h1 className='text-[32px] font-semibold'>Аудио китоблар</h1>
                    <div className='mt-[24px] flex gap-[24px]'>
                        {bookData.map((item) => !item.type.includes("pdf") ? (
                            <div key={item.id}>
                                <Link
                                    to={`/books/${item.id}`}>
                                    <BookCard
                                        key={item.id}
                                        id={item.id}
                                        img={item.img}
                                        name={item.about.name}
                                        title={item.about.janr}
                                        type={item.type}
                                    />
                                </Link>
                            </div>
                        ) : null
                        )}
                    </div>
                </div>
            </section>
        </>
    )

}