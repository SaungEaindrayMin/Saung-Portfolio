import React from "react";
import { cn } from "@/lib/utils";

const Section = ({ className, children, id, ...props }) => {
    return (
        <section
            id={id}
            className={cn("py-16 md:py-24", className)}
            {...props}
        >
            {children}
        </section>
    );
};

export { Section };
