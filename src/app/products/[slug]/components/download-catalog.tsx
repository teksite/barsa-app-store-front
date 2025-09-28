import {IconPicker} from "@/app/components/icon";
import Link from "next/link";

export function DownloadCatalog({url, title, icon = 'cloud-arrow'}: { url?: string, title?: string, icon?: string }) {
    if (!url) return null;
    return (

        <Link target="_blank" rel="noopener noreferrer" href={url}
              className="inline-block w-11/12 md:w-1/2 bg-white rounded-lg p-6 mt-6">
            <div className="flex items-center gap-3 font-bold">
                <IconPicker icon={icon}/>
                <div className="text-xs w-full">
                        <span className="text-main_color_alt">
                            {'دانلود کاتالوگ'}
                        </span>
                    <hr className="border-main_color my-1"/>
                    <span className="text-main_color">
                       {`لینک کاتالوگ ${title} - کلیک کنید`}
                    </span>
                </div>
            </div>
        </Link>

    );
}