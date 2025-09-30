import {HeroSkeleton} from "@/app/products/[slug]/components/skeletons/hero-skeleton";
import {BodySkeleton} from "@/app/products/[slug]/components/skeletons/body-skeleton";
import {BoxSkeleton} from "@/app/products/[slug]/components/skeletons/box-skeleton";
import {AsideBoxSkeleton} from "@/app/products/[slug]/components/skeletons/aside-box-skeleton";
import {VersionSkeleton} from "@/app/products/[slug]/components/skeletons/version-skeleton";

export const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export default function Loading() {
    return (
        <>
            <HeroSkeleton/>
            <div className='py-12 inner-container'>
                <VersionSkeleton />


            </div>
        </>
    );
}
