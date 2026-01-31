
import { AppSidebar } from "@/components/layout/app-sidebar";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { Roles } from "@/constants/roles";
import { authServerService } from "@/services/auth.server.service";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
    admin,
    student,
    tutor,
}: {
    children: React.ReactNode;
    admin: React.ReactNode;
    student: React.ReactNode;
    tutor: React.ReactNode;
}) {

    const userInfo = await authServerService.getSession();
    console.log("user info in layout fetch:", userInfo);
    if (!userInfo) {
        redirect("/login?reason=auth");
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
            <AppSidebar user={userInfo} />
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
