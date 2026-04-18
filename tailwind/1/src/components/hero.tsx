import React from "react";
export const Hero = () => {
  return (
    <div className="hero-root">
      <div className="badge">
        {" "}
        <span>Real-time data API for founders and agents</span>
        <svg width="16" height="16" fill="none">
          <path
            stroke="#1E1F25"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity=".5"
            strokeWidth="1.25"
            d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
          ></path>
        </svg>
      </div>
      <h1 className="hero-title">Magically simplify accounting and taxes</h1>
      <p className="hero-subtitle">
        Automated bookkeeping. Effortless tax filing. Financial&nbsp;clarity.
        Set&nbsp;up&nbsp;in&nbsp;10&nbsp;mins.&nbsp;Back&nbsp;to&nbsp;building&nbsp;by&nbsp;
        7:45am.
      </p>
      <div className="hero-cta">
        <button className="btn">Start free trial</button>
        <button className="btn btn-secondary">
          <span>Pricing</span>
          <svg width="16" height="16" fill="none">
            <path
              stroke="#1E1F25"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity=".5"
              strokeWidth="1.25"
              d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
