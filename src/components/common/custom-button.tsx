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
  link,
}: CustomButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-3 sm:text-[1.6rem] text-[1.2rem] border px-[32px] py-8 rounded-[3rem] border-white mt-[1.8rem] bg-transparent text-white hover:bg-white cursor-pointer hover:text-black sm:w-fit w-full transition-all";

  // ✅ IF LINK EXISTS → USE ROUTER LINK
  if (link) {
    return (
      <Button asChild className={`${baseClasses} ${className}`} disabled={disabled}>
        <Link to={link}>
          {children}
          {showIcon && (icon || <MoveRight className="size-[1.9rem]" />)}
        </Link>
      </Button>
    );
  }

  // ✅ NORMAL BUTTON (NO LINK)
  return (
    <Button
      className={`${baseClasses} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
      {showIcon && (icon || <MoveRight className="size-[1.9rem]" />)}
    </Button>
  );
};

export default CustomButton;
