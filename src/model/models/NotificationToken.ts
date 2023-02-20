import firestore from '@react-native-firebase/firestore';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export type NotificationToken = {
  token: string;
  userId: string;
};

export const NotificationTokensRepository = () => {
  const db = firestore().collection('notification_tokens');
  const user = auth().currentUser as FirebaseAuthTypes.User;

  const postNotificationToken = (token: string) => {
    db.doc(token).set({
      userId: user.uid,
      token,
    });
  };

  return {
    postNotificationToken,
  };
};
