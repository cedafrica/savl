import { cn } from "@/lib/utils";
interface MaxContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
} 
const MaxContainer = ({ children, className, ...rest }: MaxContainerProps) => {
    return (
        <div
            className={cn("max-w-[1440px] w-full mx-auto", className)}
            {...rest}
        >
            {children}
        </div>
    );
}

export default MaxContainer;