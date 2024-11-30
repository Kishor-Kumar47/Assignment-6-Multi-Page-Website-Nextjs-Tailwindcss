import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="bg-gray-800 ">


      <h2 className="text-[30px] ml-3 text-orange-600 font-bold text-center p-5 lg:text-[60px]">
        Products
      </h2>

<div className="flex grid grid-cols-1 ml-[90px] mt-6 gap-y-8 pb-9 md:grid grid-cols-3 lg:grid-cols-4 lg:p-2 ">
      <div className=" ml-2 pb-2 ">
        <div >
          <Image className="rounded-2xl rounded-b-none lg:w-[400px] lg:h-[300px] "
            src={"/wt1.jpg"}
            width={250}
            height={200}
            alt="img"
          />
        </div>
        <div className=" w-[250px] bg-gray-700 ">
          <h2 className="text-gray-300 text-[20px] lg:text-[30px]">
            Best Brown Fashion Watch
          </h2>
          <h4 className="text-blue-500 font-bold text-[20px] lg:text-[30px]">Rs.3000</h4>
          <p className="text-gray-300 text-[12px] lg:text-[15px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
          <button className="w-[250px] py-2 bg-orange-500 text-gray-300 text-[20px]">
            {" "}
            <Link href={""}>Order Now</Link>{" "}
          </button>
        </div>
      </div>

      {/* product 2 */}

      <div className=" ml-2 pb-2">
        <div >
          <Image
            className="rounded-2xl rounded-b-none lg:w-[400px] lg:h-[300px]"
            src={"/wt2.jpg"}
            width={250}
            height={200}
            alt="img"
          />
        </div>
        <div className="w-[250px] bg-gray-700 ">
          <h2 className="text-gray-300 text-[20px] lg:text-[30px]">
            Best Brown Fashion Watch
          </h2>
          <h4 className="text-blue-500 font-bold text-[20px] lg:text-[30px]">Rs.3000</h4>
          <p className="text-gray-300 text-[12px] lg:text-[15px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
          <button className="w-[250px] py-2 bg-orange-500 text-gray-300 text-[20px]">
            {" "}
            <Link href={""}>Order Now</Link>{" "}
          </button>
        </div>
      </div>

      {/* product 3 */}

      <div className=" ml-2 pb-2  ">
        <div >
          <Image
            className="rounded-2xl rounded-b-none lg:w-[400px] lg:h-[300px]"
            src={"/wt3.jpg"}
            width={250}
            height={200}
            alt="img"
          />
        </div>
        <div className="w-[250px] bg-gray-700 ">
          <h2 className="text-gray-300 text-[20px] lg:text-[30px] ">
            Best Brown Fashion Watch
          </h2>
          <h4 className="text-blue-500 font-bold text-[20px] lg:text-[30px]">Rs.3000</h4>
          <p className="text-gray-300 text-[12px] lg:text-[15px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
          <button className="w-[250px] py-2 bg-orange-500 text-gray-300 text-[20px] ">
            {" "}
            <Link href={""}>Order Now</Link>{" "}
          </button>
        </div>
      </div>

      {/* product 4 */}

      <div className=" ml-2 pb-2">
        <div >
          <Image
            className="rounded-2xl rounded-b-none lg:w-[400px] lg:h-[300px]"
            src={"/wt1.jpg"}
            width={250}
            height={200}
            alt="img"
          />
        </div>
        <div className="w-[250px] bg-gray-700 ">
          <h2 className="text-gray-300 text-[20px] lg:text-[30px]">
            Best Brown Fashion Watch
          </h2>
          <h4 className="text-blue-500 font-bold text-[20px] lg:text-[30px]">Rs.3000</h4>
          <p className="text-gray-300 text-[12px] lg:text-[15px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
          <button className="w-[250px] py-2 bg-orange-500 text-gray-300 text-[20px]">
            {" "}
            <Link href={""}>Order Now</Link>{" "}
          </button>
        </div>
      </div>

</div>      
    </section>
  );
};

export default page;
