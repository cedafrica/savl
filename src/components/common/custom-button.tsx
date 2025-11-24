import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface CustomButtonProps {
    children: ReactNode;
    icon?: ReactNode;
    showIcon?: boolean;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    variant?: "default" | "outline";
    link?: string;
}

const CustomButton = ({
    children,
    icon,
    showIcon = true,
    className = "",
    onClick,
    type = "button",
    disabled = false,
    // variant = "outline",
    link = ""
}: CustomButtonProps) => {
    const baseClasses = "sm:text-[1.6rem] text-[1.2rem] border px-[20px] py-8 rounded-[3rem] border-white mt-[1.8rem] bg-transparent text-white hover:bg-white cursor-pointer hover:text-black sm:w-fit w-full";

    return (
        <>
            {
                link === "" ? (
                    <Button
                        className={`${baseClasses} ${className}`}
                        onClick={onClick}
                        type={type}
                        disabled={disabled}
                        asChild
                    >
                        <Link to={link}>
                            {children}
                            {showIcon && (icon || <MoveRight className="size-[1.9rem]" />)}
                        </Link>
                    </Button>
                ) : (
                    <Button
                        className={`${baseClasses} ${className}`}
                        onClick={onClick}
                        type={type}
                        disabled={disabled}
                    >
                        {children}
                        {showIcon && (icon || <MoveRight className="size-[1.9rem]" />)}
                    </Button>
                )
            }
        </>
    );
};

export default CustomButton;