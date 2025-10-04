"use client";

import {useState} from "react";
import Image, {ImageProps} from "next/image";

type SafeImageProps = Omit<ImageProps, "src"> & {
    src?: string;
    fallback?: string;
};

export function SafeImage({
                              src,
                              alt = "Image",
                              fallback = "/storage/uploads/products/default.jpg",
                              ...rest
                          }: SafeImageProps) {
    const [error, setError] = useState(false);
    if (!src) return;
    let validSrc = src && src.trim() !== "" ? src.trim() : fallback;

    if (validSrc && !validSrc.startsWith("http") && !validSrc.startsWith("/")) {
        validSrc = "/" + validSrc;
    }

    if (!validSrc) return null;

    return (
        <Image
            src={error ? fallback : validSrc}
            alt={alt}
            onError={() => setError(true)}
            {...rest}
        />
    );
}
