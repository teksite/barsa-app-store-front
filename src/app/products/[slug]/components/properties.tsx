import { GroupedPropertiesType, PropertiesType } from "@/contracts/product";

interface PropertiesProps {
    properties: PropertiesType;
}

export function Properties({ properties }: PropertiesProps) {
    return (
        <ul className="space-y-3 mt-6">
            {Object.entries(properties).map(([groupName, values]) => (
                <li key={groupName} className="flex items-center gap-3">
                    <span className="font-bold">{groupName}</span>
                    <ul className="flex flex-wrap items-center gap-1">
                        {renderPropertyValues(values)}
                    </ul>
                </li>
            ))}
        </ul>
    );
}


const renderPropertyValues = (values: string[] | GroupedPropertiesType[]) => {
    if (values.length === 0) return null;

    return values.map((value) => {
        const title = typeof value === 'string' ? value : value.title;
        const key = typeof value === 'string' ? value : value.id;

        return (
            <li key={key} className="bg-slate-300 text-slate-600 rounded-xl px-3 py-1 select-none" >
                {title}
            </li>
        );
    });
};