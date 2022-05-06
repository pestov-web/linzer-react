import windows from "../images/production/menu/windows.webp";
import doors from "../images/production/menu/doors2.webp";
import winterGarden from "../images/production/menu/wintergarden.webp";
import facade from "../images/production/menu/facade.webp";
import canopies from "../images/production/menu/sunshade.webp";
import sliding from "../images/production/menu/automatic.webp";
import lantern from "../images/production/menu/lantern.webp";
import pvc from "../images/production/menu/PVC.webp";
import ventilated from "../images/production/menu/vent.webp";

export const products = [
  { nameRu: "Окна", nameEn: "", image: windows, link: "/windows" },
  { nameRu: "Двери", nameEn: "", image: doors, link: "/doors" },
  {
    nameRu: "Зимние сады",
    nameEn: "",
    image: winterGarden,
    link: "/winterg",
  },
  { nameRu: "Фасадное остекление", nameEn: "", image: facade, link: "/facade" },
  {
    nameRu: "Козырьки и навесы",
    nameEn: "",
    image: canopies,
    link: "/canopies",
  },
  {
    nameRu: "Раздвижные системы",
    nameEn: "",
    image: sliding,
    link: "/sliding",
  },
  { nameRu: "Зенитные фонари", nameEn: "", image: lantern, link: "/lantern" },
  { nameRu: "ПВХ конструкции", nameEn: "", image: pvc, link: "/pvc" },
  {
    nameRu: "Вентилируемые фасады",
    nameEn: "",
    image: ventilated,
    link: "/ventilated",
  },
];
