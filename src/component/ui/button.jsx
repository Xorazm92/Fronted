import React from "react";
import clsx from "clsx";

export const Button = ({
    children,
    type = "button", // Default qiymat qo'shildi
    disabled = false, // Default qiymat qo'shildi
    startIcon,
    endIcon,
    variant = "birinchi", // Default variant qo'shildi
    className,
    ...props
}) => {
    return (
        <button
            type={type}
            disabled={disabled}
            className={clsx(
                "font-bold text-[18px] cursor-pointer flex items-center justify-center",
                {
                    "bg-primary rounded-[14px] px-[24px] text-white hover:bg-opacity-90": variant === "birinchi",
                    "bg-secondary rounded-[14px] px-[24px] text-text-color hover:bg-opacity-90": variant === "ikkinchi",
                    "w-[57px] h-[27px] bg-white px-[5px] py-[8px] rounded-[5px] text-text-color": variant === "uchinchi",
                },
                disabled && "opacity-50 cursor-not-allowed",
                className
            )}
            {...props}
        >
            {startIcon && <span className="mr-[8px]">{startIcon}</span>}
            {children}
            {endIcon && <span className="ml-[8px]">{endIcon}</span>}
        </button>
    );
};