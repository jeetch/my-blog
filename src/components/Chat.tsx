import { FC } from "react";
import { Accordion, AccordionItem, AccordionTrigger } from "./ui/accordion";

const Chat: FC = ({}) => {
  return (
    <div>
      <Accordion type="single" collapsible className="bg-white z-40 shadow">
        <AccordionItem value="item-1">
          <div className="fixed right-8 bottom-8 w-50 bg-neutral-800 border border-neutral-600 rounded-full">
            <div className="w-full h-full flex flex-col">
              <AccordionTrigger className="px-6 text-neutral-400 text-sm">
                Ask Me Anything!
              </AccordionTrigger>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Chat;
