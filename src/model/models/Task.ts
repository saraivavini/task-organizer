import { uuidv4 } from '@firebase/util';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import { uuid } from 'uuidv4';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export type Task = {
  id: string;
  isCompleted: boolean;
  title: string;
  date: Date;
  userId: string;
};

function snapToTask(
  snap:
    | FirebaseFirestoreTypes.QueryDocumentSnapshot<FirebaseFirestoreTypes.DocumentData>
    | FirebaseFirestoreTypes.DocumentSnapshot<FirebaseFirestoreTypes.DocumentData>
) {
  if (!snap.exists) return;

  const snapData = snap.data();

  if (!snapData) return;

  const convertedSnap = snapData as Task;
  const snapTimestamp = snapData.date as FirebaseFirestoreTypes.Timestamp;

  const task = {
    ...convertedSnap,
    date: snapTimestamp.toDate(),
  };

  return task;
}

function sortByDate(a: Task, b: Task) {
  return b.date.getTime() - a.date.getTime();
}

export class TasksRepository {
  private db = firestore().collection('tasks');
  private user = auth().currentUser as FirebaseAuthTypes.User;

  async getTasksByUserId(userId: string): Promise<Array<Task>> {
    const data: Array<Task> = [];

    const querySnapshot = await this.db
      .where('userId', '==', userId)
      .limit(10)
      .get();

    querySnapshot.docs.forEach((snap) => {
      const newTask = snapToTask(snap);

      if (newTask) {
        data.push(newTask);
      }
    });

    return data.sort(sortByDate);
  }

  async completeTask(taskId: string) {
    await this.db.doc(taskId).update({
      isCompleted: true,
    });

    const task = await this.getTaskById(taskId);

    return task as Task;
  }

  deleteTask(taskId: string) {
    return this.db.doc(taskId).delete();
  }

  async getTaskById(taskId: string) {
    const snap = await this.db.doc(taskId).get();

    return snapToTask(snap);
  }

  async createTask(task: Pick<Task, 'title' | 'date'>) {
    const taskId = uuidv4();
    const userId = this.user.uid;

    await this.db.doc(taskId).set({
      id: taskId,
      isCompleted: false,
      title: task.title,
      userId,
      date: task.date,
    });

    return this.getTaskById(taskId);
  }
}
