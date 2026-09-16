import {
  ShieldUser,
  Camera,
  Flame,
  BellRing,
  Fingerprint,
  type LucideIcon,
} from 'lucide-react'
import type { Service } from '../data/services'

export const serviceIcons: Record<Service['icon'], LucideIcon> = {
  'shield-user': ShieldUser,
  camera: Camera,
  flame: Flame,
  'bell-ring': BellRing,
  fingerprint: Fingerprint,
}
