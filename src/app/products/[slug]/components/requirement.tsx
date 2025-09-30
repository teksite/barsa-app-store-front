import { IconPicker } from "@/app/components/icon";

interface RequirementProps {
    items?: string[];
    icon?: string;
    title?: string;
}

export function Requirement({items = [], icon = "gears", title = "نیازمندی‌ها"}: RequirementProps) {
    if (!items?.length) return null;
    return (
        <div className="w-11/12 md:w-1/2 bg-white rounded-lg p-6 mt-6">
            <div className="flex items-center gap-3 mb-6">
                <IconPicker icon={icon} />
                <h2 className="m-0 whitespace-nowrap">{title}</h2>
            </div>

            <ul className="space-y-2 list-disc list-inside text-sm leading-relaxed">
                {items.map((item:string, index:number) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
