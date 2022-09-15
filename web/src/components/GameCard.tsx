interface GameCardProps {
  bannerUrl: string;
  title: string;
  adsQuantity: number;
}

export function GameCard({ title, bannerUrl, adsQuantity }: GameCardProps) {
  return (
    <a href="#" className="relative rounded-lg overflow-hidden">
      <img src={bannerUrl} alt="" />

      <div className="w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0 bg-game-card-gradient">
        <strong className="text-white font-bold block">{title}</strong>
        <span className="text-sm text-zinc-300 block">
          {adsQuantity} anúncio(s)
        </span>
      </div>
    </a>
  );
}
