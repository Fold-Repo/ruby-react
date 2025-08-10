import { cn } from "@/lib";
import React, { ButtonHTMLAttributes, forwardRef } from "react";
import Spinner from "../Spinner";

type ButtonVariant =
    | "primary"
    | "white"
    | "secondary"
    | "dark"
    | "transparent"
    | "outline"
    | "outline_primary"

type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
    rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            className,
            variant = "primary",
            size = "md",
            loading = false,
            disabled = false,
            leftIcon,
            rightIcon,
            fullWidth = false,
            rounded = "md",
            type = "button",
            ...props
        },
        ref
    ) => {
        const variantClasses: Record<ButtonVariant, string> = {
            primary: "bg-primary hover:bg-black text-white",
            white: "bg-white hover:bg-white text-black",
            dark: "bg-black hover:bg-primary text-white",
            secondary: "bg-gray-500 text-white",
            transparent: "bg-transparent border hover:bg-gray-50 hover:text-gray-800 text-gray-700",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            outline_primary: "border border-primary text-primary bg-background hover:bg-primary hover:text-white",
        };

        const sizeClasses: Record<ButtonSize, string> = {
            sm: "h-9 px-3 !text-xs",
            md: "h-11 px-4",
            lg: "h-12 px-6",
            xl: "h-13 px-8",
        };

        const roundedClasses: Record<typeof rounded, string> = {
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            "2xl": "rounded-2xl",
            full: "rounded-full",
        };

        return (
            <button
                ref={ref}
                type={type}
                className={cn(
                    "cursor-pointer inline-flex items-center justify-center whitespace-nowrap !font-semibold text-xs md:text-[13px] hover:opacity-90",
                    "transition-all duration-300 ease-in-out",
                    "focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-ring focus-visible:ring-offset-2",
                    "disabled:pointer-events-none disabled:opacity-50",
                    variantClasses[variant],
                    sizeClasses[size],
                    roundedClasses[rounded],
                    fullWidth && "w-full",
                    className
                )}
                disabled={loading || disabled}
                {...props}>
                {loading ? (
                    <Spinner size={14} />
                ) : (
                    <>
                        {leftIcon && <span className="mr-2">{leftIcon}</span>}
                        {children}
                        {rightIcon && <span className="ml-2">{rightIcon}</span>}
                    </>
                )}
            </button>
        );
    }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps, ButtonVariant, ButtonSize };