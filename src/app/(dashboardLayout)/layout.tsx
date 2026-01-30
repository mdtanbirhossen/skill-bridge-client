
import { AppSidebar } from "@/components/layout/app-sidebar";

import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { Roles } from "@/constants/roles";
import { userService } from "@/services/user.service";

export default async function DashboardLayout({
    children,
    admin,
    student,
    tutor,
}: {
    children: React.ReactNode;
    admin: React.ReactNode;
    student: React.ReactNode;
    tutor: React.ReactNode;
}) {

    const userInfo = await userService.getSession();
    if (!userInfo) {
        return <div>Please login to access the dashboard</div>
    }
    let content;
    switch (userInfo.role) {
        case Roles.admin:
            content = admin
            break;
        case Roles.student:
            content = student
            break;
        case Roles.tutor:
            content = tutor
            break;
        default:
            content = <div>Unauthorized</div>
    }
    console.log("user info in layout:", userInfo);
    return (
        <SidebarProvider>
            <AppSidebar user={{ role: 'ADMIN' }} />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4">
                    {content}

                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
