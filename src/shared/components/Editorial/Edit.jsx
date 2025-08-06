import { Briefcase, Building2, MapPin, User } from 'lucide-react'

function Edit({ position, name, location }) {
    return (
        <>
            {/* <div className=" relative   ">
                <div className="relative z-10 text-center  flex flex-col gap-2 ">
                    <div>
                        <h3 className="md:text-lg font-semibold   text-left  -hover:text-blue-600 transition-colors duration-300">
                            Dr. {name}, <span className='  text-gray-600 font-medium italic'>{position}, {location}</span>
                        </h3>
                    </div>
                </div>
            </div> */}
            <div className="overflow-x-auto">
                <table className="table-auto min-w-full border border-gray-200 shadow-sm rounded-lg">
                    <tbody>
                        <tr className="border-b">
                            <td className="p-3">Dr. {name}, {position}, {location}  </td>
                        </tr>
                        {/* <tr className="border-b">
                            <td className="p-3 font-semibold text-gray-800">Position</td>
                            <td className="p-3 italic text-gray-700">{position}</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-semibold text-gray-800">Location</td>
                            <td className="p-3 text-gray-700">{location}</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Edit
