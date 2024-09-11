import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import Popupboxstyle from "./PopupBox.module.css";
import { FaCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

function PopupBox({ buttonclick, btnclickcheck }) {
  const [selectedDropdownid, setSelectedDropdwonid] = useState([]);
  const [selectedDropdownoptiondisplay, setSelectedDropdownoptiondisplay] =
    useState(["Add schema to segment"]);
  const [selecteddropdownid,setSelectedDropdownid] = useState([]);

  const [usernameinput, setUsernameinput] = useState([]);

  const [dropdownopen, setDropdownopen] = useState(false); 

  const [dynamicdropdownopen, setDynamicdropdownopen] = useState(false);
  const [selectdropdown, setSelectdropdown] = useState(false);

  const [selecteddynamicoption, setSelecteddynamicoption] = useState([]);
  const [selecteddynamicoptionid, setSelecteddynamicoptionid] = useState([]);


  const [optionvalues, setOptionvalues] = useState([
    {
      label: "First Name",
      value: "first_name",
      id: 1,
    },
    {
      label: "Last Name",
      value: "last_name",
      id: 2,
    },
    {
      label: "Gender",
      value: "gender",
      id: 3,
    },
    {
      label: "Age",
      value: "age",
      id: 4,
    },
    {
      label: "Account Name",
      value: "account_name",
      id: 5,
    },
    {
      label: "City",
      value: "city",
      id: 6,
    },
    {
      label: "State",
      value: "state",
      id: 7,
    },
  ]);

  const [dynamicoptionvalues, setDynamicOptionvalues] = useState([
    {
      label: "First Name",
      value: "first_name",
      id: 1,
    },
    {
      label: "Last Name",
      value: "last_name",
      id: 2,
    },
    {
      label: "Gender",
      value: "gender",
      id: 3,
    },
    {
      label: "Age",
      value: "age",
      id: 4,
    },
    {
      label: "Account Name",
      value: "account_name",
      id: 5,
    },
    {
      label: "City",
      value: "city",
      id: 6,
    },
    {
      label: "State",
      value: "state",
      id: 7,
    },
  ]);

  const selectedDropdownoption = (value, name) => {
    setSelectedDropdwonid((c) => ({ ...c, [value]: name }));
    setDropdownopen(false);
  };

  const [userdatastored, setUserdatastored] = useState();

  const [buttoncreated, setButtoncreated] = useState([]);
  const handleaddschema = () => {
    setButtoncreated((c) => [
      ...c,
      {
        label:
          selectedDropdownoptiondisplay[
            selectedDropdownoptiondisplay.length - 1
          ],
        id:selecteddropdownid
      },
    ]);
    setUserdatastored({
      segment_name: usernameinput,
      schema: [selectedDropdownid],
    });
  };

  const handleSendData = async () => {
    const webhookurl =
      "https://webhook.site/5de5b544-6904-45f7-acc0-763453e5b7e9";

    try {
      const response = await fetch(webhookurl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userdatastored), 
      });

      if (response.ok) {
        console.log("data sent done");
      } else {
        console.log("Error", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // console.log(selectedDropdownid, userdatastored);
  console.log(selecteddynamicoption, selecteddynamicoptionid);

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          position: "absolute",
          top: 0,
          overflowX: "hidden",
          // height: "100vh",
          backgroundColor: btnclickcheck ? "rgba(0, 0, 0, 0.7)" : "",
        }}
      >
        <div style={{ width: "25%", backgroundColor: "white" }}>
          {/* title of popup  */}
          <div className={Popupboxstyle.popuptitle}>
            <button
              className={Popupboxstyle.popupbackbutton}
              onClick={() => {
                buttonclick((btnclick) => !btnclick);
              }}
            >
              <FaChevronLeft
                style={{ color: "white", margin: "16px 10px 0px 0px" }}
              />
              <p>Saving Segment</p>
            </button>
          </div>

          {/* body part of popoup  */}
          <div
            style={{ padding: "10px", textAlign: "left", marginTop: "16px" }}
          >
            {/* name textbox  */}
            <div style={{ display: "grid", rowGap: "10px" }}>
              <label>Enter the Name of the Segment</label>
              <input
                type="text"
                placeholder="Name of the segment"
                style={{ padding: "10px" }}
                value={usernameinput}
                onChange={(e) => {
                  setUsernameinput(e.target.value);
                }}
              ></input>
            </div>

            {/* description  */}
            <div>
              <p>
                To save your segment, you need to add the schemas to buid the
                query{" "}
              </p>
            </div>

            <div
              style={{
                fontSize: "13px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <FaCircle
                color="#68d668"
                style={{ border: "none", marginRight: "4px" }}
              />
              <span style={{ marginRight: "4px" }}>-User Tasks</span>
              <FaCircle color="red" style={{ marginRight: "4px" }} />
              <span style={{ border: "none", marginRight: "8px" }}>
                -Group Tasks
              </span>
            </div>

            {/* dynamic dropdown  */}
            <div style={{ marginTop: "24px" }}>
              <div style={{ border: "1px solid skyblue" }}>
                <div
                  style={{ padding: "16px", display: "grid", rowGap: "16px" }}
                  id="dynamicdropdown"
                >
                  {buttoncreated?.map((item, index) => {
                    return (
                      <div style={{marginTop:"5px"}}>
                        <div style={{ display: "flex", width: "100%" }}>
                          <button
                            style={{
                              padding: "8px",
                              display: "flex",
                              width: "100%",
                              textAlign: "left",
                              border:"1px solid",
                              borderRight: "none"
                              // position: "relative",
                            }}
                            value={item.label}
                            onClick={() => {
                              setSelectdropdown(item.label);
                              setSelecteddynamicoptionid(item.id);
                              setDynamicdropdownopen(true);
                              if (dynamicdropdownopen) {
                                setDynamicdropdownopen(false);
                              }
                            }}
                          >
                            {item.label}
                          </button>
                          <button
                            style={{ border:"1px solid",borderLeft: "none"}}
                            onClick={() => {
                              setSelectdropdown(item.label);
                              setDynamicdropdownopen(true);
                              if (dynamicdropdownopen) {
                                setDynamicdropdownopen(false);
                              }
                            }}
                          >
                            <FaChevronDown />
                          </button>
                        </div>

                        {dynamicdropdownopen && item.label == selectdropdown ? (
                          <div
                            style={{border:"1px solid",borderTop: "none"  }}
                            onMouseLeave={() => {
                              setDynamicdropdownopen(false);
                            }}
                          >
                            {dynamicoptionvalues.map((item, index) => {
                              if (item.label != selectdropdown) {
                                return (
                                  <button
                                    value={item.label}
                                    id={item.id}
                                    className={Popupboxstyle.optionbutton}
                                    onClick={(e) => {
                                      setSelecteddynamicoption(e.target.value);
                                      let del = [...dynamicoptionvalues];
                                      del.splice(index, 1);
                                      setDynamicOptionvalues(del);
                                      setDynamicdropdownopen(false);
                                    }}
                                    // key={index}
                                  >
                                    {item.label}
                                  </button>
                                );
                              }
                            })}
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div
              style={{ marginTop: "16px", position: "relative", zIndex: 999 }}
            >
              <button
                style={{
                  padding: "8px",
                  width: "100%",
                  textAlign: "left",
                  // position: "relative",
                }}
                value={
                  selectedDropdownoptiondisplay[
                    selectedDropdownoptiondisplay.length - 1
                  ]
                }
                onClick={() => {
                  setDropdownopen(true);
                  if (dropdownopen) {
                    setDropdownopen(false);
                  }
                }}
              >
                {
                  selectedDropdownoptiondisplay[
                    selectedDropdownoptiondisplay.length - 1
                  ]
                }
              </button>

              <div
                style={{
                  position: "absolute",
                  right: 20,
                  marginTop: "-25px",
                }}
              >
                <FaChevronDown />
              </div>

              {dropdownopen ? (
                <div style={{border: "1px solid" }}>
                  {optionvalues.map((item, index) => {
                    return (
                      <button
                        key={index}
                        value={item.value}
                        name={item.label}
                        id={item.id}
                        className={Popupboxstyle.optionbutton}
                        onClick={(e) => {
                          selectedDropdownoption(e.target.value, e.target.name);
                          setSelectedDropdownid(e.target.id);
                          setSelectedDropdownoptiondisplay((c) => [
                            ...c,
                            item.label,
                          ]);
                          let del = [...optionvalues];
                          del.splice(index, 1);
                          setOptionvalues(del);
                        }}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              ) : null}
            </div>

            {/* adding schema button */}
            <div style={{ marginTop: "16px" }}>
              <button
                style={{
                  textDecoration: "underline",
                  border: "none",
                  background: "none",
                  color: "#68d668",
                  cursor: "pointer",
                }}
                onClick={handleaddschema}
              >
                +Add new schema
              </button>
            </div>
          </div>

          {/* submit and cancel button  */}
          <div
            style={{
              backgroundColor: "#f5f3f3",
              display: "flex",
              padding: "24px",
              columnGap: "16px",
              marginTop:"240px",
            }}
          >
            <button
              style={{
                backgroundColor: "#68d668",
                border: "none",
                borderRadius: "2px",
                color: "white",
                padding: "10px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
              onClick={()=>{handleSendData();setButtoncreated([]);setOptionvalues(dynamicoptionvalues);setSelectedDropdownoptiondisplay(["Add schema to segment"]);setUsernameinput([])}}
            >
              Save the Segment
            </button>

            <button
              onClick={() => {
                buttonclick((btnclick) => !btnclick);
              }}
              style={{
                backgroundColor: "white",
                border: "none",
                borderRadius: "2px",
                color: "red",
                padding: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopupBox;
