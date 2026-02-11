"use client";

import { useState, useEffect } from "react";
import DecryptedText from "../DecryptedText";

interface DecryptedRolesProps {
    roles: string[];
    intervalTime?: number;
}

export function DecryptedRoles({
    roles,
    intervalTime = 3000,
}: DecryptedRolesProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length);
        }, intervalTime);
        return () => clearInterval(interval);
    }, [roles.length, intervalTime]);

    return (
        <div className="inline-block min-w-[300px]">
            <DecryptedText
                text={roles[index]}
                speed={40}
                maxIterations={15}
                sequential={true}
                revealDirection="center"
                className="text-accent-blue"
                parentClassName="text-accent-blue"
                encryptedClassName="text-accent-blue/40"
                animateOn="hover"
            />
        </div>
    );
}
