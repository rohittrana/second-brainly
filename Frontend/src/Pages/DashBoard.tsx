import { Sidebar } from "../Components/Sidebar/Sidebar";
import { CreateContent } from "../Components/CreateContent";
import { useEffect, useState } from "react";
import { Button } from "../Components/Button/Button";
import { ShareIcon } from "../Components/icons/ShareIcon";
import { PlusIcon } from "../Components/icons/PlusIcon";
import { Card } from "../Components/Card/Card";
import { UseContent } from "../Components/Hooks/UseContent";
export function DashBoard() {
  const [modelOpen, setModelOpen] = useState(false);
  const {contents,refresh} = UseContent();
  useEffect(()=>{
     refresh();
  },[modelOpen])
  return (
    <>
      <Sidebar></Sidebar>
      <div className="p-4 ml-72 min-h-screen bg-gray-100">
        <CreateContent
          open={modelOpen}
          onClose={() => {
            setModelOpen(false);
          }}
        ></CreateContent>

        <div className="flex justify-end mr-20  gap-4 ">
          <Button
            variant="secondary"
            size="md"
            startIcon={<ShareIcon btnSize="md" />}
            text="Share Brain"
          ></Button>
          <Button
            onClick={() => {
              setModelOpen(true);
            }}
            variant="primary"
            size="md"
            startIcon={<PlusIcon btnSize="md" />}
            text="Add Content"
          ></Button>
        </div>

        <div className="flex gap-2 flex-wrap" >
     
          {contents.map(({type,link,title}) => (
            <Card  type={type} link={link} title={title} />
          ))}
        </div>
      </div>
    </>
  );
}
