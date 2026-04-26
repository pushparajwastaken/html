import { cn } from "@/lib/utils";
import React from "react";
import { BrainIcon, ForkIcon, MouseBoxIcon } from "./icons";

const MainSkeleton = () => {
  const chat = [
    {
      role: "user",
      text: "hello there",
    },
    {
      role: "assistant",
      text: "hello there! How can I help you today?",
    },
    {
      role: "user",
      text: "I want to create a new workflow",
    },
    {
      role: "assistant",
      text: "Sure, I can help you with that. What would you like to build?",
    },
  ];

  const UserMessage = ({ text }: { text: string }) => {
    return (
      <div className="ml-auto flex w-fit items-start justify-end gap-2 rounded-tl-full rounded-tr-full rounded-br-lg rounded-bl-full bg-blue-500 p-2">
        <p className="text-sm text-white">{text}</p>
        <div className="size-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
      </div>
    );
  };
  const AIMessage = ({ text }: { text: string }) => {
    return (
      <div className="mr-auto flex w-fit items-start justify-start gap-2 rounded-tl-full rounded-tr-full rounded-br-full rounded-bl-lg bg-gray-100 p-2">
        <div className="size-6 shrink-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
        <p className="text-sm text-black">{text}</p>
      </div>
    );
  };
  return (
    <div className="relative z-20 flex h-full w-full flex-col gap-4 px-12">
      <input
        type="text"
        placeholder="Type your message here..."
        className="absolute inset-x-0 bottom-4 mx-auto h-10 w-[calc(100%-4rem)] rounded-md border border-neutral-200 bg-white px-4 text-xs placeholder-neutral-600"
      />
      {chat.map((message, index) => {
        return message.role === "user" ? (
          <UserMessage text={message.text} />
        ) : (
          <AIMessage text={message.text} />
        );
      })}
    </div>
  );
};

export const Grid = () => {
  return (
    <div className="mx-auto min-h-screen max-w-5xl border-x border-neutral-200 bg-gray-100 py-20">
      <div className="grid grid-cols-1 divide-x divide-y divide-neutral-100 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <BrainIcon />
            <CardTitle>LLM Model Selector</CardTitle>
          </CardHeader>
          <CardDescription>
            Track real-time activity of agents with detailed records of
            triggers, tools used, outcomes, and timestamps.
          </CardDescription>
          <CardSkeleton>
            <div className="h-full w-full"></div>
          </CardSkeleton>
        </Card>

        <Card>
          <CardHeader>
            <MouseBoxIcon />
            <CardTitle>Text to workflow builder</CardTitle>
          </CardHeader>
          <CardDescription>
            Track real-time activity of agents with detailed records of
            triggers, tools used, outcomes, and timestamps.
          </CardDescription>
          <CardSkeleton className="bg-white">
            <MainSkeleton />
          </CardSkeleton>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <ForkIcon />
            <CardTitle>Native tools integration</CardTitle>
          </CardHeader>
          <CardDescription>
            Integrate with native tools to create workflows that can interact
          </CardDescription>
          <CardSkeleton>
            <div className="h-full w-full"></div>
          </CardSkeleton>
        </Card>
      </div>
    </div>
  );
};

const CardSkeleton = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      style={{}}
      className={cn(
        "my-4 h-60 w-full overflow-hidden rounded-lg bg-gray-50",
        "bg-[radial-gradient(var(--color-neutral-100)_1px,_transparent_1px)]",
        "[background-size:10px_10px]",
        "mask-radial-from-40%",
        className,
      )}
    >
      {children}
    </div>
  );
};

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={cn("w-full bg-white p-4", className)}>{children}</div>;
};

const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center gap-2">{children}</div>;
};

const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={cn("text-lg font-medium tracking-tight", className)}>
      {children}
    </h2>
  );
};

const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-base text-neutral-400", className)}>{children}</p>
  );
};
