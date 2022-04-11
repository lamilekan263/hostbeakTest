
import DateInput from '../../components/DateInput'
import SelectOption from '../../components/SelectOption'
import Title from '../../components/Title'
import { tableHeaders } from '../../utils'

// ["choose", "cheese", ]

const Bills = () => {
  return (
    <div className="m-7">
      <Title title="Add Bill" />
      <div className="grid grid-cols-3 gap-9 w-8/12 mb-5 justify-center">
        <div>
          <div className="my-2">
            <p className="font-inter text-[#304156] text-sm mb-2">Vendor</p>
            <SelectOption options={["choose"]} />
          </div>
          <div className="my-2">
            <p className="font-inter text-[#304156] text-sm mb-2">Currency</p>
            <SelectOption options={["USD-U.S dollar"]} />
          </div>
          <div className="my-2">
            <p className="font-inter text-[#304156] text-sm mb-2">Upload Copy of Bill</p>
            <SelectOption options={["choose"]} />
          </div>
        </div>
        <div> <div>
          <div className="my-2">
            <p className="font-inter text-[#304156] text-sm mb-2">Date</p>
            <DateInput />
          </div>
          <div className="my-2">
            <p className="font-inter text-[#304156] text-sm mb-2">Due Date</p>
            <DateInput />
          </div>
          <div className="my-2">
            <p className="font-inter text-[#304156] text-sm mb-2">P.O/S.O</p>
            <SelectOption options={["choose"]} />
          </div>
        </div></div>
        <div> <div>
          <div className="my-2">
            <p>Bill #</p>
            <SelectOption options={["choose"]} />
          </div>
          <div className="my-2 row-start-1 row-end-4 bg-red-200 h-full">
            <p>Notes</p>
            <SelectOption options={["choose"]} />
          </div>
          
        </div></div>
      </div>
      {/* table */}
      <div className="relative overflow-x-auto border sm:rounded-lg px-7">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full  ">
                  <thead className="border-b border-[#98A2B3] px-4">

                    <tr>
                      {tableHeaders.map(th => <th scope="col" className="text-sm  text-[#304156] font-inter font-bold px-6 py-4 text-left">
                        {th}
                      </th>)}

                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <SelectOption options={["choose"]} />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <SelectOption options={["choose"]} />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <input type="text" className="w-full border" />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <input type="text" className="w-full border" />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <input type="text" className="w-full border" />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <input type="text" className="w-full border" />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-4 items-center">
                          <p>N0.00</p>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-audioblue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </div>
                      </td>
                    </tr>


                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* subtotal */}
        <div className="flex">

        </div>
      </div>

      {/* table ends */}
      <div className="flex w-full justify-end mt-4 space-x-4">
        <div className="flex items-center justify-center bg-white border border-[#667085]  rounded-md w-contain px-5 py-2">
          <p className="font-Inter font-normal text-[#667085]">Cancel</p>
        </div>
        <div className="flex items-center justify-center bg-lighterBlue  rounded-md w-contain px-5 py-2">
          <p className="font-Inter font-normal text-white">Save</p>
        </div>
      </div>
    </div>
  )
}

export default Bills