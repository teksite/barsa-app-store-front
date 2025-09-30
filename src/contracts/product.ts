// ==================== Owner ====================
export interface OwnerType {
    title: string;
    url?: string;
    telephone?: string;
    phone?: string;
    email?: string;
    type: 1 | 2;
}

// ==================== Version ====================
export interface VersionType {
    id: number;
    title: string;
    changes?: string;
    published_at?: string;
    release_type: 1 | 2;
}

// ==================== Product ====================
export interface ProductBase {
    id: number;
    title: string;
    excerpt?: string;
    featured_image?: string;
    owner: OwnerType;
    recommend_type: 1 | 2 | 3;
    last_version?: VersionType;
    slug?: string;
}


export interface ProductType extends ProductBase {
    body?: string;
    images?: string[];
    features?: string[];
    features_soon?: string[];
    requirements?: string[];
    catalog?: string;
    properties: PropertiesType;
}

// ==================== Property & Group ====================
export interface GroupType {
    id: number;
    title: string;
}

export type PropertyType = {
    id: number;
    title: string;
};


export interface GroupWithPropertyType extends GroupType {
    properties?: PropertyType[];
}


export interface GroupedPropertiesType {
    id: number;
    title: string;
    group: GroupType;
}


export type PropertiesType = {
    [key: string]: string[] | GroupedPropertiesType[];
};

