import Image from "next/image";

export default function Header({ id }: { id: string; }) {
    return (
        <header className="w-full bg-blue-600 text-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                <div className="flex items-center space-x-3">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={100}
                        height={100}
                        className="w-auto h-6 object-contain"

                    />
                    <h1 className="text-lg font-semibold">
                        Conversational Agent Polarization
                    </h1>
                </div>

                <div className="text-base font-medium">
                    Study ID: {id}
                </div>
            </div>
        </header>
    );
}