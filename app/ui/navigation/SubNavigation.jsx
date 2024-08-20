import Link from "next/link";
import { useState} from "react";
import clsx from "clsx";
import { montserrat } from "../fonts";

export default function SubNavigation({ items, isHovered }) {
    const [localIsHovered, setLocalIsHovered] = useState(isHovered);

    return (
        <>
            {localIsHovered && (
                <div
                    className={`${montserrat.className} font-semibold text-sm absolute flex flex-col top-8 lg:top-10 left-5 bg-[#444444] bg-opacity-75 p-4`}
                    onMouseEnter={() => setLocalIsHovered(true)}
                    onMouseLeave={() => setLocalIsHovered(false)}
                >
                    {items.map((item, index) => (
                        <Link key={index} href={item.href}>
                            <p className="text-white text-xs lg:text-sm hover:text-[#008DD2] cursor-pointer py-1">{item.subname}</p>
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
}