import AuthImageSection from "@/modules/auth/AuthImageSection";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" min-h-screen  flex items-center bg-accent py-6  xl:py-3 bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:48px_48px]">
      <section className=" w-full  max-w-[90%]  mx-auto grid  grid-cols-1 md:grid-cols-2">
        {/* Left side */}
        <div className="w-full min-w-0">
          <AuthImageSection />
        </div>

        {/* Right side */}
        <div className="flex w-full min-w-0 items-center">
          <div className="w-full">
            {children}
          </div>
        </div>
      </section>
    </main>
  );
}