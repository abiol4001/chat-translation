import { Subscription } from "@/app/types/Subscription";
import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions, collection } from "firebase/firestore";
import { db } from "../firebase";

const subscriptionConverter: FirestoreDataConverter<Subscription> = {
  toFirestore: function (subscription: Subscription): DocumentData {
    return {
      ...subscription,
    };
  },
  fromFirestore: function (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Subscription {
    const data = snapshot.data(options)

    const sub: Subscription = {
        id: snapshot.id,
        cancel_at_period_end: data.cancel_at_period_end,
        cancel_at: data.cancel_at,
        canceled_at: data.canceled_at,
        created: data.created,
        current_period_end: data.current_period_end,
        current_period_start: data.current_period_start,
        ended_at: data.ended_at,
        items: data.items,
        metadata: data.metadata,
        price: data.price,
        prices: data.prices,
        product: data.product,
        quantity: data.quantity,
        role: data.role,
        status: data.status,
        stripeLink: data.stripeLink,
        trial_end: data.trial_end,
        trial_start: data.trial_start,
        latest_invoice: data.latest_invoice,
        payment_method: data.payment_method
    }
    return sub
  }
};

export const subscriptionRef = (userId: string) => collection(db, "customers", userId, "subscriptions").withConverter(subscriptionConverter)