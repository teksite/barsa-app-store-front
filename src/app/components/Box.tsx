import React from "react";

export function Box({children}:{children:React.ReactNode}):React.ReactNode {
    return <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg">
        {children}
    </div>;
}