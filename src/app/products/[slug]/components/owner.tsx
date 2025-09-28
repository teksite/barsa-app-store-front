import {IconPicker} from "@/app/components/icon";
import {OwnerType} from "@/contracts/product";
import Link from "next/link";
import {Box} from "@/app/components/Box";


type ContactKey = 'telephone' | 'phone' | 'email' | 'url';

const contactItems: { key: ContactKey; icon: string; label: string; prefix: string }[] = [
    { key: 'telephone', icon: 'telephone', label: 'تلفن ثابت', prefix: 'tel:' },
    { key: 'phone', icon: 'phone', label: 'تلفن', prefix: 'tel:' },
    { key: 'email', icon: 'email', label: 'ایمیل', prefix: 'mailto:' },
    { key: 'url', icon: 'link', label: 'لینک', prefix: '' },
];
export function Owner({owner}: { owner: OwnerType }) {
    if (!owner) return null;

    const filteredItems = contactItems.filter(item => owner[item.key]);
    if (!filteredItems.length) return null;

    const isCompany = owner.type === 2;

    return (
        <Box>
            <h3 className="mb-0">
                {'توسعه دهنده'}
            </h3>
            <hr className="border-zinc-300 my-3"/>
            <nav>
                <ul className="space-y-2">
                    <li>
                        <div className="flex items-center justify-between w-full link gap-6">
                            <div className="flex items-center gap-3">
                                <IconPicker icon={isCompany ? "user" : "building"}/>
                                <span>{isCompany ? "نام" : "شرکت"}</span>
                            </div>
                            <div className="text-end" dir="ltr">
                                {owner.title}
                            </div>
                        </div>
                    </li>

                    {/* Contact Details */}
                    {filteredItems.map(({key, icon, label, prefix}) => (
                        <li key={key}>
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                href={prefix + owner[key]}
                                className="flex items-center justify-between w-full link gap-6"
                            >
                                <div className="flex items-center gap-3">
                                    <IconPicker icon={icon}/>
                                    <span>{label}</span>
                                </div>
                                <div className="text-end" dir="ltr">
                                    {owner[key]}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </Box>
    );
}
