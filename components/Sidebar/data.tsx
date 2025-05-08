import { Calendar, Clock, CreditCard, GraduationCap, Home, LogOut, Settings } from "lucide-react";

export const navItems = [
    { icon: <Home className="h-5 w-5" />, label: 'Home', href: '/dashboard' },
    { icon: <Calendar className="h-5 w-5" />, label: 'Calendar', href: '#' },
    { icon: <Clock className="h-5 w-5" />, label: 'History', href: '/history' },
    { icon: <CreditCard className="h-5 w-5" />, label: 'Payment', href: '#' },
    { icon: <GraduationCap className="h-5 w-5" />, label: 'Find a tutor', href: '#' },
    { icon: <Settings className="h-5 w-5" />, label: 'Settings', href: '#' },
    { icon: <LogOut className="h-5 w-5" />, label: 'Logout', href: '#' }
]