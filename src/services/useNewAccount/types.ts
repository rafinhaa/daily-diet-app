export type NewAccountDataParams = {
  email: string;
  password: string;
  name: string;
  avatarUrl: string;
};

export type NewAccountData = {
  user: {
    avatar_url: string;
    email: string;
    id: string;
    name: string;
  };
};
