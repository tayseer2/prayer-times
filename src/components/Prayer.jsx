

export default function Prayer({name , time}) {
  return (
    <div className="flex justify-between px-3 py-2 mb-4 rounded-[4px] border border-gray-400 items-center bg-amber-500 text-white text-[17px]">
        <p>{name}:</p>
        <p>{time}</p>
    </div>
  )
}
