import {ContactsInfo, ContactsInfoType} from "@/shared/data";
import Link from "next/link";
import {IconPicker} from "@/components/icon";
import {Box} from "@/components/Box";
import type {Metadata} from "next";

export async function generateMetadata():Promise<Metadata>{
    return {
        title: "تماس با برسا هاب - برسا نوین رای",
        description: "در این صفحه راه های ارتباطی با برسا نوین رای و پتلفرم برسا هاب را میتوانید مشاهده نمایید.",
    }
}


export default function ContactPage() {

    return (
        <main id="page-content" className="contact-page py-12" role="main" aria-labelledby="contact-heading">
            <div className="inner-container">
                <section id="contact-heading" className="items-center grid lg:grid-cols-2 gap-12">
                    <div className="bg-no-repeat bg-cover h-full bg-theme-1 p-6">
                        <h1>
                            در تماس باشید
                        </h1>
                        <nav aria-label="در تماس باشید">
                            <ul className='space-y-6'>
                                {Object.entries(ContactsInfo.general).map(([key, section]) => (
                                    <li key={key} className='flex items-start gap-3'>
                                        <div className='flex items-center gap-3 '>
                                            <IconPicker icon={section.icon} strokeWidth={2}/>
                                            <strong>{section.title}:</strong>
                                        </div>
                                        <ul className='space-y-3'>
                                            {section.items.map((item, index) => (
                                                <li key={index}>
                                                    <Link href={`${section.type}${item.href}`}>
                                                        {item.title}
                                                    </Link>

                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="mt-12">
                            <h3>
                                ما را دنبال کنید
                            </h3>
                            <p>
                                درصفحات اجتماعی با ما باشید.
                            </p>
                            <nav aria-label=" ما را دنبال کنید">
                                <ul className='flex items-center justify-start gap-6 mt-3'>
                                    {Object.entries(ContactsInfo.social).map(([key, item]) => (
                                        <li key={key} className='flex items-start gap-3'>
                                            <Link href={item.href} className='flex items-center gap-3 rounded-full border border-zinc-300 p-2' title={item.title}>
                                                <IconPicker icon={item.icon} width={24} height={24}/>
                                            </Link>

                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className="relative">
                        <Box>
                            <iframe className="w-full"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12952.13343498275!2d51.399056907287594!3d35.74998482989857!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e06edbc3f6cf1%3A0xaf62ea30e3aab092!2sBarsa%20Novin%20Ray%20Company!5e0!3m2!1sen!2s!4v1758964513923!5m2!1sen!2s"
                                    width="600" height="300" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </Box>
                    </div>

                </section>
                <hr className="w-11/12 mx-auto my-12"/>
                <div className="text-center">
                    <p className="text-center">
                        همچنین می‌توانید از طریق راه‌های ارتباطی موجود در وب‌سایت رسمی برسا نوین‌رای با ما در ارتباط
                        باشید و نظرات، پیشنهادات و پرسش‌های خود را با ما در میان بگذارید.
                    </p>
                    <Link href={'https://barsasoft.com'} className="text-sm mt-6 inline-block mx-auto text-center px-3 py-1 text-main_color border border-main_color rounded-lg">
                        وب‌سایت برسا نوین رای
                    </Link>
                </div>
            </div>
        </main>
    );
}