const Navbar = () => {
  let status = false;

  return (
    <>
      <div className="bg-black flex items-center justify-between px-6 py-3">
        <img src="/facebook.png" alt="facebook-logo" className="h-8 w-auto" />

        <img src="/google.png" alt="google-logo" className="h-8 w-auto" />

        <img src="/Pokemon.png" alt="pokemon-logo" className="h-8 w-auto" />
      </div>
      {status ? <p> conditional operator </p> : ""}
    </>
  );
};

export default Navbar;
