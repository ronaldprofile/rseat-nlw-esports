import { MagnifyingGlassPlus } from "phosphor-react";

export function App() {
  return (
    <div className="max-w-[1120px] my-20 mx-auto px-2 flex flex-col items-center">
      <img src="/logo.svg" alt="" />

      <h1 className="mt-20 text-3xl font-black text-white sm:text-5xl">
        Seu
        <span className="text-transparent bg-clip-text bg-nlw-gradient">
          {" "}
          duo{" "}
        </span>
        está aqui.
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 mt-16">
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0 bg-game-card-gradient">
            <strong className="text-white font-bold block">
              Dragon Ball Z
            </strong>
            <span className="text-sm text-zinc-300 block">60 anúncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0 bg-game-card-gradient">
            <strong className="text-white font-bold block">
              Dragon Ball Z
            </strong>
            <span className="text-sm text-zinc-300 block">60 anúncios</span>
          </div>
        </a>{" "}
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0 bg-game-card-gradient">
            <strong className="text-white font-bold block">
              Dragon Ball Z
            </strong>
            <span className="text-sm text-zinc-300 block">60 anúncios</span>
          </div>
        </a>{" "}
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0 bg-game-card-gradient">
            <strong className="text-white font-bold block">
              Dragon Ball Z
            </strong>
            <span className="text-sm text-zinc-300 block">60 anúncios</span>
          </div>
        </a>{" "}
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0 bg-game-card-gradient">
            <strong className="text-white font-bold block">
              Dragon Ball Z
            </strong>
            <span className="text-sm text-zinc-300 block">60 anúncios</span>
          </div>
        </a>{" "}
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0 bg-game-card-gradient">
            <strong className="text-white font-bold block">
              Dragon Ball Z
            </strong>
            <span className="text-sm text-zinc-300 block">60 anúncios</span>
          </div>
        </a>
      </div>

      <div className="mt-8 mb-4 pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
        <div className="px-8 py-6 bg-[#2A2634] flex flex-col sm:flex-row sm:justify-between items-center">
          <div className="flex text-center flex-col sm:text-left">
            <strong className="text-lg sm:text-2xl text-white font-black block">
              Não encontrou seu duo?
            </strong>

            <p className="text-zinc-400 block text-sm sm:text-base">
              Publique um anúncio para econtrar novos players
            </p>
          </div>

          <button className="mt-4 py-3 px-4 flex items-center gap-3 text-white bg-violet-500 font-medium rounded-md hover:bg-violet-600 transition-colors">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}
