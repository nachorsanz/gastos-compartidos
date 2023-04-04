import { supabase } from '../client/client';

type UserType = {
  email: string;
  password: string;
};

export const createUser = async (payload: UserType) => {
  const { email, password } = payload;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  return data ?? error;
};
