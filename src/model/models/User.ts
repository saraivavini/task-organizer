import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export type User = FirebaseAuthTypes.User;

type UserCredentials = {
  email: string;
  password: string;
};

export class UsersRepository {
  signIn({ email, password }: UserCredentials) {
    return auth().signInWithEmailAndPassword(email, password);
  }

  signUp({ email, password }: UserCredentials) {
    return auth().createUserWithEmailAndPassword(email, password);
  }

  signOut() {
    return auth().signOut();
  }
}
