import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

export function PublishAdBanner() {
  return (
    <div className="mt-8 pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
      <div className="px-8 py-6 bg-[#2A2634] flex flex-col sm:flex-row sm:justify-between items-center">
        <div className="flex text-center flex-col sm:text-left">
          <strong className="text-lg sm:text-2xl text-white font-black block">
            Não encontrou seu duo?
          </strong>

          <p className="text-zinc-400 block text-sm sm:text-base">
            Publique um anúncio para econtrar novos players
          </p>
        </div>

        <Dialog.Trigger className="mt-4 py-3 px-4 flex items-center gap-3 text-white bg-violet-500 font-medium rounded-md hover:bg-violet-600 transition-colors">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}
