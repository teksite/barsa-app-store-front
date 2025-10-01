export type ContactItemType = {
    title: string;
    href: string;
};

export type ContactSectionType = {
    icon: string;
    type: string;
    title: string;
    items: ContactItemType[];
};

export type SocialItemType = {
    title: string;
    href: string;
    icon: string;
};

export type ContactsInfoType = {
    general: {
        email: ContactSectionType;
        phone: ContactSectionType;
        address: ContactSectionType;
    };
    social: SocialItemType[];
};

// contacts.ts
export const ContactsInfo: ContactsInfoType = {
    general: {
        email: {
            title:'ایمیل',
            icon: "mail",
            type: "mailto:",
            items: [
                { title: "info@barsasoft.com", href: "info@barsasoft.com" }
            ]
        },
        phone: {
            title:'تلفن',
            icon: "phone",
            type: "tel:",
            items: [
                { title: "(21)43000090", href: "00982143000090" },
                { title: "(21)91304846", href: "00982191304846" }
            ]
        },
        address: {
            title:'آدرس',
            icon: "marker-location",
            type: "",
            items: [
                { title: "تهران – خیابان شیراز جنوبی – کوچه آقاعلیخانی شرقی پلاک 5 واحد 2", href: "https://goo.gl/maps/NBZUyzbHLsb9h5Zd9" }
            ]
        }
    },
    social: [
        {  href: "https://instagram.com/barsanesh", icon: "instagram" , title:'اینستاگرام',},
        {  href: "https://www.linkedin.com/company/barsanesh/", icon: "linkedin", title:'لینکدین', }
    ]
};
