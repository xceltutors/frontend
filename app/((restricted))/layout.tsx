import Footer from "@/components/Footer/Footer";
import { HeaderDashboard } from "@/components/Header/HeaderDashboard";
import { ClientSidebarWrapper } from "@/components/Sidebar/ClientSidebarWrapper";
import { RightSidebar } from "@/components/Sidebar/RightSidebar";

export default function RestrictedLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen bg-sky-50 mt-[3%]">
            <div className="min-h-screen flex flex-1 flex-col md:flex-row overflox-x-hidden">
                <ClientSidebarWrapper />
                <main className="w-full flex flex-col space-y-[4rem] relative z-10 p-10 rounded-5xl">
                    <HeaderDashboard />
                    {children}
                </main>
                <RightSidebar />
            </div>
            <Footer />
        </div>
    );
}
