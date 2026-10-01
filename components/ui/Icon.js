import {
  PiArchive,
  PiArrowsClockwise,
  PiBasket,
  PiBeerBottle,
  PiBread,
  PiBroom,
  PiCoffee,
  PiCreditCard,
  PiFlowerTulip,
  PiShoppingCart,
  PiSnowflake,
  PiTruck,
} from "react-icons/pi";
import { FaFacebookF, FaGooglePlusG, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

const map = {
  fresh: PiBasket,
  cupboard: PiArchive,
  bakery: PiBread,
  frozen: PiSnowflake,
  tea: PiCoffee,
  beer: PiBeerBottle,
  health: PiFlowerTulip,
  home: PiBroom,
  truck: PiTruck,
  cart: PiShoppingCart,
  return: PiArrowsClockwise,
  card: PiCreditCard,
  facebook: FaFacebookF,
  twitter: FaTwitter,
  pinterest: FaPinterest,
  youtube: FaYoutube,
  google: FaGooglePlusG,
};

export default function Icon({ name, ...props }) {
  const Cmp = map[name];
  return Cmp ? <Cmp aria-hidden="true" {...props} /> : null;
}
