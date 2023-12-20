import { FaMapMarkerAlt } from "react-icons/fa";

interface ModalProps {
  setIsModalOpen: (value: boolean) => void;
  isModalOpen: boolean;
  result: string[];
  handleFilterByLocation: (value: string) => void;
  checked: boolean;
  setChecked: (value: boolean) => void;
  handleFilter: () => void;
}

export default function Modal({
  setIsModalOpen,
  isModalOpen,
  handleFilterByLocation,
  result,
  checked,
  handleFilter,
  setChecked,
}: ModalProps) {
  return (
    <>
      <section>
        <div className="absolute top-0 z-50 bg-black text-black w-full bg-opacity-70 h-full">
          <div className="flex justify-center items-center   min-h-screen ">
            <div className="bg-white  w-[350px]  h-[200px]">
              <div className="border-b p-5 px-10 relative flex gap-x-4">
                <FaMapMarkerAlt className="text-purple-700 z-50 text-2xl" />
                <select
                  className="text-sm bottom-0 left-0 bg-none h-full focus:outline-none absolute pl-20 cursor-pointer"
                  onChange={(e) => handleFilterByLocation(e.target.value)}
                >
                  <option value="^_^">Filter by location</option>
                  {result.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div className="flex p-5 px-10  gap-x-4">
                <input
                  type="checkbox"
                  onClick={() => handleFilter()}
                  className=" w-6 h-6 cursor-pointer"
                />
                <div className="font-bold  ">
                  <span className="flex gap-x-1">Full Time Only</span>
                </div>
              </div>
              <div className=" px-10">
                <button
                  className="text-white bg-[#5964e0] rounded-lg w-full py-3"
                  onClick={() => setIsModalOpen(!isModalOpen)}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
