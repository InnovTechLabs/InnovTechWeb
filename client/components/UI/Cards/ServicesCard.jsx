import Image from 'next/image';
import arrow from '@/public/assets/images/icon/arrow.svg';
import styles from '@/public/styles/servicecard.module.css';

export default function ServicesCard({ heading, description, image }) {
  return (
    <>
      <div className={`${styles.playground}`}>
        <button className={`${styles.button} ${styles.btn}`}>
            <div className='flex flex-col items-center space-y-6 py-10 px-4'>
                <div className={`bg-purple p-3 [box-shadow:3px_3px_0_0_#010C2A] rounded-full `}>
                    <Image
                        src={image}
                        alt='image'
                    />
                </div>
                <div>
                    <p className='text-2xl font-semibold'>{heading}</p>
                </div>
                <div>
                    {description}
                </div>
                <div className='flex flex-row space-x-2'>
                    <p className='underline underline-offset-2 font-semibold'>Read More</p>
                    <Image
                    src={arrow}
                    alt='arrow'
                    />
                </div>
            </div>
        </button>
      </div>
    </>
  );
}
