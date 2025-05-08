import { MiniCalendar } from "../MiniCalendar/MiniCalendar";
import { ProfileSection } from "../ProfileSection/ProfileSection";
import { RemindersSection } from "../RemindersSection/RemindersSection";

export function RightSidebar() {
    return (
        <aside className="w-full shrink-0 bg-white p-4 lg:w-72 space-y-5">
            <ProfileSection />
            <MiniCalendar />
            <RemindersSection />
        </aside>
    )
}
