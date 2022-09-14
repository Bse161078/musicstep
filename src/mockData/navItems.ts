export const navItems = [
    {
        name: "Explore Venues",
        url: "/explore-venue"
    },
    {
        name: "How it works?",
        url: "/how-it-works"
    },
    {
        name: "Pricing",
        url: "/pricing"
    },
    {
        name: "Login",
        url: "/login"
    },
]

export type NavItemType = {
    name: string;
    url: string;
    type?: string;
}