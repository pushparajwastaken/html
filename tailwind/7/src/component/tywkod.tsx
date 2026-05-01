const cn = (...classes: string[]) => classes.join(" ");
export const Component = () => {
  //size is used for width and height 40
  return (
    <div
      className={cn(
        "min-h-100 w-full rounded-2xl",
        "bg-[radial-gradient(var(--color-neutral-200)__1px,transparent_1px)]",
        "bg-size-[10px_10px]",
        "group/lava flex flex-col items-center justify-center p-8",
      )}
    >
      <h2 className="my-8 bg-linear-to-r from-blue-300 via-yellow-200 to-blue-300 bg-clip-text font-mono text-2xl tracking-tight text-transparent">
        Scaling with tailwind
      </h2>
      <div
        className={cn(
          "size-60 rounded-lg border border-neutral-200 bg-neutral-100",
          "bg-[radial-gradient(var(--color-neutral-300)__1px,transparent_1px)]",
          "bg-size-[10px_10px]",
          "group/pushpa shadow-2xl perspective-distant transform-3d",
        )}
      >
        <img
          src="https://images.unsplash.com/photo-1651046943788-535cc266c46f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="avatar"
          className="h-full w-full translate-z-20 rotate-y-20 rotate-z-20 transform rounded-2xl object-cover transition-transform duration-200 ease-linear group-hover/pushpa:rotate-x-0 group-hover/pushpa:rotate-y-0 group-hover/pushpa:rotate-z-0"
        />
      </div>
    </div>
  );
};
