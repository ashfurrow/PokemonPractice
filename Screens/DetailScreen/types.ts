export type DetailResponse = {
  id: number;
  sprites: {
    front_default: string | undefined;
  };
  stats: {
    base_stat: string;
    stat: {
      name: string;
    };
  }[];
};

export type Pokemon = DetailResponse;
