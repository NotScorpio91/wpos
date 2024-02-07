import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import { MdOutlineWorkOff } from "react-icons/md";
import { MdOutlineWorkOutline } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {storeCards} from "../redux/slices/cardsSlice";
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
      console.log(filteredData);
      dispatch(storeCards(filteredData));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getList();
  }, []);


  return (
    <div className=" mx-auto mt-8  ">
      <div className="flex justify-center space-x-4    ">
        <div
          className={`cursor-pointer  border-white text-white      ${
            activeTab === "ncj"
              ? "text-blue-500 border-blue-500  border-b-2 font-semibold "
              : ""
          }`}
          onClick={() => setActiveTab("ncj")}
        >
          <MdOutlineWorkOff
            className={`cursor-pointer  border-white text-white    ${
              activeTab === "ncj"
                ? "text-blue-500 border-blue-500  border-b-2 font-semibold "
                : ""
            }`}
          />
          NCJ
        </div>
        <div
          className={`cursor-pointer  border-white text-white    ${
            activeTab === "sec_cj"
              ? "text-blue-500 border-blue-500  border-b-2 font-semibold "
              : ""
          }`}
          onClick={() => setActiveTab("sec_cj")}
        >
          <MdOutlineWorkOutline
            className={`cursor-pointer  border-white text-white    ${
              activeTab === "sec_cj"
                ? "text-blue-500 border-blue-500  border-b-2 font-semibold "
                : ""
            }`}
          />
          SEC CJ
        </div>
      </div>

      <div className=" mt-2 ">
        {activeTab === "ncj" && (
          <div>
            {/* Content for NCJ tab */}
            <CardList list={list1}  />
          </div>
        )}

        {activeTab === "sec_cj" && (
          <div>
            {/* Content for SEC CJ tab */}
            <h2 className="text-center">SEC CJ Content Goes Here</h2>
            <CardList list={list2} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tab;
