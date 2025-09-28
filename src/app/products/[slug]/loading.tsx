import {HeroSkeleton} from "@/app/products/[slug]/skeletons/hero-skeleton";
import {BodySkeleton} from "@/app/products/[slug]/skeletons/body-skeleton";
import {BoxSkeleton} from "@/app/products/[slug]/skeletons/box-skeleton";
import {AsideBoxSkeleton} from "@/app/products/[slug]/skeletons/aside-box-skeleton";

export const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export default function Loading() {
    return (
        <>
            <HeroSkeleton/>
            <div className='py-12 inner-container'>
                <div className="grid gap-6 xl:grid-cols-3 ">
                   <div className="xl:col-span-2 space-y-12">
                       <BodySkeleton/>
                       <BoxSkeleton />
                       <BoxSkeleton />

                   </div>
                    <div className="space-y-12">
                        <AsideBoxSkeleton />
                        <AsideBoxSkeleton />
                        <AsideBoxSkeleton />
                    </div>
                </div>


            </div>
        </>
    );
}
