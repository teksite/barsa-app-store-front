'use client'
import {IconPicker} from "@/components/icon";

;
import Link from "next/link";
import React, {JSX, useState} from "react";
import {AnimatedModalDemo} from "@/components/modal";
import DemoForm from "@/app/products/[slug]/components/skeletons/demo-form";

export function Demo({title}: { title: string }): JSX.Element {
    const [showModal, setShowModal] = useState(false);
    const showModalHandler = () => {
        setShowModal(true);
    }
    const hideModalHandler = () => {

    }
    return (
        <div className="p-6 rounded-xl border border-main_color flex flex-col items-center gap-3">
            <h3 className='text-center text-main_color'>
                {'درخواست دمو از طریق برسا نوین رای '}
            </h3>
            <AnimatedModalDemo trigger={<DemoButton />} content={<DemoForm  />} />
        </div>

    );
}

function DemoButton():React.ReactNode {
    return (
        <span role={"button"} className='px-3 py-1 text-sm border border-main_color text-main_color rounded-lg hover:bg-main_color hover:text-white cursor-pointer'>
            {'فرم درخواست دمو'}
        </span>
    );
}
