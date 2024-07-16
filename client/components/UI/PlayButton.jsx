import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import styles from "@/public/styles/playbutton.module.css"; // Adjust the path as per your project structure

export default function PlayButton() {
    return (
        <div className={`cursor-pointer bg-white px-5 py-4 rounded-full border-[1px] ${styles['ripple-effect']} transition-all delay-50 ease-in-out hover:bg-black hover:border-black hover:text-white`}>
                <FontAwesomeIcon
                    icon={faPlay}
                    size='xl'
                />
        </div>
    );
}
