"use client";
import { cn } from "@/lib/utils";
import { Message } from "@/lib/validators/message";
import { useMutation } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import { FC, HTMLAttributes, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

const ChatInput: FC<ChatInputProps> = ({ className, ...props }) => {
  const [input, setInput] = useState<string>("");

  const { mutate: sendMessage, isLoading } = useMutation({
    mutationFn: async (message: Message) => {
      const response = await fetch("api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "hello" }),
      });

      return response.body;
    },

    onSuccess: () => {
      console.log("success");
    },
  });

  return (
    <div {...props} className={cn("border-t border-neutral-600", className)}>
      <div className="relative mt-2 flex-1 overflow-hidden rounded-md outline-none">
        <TextareaAutosize
          rows={2}
          maxRows={4}
          onKeyDown={(e) => {
            e.preventDefault();

            const message = {
              id: nanoid(),
              isUserMessage: true,
              text: input,
            };

            sendMessage(message);
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          placeholder="Say Anything.."
          className="peer disabled:opacity-50 pr-14 resize-none block w-full border-0
        bg-neutral-700 py-1.5 text-neutral-400 focus:ring-0 text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default ChatInput;
