function IconLink({ href, icon: Icon, color = "#0dcaf0", isExternal = true }) {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.3)";
    e.currentTarget.style.color = color;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.color = "white";
  };

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noreferrer" : undefined}
      className="text-white"
      style={{
        transition: "0.25s",
        display: "inline-block",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Icon />
    </a>
  );
}

export default IconLink;
