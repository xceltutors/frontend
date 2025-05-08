import Link from "next/link";

export function SubTitle({ subtitle }: { subtitle: string }) {
    return (
        <div className="mb-6 flex items-center justify-between">
            <h3 className="font-(family-name:--font-volkhov) text-base 
            lg:text-3xl font-bold text-[var(--custom-blue-900)]">
                {subtitle}
            </h3>
            <Link href="#" className="text-sm text-[var(--custom-blue-50)] underline">
                See all &gt;
            </Link>
        </div>
    )
}