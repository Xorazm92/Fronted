import { bookData } from "../../data/bookData";

export const BookCard = ({ bookData }) => {

    return (
        <>
            <section className="flex gap-[24px]">
                <div className="w-[300px] h-auto">
                    <img className="w-[300px] h-auto flex-shrink-0" src={bookData.img} alt="book photo" />
                </div>
                <div className="flex-1 overflow--y-auto ">
                    <div>
                        <h1 className="text-3xl font-bold text-[#11142d]">{bookData.about.name}</h1>
                    </div>
                    <p className="text-sm text-[#3f51b5]">{bookData.about.janr.join(", ")}</p>
                    <p className="text-wrap text-sm leading-[171%] py-[16px]">{bookData.about.title}</p>
                    <div>
                        <ul className="flex gap-[70px]">
                            <li className="flex flex-col justify-between">
                                <p className="font-normal text-sm text-[#aaa]">Муаллиф</p>
                                <p className="text-lg">{bookData.about.author}</p>
                            </li>
                            <li className="flex flex-col justify-between">
                                <p className="font-normal text-sm text-[#aaa]">Нашриёт</p>
                                <p className="text-lg">{bookData.about.publishing}</p>
                            </li>
                            <li className="flex flex-col justify-between">
                                <p className="font-normal text-sm text-[#aaa]">Йил</p>
                                <p className="font-semibold text-lg text-[#11142d]">{bookData.about.published_date[0]}</p>
                            </li>
                        </ul>
                        <div class="w-full border-t border-gray-400 rounded-lg mt-[20px] mb-[25px] border-dotted border-[1px]"></div>
                        <div className="flex gap-[16px]">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col pt-[40px]">
                <div className="flex gap-[38px]">
                    <h2 className="font-bold text-[32px] text-[#242424] ">Маълумотлар</h2>
                    <h2 className="font-bold text-[32px] text-[#9a9a9a]">Фикрлар</h2>
                </div>
                <ul className="w-[70%] rounded-tr-lg">
                    <li className="flex py-[21px] pl-[25px] border border-[#eef4ff] ">
                        <p className="w-[35%] font-bold text-basem leading-[116%] text-[#11142d]">Китоб номи</p>
                        <p className="font-normal text-basem leading-[116%] text-[#11142d]">{bookData.about.name}</p>
                    </li>
                    <li className="flex py-[21px] pl-[25px] border border-[#eef4ff] ">
                        <p className="w-[35%] font-bold text-basem leading-[116%] text-[#11142d]">Муаллиф</p>
                        <p className="font-normal text-basem leading-[116%] text-[#11142d]">{bookData.about.author}</p>
                    </li>
                    <li className="flex py-[21px] pl-[25px] border border-[#eef4ff] ">
                        <p className="w-[35%] font-bold text-basem leading-[116%] text-[#11142d]">ISBN</p>
                        <p className="font-normal text-basem leading-[116%] text-[#11142d]">{bookData.about.ISBN}</p>
                    </li>
                    <li className="flex py-[21px] pl-[25px] border border-[#eef4ff] ">
                        <p className="w-[35%] font-bold text-basem leading-[116%] text-[#11142d]">Тил</p>
                        <p className="font-normal text-basem leading-[116%] text-[#11142d]">{bookData.about.leng}</p>
                    </li>
                    <li className="flex py-[21px] pl-[25px] border border-[#eef4ff] ">
                        <p className="w-[35%] font-bold text-basem leading-[116%] text-[#11142d]">Сахифалар</p>
                        <p className="font-normal text-basem leading-[116%] text-[#11142d]">{bookData.about.pages}</p>
                    </li>
                    <li className="flex py-[21px] pl-[25px] border border-[#eef4ff] ">
                        <p className="w-[35%] font-bold text-basem leading-[116%] text-[#11142d]">Чоп этилган сана</p>
                        <p className="font-normal text-basem leading-[116%] text-[#11142d]">{bookData.about.published_date}</p>
                    </li>
                    <li className="flex py-[21px] pl-[25px] border border-[#eef4ff] ">
                        <p className="w-[35%] font-bold text-basem leading-[116%] text-[#11142d]">Нашриёт</p>
                        <p className="font-normal text-basem leading-[116%] text-[#11142d]">{bookData.about.publishing}</p>
                    </li>
                    <li className="flex pt-[21px] pb-[65px] pl-[25px] border border-[#eef4ff] ">
                        <p className="w-[35%] font-bold text-basem leading-[116%] text-[#11142d]">Рукн</p>
                        <p className="font-normal text-basem leading-[116%] text-[#11142d]">{bookData.about.janr}</p>
                    </li>
                </ul>
            </section>
        </>
    )
}