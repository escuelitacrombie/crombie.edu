import { Chip } from '@nextui-org/chip';
import { CrombieLogo } from '@/components/shared/logo';

export default function Homepage() {
  return (
    <>

    <section className='w-full bg-black flex flex-col justify-end items-center p-10 lg:pt-20'>
      <div className='mb-auto text-center'>
        <Chip variant='flat' className='inline-flex' color='danger'>
          Escuelita version 3.0 🚀
        </Chip>
        <div className='flex items-center lg:space-x-4 flex-col lg:flex-row'>
          <CrombieLogo width={200} height='100%' className='mt-10 block lg:hidden' />
          <h1 className='mt-4 text-6xl font-bold text-white'>
            Bootcamp de programación
          </h1>
          {/* <CrombieLogo width={200} height='100%' className='mt-4 hidden lg:block' /> */}
        </div>
        <p className='mt-4 text-md text-gray-300'>
          Tu Portal hacia un universo de codificación y creatividad
        </p>
      </div>
      <div className='w-3/4 h-[800px] border border-divider rounded-3xl mt-20 overflow-hidden'>
        <iframe
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/oV4InyT-fEU?si=Qd7goEH5ZEJnPX-n'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
      </div>
    </section>
    <section className='w-full bg-black flex flex-col items-center px-10'>
      <h2 className='mt-4 text-4xl font-bold text-white'>
        Proyectos
      </h2>

      <div>
        
      </div>
    </section>
    </>
  );
}
