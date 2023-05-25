import { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";

const Chat: FC = ({}) => {
  return (
    <>
      <Accordion type="single" collapsible className="z-40">
        <AccordionItem value="item-1">
          <div className="fixed right-8 bottom-8 w-60 bg-neutral-800 border border-neutral-600 rounded-md">
            <div className="w-full h-full flex flex-col">
              <AccordionTrigger className="px-6">
                <ChatHeader />
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col h-80 bg-neutral-800">
                  In Development!
                </div>
                <ChatInput />
              </AccordionContent>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Chat;
