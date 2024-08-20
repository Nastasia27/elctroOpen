import { montserrat } from "./ui/fonts";
import "./globals.css";
import Footer from "./ui/footer/Footer";
import NavigationMobile from "./ui/navigation/NavigationMobile";
import NavigationBar from "./ui/navigation/NavigationBar";
import { GoogleTagManager } from '@next/third-parties/google';


export const metadata = {
  title: 'КП ММР “МИКОЛАЇВЕЛЕКТРОТРАНС”',
  description: 'МИКОЛАЇВЕЛЕКТРОТРАНС - комунальне підприємство, яке здійснює перевезення пасажирів міським електротранспортом.',
  keywords: ['Миколаївелектротранс', 'трамваї Миколаєва', 'тролейбуси Миколаєва', 'електротранспорт Миколаєва', 'Николаевєлектротранс', 'Mykolayivelectrotrans'],
}


export default function RootLayout({children}) {
  return (
    <html lang="uk">
      <GoogleTagManager gtmId="GTM-PVVF93V9" />
      
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
