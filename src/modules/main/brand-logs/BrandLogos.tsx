import Image from "next/image";
import Container from "@/components/common/Container";

const logo_1 = "/image/brand-logos/logoipsum-1.svg";
const logo_2 = "/image/brand-logos/logoipsum-2.png";
const logo_3 = "/image/brand-logos/logoipsum-3.svg";
const logo_4 = "/image/brand-logos/logoipsum-4.svg";
const logo_5 = "/image/brand-logos/logoipsum-5.svg";

const logos = [logo_1, logo_2, logo_3, logo_4,logo_5];

const BrandLogos = () => {
  return (
    <section className="bg-[#F5F5F6] w-full h-[202px] mx-auto flex items-center justify-center">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex h-[41px] w-[167px] items-center justify-center gap-2 text-[#82868E]"
            >
              <Image
                src={logo}
                alt="Brand logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="font-satoshi text-[14px] font-bold">
                Logoipsum
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BrandLogos;