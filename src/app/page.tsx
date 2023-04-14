import Link from "next/link";

export default function Home() {
  return (
    <main className="w-[calc(100%_-_48px)] max-w-[1344px] mx-auto">
      <section>
        <h1 className="text-orange-500 text-lg mb-6 font-bold">
          Notícias recentes
        </h1>

        <div className="flex gap-4">
          <div className="noticia-principal flex-1 flex flex-row gap-4 p-6 rounded-xl bg-zinc-800 h-96">
            <div className="flex flex-col gap-3 w-1/2">
              <p className="text-6xl text-white font-bold">
                Título da notícia título
              </p>
              <p className="text-base text-zinc-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                a augue nibh.
              </p>
            </div>
            <img
              src="https://static01.nyt.com/images/2020/07/31/business/30Oprah-Mag-01/merlin_175122966_5cf9786b-a03a-4575-a02e-8eaeb6c2a8c7-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
              alt=""
              className="max-h-full object-none object-center w-1/2 rounded-xl"
            />
          </div>

          <div className="w-full max-w-[40%] pl-4 border-l border-l-white/10 flex flex-col gap-2">
            {[1, 2, 3].map((article) => {
              return (
                <div
                  key={article}
                  className="[&:not(:last-child)]:pb-2 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-b-white/5"
                >
                  <p className="text-zinc-500 text-xs mb-2">
                    14 de abril de 2023
                  </p>
                  <Link
                    href=""
                    className="font-bold text-white mb-1 text-lg hover:text-orange-500 transition-color duration-100"
                  >
                    Jorge Viana muda estatuto da Apex por não falar inglês e
                    para manter salário de R$ 65 mil
                  </Link>
                  <p className="text-zinc-400 text-base">
                    Mudança libera permanência do comandante do órgão
                    responsável por divulgar produtos brasileiros no exterior
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
}
