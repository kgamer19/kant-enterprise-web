import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Kant Enterprises",
  description: "Kant Enterprises",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="wrap">
          <header className="header">
            <nav className="nav">
             <div className="brand">
  <Link href="/" aria-label="Kant Enterprises">
    <Image
      src="/logo.png"
      alt="Kant Enterprises"
      width={44}
      height={44}
      priority
      unoptimized
    />
  </Link>
</div>

              <div className="links">
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </nav>
          </header>

          <main className="main">{children}</main>

          <footer className="footer">
            <p className="disclaimer">
              No Offer or Solicitation. The only purpose of this is to provide general
               background information on Kant Enterprises. This is not an offer to sell or the solicitation 
               of any offer to buy any securities. Any such offer would be made only to qualified
                investors after distribution and return of the Private Placement Memorandum 
              and governing agreement for the applicable Fund (the "Offering Materials").
            </p>

            <div className="footerLinks">
              <Link href="/privacy-disclosure">Privacy Disclosure</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </div>

            <p className="tiny">© {new Date().getFullYear()} Kant Enterprises</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
