import HeroSwiper from "../../ui/pages/HeroSwiper";
import About from "../../ui/pages/About";
import News from "@/app/ui/pages/News";
import NewsButton from "@/app/ui/pages/NewsButton";

export const metadata = {
    title: 'КП ММР “МИКОЛАЇВЕЛЕКТРОТРАНС”',
    description: 'МИКОЛАЇВЕЛЕКТРОТРАНС - комунальне підприємство, яке здійснює перевезення пасажирів міським електротранспортом.',
  }

export default function MainPaige() {
    return(
        <div className="max-w-screen overflow-hidden ">
            <HeroSwiper/>
            <About/> 
            <News/>
            <NewsButton/>
        </div>
    )
}