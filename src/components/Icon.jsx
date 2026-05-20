import React from 'react'
import 'devicons/css/devicons.css'
import {
  AcademicCapIcon,
  BoltIcon,
  LightBulbIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  ArrowPathIcon,
  ClockIcon,
  FlagIcon,
  MusicalNoteIcon,
  PaintBrushIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  CommandLineIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline'

const DEV_MAP = {
  // Tech / common
  c_cpp: 'cplusplus-plain',
  linux: 'linux-plain',
  git: 'git-plain',
  makefile: 'makefile-line',
  bash: 'bash-plain',
  docker: 'docker-plain',
  esp32: 'arduino-plain',
  proxmox: 'docker-plain',
  network: 'linux-plain'
}

const HERO_MAP = {
  // journey
  graduation: AcademicCapIcon,
  lightning: BoltIcon,
  forge: LightBulbIcon,
  laptop: BoltIcon,
  target: FlagIcon,

  // interests
  art: PaintBrushIcon,
  boxe: BoltIcon,
  soudure: BoltIcon,
  tech: BoltIcon,
  musique: MusicalNoteIcon,

  // soft skills
  collaboration: UserGroupIcon,
  communication: ChatBubbleLeftRightIcon,
  problem: LightBulbIcon,
  adaptability: ArrowPathIcon,
  time: ClockIcon,
  leadership: FlagIcon
  ,
  // stat icons for Hero
  stat_age: ClockIcon,
  stat_passion: BoltIcon,
  stat_goal: FlagIcon,

  // stack icons
  web: GlobeAltIcon,
  database: CircleStackIcon,
  cyber: ShieldCheckIcon,
  devops: CommandLineIcon
}

export default function Icon({ name, size = 'text-3xl', className = '' }) {
  // Heroicons for semantic items
  const Hero = HERO_MAP[name]
  if (Hero) return <Hero className={`${size} ${className}`} aria-hidden />

  // Devicons for tech logos
  const cls = DEV_MAP[name]
  if (cls) {
    return <i className={`devicon-${cls} ${size} ${className}`} aria-hidden />
  }

  // Fallback: initial inside a small badge
  const label = (name || '').toString()
  const initial = label.charAt(0).toUpperCase() || '?'
  return (
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-white/5 to-white/2 text-white ${className}`}>
      <span className={`font-bold ${size}`}>{initial}</span>
    </div>
  )
}
