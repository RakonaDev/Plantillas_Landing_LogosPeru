import type { NosotrosData } from "../../lib/nosotrosData";


export default function NosotrosCard({ nosotros }: { nosotros: NosotrosData }) {
  return (
    <div className="max-w-[20rem] w-full border-4 group border-neutral-400 flex flex-col items-center p-3 rounded-2xl">
      <div className="text-primary h-[8rem] flex justify-center items-center">
        <nosotros.icono size={50} className="animate-bounce" />
      </div>
      <p className='mt-2 text-center text-lg font-ConstellationTLPro-Bold'>{nosotros.titulo}</p>
    </div>
  )
}
