export const navItems = [
    {
        name: "Explore Venues",
        url: "#"
    },
    {
        name: "How it works",
        url: "#"
    },
    {
        name: "Pricing",
        url: "#"
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