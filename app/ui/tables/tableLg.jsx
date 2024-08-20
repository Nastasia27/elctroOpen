
import { montserrat } from "../fonts";


export default function Table() {

    const dataTram = [
        ["ДОВЖИНА КУЗОВА ВАГОНА (MM)", '15094', '15250', '15620', 14000, 15639 ],
        ["ШИРИНИ КУЗОВА ВАГОНА (MM)", 2568, 2500, 2500, 2500, 2500],
        ["ВИСОТА ВАГОНУ(MM)", 3128, 3100, 3145, 3060, 3145],
        ["КІЛЬКІСТЬ ТА потужність тягових ДВИГУНІВ (КВТ)", "4X45", "4X50", "4X46", "4X40", "4X46"],
        ["МІСКІСТЬ ВАГОНА (чол.)", 211, 183, 170, 115, 168],
        ["ЧИСЛО МІСЦЬ ДЛЯ СИДІННЯ (O.)", 35, 32, 40, 23, 40],
        ["КІЛЬКІСТЬ ДВЕРЕЙ (Од.)", 3, 4, 3,  3, 3],
        ["КІЛЬКІСТЬ РУХОМОГО СКЛАДУ", 22, 5, 3, 12, 6],
    ];


    const dataTrolley = [
        ["ДОВЖИНА КУЗОВА (MM)", 11888, 12100, 11200, 11200, 12000],
        ["ШИРИНИ КУЗОВА (MM)", 2500, 2970, 2500, 2550, 2500],
        ["ВИСОТА (MM)", 2984, 3476, 3440, 3150, 3220],
        ["БАЗА КУЗОВА (ММ)", 6025, 5400, 5470, 5855, 6140],
        ["МАССА СПОРЯДЖЕННЯ (T)", 10.015, 12.0, 10.2, 11.2, 11.7],
        ["МІСТКІСТЬ ВАГОНА (чол.)", 126, 100, 108, 100, 108],
        ["ЧИСЛО МІСЦЬ ДЛЯ СИДІННЯ (ОД.)", 30, 26, 26, 30, 25],
        ["КІЛЬКІСТЬ ДВЕРЕЙ (ОД.)", 3, 3, 3, 3, 3],
        ["ПОТУЖНІСТЬ ТЯГОВИХ ДВИГУНІВ (КВТ)", 110, 132, 130, 140, 170],
        ["КІЛЬКІСТЬ РУХОМОГО СКЛАДУ", 5, 5, 2, 5, 5]
    ];


    const dataTrolley2 = [
        ["ДОВЖИНА КУЗОВА (ММ)", 11300, 12200, 12068],
        ["ШИРИНИ КУЗОВА (ММ)", 2500, 2550, 2550],
        ["ВИСОТА (MM)", 3410, 3500, 3700],
        ["БАЗА КУЗОВА (MM)", 5420, 5900, 5889],
        ["МАССА СПОРЯДЖЕННЯ (Т)", 10.0, 12.66, 12.20],
        ["МІСТКІСТЬ ВАГОНА (ЧОЛ.)", 100, 108, 99],
        ["ЧИСЛО МІСЦЬ ДЛЯ СИдІННЯ (ОД.)", 25, 32, 37],
        ["КІЛЬКІСТЬ ДВЕРЕЙ (ОД.)", 3, 3, 3],
        ["ПОТУЖНІСТЬ ТЯГОВИХ ДВИГУНІВ (KBT)", 100, 180, 180],
        ["КІЛЬКІСТЬ РУХОМОГО СКЛАДУ", 26, 37, 5]
    ];

    return(

            <div className={`${montserrat.className} hidden lg:flex flex-col justify-center items-center uppercase text-white w-screen text-xs p-2`}>
                <table className=" relative border-separate border-spacing-2  w-11/12  bg-white shadow-lg">
                    <thead className="bg-white border-collapse font-normal">
                        <tr >
                            <th rowSpan={2} className="p-2  w-64 sticky top-36 bg-[rgb(0,141,210)] ">
                                Найменування
                            </th>
                            <th colSpan={5} className="p-2  sticky top-36 bg-[rgb(0,141,210)] ">
                                Тип
                            </th>
                        </tr>
                        <tr>
                            <th className="p-2 sticky top-[184px] bg-[rgb(0,141,210)] ">
                                КТМ-5
                            </th>
                            <th className="p-2 sticky  top-[184px] bg-[rgb(0,141,210)] ">
                                КТМ-8
                            </th>
                            <th className="p-2 sticky  top-[184px] bg-[rgb(0,141,210)] ">
                                Т-3М
                            </th >
                            <th className="p-2  sticky top-[184px] bg-[rgb(0,141,210)] ">
                                Т-3М.03
                            </th>
                            <th className="p-2  sticky top-[184px] bg-[rgb(0,141,210)] ">
                                К-1
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-black">
                        {dataTram.map((item, index) => (
                            <tr key={index}>
                                {item.map((it, index) => (
                                    <td className="border  p-1 md:p-2 md:px-4 text-center" key={index}>{it}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
               

                <table className=" relative border-separate border-spacing-2 shadow-lg w-11/12 bg-white">
                    <thead className="bg-white border-collapse">
                        <tr >
                            <th rowSpan={2} className="p-2  w-64  sticky top-36 bg-[rgb(0,141,210)] ">
                                Найменування
                            </th>
                            <th colSpan={5} className="p-2  sticky top-36 bg-[rgb(0,141,210)] ">
                                Тип
                            </th>
                        </tr>
                        <tr>
                            <th className="p-2  sticky top-[184px] bg-[rgb(0,141,210)] ">
                                Зіу-9
                            </th>
                            <th className="p-2   sticky top-[184px] bg-[rgb(0,141,210)] ">
                                ПМЗ Т-2
                            </th>
                            <th className="p-2  sticky top-[184px] bg-[rgb(0,141,210)] ">
                                ЛАЗ 52522
                            </th>
                            <th className="p-2 sticky  top-[184px] bg-[rgb(0,141,210)] ">
                                Лаз Е183
                            </th>
                            <th className="p-2 sticky top-[184px] bg-[rgb(0,141,210)] ">
                                МАз Енот т10300
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-black">
                        {dataTrolley.map((item, index) => (
                            <tr key={index}>
                                {item.map((it, index) => (
                                    <td className="border  p-1 md:p-2 md:px-4 text-center" key={index}>{it}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

               
                <table className=" relative border-separate border-spacing-2 shadow-lg w-11/12 bg-white">
                    <thead className="bg-white border-collapse">
                        <tr >
                            <th rowSpan={2} className="p-2 w-64 sticky top-36 bg-[rgb(0,141,210)] ">
                                Найменування
                            </th>
                            <th colSpan={5} className="p-2 sticky top-36 bg-[rgb(0,141,210)] ">
                                Тип
                            </th>
                        </tr>
                        <tr>
                            <th className="p-2   sticky top-[184px] bg-[rgb(0,141,210)] ">
                                Шкода 14 Тр
                            </th>
                            <th className="p-2  sticky top-[184px] bg-[rgb(0,141,210)] ">
                                ДНІПРО Т203
                            </th>
                            <th className="p-2  sticky top-[184px] bg-[rgb(0,141,210)] ">
                                PTS T-12309
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-black">
                        {dataTrolley2.map((item, index) => (
                            <tr key={index}>
                                {item.map((it, index) => (
                                    <td className="border  p-1 md:p-2 md:px-4 text-center" key={index}>{it}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    )
}