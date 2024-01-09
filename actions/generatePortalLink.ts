"use server"

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import Stripe from "stripe";
import { adminDb } from "@/lib/firebase-admin";
import { getAuthSession } from "@/lib/nextauth";


const stripe = new Stripe(process.env.STRIPE_SECRETE_KEY!, {
  apiVersion: "2023-10-16",
  typescript: true,
});

export async function generatePortalLink() {
    const session = await getAuthSession()
    const host = headers().get("host")

    if(!session?.user?.id) return console.error("No user found")

    const {user: { id }} = session
    const returnUrl = process.env.NODE_ENV === "development" ? `http://${host}/register` : `https://${host}/register`

    const doc = await adminDb.collection("customers").doc(id).get()

    if(!doc.data) return console.error("No customer record found with userId", id)

    const stripeId = doc.data()!.stripeId

    const stripeSession = await stripe.billingPortal.sessions.create({
        customer: stripeId,
        return_url: returnUrl
    })
    
    redirect(stripeSession.url)
}