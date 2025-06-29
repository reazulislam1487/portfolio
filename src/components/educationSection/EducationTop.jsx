import EducationsTopLeft from "./EducationTopLeft";
import EducationsTopMiddle from "./EducationTopMiddle";
// import EducationsTopRight from "./EducationTopRight";

const EducationsTop = () => {
  return (
    <div className="flex lg:flex-row sm:flex-col gap-4 items-center justify-center">
      <EducationsTopLeft />
      <EducationsTopMiddle />
      {/* <EducationsTopRight /> */}
    </div>
  );
};

export default EducationsTop;
