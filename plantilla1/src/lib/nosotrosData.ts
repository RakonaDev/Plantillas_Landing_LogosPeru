

import type { IconType } from "react-icons";
import { IoCarSport } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { IoMdTime } from "react-icons/io";

export interface NosotrosData {
  icono: IconType
  titulo: string
}

export const nosotrosData: NosotrosData[] = [
  {
    titulo: "Flota moderna y segura.",
    icono: IoCarSport,
  },
  {
    titulo: "Conductores profesionales y certificados",
    icono: FaUserTie
  },
  {
    titulo: "Cobertura regional y nacional",
    icono: BiWorld
  },
  {
    titulo: "Atención 24/7 y reservas anticipadas",
    icono: IoMdTime
  },
  {
    titulo: "Compromiso con tu seguridad, comodidad y tiempo",
    icono: MdVerifiedUser
  }
]