import { GameController } from "phosphor-react";
import { Input } from "./Input";
import * as Dialog from "@radix-ui/react-dialog";

export function Form() {
  return (
    <form className="mt-8 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="game" className="font-semibold">
          Qual o game?
        </label>
        <Input
          type="text"
          id="game"
          placeholder="Selecione o game que deseja jogar"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="nickname" className="font-semibold">
          Seu nome (ou nickname)
        </label>
        <Input
          type="text"
          id="nickname"
          placeholder="Como te chamam dentro do game?"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="years_playing">Joga há quantos anos?</label>
          <Input
            type="number"
            id="years_playing"
            min={0}
            placeholder="Tudo bem ser zero"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="discord">Qual seu discord?</label>
          <Input type="text" id="discord" placeholder="Usuário#0000" />
        </div>
      </div>

      <div className="flex flex-col items-start gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="weekDays">Quando costuma jogar?</label>

          <div className="flex items-center gap-1">
            <button
              title="Domingo"
              className="w-10 h-10 py-[7px] px-3 text-white font-black bg-zinc-900 rounded"
            >
              D
            </button>

            <button
              title="Segunda"
              className="w-10 h-10 py-[7px] px-3 text-white font-black bg-zinc-900 rounded"
            >
              S
            </button>

            <button
              title="Terça"
              className="w-10 h-10 py-[7px] px-3 text-white font-black bg-zinc-900 rounded"
            >
              T
            </button>

            <button
              title="Quarta"
              className="w-10 h-10 py-[7px] px-3 text-white font-black bg-zinc-900 rounded"
            >
              Q
            </button>

            <button
              title="Quinta"
              className="w-10 h-10 py-[7px] px-3 text-white font-black bg-zinc-900 rounded"
            >
              Q
            </button>

            <button
              title="Sexta"
              className="w-10 h-10 py-[7px] px-3 text-white font-black bg-zinc-900 rounded"
            >
              S
            </button>

            <button
              title="Sábado"
              className="w-10 h-10 py-[7px] px-3 text-white font-black bg-zinc-900 rounded"
            >
              S
            </button>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="hourStart">Qual o horário do dia?</label>

          <div className="flex gap-2">
            <Input type="time" id="hourStart" placeholder="De" />

            <Input type="time" id="hourEnd" placeholder="Até" />
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center gap-2">
        <Input type="checkbox" id="voice_channel" />
        <span className="text-sm">Costumo me conectar ao chat de voz</span>
      </div>

      <footer className="mt-4 flex items-center gap-4 justify-end">
        <Dialog.Close className="bg-zinc-500 px-5 h-12 font-semibold rounded-md">
          Cancelar
        </Dialog.Close>

        <button
          type="submit"
          className="flex items-center gap-3 bg-violet-500 px-5 h-12 font-semibold rounded-md hover:bg-violet-600 transition-colors"
        >
          <GameController size={24} />
          Encontrar duo
        </button>
      </footer>
    </form>
  );
}
