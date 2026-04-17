export const Navbar = () => {
  const Links = [
    { title: "Guide", href: "#" },
    {
      title: "Pricing",
      href: "#",
    },
    {
      title: "Login",
      href: "#",
    },
  ];
  return (
    <div className="navbar-root">
      <div className="logo">Finwiser</div>
      <div className="links">
        {Links.map((link, idx) => (
          <a className="link-items" key={link.title} href={link.href}>
            {link.title}
          </a>
        ))}
        <button className="btn">Start free trial</button>
      </div>
    </div>
  );
};
