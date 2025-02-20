import cardStar from "../../assets/svg/cardStar.svg";
import cardPdfIcon from "../../assets/svg/cardPdfIcon.svg";
import cardAudioIcon from "../../assets/svg/cardAudioIcon.svg";

export const BookCard = ({ img, name, title, type }) => {
    return (
        <div className="flex flex-col justify-between w-[239px] h-[450px]">
            <div>
                <img
                    className="rounded-[14px] w-[239px] h-[336px] object-cover"
                    src={img}
                    alt={`${name} cover`}
                />
            </div>
            <div className="w-[222px] flex flex-col pb-[17px]">
                <h3 className="font-cairo font-bold text-xl text-[#11142d] pt-[10px] pb-[10px] truncate w-full overflow-hidden text-ellipsis whitespace-nowrap">
                    {name}
                </h3>
                <p className="font-normal text-sm text-[#3f51b5] line-clamp-2">{title}</p>
            </div>
            <div className="flex justify-between items-center">
                <img src={cardStar} alt="rating star" />
                <div className="flex gap-[16px]">
                    {type.includes("audio") && <img src={cardAudioIcon} alt="audio icon" />}
                    {type.includes("pdf") && <img src={cardPdfIcon} alt="pdf icon" />}
                </div>
            </div>
        </div>
    );
};