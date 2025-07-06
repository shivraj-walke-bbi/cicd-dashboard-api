import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class BuildsService {
  private db: FirebaseFirestore.Firestore;

  constructor() {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT as string);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    this.db = admin.firestore();  // <-- This is the Firestore connection!
  }

  // Example: Add a build record
  async addBuild(data: any): Promise<any> {
    data.timestamp = new Date().toISOString();
    const docRef = await this.db.collection('builds').add(data);
    return { id: docRef.id };
  }

  // Example: Get builds
  async getBuilds(): Promise<any[]> {
    const snapshot = await this.db.collection('builds').orderBy('timestamp', 'desc').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
}
