import Footer from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function BasicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="">
            <Navbar />
            <main className="min-h-[calc(100vh-337px)] ">
                {children}
            </main>
            <Footer />
        </div>
    );
}
