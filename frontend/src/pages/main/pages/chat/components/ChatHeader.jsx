import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MoreVertical, Phone, Video, Pin, Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ChatHeader = ({
  selectedChat,
  isTyping,
  onVideoCall,
  onVoiceCall,
  onMute,
  onPin,
}) => {
  return (
    <div className="p-4 border-b flex items-center justify-between bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="flex items-center space-x-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src={selectedChat.avatar} />
          <AvatarFallback>{selectedChat.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">{selectedChat.name}</h3>
          {isTyping ? (
            <p className="text-sm text-blue-500 animate-pulse">typing...</p>
          ) : (
            <p className="text-sm text-gray-500">Online</p>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" onClick={onVoiceCall}>
          <Phone className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" onClick={onVideoCall}>
          <Video className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" onClick={onPin}>
          <Pin className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" onClick={onMute}>
          <Bell className="h-5 w-5" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Profile</DropdownMenuItem>
            <DropdownMenuItem>Search in Conversation</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              Block User
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default ChatHeader;
