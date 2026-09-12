function IconLink({ href, icon: Icon, color = "#0dcaf0", isExternal = true }) {
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="icon-link"
      style={{
        "--hover-color": color,
      }}
    >
      <Icon />
    </a>
  );
}

export default IconLink;
