
export interface SkillType {
  _id:     number
  name:    string
  title:   string
  picture: string
}

export const skills: SkillType[] = [
  {
    _id:     1,
    name:    "yoga",
    title:   "Йога",
    picture: "/img/yoga.jpeg",
  },
  {
    _id:     2,
    name:    "stretching",
    title:   "Стретчинг",
    picture: "/img/stretching.jpeg",
  },
  {
    _id:     3,
    name:    "zumba",
    title:   "Зумба",
    picture: "/img/zumba.jpeg",
  },
  {
    _id:     4,
    name:    "aerobics",
    title:   "Степ-аэробика",
    picture: "/img/aerobics.jpeg",
  },
  {
    _id:     5,
    name:    "body-flex",
    title:   "Бодифлекс",
    picture: "/img/body-flex.jpeg",
  },
]
