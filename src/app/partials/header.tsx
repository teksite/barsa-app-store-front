import Link from "next/link";
import Image from "next/image";
import { buildTree, fetchApi } from "@/lib";
import { MenuItemType, TreeMenuType } from "@/contracts/menu";

export async function Header() {
    const label = 'menu_1750587275';

    const menuItems = await getCachedMenu(label);

    if (!menuItems) return null;

    return (
        <header className="sticky top-0 shadow-lg z-50 transition-transform duration-300 ease-in-out" id="headerSite">
            <div className="bg-white/85 backdrop-blur-lg grid grid-cols-2 lg:grid-cols-12 items-center border-b border-zinc-50 px-3 z-30 w-full">
                <div className="lg:col-span-3">
                    <Link href="/" className="inline-flex items-center justify-start gap-1 p-1">
                        <Image src="/storage/logo/logo-75x56.png" alt="برسا هاب" width="50" height="37" decoding="sync" fetchPriority="high" loading="eager" />
                        <span className="hidden md:block lg:hidden xl:block font-bold min-w-fit w-fit h3 mb-0">
                           برسا هاب
                        </span>
                    </Link>
                </div>

                <nav className="hidden lg:flex lg:col-span-6 items-center justify-center gap-6">
                    {menuItems.map((item: TreeMenuType) => (
                        <Link href={item.url ?? '#'} key={item.id}>
                            {item.title}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}



const menuCache = new Map<string, TreeMenuType[]>();

export async function getCachedMenu(label: string): Promise<TreeMenuType[]> {
    if (menuCache.has(label)) {
        return menuCache.get(label)!;
    }

    const { data: menu }: { data: MenuItemType[] } = await fetchApi(`http://app-store.test/api/v1/menus/${label}` ,false);
    const menuItems = buildTree(menu);

    menuCache.set(label, menuItems);

    return menuItems;
}