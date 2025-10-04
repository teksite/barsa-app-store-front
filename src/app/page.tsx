import Image from "next/image";
import {fetchApi} from "@/lib";
import Link from "next/link";
import {ProductBase} from "@/contracts/product";
import {ProductsList} from "@/app/components/products-list";
import {IconPicker} from "@/components/icon";

export default async function Home() {
    const {data: products}: { data: ProductBase[] } = await fetchApi(
        `http://app-store.test/api/v1/products?limit=6`, false
    );

    return (
        <>
            <header className="py-12">
                <div className="text-center mb-12">
                    <div className="relative inline-block mx-auto w-fit">
                        <div
                            className="absolute border-t-3 border-r-3 border-main_color -top-5 -right-5 w-8 h-8 rounded-tr-lg animate-fade-out"></div>
                        <div
                            className="absolute border-b-3 border-l-3 border-main_color -bottom-5 -left-5 w-8 h-8 rounded-bl-lg animate-fade-out"></div>
                        <h1 className="text-5xl text-center uppercase">
                            <span className="text-main_color">barsa</span>
                            <span> hub</span>
                        </h1>
                        <span className="block h3 text-center">
                            پلتفرم جامع نرم‌افزار سازمانی
                        </span>
                        <p className="text-center mb-0 capitalize">
                            ولین و جامع‌ترین پایگاه نرم‌افزارهای سازمانی مبتنی بر سیستم‌ساز، برای ارتقای کارایی، ساده‌سازی فرایندها و رشد هوشمند سازمان‌ها
                        </p>
                    </div>
                </div>
            </header>
            <main className="py-12 ">
                <section className="inner-container">
                    <h2 className="text-center">
                        آخرین محصولات
                    </h2>
                  <ProductsList products={products} />
                    <div className="text-center mt-6">
                        <Link href="/products" className="text-sm link text-main_color flex items-center justify-center gap-1">
                            مشاهده همه محصولات
                            <IconPicker icon={'arrow-left'} width={16} height={16}/>
                        </Link>
                    </div>
                </section>

            </main>
        </>
    );
}
