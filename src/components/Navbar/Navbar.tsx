import { Anchor } from "antd";

export const Navbar = () => {
  const { Link } = Anchor;
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="/">Star Wars</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset={65}>
            <Link href="#feature" title="Personajes" />
            <Link href="/" title="Naves" />
            <Link href="/" title="Planetas" />
            <Link href="/" title="Especies" />
            <Link href="/" title="Vehiculos" />
          </Anchor>
        </div>
      </div>
    </div>
  );
};
