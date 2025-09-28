
export interface ProductType {
    title:string,
    excerpt?:string,
    body?:string,
    featured_image?:string,
    images?:string[],
    features?:string[],
    features_soon?:string[],
    requirements?:string[],
    catalog?:string,
    recommend_type:1|2|3,
    owner:OwnerType,
    properties:PropertiesType
}

export interface OwnerType {
    title:string,
    url?:string,
    telephone?:string,
    phone?:string,
    email?:string,
    type:1|2,

}



export interface GroupType {
    id: number;
    title: string;
}

export interface GroupedPropertiesType {
    id: number;
    title: string;
    group: GroupType;
}

export type PropertiesType = {
    [key: string]: string[] | GroupedPropertiesType[];
};