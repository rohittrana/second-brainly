type CreateContentProps = {
  open: boolean;
  onClose: () => void;
};

import { Input } from "../Input/Input";
import { CrossIcon } from "./icons/CrossIcon";
import { useRef, useState } from 'react';
import { Button } from './Button/Button'
import { BACKEND_URL } from "../config";
import axios from 'axios';

enum contentType {
  Youtube = "youtube",
  Twitter = "twitter"
}

export function CreateContent({ open, onClose }: CreateContentProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(contentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    
    try {
      await axios.post(BACKEND_URL + 'api/v1/content', {
        title,
        link,
        type,
      }, {
        headers: {
          "Authorization": localStorage.getItem('token')
        }
      });
      onClose();
    } catch (error) {
      console.error('Error adding content:', error);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 w-96 shadow-2xl relative z-60">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Add Content</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-100"
          >
            <CrossIcon />
          </button>
        </div>
        
        {/* Form Fields */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <Input ref={titleRef} placeholder="Enter title..." />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Link</label>
            <Input ref={linkRef} placeholder="Enter link..." />
          </div>
        </div>
        
        {/* Content Type Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">Content Type</label>
          <div className="flex gap-2">
            <Button 
              text="YouTube" 
              variant={type === contentType.Youtube ? 'primary' : 'secondary'} 
              size="md" 
              onClick={() => setType(contentType.Youtube)}
              className="flex-1"
            />
            <Button 
              text="Twitter" 
              variant={type === contentType.Twitter ? 'primary' : 'secondary'} 
              size="md" 
              onClick={() => setType(contentType.Twitter)}
              className="flex-1"
            />
          </div>
        </div>
        
        {/* Submit Button */}
        <Button 
          onClick={addContent} 
          variant="primary" 
          text="Add Content" 
          size="md" 
          className="w-full hover:bg-purple-600 font-medium"
        />
      </div>
    </div>
  );
}