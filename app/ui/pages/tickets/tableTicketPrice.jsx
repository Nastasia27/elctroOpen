export default function TableTicketPrice() {
    return(
        <div className="flex flex-col lg:flex-row gap-5 md:gap-10 justify-center items-center w-full text-center">
            <table className=" table-fixed border-separate border-spacing-1 uppercase">
                <caption className="caption-top p-2 font-black">
                    Громадський проїзний
                </caption>
                <thead>
                    <tr>
                        <th className="border-2 border-[#008DD2] p-2">Вид транспорту</th>
                        <th className="border-2 border-[#E871C5] p-2">На 15 діб</th>
                        <th className="border-2 border-[#FECD08] p-2">На місяць</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border-2 border-[#008DD2] p-2">Тролейбус</td>
                        <td className="border-2 border-[#E871C5] p-2">180</td>
                        <td className="border-2 border-[#FECD08] p-2">300</td>
                    </tr>
                    <tr>
                        <td className="border-2 border-[#008DD2] p-2">Трамвай</td>
                        <td className="border-2 border-[#E871C5] p-2">180</td>
                        <td className="border-2 border-[#FECD08] p-2">360</td>
                    </tr>
                    <tr>
                        <td className="border-2 border-[#008DD2] p-2">Тролейбус і трамвай</td>
                        <td className="border-2 border-[#E871C5] p-2">220</td>
                        <td className="border-2 border-[#FECD08] p-2">440</td>
                    </tr>
                </tbody>
            </table>
            <table className=" table-fixed border-separate border-spacing-1 uppercase">
                <caption className="caption-top p-2 font-black">
                    Студентський проїзний
                </caption>
                <thead>
                    <tr>
                        <th className="border-2 border-[#008DD2] p-2">Вид транспорту</th>
                        <th className="border-2 border-[#FECD08] p-2">На місяць</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border-2 border-[#008DD2] p-2">Тролейбус</td>
                        <td className="border-2 border-[#FECD08] p-2">200</td>
                    </tr>
                    <tr>
                        <td className="border-2 border-[#008DD2] p-2">Трамвай</td>
                        <td className="border-2 border-[#FECD08] p-2">200</td>
                    </tr>
                    <tr>
                        <td className="border-2 border-[#008DD2] p-2">Тролейбус і трамвай</td>
                        <td className="border-2 border-[#FECD08] p-2">200</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}