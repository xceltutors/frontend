interface ReminderCardProps {
    type: string
    subject: string
    info: string
    color: string
}

export function ReminderCard({ type, subject, info, color }: ReminderCardProps) {
    return (
        <div className={`flex justify-between items-center border-l-7 border-[var(--custom-blue-900)] 
        rounded-md ${color} p-3 text-white`}>
            <div className="flex-col">
                <span className="text-xs opacity-80">{type}</span>
                <p className="text-sm font-semibold">{subject}</p>
            </div>
            {info && <span className="text-sm md:text-xl font-bold">{info}</span>}
        </div>
    )
}
