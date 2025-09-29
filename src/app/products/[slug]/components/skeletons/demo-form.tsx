"use client";
import React from "react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";

export default function DemoForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className="shadow-input mx-auto w-full p-3 rounded-xl">
            <h4 className="text-xl font-bold text-neutral-800 ">
                فرم درخواست دمو
            </h4>
            <p className="mt-2 text-sm text-neutral-600">
                جهت هماهنگی تعیین وقت جهت مشاهده دمو این نرم افزار از طریق برسا نوین رای، فرم زیر را پر و ارسال نمایید.
            </p>

            <form className="my-6" onSubmit={handleSubmit}>
                <div className="mb-3 grid gap-3 md:grid-cols-2">
                    <LabelInputContainer>
                        <Label htmlFor="fullname">نام و نام خانوادگی</Label>
                        <Input id="fullname" placeholder="نام و نام خانوادگی خودر ا کامل بنویسید" type="text"/>
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="companyNmae">نام شرکت</Label>
                        <Input id="companyNmae" placeholder="نام کامل شرکت" type="text"/>
                    </LabelInputContainer>
                </div>
                <div className="grid mb-3 gap-3 md:grid-cols-2">
                    <LabelInputContainer>
                        <Label htmlFor="compamyFeild">زمنیه فعالیت شرکت</Label>
                        <Input id="compamyFeild" placeholder="نفت، خوردو، ...." type="text"/>
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-6">
                    <Label htmlFor="email">ایمیل</Label>
                    <Input id="email" placeholder="example@example.com" type="email" dir='ltr'/>
                </LabelInputContainer>
                <LabelInputContainer className="mb-6">
                    <Label htmlFor="phone">تلفن</Label>
                    <Input id="phone" placeholder="09xxxxxxxxx با 021xxxxxxxx" type="tel" dir='ltr'/>
                </LabelInputContainer>

                <button
                    className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                    type="submit"
                >
                    ارسال &rarr;
                    <BottomGradient/>
                </button>
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span
                className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100"/>
            <span
                className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100"/>
        </>
    );
};

const LabelInputContainer = ({
                                 children,
                                 className,
                             }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};
