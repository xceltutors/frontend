import Footer from "@/components/Footer/Footer";
import { ClientSidebarWrapper } from "@/components/Sidebar/ClientSidebarWrapper";

export default function RestrictedLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen bg-sky-50">
            <div className="min-h-screen flex flex-1 flex-col md:flex-row">
                <ClientSidebarWrapper />
                <main className="w-full flex flex-col space-y-[4rem] relative z-10 p-4">
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
}
