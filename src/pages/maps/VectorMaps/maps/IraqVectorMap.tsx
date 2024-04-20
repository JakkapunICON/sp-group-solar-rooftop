import "jsvectormap";
import "jsvectormap/dist/maps/iraq.js";

//components
import BaseVectorMap from "./BaseVectorMap";

type IraqVectorMapProps = {
  width?: string;
  height?: string;
  options?: any;
};

const IraqVectorMap = ({ width, height, options }: IraqVectorMapProps) => {
  return (
    <>
      <BaseVectorMap width={width} height={height} options={options} type="iraq" />
    </>
  );
};

export default IraqVectorMap;
