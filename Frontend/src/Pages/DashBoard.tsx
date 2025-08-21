import { Sidebar } from "../Components/Sidebar/Sidebar";
import { CreateContent } from "../Components/CreateContent";
import { useEffect, useState, useCallback } from "react";
import { Button } from "../Components/Button/Button";
import { ShareIcon } from "../Components/icons/ShareIcon";
import { PlusIcon } from "../Components/icons/PlusIcon";
import { Card } from "../Components/Card/Card";
import { UseContent } from "../Components/Hooks/UseContent";
import { BACKEND_URL } from "../config";
import axios, { AxiosError } from "axios";

export function DashBoard() {
  const [modelOpen, setModelOpen] = useState(false);
  const { contents, refresh, handleDelete } = UseContent();
  const [filter, setFilter] = useState("all");

  const filteredContent = contents.filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  // Memoize the refresh function to avoid unnecessary re-renders
  const memoizedRefresh = useCallback(() => {
    refresh();
  }, [refresh]);

  useEffect(() => {
    memoizedRefresh();
  }, [modelOpen, memoizedRefresh]);

  const handleShareBrain = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}api/v1/brain/share`,
        {
          share: true,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
      await navigator.clipboard.writeText(shareUrl);
      alert("Link copied to clipboard! ");
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        alert(`Error sharing brain: ${error.message}`);
        console.error("Error sharing brain:", error.message);
      } else if (error instanceof Error) {
        alert(`Error sharing brain: ${error.message}`);
        console.error("Error sharing brain:", error.message);
      } else {
        alert("An unexpected error occurred while sharing");
        console.error("Error sharing brain:", "An unexpected error occurred");
      }
    }
  };

  return (
    <>
      <Sidebar onFilterSelect={setFilter} />
      <div className="p-4 ml-72 min-h-screen bg-gray-100 text-gray-900">
        <CreateContent
          open={modelOpen}
          onClose={() => {
            setModelOpen(false);
          }}
        />

        <div className="flex justify-end mr-10 mb-2 gap-4">
          <Button
            variant="secondary"
            size="md"
            startIcon={<ShareIcon btnSize="md" />}
            text="Share Brain"
            onClick={handleShareBrain}
          />

          <Button
            onClick={() => {
              setModelOpen(true);
            }}
            variant="primary"
            size="md"
            startIcon={<PlusIcon btnSize="md" />}
            text="Add Content"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          {filteredContent.map((item) => (
            <Card
              key={item._id}
              id={item._id}
              title={item.title}
              link={item.link}
              type={item.type}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </>
  );
}