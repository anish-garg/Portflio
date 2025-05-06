/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const CopyEmailButton = () => {
    const [copied, setCopied] = useState(false);
    const email = "anishgarg5914@gmail.com";

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy email: ', err);
        }
    };

    return (
        <motion.button
            onClick={copyToClipboard}
            whileHover={{ y: - 5 }}
            whileTap={{ scale: 1.05 }}
            className='relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden'
        >
            {/* To make the button animation work we have to give each children a key as it is wrapped in ternary operator */}
            <AnimatePresence AnimatePresence >
                {
                    copied ? (<motion.p
                        className='flex items-center justify-center gap-2'
                        key="Copied"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.1, ease: "easeInOut" }}
                    >
                        <img className='w-5' src="../../public/assets/copy-done.svg" alt="copy done" />
                        Copied
                    </motion.p >) :
                        (<p
                            className='flex items-center justify-center gap-2'
                            key="Copy"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1 }}
                        >
                            <img className='w-5' src="../../public/assets/copy.svg" alt="copy" />
                            Copy Email Address
                        </p>
                        )}
            </AnimatePresence >
        </motion.button >
    );
};

export default CopyEmailButton;
