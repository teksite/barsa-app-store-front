declare module "colorthief" {
    export default class ColorThief {
        getColor(image: HTMLImageElement | string): [number, number, number];
        getPalette(image: HTMLImageElement | string, colorCount?: number): [number, number, number][];
    }
}