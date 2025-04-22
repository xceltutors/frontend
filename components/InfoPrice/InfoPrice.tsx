export function InfoPrice(
    { price, description }:
        { price: string, description: string }
) {
    return (
        <div className="flex flex-col items-center justify-center text-white">
            <h3 className="text-center text-xl md:text-[32px] font-semibold mb-3">
                {price}
            </h3>
            <p className="text-center text-base md:text-xl w-[85%]">
                {description}
            </p>
        </div>
    )
}