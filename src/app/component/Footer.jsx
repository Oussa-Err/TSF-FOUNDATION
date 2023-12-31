import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex w-full text-white bg-footerBg">
      <footer className=" flex text-sm flex-col justify-start gap-6 text-start items-start pb-4  md:items-start sm:p-5  lg:flex-row md:py-6 ">
        <div>
          <Image
            className="object-cover self-center"
            src="/assets/tsf-logo.png"
            alt="adf logo"
            width={400}
            height={200}
          />
        </div>
        <div className="p-2 flex flex-col md:flex-row gap-10 ">
          <div className="flex flex-1 flex-col gap-3">
            <h2 className="text-lg font-extrabold">Adresses</h2>
            <hr className="bg-black" />
            <p>
              TSF Fondation du Maroc – 81, Avenue Allal Ben Abdellah Hassane -
              Rabat <br/> ET <br/>199, Av. Ibn Sina, 31000 - Sefrou
            </p>
            <p>
              TSF Fondation du France – 55, Bd Vincent Auriol, 75013 Paris –
              Paris
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <h2 className="text-lg font-extrabold">Horaires d’ouverture</h2>
            <hr className="bg-black" />
            <p>Du lundi au vendredi: de 8h30 à 17h30</p>
            <p>samedi: de 8h30 à 12h30</p>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <h2 className="text-lg font-extrabold">Contact</h2>
            <hr className="bg-black" />
            <p>Rabat: +212 661-178118</p>
            <p>Paris: +33 6 52 80 61 34</p>
            <p>Academy.sciences.TSF@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
