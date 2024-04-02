import React from "react";
import { Accordion,Text } from "./uicomponent/lib";

const FrontPage = () => {
  const accordionItems = [
    {
      title: "Section 1",
      content: [
        { label: "Item 1", value: "Value 1" },
        { label: "Item 2", value: "Value 2" },
      ],
    },
    {
      title: "Section 2",
      content: [
        { label: "Item 3", value: "Value 3" },
        { label: "Item 4", value: "Value 4" },
      ],
    },
    // Add more sections as needed
  ];
  return (
    <div>
      <div></div>
      <div className="flex">
        <div className="flex-[26%]">
          <div className="flex">
            <img />
            <div>
              <Text></Text>
              <Text></Text>
              <Text></Text>
            </div>
          </div>
          <Accordion items={accordionItems} className="pl-14" />
        </div>
        <div className="flex-[77%]"></div>
      </div>
    </div>
  );
};

export default FrontPage;
