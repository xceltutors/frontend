'use client';

import { useState } from "react";
import { Sidebar } from "./Sidebar";

export function ClientSidebarWrapper() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }
    return <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
}