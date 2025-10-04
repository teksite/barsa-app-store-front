import {IconPicker} from "@/components/icon";
import {VersionType} from "@/contracts/product";
import Link from "next/link";
import {Box} from "@/components/Box";

export function LastVersion({version, link}: { version?: VersionType, link?: string }) {
    if (!version) return null;

    return (
        <Box>
            <h3 className="mb-0">
                {'آخرین نسخه منتشر شده'}
            </h3>
            <hr className="border-zinc-300 my-3"/>
            <ul className="space-y-3 text">
                <li className="flex items-center justify-between">
                     <span>
                         {'نگارش'}
                     </span>
                    <span>
                         {version.title}
                    </span>
                </li>
                <li className="flex items-center justify-between">
                    <span>
                        {'زمان انتشار'}
                    </span>
                    <span dir="ltr">
                        {version.published_at ?? ''}
                    </span>
                </li>
            </ul>
            {link && <div className={'text-center'}>
                <Link href={link} className='text-center mt-6 link'>
                    مشاهده همه نگارش‌ها
                </Link>
            </div>
            }


        </Box>
    );
}
