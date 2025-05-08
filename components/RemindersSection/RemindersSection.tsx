import { ReminderCard } from "./_components/ReminderCard";

export function RemindersSection() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-800">Reminders</h3>
        <button className="text-xs text-gray-500 underline cursor-pointer">
          Clear all
        </button>
      </div>

      <div className="space-y-3 mt-2">
        <ReminderCard
          type="Next class"
          subject="Physics"
          info="18:30"
          color="bg-[var(--custom-blue-700)]"
        />
        <ReminderCard
          type="Scheduled class"
          subject="Biology"
          info="14/02"
          color="bg-[var(--custom-blue-700)]"
        />
        <ReminderCard
          type="Payment"
          subject="Invoices ready to download"
          info=""
          color="bg-[var(--custom-blue-700)]"
        />
        <ReminderCard
          type="Payment"
          subject="Your credit card is about to expire"
          info=""
          color="bg-red-600"
        />
      </div>
    </div>
  );
}
