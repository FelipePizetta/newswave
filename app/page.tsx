'use client'

import Sucess from "@/components/sucess";
import { database } from "@/utils/database";
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";

async function salvarEmail(email: string) {
  try {
    const docRef = await addDoc(collection(database, "contato"), {
      email: email,
    });
    console.log(`Dado gravado no ${docRef.id}`)
    return true;

  } catch(error) {
    console.error(error);
    return false;
  }
}

export default function Home() {
  const [email, setEmail] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit =async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const added = await salvarEmail(email);
    if (added) {
      setEmail("");
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  };

  return (
    <main className="bg-backgroundDefault bg-cover bg-no-repeat bg-center flex flex-col w-full min-h-screen justify-center items-center antialiased">
      <section className="flex flex-col justify-center items-center w-fit gap-10 px-2 md:px-16">
        <Sucess showNotification={showNotification} />
        <div className="flex flex-col gap-3 text-center w-full self-stretch">
          <h1 className="text-1nw lg:text-7xl text-white">Inscreva-se em nossa NewsWave</h1>
          <p className="subtitle text-paleSilver text-2nw lg:text-lg text-center">Seja o primeiro a receber novidades exclusivas e as últimas notícias da tecnologia.</p>
        </div>

        <div className="flex flex-col w-full lg:w-auto px-2 gap-1 select-none">
          <label className="text-sm text-lightGrayish">Seu E-mail</label>
          <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row items-center justify-center gap-4">
            <input id="email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="outline-none bg-transparent w-full lg:w-96 border border-grayishLavender text-grayishLavender placeholder:text-grayishLavender px-4 py-3 rounded-lg text-base" placeholder="Digite seu endereço de e-mail" required></input>
            <button className="bg-sapphireBlue w-full lg:w-auto text-white px-4 py-3 rounded-lg font-semibold drop-shadow-submit text-lg" type="submit">Inscreva-se agora</button>
          </form>
        </div>
      </section>
    </main>
  );
}
