
export default function Home() {
  return (
    <main className="bg-backgroundMobile md:bg-backgroundDesktop bg-cover bg-no-repeat bg-center flex flex-col w-full min-h-screen justify-center items-center antialiased">
      <section className="flex flex-col justify-center items-center w-fit gap-10 px-2">
        <div className="flex flex-col gap-3 text-center w-full self-stretch">
          <h1 className="text-1nw lg:text-7xl text-white">Inscreva-se em nossa Newsletter</h1>
          <p className="subtitle text-paleSilver text-2nw lg:text-lg text-center">Seja o primeiro a receber novidades exclusivas e as últimas notícias da tecnologia.</p>
        </div>

        <div className="flex flex-col w-full lg:w-auto px-2 gap-1 select-none">
          <label className="text-sm text-lightGrayish">Seu E-mail</label>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
            <input className="outline-none bg-transparent w-full lg:w-96 border border-grayishLavender text-grayishLavender placeholder:text-grayishLavender px-4 py-3 rounded-lg text-base" placeholder="Digite seu endereço de e-mail" type="email"></input>
            <button className="bg-sapphireBlue w-full lg:w-auto text-white px-4 py-3 rounded-lg font-semibold drop-shadow-submit text-lg" type="submit">Inscreva-se agora</button>
          </div>
        </div>
      </section>
    </main>
  );
}
