"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

type InputEffectProps = React.InputHTMLAttributes<HTMLInputElement> & {
    placeholders?: string[];
    interval?: number;
};

export function AnimatedVanishInput({
                                        placeholders = [],
                                        interval = 3000,
                                        ...inputProps
                                    }: InputEffectProps) {
    const [value, setValue] = useState(inputProps.value || "");
    const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
    const [animating, setAnimating] = useState(false);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const newDataRef = useRef<any[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    // Placeholder animation
    const startAnimation = () => {
        if (!placeholders.length) return;
        intervalRef.current = setInterval(() => {
            setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
        }, interval);
    };

    const handleVisibilityChange = () => {
        if (document.visibilityState !== "visible" && intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        } else if (document.visibilityState === "visible") {
            startAnimation();
        }
    };

    useEffect(() => {
        startAnimation();
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [placeholders, interval]);

    // Canvas drawing
    const draw = useCallback(() => {
        if (!inputRef.current || !canvasRef.current) return;
        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;

        canvasRef.current.width = 800;
        canvasRef.current.height = 800;
        ctx.clearRect(0, 0, 800, 800);

        const computedStyles = getComputedStyle(inputRef.current);
        const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"));
        ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`;
        ctx.fillStyle = "#FFF";
        if (typeof value === "string") {
            ctx.fillText(value, 16, 40);
        }

        const imageData = ctx.getImageData(0, 0, 800, 800);
        const pixelData = imageData.data;
        const newData: any[] = [];

        for (let t = 0; t < 800; t++) {
            let i = 4 * t * 800;
            for (let n = 0; n < 800; n++) {
                let e = i + 4 * n;
                if (pixelData[e] !== 0 || pixelData[e + 1] !== 0 || pixelData[e + 2] !== 0) {
                    newData.push({
                        x: n,
                        y: t,
                        r: 1,
                        color: `rgba(${pixelData[e]},${pixelData[e + 1]},${pixelData[e + 2]},${pixelData[e + 3]})`,
                    });
                }
            }
        }

        newDataRef.current = newData;
    }, [value]);

    useEffect(() => {
        draw();
    }, [value, draw]);

    const animate = (start: number) => {
        const animateFrame = (pos: number = 0) => {
            requestAnimationFrame(() => {
                const newArr = [];
                for (let i = 0; i < newDataRef.current.length; i++) {
                    const current = newDataRef.current[i];
                    if (current.x < pos) {
                        newArr.push(current);
                    } else {
                        if (current.r <= 0) continue;
                        current.x += Math.random() > 0.5 ? 1 : -1;
                        current.y += Math.random() > 0.5 ? 1 : -1;
                        current.r -= 0.05 * Math.random();
                        newArr.push(current);
                    }
                }
                newDataRef.current = newArr;

                const ctx = canvasRef.current?.getContext("2d");
                if (ctx) {
                    ctx.clearRect(pos, 0, 800, 800);
                    newDataRef.current.forEach(({ x, y, r, color }) => {
                        if (x > pos) {
                            ctx.beginPath();
                            ctx.rect(x, y, r, r);
                            ctx.fillStyle = color;
                            ctx.strokeStyle = color;
                            ctx.stroke();
                        }
                    });
                }

                if (newDataRef.current.length > 0) animateFrame(pos - 8);
                else setAnimating(false);
            });
        };
        animateFrame(start);
    };

    const vanishAndSubmit = (e?: React.FormEvent | React.KeyboardEvent) => {
        setAnimating(true);
        draw();
        const maxX = newDataRef.current.reduce(
            (prev, current) => (current.x > prev ? current.x : prev),
            0
        );
        animate(maxX);
        if (inputProps.onSubmit && e) inputProps.onSubmit(e as any);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !animating) vanishAndSubmit(e);
        if (inputProps.onKeyDown) inputProps.onKeyDown(e);
    };

    return (
        <div className="relative w-full">
            <canvas
                ref={canvasRef}
                className="absolute pointer-events-none inset-0 scale-50 origin-top-left"
            />
            <input
                {...inputProps}
                ref={inputRef}
                value={value}
                onChange={(e) => {
                    if (!animating) {
                        setValue(e.target.value);
                        inputProps.onChange && inputProps.onChange(e);
                    }
                }}
                onKeyDown={handleKeyDown}
                className={`relative z-10 ${inputProps.className}`}
            />
            <AnimatePresence mode="wait">
                {!value && placeholders.length > 0 && (
                    <motion.p
                        key={`placeholder-${currentPlaceholder}`}
                        initial={{ y: 5, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -15, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center pl-4 pointer-events-none text-gray-500"
                    >
                        {placeholders[currentPlaceholder]}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
}
