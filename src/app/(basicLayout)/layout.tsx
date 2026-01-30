import { Navbar } from "@/components/layout/Navbar";

export default function BasicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="">
            <Navbar />
            {children}
        </div>
    );
}
