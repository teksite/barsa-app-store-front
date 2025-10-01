export function HtmlContent({ html }: { html: string }) {
    return { __html: html };
}



export function buildTree<T extends Record<string, any>>(
    items: T[],
    idKey: keyof T = "id",
    parentKey: keyof T = "parent_id",
    childrenKey: string = "children"
): T[] {
    const lookup: Record<string | number, T & { [key: string]: any[] }> = {};
    const rootItems: (T & { [key: string]: any[] })[] = [];

    items.forEach(item => {
        lookup[item[idKey] as any] = { ...item, [childrenKey]: [] };
    });

    items.forEach(item => {
        const parentId = item[parentKey];
        if (parentId == null) {
            rootItems.push(lookup[item[idKey] as any]);
        } else if (lookup[parentId as any]) {
            lookup[parentId as any][childrenKey].push(lookup[item[idKey] as any]);
        }
    });

    return rootItems;
}
