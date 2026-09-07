// True only in the static preview build (GitHub Pages), where there is no
// server to run app/api/* — so the contact, groothandel and prijslijst forms
// cannot deliver mail. In demo mode the forms validate and confirm as usual
// but skip the network call, and each one shows a notice saying so.
export const isDemoMode = process.env.NEXT_PUBLIC_DEMO_MODE === "true"
