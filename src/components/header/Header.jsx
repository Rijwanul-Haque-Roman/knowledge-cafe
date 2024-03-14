import profile from "../../assets/profile.png";

const Header = () => {
  return (
    <div className="flex justify-between py-12  border-b-2">
      <h1 className="text-black text-[40px] font-bold ">Knowledge Cafe</h1>
      <img src={profile} alt="profile" />
    </div>
  );
};

export default Header;
