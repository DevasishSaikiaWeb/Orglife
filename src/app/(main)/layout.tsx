import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import ScrollToTop from "@/components/scrollToTop";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <ScrollToTop />
      <Footer />
    </>
  );
}
