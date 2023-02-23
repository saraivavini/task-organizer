import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export type User = FirebaseAuthTypes.User;

type UserCredentials = {
  email: string;
  password: string;
};

export const UsersRepository = () => {
  const signIn = ({ email, password }: UserCredentials) => {
    return auth().signInWithEmailAndPassword(email, password);
  };

  const signUp = ({ email, password }: UserCredentials) => {
    return auth().createUserWithEmailAndPassword(email, password);
  };

  const signOut = () => {
    return auth().signOut();
  };

  return {
    signIn,
    signUp,
    signOut,
  };
};
