export type playerProps = {
  id: string;
  fullName: string;
}

export type teammateProps = {
  id: string,
  fullName: string,
  teamName: string,
  season: string
}

export type startingPlayerProps = {
  fullName: string,
  id: string
}

export type teammatePathProps = teammateProps[];

export type teammatesProps = {
  [key: string]: teammateProps
}
export type splitProps = {
  team: {
    id: string,
    name: string,
    season: string,
    teammates: {
      roster: teammatePerson[]
    }
  }
}

export type playersToCheckProps = {
  player: teammateProps,
  path: teammatePathProps,
  parentIsLastNode: boolean
}[];

export type teammatePerson ={
  person: playerProps
}
