export interface MenuItemType {
    id: number;
    parent_id: number | null;
    position: number;
    title: string;
    subtitle: string | null;
    url: string;
}

export interface TreeMenuType extends MenuItemType {
   children?: MenuItemType[];
}