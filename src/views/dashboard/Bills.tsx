
import DateInput from '../../components/DateInput'
import FileUploadInput from '../../components/FileUploadInput'
import SelectOption from '../../components/SelectOption'
import Title from '../../components/Title'
import { tableHeaders } from '../../utils'



const Bills = () => {
  return (
    <div className="m-7">
      <Title title="Add Bill" />
      <div className=" grid grid-flow-col auto-cols-max grid-cols-3 gap-9 w-8/12 mb-5 justify-center p-2">
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
            <FileUploadInput />
          </div>
        </div>
        <div> <div>
          <div className="my-1">
            <p className="font-inter text-[#304156] text-sm mb-2">Date</p>
            <DateInput />
          </div>
          <div className="my-1">
            <p className="font-inter text-[#304156] text-sm mb-2">Due Date</p>
            <DateInput />
          </div>
          <div className="my-2">
            <p className="font-inter text-[#304156] text-sm mb-2">P.O/S.O</p>
            <textarea className="border w-full" />
          </div>
        </div></div>
        <div> <div>
          <div className="my-2">
            <p>Bill #</p>
            <textarea className="border w-full"/>
          </div>
          <div className="my-2 col-start-1 col-end-4   h-28">
            <p>Notes</p>
            <textarea className="border w-full h-full" />
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
                        <input type="text" className="w-full border py-2 px-5" />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <input type="text" className="w-full border py-2 px-5" value={1}/>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <input type="text" className="w-full border py-2 px-5" value={0}/>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-4 items-center">
                          <input type="text" className="w-full border py-2 px-5" />
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 21H21" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M4.5 13.5L14.5 3.50002C15.3284 2.67159 16.6716 2.67159 17.5 3.50002C18.3284 4.32845 18.3284 5.67159 17.5 6.50002L7.5 16.5L3.5 17.5L4.5 13.5Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-4 items-center">
                          <p>N0.00</p>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-audioblue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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
        <div className="flex flex-col  my-3 font-inter font-medium text-sm text-[#1D2939] ">
          <div className="flex justify-end space-x-3"> 
            <p>Subtotal:</p>
            <p>N0.00</p>
          </div>
          <div className="flex justify-end space-x-3">
            <p>Total (NGN):</p>
            <p>N0.00</p>
          </div>
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