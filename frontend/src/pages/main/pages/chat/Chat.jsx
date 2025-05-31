import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Paperclip, Send, MoreVertical, Image } from "lucide-react";
import ChatHeader from "./components/ChatHeader";
import MessageBubble from "./components/MessageBubble";

// Simple emoji list
const simpleEmojis = ["👍", "❤️", "😊", "🎉", "🔥", "👏", "🙌", "✨"];

// Dummy data for chats
const dummyChats = [
  {
    id: 1,
    name: "John Doe",
    lastMessage: "Hey, how's the project going?",
    time: "2:30 PM",
    unread: 2,
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    lastMessage: "I've pushed the changes",
    time: "1:45 PM",
    unread: 0,
    avatar: "https://github.com/shadcn.png",
  },
  // Add more dummy chats as needed
];

// Dummy messages for a chat
const dummyMessages = [
  {
    id: 1,
    text: "Hey, how's it going?",
    sender: "them",
    time: "2:30 PM",
  },
  {
    id: 2,
    text: "Good! Working on the new features.",
    sender: "me",
    time: "2:31 PM",
  },
  // Add more dummy messages
];

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(dummyMessages);
  const [searchQuery, setSearchQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [filteredChats, setFilteredChats] = useState(dummyChats);
  const [replyingTo, setReplyingTo] = useState(null);
  const [pinnedMessages, setPinnedMessages] = useState([]);
  const [mentions, setMentions] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [showEmojis, setShowEmojis] = useState(false);
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const filtered = dummyChats.filter(
      (chat) =>
        chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredChats(filtered);
  }, [searchQuery]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim() && !e.target.files?.length) return;

    const newMessage = {
      id: messages.length + 1,
      text: message,
      sender: "me",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      attachments: e.target.files
        ? Array.from(e.target.files).map((file) => ({
            name: file.name,
            type: file.type,
            url: URL.createObjectURL(file),
          }))
        : [],
    };

    setMessages([...messages, newMessage]);
    setMessage("");
    setShowEmojis(false);
  };

  const handleFileUpload = (e) => {
    handleSendMessage(e);
  };

  const addEmoji = (emoji) => {
    setMessage((prev) => prev + emoji);
    setShowEmojis(false);
  };

  // New handlers for enhanced functionality
  const handleReply = (message) => {
    setReplyingTo(message);
  };

  const handleReact = (messageId, emoji) => {
    setMessages(
      messages.map((msg) => {
        if (msg.id === messageId) {
          return {
            ...msg,
            reactions: {
              ...msg.reactions,
              [emoji]: (msg.reactions?.[emoji] || 0) + 1,
            },
          };
        }
        return msg;
      })
    );
  };

  const handlePinMessage = (messageId) => {
    const message = messages.find((m) => m.id === messageId);
    if (message && !pinnedMessages.find((m) => m.id === messageId)) {
      setPinnedMessages([...pinnedMessages, message]);
    }
  };

  const handleVoiceRecording = () => {
    setIsRecording(!isRecording);
    // Add actual voice recording logic here
  };

  const handleMessageSelection = (messageId) => {
    if (isSelectionMode) {
      setSelectedMessages((prev) =>
        prev.includes(messageId)
          ? prev.filter((id) => id !== messageId)
          : [...prev, messageId]
      );
    }
  };

  return (
    <div className="flex h-[calc(100vh-6rem)] bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Enhanced Sidebar */}
      <div className="w-1/4 border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold mb-4">Chats</h2>
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <Input
              placeholder="Search chats..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <ScrollArea className="flex-1">
          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`p-4 hover:bg-gray-50 cursor-pointer ${
                selectedChat?.id === chat.id ? "bg-gray-50" : ""
              }`}
            >
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={chat.avatar} />
                  <AvatarFallback>{chat.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-semibold truncate">
                      {chat.name}
                    </h3>
                    <span className="text-xs text-gray-500">{chat.time}</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">
                    {chat.lastMessage}
                  </p>
                </div>
                {chat.unread > 0 && (
                  <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-blue-500 rounded-full">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          ))}
        </ScrollArea>

        {/* Add pinned messages section */}
        {pinnedMessages.length > 0 && (
          <div className="p-4 border-t">
            <h3 className="text-sm font-semibold mb-2">Pinned Messages</h3>
            {/* Render pinned messages */}
          </div>
        )}
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            <ChatHeader
              selectedChat={selectedChat}
              isTyping={isTyping}
              onVideoCall={() => {
                /* implement video call */
              }}
              onVoiceCall={() => {
                /* implement voice call */
              }}
              onMute={() => {
                /* implement mute */
              }}
              onPin={() => {
                /* implement pin chat */
              }}
            />

            {/* Messages Area with Enhanced Features */}
            <ScrollArea className="flex-1 p-4">
              <AnimatePresence>
                {messages.map((msg) => (
                  <MessageBubble
                    key={msg.id}
                    message={msg}
                    onReply={handleReply}
                    onReact={handleReact}
                    onDelete={(id) => {
                      /* implement delete */
                    }}
                    isSelected={selectedMessages.includes(msg.id)}
                    onSelect={() => handleMessageSelection(msg.id)}
                  />
                ))}
              </AnimatePresence>
            </ScrollArea>

            {/* Enhanced Message Input */}
            <div className="border-t p-4">
              {replyingTo && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-2 p-2 bg-gray-50 rounded-lg flex items-center justify-between"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-1 h-8 bg-blue-500 rounded-full" />
                    <div>
                      <p className="text-sm font-medium">{replyingTo.sender}</p>
                      <p className="text-sm text-gray-500">{replyingTo.text}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setReplyingTo(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </motion.div>
              )}

              <form
                onSubmit={handleSendMessage}
                className="flex items-center space-x-2"
              >
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Image className="h-5 w-5" />
                </Button>
                <div className="relative flex-1">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="pr-10"
                  />
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowEmojis(!showEmojis)}
                    >
                      😊
                    </Button>
                    {showEmojis && (
                      <div className="absolute bottom-full right-0 mb-2 p-2 bg-white rounded-lg shadow-lg flex gap-1">
                        {simpleEmojis.map((emoji) => (
                          <button
                            key={emoji}
                            type="button"
                            onClick={() => addEmoji(emoji)}
                            className="hover:bg-gray-100 p-1 rounded"
                          >
                            {emoji}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <Button type="submit">
                  <Send className="h-5 w-5" />
                </Button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  className="hidden"
                  multiple
                  accept="image/*,.pdf,.doc,.docx"
                />
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
