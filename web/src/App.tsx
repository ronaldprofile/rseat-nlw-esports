import { GameCard } from "./components/GameCard";
import { PublishAdBanner } from "./components/PublishAdBanner";
import { useGames } from "./hooks/use-games";
import { Form } from "./components/Form";
import * as Dialog from "@radix-ui/react-dialog";

export function App() {
  const { data: games } = useGames();

  return (
    <div className="max-w-[1120px] py-20 mx-auto px-2 flex flex-col items-center">
      <h1 className="text-3xl font-black text-white sm:text-5xl">
        Seu {""}
        <span className="text-transparent bg-clip-text bg-nlw-gradient">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 mt-16">
        {games?.map((game) => {
          return (
            <GameCard
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsQuantity={game._count.ads}
            />
          );
        })}
      </div>

      <Dialog.Root>
        <PublishAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

          <Dialog.Content className="w-[480px] fixed bg-[#2a2634] shadow-lg py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg">
            <Dialog.Title className="text-[32px] text-white font-black">
              Publique um anúncio
            </Dialog.Title>

            <Form />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
