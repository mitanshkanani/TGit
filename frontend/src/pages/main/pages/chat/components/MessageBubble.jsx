import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  ThumbsUp,
  SmilePlus,
  MoreHorizontal,
  Reply,
  Copy,
  Trash,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MessageBubble = ({ message, onReply, onReact, onDelete }) => {
  const [showReactions, setShowReactions] = useState(false);

  const reactions = [
    { emoji: "👍", count: message.reactions?.["👍"] || 0 },
    { emoji: "❤️", count: message.reactions?.["❤️"] || 0 },
    { emoji: "😄", count: message.reactions?.["😄"] || 0 },
    { emoji: "🎉", count: message.reactions?.["🎉"] || 0 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`group flex ${
        message.sender === "me" ? "justify-end" : "justify-start"
      }`}
    >
      <div className="relative">
        <div
          className={`max-w-[70%] rounded-lg ${
            message.sender === "me" ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          {/* Message content */}
          {/* ...existing attachment and text rendering code... */}

          {/* Reaction bar */}
          {showReactions && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute -top-10 left-0 bg-white rounded-full shadow-lg p-1 flex space-x-1"
            >
              {reactions.map((reaction) => (
                <button
                  key={reaction.emoji}
                  onClick={() => onReact(message.id, reaction.emoji)}
                  className="hover:bg-gray-100 p-1 rounded-full"
                >
                  {reaction.emoji}
                </button>
              ))}
            </motion.div>
          )}

          {/* Message actions */}
          <div className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => onReply(message)}>
                  <Reply className="h-4 w-4 mr-2" />
                  Reply
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(message.text)}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </DropdownMenuItem>
                {message.sender === "me" && (
                  <DropdownMenuItem
                    onClick={() => onDelete(message.id)}
                    className="text-red-600"
                  >
                    <Trash className="h-4 w-4 mr-2" />
                    Delete
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Reaction display */}
        {Object.entries(message.reactions || {}).length > 0 && (
          <div className="mt-1 flex space-x-1">
            {Object.entries(message.reactions).map(([emoji, count]) => (
              <span
                key={emoji}
                className="text-xs bg-white shadow rounded-full px-2 py-1"
              >
                {emoji} {count}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MessageBubble;
