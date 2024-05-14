// MLB Stats
export type PlayerModel = {
  people : [{ 
    fullName: string,
    id: number,
    stats: [{
      splits: [{
        team: {
          id: number, // Franchise ID (example: 111 = Boston Red Sox)
          name: string, // Franchise name (example: 'Boston Red Sox')
          season: number // Single year (example: 2018)
        }
      }]
    }],
  }],
}

export type TeamModel = {
  roster: [{
    person: {
      id: number,
      fullName: string
    }
  }]
}

export type SearchResultModel = {
  people: [{
    fullName: string,
    id: string,
    mlbDebutDate: string,
    lastPlayedDate: string
  }]
}
