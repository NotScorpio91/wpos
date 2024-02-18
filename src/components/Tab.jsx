import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import { useSelector, useDispatch } from "react-redux";
import { BiTaskX } from "react-icons/bi";
import { BiTask } from "react-icons/bi";
import { storeCards } from "../redux/slices/cardsSlice";
import { db } from "../config/firebase";
import {
  getDocs,
  doc,
  collection,
} from "firebase/firestore";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("ncj");
  const dispatch = useDispatch();
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);


  const posts = useSelector((state) => state.cardSlice.posts);


  useEffect(() => {
    const l1 = posts?.filter((card) => card.status === 0);
    const l2 = posts?.filter((card) => card.status === 1);
    setList1(l1)
    setList2(l2)

  }, [posts]);

  const collectionRef = collection(db, "cards");

  const getList = async () => {
    try {
      const data = await getDocs(collectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(storeCards(filteredData));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getList();
  }, []);


  return (
    <div className=" flex justify-center items-center flex-col px-2 py-16 sm:px-0 font-poppins ">
      <div className="flex justify-around items-center space-x-1 rounded-xl bg-[#0A0A0A] p-1 w-full ">
        <div
          className={`w-full rounded-lg py-3 text-sm font-medium leading-5 text-white flex justify-center items-center   gap-1 cursor-pointer  ${activeTab === "ncj"
              ? "bg-[#131415] shadow  outline-none"
              : "hover:bg-[#131415] hover:text-white"
            }`}
          onClick={() => setActiveTab("ncj")}
        >
          Task
          <BiTaskX
            size={18} />
        </div>
        <div
          className={`w-full rounded-lg py-3 text-sm font-medium leading-5 text-white flex justify-center items-center  gap-1  cursor-pointer ${activeTab === "sec_cj"
              ? "bg-[#131415] shadow  outline-none"
              : "hover:bg-[#131415] hover:text-white"
            }`}
          onClick={() => setActiveTab("sec_cj")}
        >
          Done
          <BiTask
            size={18} />
        </div>
      </div>

      <div className=" mt-2 bg-[#0A0A0A] w-full rounded-lg ">
        {activeTab === "ncj" && (
          <div>
            {/* Content for NCJ tab */}
            <CardList list={list1} />
          </div>
        )}

        {activeTab === "sec_cj" && (
          <div>
            {/* Content for SEC CJ tab */}
            <CardList list={list2} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tab;
