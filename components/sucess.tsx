import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface NotificationProps {
  showNotification: boolean;
}

const Sucess: React.FC<NotificationProps> = ({ showNotification }) => {
  const SucessVariants = {
    hidden: {
      y: '-100%',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div 
      className="top-0 absolute bg-vibeGreen flex flex-row justify-center items-center text-white px-4 py-2 rounded-lg mt-4 gap-3 antialiased select-none"
      animate={showNotification ? 'visible' : 'hidden'}
      variants={SucessVariants}>
        <CheckCircle2 size={24} strokeWidth={2}/>
        <label className='text-sm font-semibold'>Seu e-mail foi cadastrado com sucesso!</label>
    </motion.div>
  );
};

export default Sucess;