export interface MenuItem {
    id: number;
    menu_id: number;
    parent_id: number | null;
    position: number;
    title: string;
    subtitle: string | null;
    pre_icon: string | null;
    next_icon: string | null;
    image: string | null;
    url: string;
    classes: string | null;
    attributes: string | null;
    created_at: string | null;
    updated_at: string | null;
}