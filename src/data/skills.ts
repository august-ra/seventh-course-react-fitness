
export interface SkillType {
  _id:     string
  name:    string
  title:   string
  picture: string
}

export const skills: SkillType[] = [
  {
    _id:     "ab1c3f",
    name:    "yoga",
    title:   "Йога",
    picture: "/img/yoga.jpeg",
  },
  {
    _id:     "kfpq8e",
    name:    "stretching",
    title:   "Стретчинг",
    picture: "/img/stretching.jpeg",
  },
  {
    _id:     "ypox9r",
    name:    "zumba",
    title:   "Зумба",
    picture: "/img/zumba.jpeg",
  },
  {
    _id:     "6i67sm",
    name:    "aerobics",
    title:   "Степ-аэробика",
    picture: "/img/aerobics.jpeg",
  },
  {
    _id:     "q02a6i",
    name:    "body-flex",
    title:   "Бодифлекс",
    picture: "/img/body-flex.jpeg",
  },
]
