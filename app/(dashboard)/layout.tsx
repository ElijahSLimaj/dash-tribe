import Sidebar from "./_components/sidebar";

const DashboardLayout = ({ children }: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full">
            {/* Side bar */}
            <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
                <Sidebar />
            </div>
            {children}
        </div>
    )
}

export default DashboardLayout;
