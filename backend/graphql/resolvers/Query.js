const Query = {
  games: (parent, args, { json }, info) => {
    return json;
  },
  game: (parent, args, { json }, info) => {
    return json.find((game) => game.id === Number(args.id));
  },
};

export default Query;
