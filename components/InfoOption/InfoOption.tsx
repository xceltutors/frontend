interface IInfoOptionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  sizeDescription?: number;
}

export function InfoOption({
  icon,
  title,
  description,
  bgColor,
  sizeDescription = 20
}: IInfoOptionProps) {
  return (
    <div
      className={`flex items-start gap-4 cursor-pointer transition-all duration-300 p-2 pl-0 rounded-lg`}
    >
      <div
        className={`flex-shrink-0 w-[2.9375rem] h-[3rem] rounded-xl flex items-center
          justify-center ${bgColor} font-semibold`}
      >
        {icon}
      </div>
      <div className="mt-[-0.25rem]">
        <h3 className="text-base font-[700] mb-1 text-custom-gray-400">
          {title}
        </h3>
        <p
          style={{ maxWidth: `${sizeDescription}rem` }}
          className="max-w-[95%] md:max-w-none text-base text-custom-gray-400 break-words whitespace-normal overflow-wrap-anywhere hyphens-auto"
        >
          {description}
        </p>
      </div>
    </div>
  );
}