import React from "react";

type BoxProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
};

export function Box({ children, className = "", ...rest }: BoxProps): React.ReactNode {
    return (
        <div
            className={`p-6 rounded-xl bg-white shadow-md hover:shadow-lg ${className}`}
            {...rest}
        >
            {children}
        </div>
    );
}