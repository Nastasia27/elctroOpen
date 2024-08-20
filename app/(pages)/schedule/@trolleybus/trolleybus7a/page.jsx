
import ShceduleData from "@/app/ui/shcedule/shceduleData";
import config from '@/app/config';

async function getData() {
    const options = {
    };

    const res = await fetch(`${config.api}/api/grafik-trolejbuses?populate=*`, { cache: 'no-store'});
   
    if (!res.ok) {
      console.error('failed to fetch data:', res.status);
      throw new Error('Failed to fetch data')
    }
    const data = await res.json();
    return data;
  };

export default async function Page() {
    const data = await getData();
    const routeData = data.data.find(item => item.attributes.routeNumber === '№7A');
    const direction1 = routeData.attributes.direction1;
    const direction2 = routeData.attributes.direction2;
    const direction1Weekand = routeData.attributes.direction1Weekand;
    const direction2Weekand = routeData.attributes.direction2;

    const number = '№7A'
    const title = 'станція «Миколаїв-Вантажний» - м/н Північний';
    const convertData = (direcrion) => {
        const array = direcrion.split(',');
        const formattedArray = array.map(item => {
            const parts = item.trim().split('.');
            if (parts[0].length === 1) {
                parts[0] = '0' + parts[0];
            }
            return parts.join(':');
        });
        return formattedArray;
    }
    const scheduleTrolleyBus2 = [
        {
            direction: 'Відправлення з кінцевої Вокзал «Миколаїв-Вантажний»',
            time: convertData(direction1)
        },
        {
            direction: 'Відправлення з кінцевої м/н «Північний»',
            time: convertData(direction2)
        }
    ];
    const scheduleTrolleyBus2Weekand = [
        {
            direction: 'Відправлення з кінцевої Вокзал «Миколаїв-Вантажний»',
            time: convertData(direction1Weekand)
        },
        {
            direction: 'Відправлення з кінцевої м/н «Північний»',
            time: convertData(direction2Weekand)
        }
    ];

    return(
        <div>
            <ShceduleData 
                number={number} 
                title={title} 
                data={scheduleTrolleyBus2}
                dataWeekands={scheduleTrolleyBus2Weekand}
            />
        </div>
    )
}