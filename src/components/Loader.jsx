import logo from "../assets/logo.png";

function Loader() {
  const imgLogo = logo;
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <img src={imgLogo} alt="" className="w-12 h-12 animate-spin" />
      <p className="text-3xl font-bold">Caricamento in corso...</p>
    </div>
  );
}

export default Loader;
