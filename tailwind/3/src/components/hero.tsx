export const Hero = () => {
  return (
    //tracking used to bring the words closer
    //sab kuch ek line main aaraha tha isiliye max-w ki property use ki
    //leading used to manipulate the distance between two lines
    //text select karne pe bg pe jo color aata hai wo change karne ke liye we used selection property
    //inset-x-0 se left aur right ki value 0 hogayi aur absolute ki madad se we can position the element at the bottom of the button
    <div className="my-40 flex flex-col items-center justify-center">
      <h1 className="max-w-2xl bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-7xl leading-tight font-bold tracking-tight text-transparent">
        Unleash the power of <span className="text-primary">intuitive</span>{" "}
        finance
      </h1>
      <p className="max-w-3xl text-center text-xl text-neutral-300 selection:bg-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
        perferendis <span className="text-primary">accusamus </span> dolores
        aliquid repudiandae fugiat. Accusamus
      </p>
      <div className="mt-8 flex w-full max-w-lg justify-center gap-4">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your email"
          className="focus:ring-primary flex-1 rounded-xl border border-neutral-600 px-4 text-white transition duration-300 placeholder:text-neutral-500 focus:ring-1 focus:outline-none"
        />
        <button className="relative cursor-pointer rounded-xl border border-neutral-700 px-4 py-2 text-white">
          <div className="via-primary absolute inset-x-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent to-transparent"></div>
          Join WaitList
        </button>
      </div>
    </div>
  );
};
