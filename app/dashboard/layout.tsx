export default function DashboardLayout({
    children
}: { children: React.ReactNode}) {
    return (
        <div className="container mx-auto max-w-5xl mt-8">
            { children }
        </div>
    )
}