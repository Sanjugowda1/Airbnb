import React, { useState } from "react";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import {
  SearchIcon,
  UsersIcon,
  UserCircleIcon,
  MenuIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function Header() {
  const [input, setInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const router = useRouter();

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetChangeHandler = () => {
    setInput("");
  };

  const numberOfGuestsHandler = (e) => {
    setNumberOfGuests(e.target.value);
  };

  const homeRouteHandler = () => {
    router.push("/");
  };

  const searchhandler = () => {
    router.push({
      pathname: "/search",
      query: {
        location: input,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests: numberOfGuests,
      },
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <nav
      className={`p-5 md:px-10 sticky top-0 z-50 grid w-full grid-cols-3 items-center bg-white shadow-md`}
    >
      {/* Header -left */}
      <div
        className="relative flex items-center h-10 cursor-pointer my-auto"
        onClick={homeRouteHandler}
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Header -Middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className={`pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400`}
          value={input}
          type="text"
          onChange={inputChangeHandler}
          placeholder="Start your Search"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* Header -Rigth */}
      <div
        className={`flex items-center justify-end space-x-4 text-gray-500`}
      >
        <p className="hidden md:inline-flex cursor-pointer">
          Become a host
        </p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 rounded-full p-2 cursor-pointer">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {input && (
        <div className="flex flex-col col-span-3 pb-8 mx-auto mt-4 bg-gray-50">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex justify-between items-center border-b pb-1">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={numberOfGuests}
              type="number"
              onChange={numberOfGuestsHandler}
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex mt-2">
            <button
              className="flex-grow text-gray-300"
              onClick={resetChangeHandler}
            >
              Cancel
            </button>
            <button
              className="flex-grow text-red-400"
              onClick={searchhandler}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
