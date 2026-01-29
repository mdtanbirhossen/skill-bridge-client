
import { AppSidebar } from "@/components/layout/app-sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { Roles } from "@/constants/roles";
import { Children } from "react";

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


    return (
        <SidebarProvider>
            <AppSidebar user={{ role: 'ADMIN' }} />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4">
                    {/* {userInfo.role === Roles.admin ? admin : user} */}

                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
