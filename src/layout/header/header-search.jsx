import { MenuIcon } from '../../assets/svg/icon/menuIcon';
import { SearchIcon } from '../../assets/svg/icon/search';
import logo from '../../assets/svg/liberLogo.svg';

export const HeaderSearch = () => {
    return (
        <div className="flex items-center grow gap-[46px]">
            <a href="#" aria-label="Home">
                <img src={logo} alt="Liber Logo" />
            </a>

            <div className="flex gap-[4px] grow items-center">
                <div className="relative">
                    <MenuIcon className="absolute left-[24px] top-1/2 -translate-y-1/2" />
                    <select
                        className="outline-none border border-[#e1e1e1] py-[9px] pl-[60px] pr-[50px] rounded-l-[14px] appearance-none cursor-pointer bg-white text-[#11142d]"
                        name="category"
                    >
                        <option value="all">Ruknlar</option>
                        <option value="world">Jahon adabiyoti</option>
                        <option value="uzbek">O'zbek adabiyoti</option>
                    </select>
                </div>

                <div className="relative flex grow items-center border border-[#e1e1e1] rounded-r-[14px]">
                    <input
                        className="outline-none w-full py-[9px] pl-[29px] placeholder:text-[#9e9e9e]"
                        type="text"
                        placeholder="Qidirish"
                    />
                    <button
                        className="cursor-pointer py-[9px] pl-[19px] pr-[27px] border-l-2 border-[#e1e1e1]"
                        aria-label="Search"
                    >
                        <SearchIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};