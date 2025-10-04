import Image from "next/image";

export function Footer() {


    return (
       <footer className="footer bg-slate-600 py-3 px-3">
           <div className='outer-container flex justify-between items-center' >
               <figure className='flex items-center gap-3 justify-start text-zinc-50 font-bold'>
                   <Image src={'/storage/logo/logo-white-75x56.png'} alt='برسا نوین رای' width='75' height='56' loading={'lazy'} fetchPriority='low' decoding={'async'}/>
                   <figcaption>
                       برسا نوین رای
                   </figcaption>
               </figure>
               <p className='text-end text-zinc-50 font-bold'>
                   تمام حقوق این سایت متعلق به برسا استور است (1392)
               </p>
           </div>
       </footer>
    );
}
