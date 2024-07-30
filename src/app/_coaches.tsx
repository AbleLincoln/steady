'use client'

import Image from 'next/image'
import claire from 'public/images/coaches/claire.jpg'
import lindsay from 'public/images/coaches/lindsay.jpg'
import melissa from 'public/images/coaches/melissa.jpg'
import skylar from 'public/images/coaches/skylar.jpg'
import { useState } from 'react'

const COACHES = [
  {
    name: 'Lindsay Rowe',
    pic: lindsay,
    bio: 'As a professional matchmaker, Lindsay realized most of her clients needed frequent, practical dating advice more than anything else so she created a safe space for people to gain easy access to expert dating counsel without costing a small fortune. She wanted that space to simultaneously be a catalyst for healthy dating behaviors that support peoples’ overall wellbeing and happiness.',
  },
  {
    name: 'Melissa Klein',
    pic: melissa,
    bio: 'Melissa’s experience as a Date Coach and Licensed Marriage and Family Therapist spans over 10 years. She has been instrumental in helping individuals identify what may be holding them back, unlock their full potential and begin to attract the partners and relationships they desire.  Melissa has found that communication and respect are key components to any relationship, and learning healthy communication is beneficial even beyond intimate relationships. Because of this, she often refers to the idea of "Communication Karma.” Her clients share that when they implement this into their daily life, they are overall more confident in themselves and their dating life begins to thrive.',
  },
  {
    name: 'Claire Wexler',
    pic: claire,
    bio: 'Claire has been a dating and relationship coach for over 15 years.  Claire is a sought-after expert on the topics of love and dating. She has been featured in national print, online and television shows including NBC, FOX, USA Today, Women’s Health and OK! TV. ',
  },
  {
    name: 'Skylar Eagleson',
    pic: skylar,
    bio: 'As an NYC-based Professional Matchmaker and Date Coach, Skylar knows the complexities of dating in big cities. She thinks "settling" is a bad word and encourages her clients to maintain their standards while remaining open to new and exciting prospects. Dating advice is not hard to come by, but finding an attentive, compassionate, and trusted confidante is rare, and Skylar aims to embolden her clients in a multitude of ways to find greater confidence in themselves and their love lives.',
  },
]

export default function Coaches() {
  const [activeCoach, setActiveCoach] = useState(0)

  return (
    <div className="mx-auto my-12 max-w-screen-lg">
      <ul className="flex">
        {COACHES.map((coach, i) => (
          <li
            key={coach.name}
            className="group relative mr-8 cursor-pointer pb-1 text-lg text-white"
            onClick={() => setActiveCoach(i)}
          >
            <span>{coach.name.split(' ')[0]}</span>{' '}
            <span className="hidden md:inline">{coach.name.split(' ')[1]}</span>
            <span
              className={`absolute -bottom-[2px] h-[2px] bg-white transition-all ${activeCoach === i ? 'left-0 w-full' : 'left-1/2 w-0 group-hover:left-1/3 group-hover:w-1/3'}`}
            ></span>
          </li>
        ))}
      </ul>
      <div className="mt-8 grid min-h-[25rem] grid-rows-2 rounded-r-steady bg-white md:grid-cols-2 md:grid-rows-1">
        <div className="p-8">
          <h3 className="mb-2 text-lg font-light text-steady-pink">
            {COACHES[activeCoach]?.name}
          </h3>
          <p>{COACHES[activeCoach]?.bio}</p>
        </div>
        <div className="relative row-start-1 min-h-96 md:col-start-2">
          <Image
            className="rounded-tr-steady md:rounded-r-steady"
            src={COACHES[activeCoach]?.pic ?? ''}
            alt={COACHES[activeCoach]?.name ?? ''}
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center 20%',
            }}
          />
        </div>
      </div>
    </div>
  )
}
