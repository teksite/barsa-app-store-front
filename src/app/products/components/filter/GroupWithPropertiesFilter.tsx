import { Box } from "@/app/components/Box";
import { GroupWithPropertyType } from "@/contracts/product";
import {PropertiesFilter} from "@/app/products/components/filter-group";

type Props = {
    group: GroupWithPropertyType;
    selectedProperties: number[];
    toggleProperty: (id: number) => void;
};

export function GroupWithPropertiesFilter({ group, selectedProperties, toggleProperty }: Props) {
    return (
        <Box className='w-full'>
            <div className="h3 font-bold mb-2">{group.title}</div>
            {group.properties && group.properties.length > 0 && (
                <div className='overflow-y-auto max-h-60'>
                    <PropertiesFilter
                        properties={group.properties}
                        selectedProperties={selectedProperties}
                        toggleProperty={toggleProperty}
                    />
                </div>
            )}
        </Box>
    );
}
