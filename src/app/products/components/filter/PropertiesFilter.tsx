import { PropertyType } from "@/contracts/product";

type Props = {
    properties: PropertyType[];
    selectedProperties: number[];
    toggleProperty: (id: number) => void;
};

export function PropertiesFilter({ properties, selectedProperties, toggleProperty }: Props) {
    return (
        <>
            {properties.map(property => (
                <div key={property.id} className='flex items-center gap-2 mb-2'>
                    <input
                        id={`property-${property.id}`}
                        type='checkbox'
                        checked={selectedProperties.includes(property.id)}
                        onChange={() => toggleProperty(property.id)}
                    />
                    <label htmlFor={`property-${property.id}`} className="text-sm">
                        {property.title}
                    </label>
                </div>
            ))}
        </>
    );
}
