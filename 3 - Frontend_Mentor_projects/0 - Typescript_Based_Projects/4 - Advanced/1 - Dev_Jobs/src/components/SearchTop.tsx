import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { data } from "../api/constraints";
import { ChangeEvent, useEffect, useState } from "react";
import { CharacterCardProps } from "../typings/typings";
import { SingleCarddProps } from "./SingleCard";
import Modal from "./Modal";

export default function SearchTop({ selectedData, setSelectedData }: any) {
  const [checked, setChecked] = useState<boolean>(true);
  const [filteringData, setFilteringData] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const jsonMapped = data.map((item) => item.location);
  const result: string[] = [];
  const locationHashSet = new Set(jsonMapped);
  locationHashSet.forEach((item) => {
    result.push(item);
  });

  function handleFilter() {
    setChecked((pre) => !pre);
    console.log(checked);
    if (checked) {
      const filteredByFullTime = [...selectedData].filter(
        (item: any) => item.contract === "Full Time"
      );
      setSelectedData(filteredByFullTime);
    } else {
      setSelectedData(data);
    }
  }

  function handleFilterByLocation(value: string) {
    const updateSelectedData =
      value === "^_^"
        ? filteringData
        : filteringData.filter((item) => item.location === value);
    setSelectedData(updateSelectedData);
  }

  function handleFilterByCompanyAndPosition(
    event: ChangeEvent<HTMLInputElement>
  ) {
    const searchTerm = event.target.value.toLowerCase();

    const filterData = filteringData.filter((item: any) => {
      if (!checked && item.contract === "Full Time") {
        const position = item.position.toLowerCase().includes(searchTerm);
        const company = item.company.toLowerCase().includes(searchTerm);
        return position || company;
      } else {
        const position = item.position.toLowerCase().includes(searchTerm);
        const company = item.company.toLowerCase().includes(searchTerm);
        return position || company;
      }
    });
    setSelectedData(filterData);
  }

  function handleModalOpen() {
    setIsModalOpen(!isModalOpen);
  }

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("scroll");
    } else {
      document.body.classList.remove("scroll");
    }
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && <Modal checked={checked} handleFilter={handleFilter} setChecked={setChecked} handleFilterByLocation={handleFilterByLocation} result={result} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />}

      <form
        onSubmit={(e) => e.preventDefault()}
        className="max-w-[1250px]  mx-auto px-12 text-black"
      >
        <div className="relative  -top-12  flex   w-full h-[80px] rounded-lg bg-white">
          <div className="flex-grow md:w-[29%] lg:w-auto lg:flex-grow relative flex p-3 justify-center h-full items-center md:border-r">
            <FaMagnifyingGlass className="cursor-pointer text-purple-400 absolute left-4" />
            <input
              type="search"
              onChange={(e) => handleFilterByCompanyAndPosition(e)}
              placeholder="Filter by companies, expertise..."
              className="text-sm w-full pl-8 focus:outline-none md:placeholder:"
            />
          </div>
          <div className="md:flex-grow w-[29%] lg:w-auto relative hidden md:flex  p-3 justify-center h-full items-center border-r">
            <FaMapMarkerAlt className="cursor-pointer  z-10 text-purple-400  absolute left-4" />
            <select
              className="custom-select pl-10 text-sm w-full cursor-pointer focus:outline-none absolute h-full "
              name="filter"
              onChange={(e) => handleFilterByLocation(e.target.value)}
            >
              <option value="^_^">Filter by location</option>
              {result.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="hidden md:flex relative gap-x-4 p-3 px-4 h-full items-center">
            <input
              type="checkbox"
              onClick={() => handleFilter()}
              className="ml-4 w-6 h-6 cursor-pointer"
            />
            <div className="font-bold  ">
              <span className="flex gap-x-1">
                Full Time <span className="hidden lg:flex"> Only</span>
              </span>
            </div>
            <button className="text-white bg-[#5964e0] rounded-lg lg:p-3 lg:px-8  py-3 px-6">
              <span className="hidden md:flex">Search</span>

              <FaMagnifyingGlass className="md:hidden" />
            </button>
          </div>

          <div className="md:hidden flex relative gap-x-4 p-3 px-4 h-full items-center">
            <img
              src="/icon-filter.svg"
              onClick={() => handleModalOpen()}
              className="cursor-pointer"
              alt=""
            />
            <button className="text-white bg-[#5964e0] rounded-lg  p-4">
              <FaMagnifyingGlass />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
