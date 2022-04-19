import windows from "../images/production/menu/windows.png";
import doors from "../images/production/menu/doors2.png";
import winterGarden from "../images/production/menu/wintergarden.png";
import facade from "../images/production/menu/facade.png";
import canopies from "../images/production/menu/sunshade.png";
import sliding from "../images/production/menu/automatic.png";
import lantern from "../images/production/menu/lantern.png";
import pvc from "../images/production/menu/PVC.png";
import ventilated from "../images/production/menu/vent.png";

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
