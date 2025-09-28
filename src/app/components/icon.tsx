interface IconType {
    icon: string;
    size?: number;
}
export function IconPicker({icon , size=24}: IconType) {
    return icon + size;
}