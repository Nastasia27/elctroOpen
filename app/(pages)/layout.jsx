
import Footer from '../ui/footer/Footer';
import NavigationMobile from "../ui/navigation/NavigationMobile";
import NavigationBar from '../ui/navigation/NavigationBar';

export const metadata = {
  title: 'КП ММР “МИКОЛАЇВЕЛЕКТРОТРАНС”',
  description: 'МИКОЛАЇВЕЛЕКТРОТРАНС - комунальне підприємство, яке здійснює перевезення пасажирів міським електротранспортом (трамваї та тролейбуси)',
}

export default function Layout({ children}) {
  return (
    <div className="flex min-h-screen max-w-screen flex-col relative text-xs md:text-base lg:text-lg text-black">  
      <NavigationBar />
      <NavigationMobile />
      <div className="flex">{children}</div>
      <Footer />
    </div>
  );
}