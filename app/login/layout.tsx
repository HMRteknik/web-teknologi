import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="login-layout">
      {children}
    </section>
  );
}

